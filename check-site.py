from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import json

ROOT = Path(__file__).parent / 'dist'
class Page(HTMLParser):
    def __init__(self, path):
        super().__init__(); self.path=path; self.refs=[]; self.ids=[]; self.h1=0; self.lang=None; self.images=0
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if tag=='html': self.lang=a.get('lang')
        if tag=='h1': self.h1+=1
        if 'id' in a: self.ids.append(a['id'])
        if tag=='img':
            self.images+=1
            assert 'alt' in a, f'Missing alt: {self.path}'
        for key in ('href','src'):
            if a.get(key): self.refs.append(a[key])

parsed={}
for path in ROOT.rglob('*.html'):
    p=Page(path); p.feed(path.read_text()); parsed[path]=p
errors=[]; checked=0
for path,p in parsed.items():
    if p.h1!=1: errors.append(f'{path}: H1 count {p.h1}')
    if p.lang!='pl': errors.append(f'{path}: incorrect language')
    if len(p.ids)!=len(set(p.ids)): errors.append(f'{path}: duplicate IDs')
    for ref in p.refs:
        u=urlsplit(ref)
        if u.scheme or u.netloc: continue
        target=(ROOT/unquote(u.path).lstrip('/')) if u.path.startswith('/') else path.parent/unquote(u.path)
        if not u.path: target=path
        if target.is_dir(): target=target/'index.html'
        checked+=1
        if not target.exists(): errors.append(f'{path.name}: missing {ref}')
        if u.fragment and target in parsed and unquote(u.fragment) not in parsed[target].ids:
            errors.append(f'{path.name}: missing anchor {ref}')
report={'pages':len(parsed),'local_references':checked,'errors':errors}
print(json.dumps(report,ensure_ascii=False,indent=2))
assert not errors
