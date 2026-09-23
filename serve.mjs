import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const root=fileURLToPath(new URL('./dist/',import.meta.url));
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.png':'image/png','.webp':'image/webp','.txt':'text/plain; charset=utf-8'};
http.createServer(async(req,res)=>{try{const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);let file=path.resolve(root,'.'+pathname);if(file!==root.slice(0,-1)&&!file.startsWith(root)){res.writeHead(403);res.end();return;}try{if((await stat(file)).isDirectory())file=path.join(file,'index.html');}catch{}let data;let status=200;try{data=await readFile(file);}catch{data=await readFile(path.join(root,'404.html'));status=404;file='404.html';}res.writeHead(status,{'Content-Type':types[path.extname(file)]||'application/octet-stream','Cache-Control':'no-store','X-Content-Type-Options':'nosniff','Referrer-Policy':'strict-origin-when-cross-origin'});res.end(req.method==='HEAD'?undefined:data);}catch{res.writeHead(500);res.end('Nie udało się otworzyć strony.');}}).listen(4318,'127.0.0.1',()=>console.log('Bajkolot: http://127.0.0.1:4318'));
