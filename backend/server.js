const express = require('express') //1. IMPORTUNK : require megkeresi a zárójelben lévő paramétert és beimportálja nekünk az expresst magát, kimentettük egy változóba

const path = require('path') //6. importálás, ezzel tudunk a file-rendszerünkben mozogni.

const app = express() // 2. létrehoztunk egy újabb változót, a szervert ezzel az app névvel tudjuk megszólítani, ebben a változóban futtatjuk le a szervert.

const port = 9000 // 3. létrehozott egy változót, aminek a száma egy négyjegyű változó, ami egy port. (3000-t átírtuk 9000-re,mert ezt használtuk server-template-re)

app.get('/', (req, res) => { //5. ha vki küld egy get http-requestet (ez a '/'), ha feltárcsázzuk a http://127.0.0.1:9000-t és a cím végén van ez a perjel, csak a böngésző levágja, ez az alap elérési útvonalunk, akkor ez egy END POINT. (az aloldalak is ilyen end pointok.)
  res.sendFile(path.join(`${__dirname}/../frontend/index.html`)) //7. path itt az útvonal, amit fenn már létrehoztunk, mint változót. A path.join után a zárójeben tulajdonképpeni célfájlot jelenítjük meg. A dirname azt adja vissza, ahol a fájlunk van, a szülőmappát (ez mindenkinél más, nálam most horsidezso@admin-MBP-2 w10-practice). Majd kimegyünk a mappából: /../, bemegyünk a frontendbe: frontend/index.html.
})

app.use('/public', express.static(`${__dirname}/../frontend/public`)) //8. csináltunk egy nyilvános mappát a frontenden belül, majd ezt a mappát tesszük nyilvánossá, mindent, amit ebbe a mappába tettünk, az nyilvános lesz.

app.listen(port, () => { //EZ KELL LEGYEN MINDIG A LEGUTOLSÓ A KÓDSORBAN. ez figyelje azt a portot, azt a portszámot, amit megadtunk a kódunk legelején, majd kapunk egy callback functiont (), ami
  console.log(`http://127.0.0.1:${port}`) //elvégzi azt, amit megadtunk neki, mikor elindul ez a sor kód. (egyelőre kiírja a konzolba ezt a szöveget)
})

//4. elindítjuk a szervert a terminalban (csekk először, hogy a backend mappában vagyunk, ls, cd backend ha kell, majd npm start és elindul a szerver)






/* const http = require('http');
const fs = require('fs');
const path = require('path');
const mediaTypes = {
	"html": "text/html",
	"jpeg": "image/jpeg",
	"jpg": "image/jpeg",
	"png": "image/png",
	"svg": "image/svg+xml",
	"json": "application/json",
	"js": "text/javascript",
	"css": "text/css",
	"csv": "text/csv",
	"mp3": "audio/mpeg",
	"mp4": "video/mp4",
	"oga": "audio/ogg",
	"ogv": "video/ogg",
	"pdf": "application/pdf",
	"weba": "audio/webm",
	"webm": "video/webm",
	"webp": "image/webp",
	"woff": "font/woff",
	"woff2": "font/woff2",
	"ttf": "font/ttf",
	"gif": "image/gif"
};

const server = http.createServer((req, res) => {

	const errorHTML = `
		
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="preconnect" href="https://fonts.googleapis.com"> 
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
		<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap" rel="stylesheet">
		<style>
			body{
				padding: 0; margin: 0;
				font-family: 'Montserrat', sans-serif;
				font-weight: 800;
				background-color: #4343F9;
				color: #fff;
			}
			#root{
				width: 100%;
				height: 100vh;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 21px;
			}
		</style>
		<title>Not here</title>
	</head>
	<body>
		<div id="root">Rise your gaze to the sky<br/>than a bit back to the URL bar<br/>and check that link again</div>
	</body>
	</html>
	
	`;
    
	let filePath = path.resolve(__dirname + '/../frontend' + req.url);
    
	fs.access(filePath, fs.constants.R_OK, (err) => {
	if(err){
		res.statusCode = 404;
		res.end(errorHTML);
	}else{
		if(fs.statSync(filePath).isDirectory()) {
			filePath += '/index.html';
		}
		fs.readFile(filePath, "binary", (err, data) => {
			if(err) {
				res.statusCode = 500;
				res.end(errorHTML);
			} else {
				let mediaType = mediaTypes[filePath.split('.').pop()];
      
				if (!mediaType) {
					mediaType = 'text/plain';
				}
				res.writeHead(200, { "Content-Type": mediaType });
				res.write(data, "binary");
				res.end();
			}
		});
	}
	});
});

server.listen(9000, "127.0.0.1", () => {
    const addr = server.address();
		console.log(`http://${addr.address}:${addr.port}`);
}); */