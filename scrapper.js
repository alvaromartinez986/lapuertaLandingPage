import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function downloadImages(url, folderName) {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.goto(url);

    // Esperar que todas las imágenes sean cargadas
    await page.waitForSelector('img'); // Ajustar el selector de la imagen según sea necesario

    // Obtener la URL de todas las imágenes
    const imageUrls = await page.evaluate(() => {
        const images = document.querySelectorAll('img'); // Ajustar el selector de la imagen según sea necesario
        return Array.from(images).map(img => img.src);
    });


    const assetsPath = path.join(__dirname, folderName);
    if (!fs.existsSync(assetsPath)) {
        fs.mkdirSync(assetsPath);
    }

    // Descargar cada imagen
    for (let i = 0; i < imageUrls.length; i++) {
        const imageUrl = imageUrls[i];
        const response = await fetch(imageUrl);
        if (!response.ok) {
            console.log(`Failed to download image ${imageUrl}`);
            continue;
        }
        const body = Buffer.from(await response.arrayBuffer());
        const filename = path.basename(imageUrl);
        const filePath = path.join(assetsPath, filename);
        fs.writeFileSync(filePath, body);
        console.log(`Downloaded image ${filename}`);
    }

    await browser.close();
}

// Uso del script
downloadImages('https://seopixeloficial.wfolio.pro/disk/la-puerta-sesi-n-4-95hqq0/pastas', 'assets');