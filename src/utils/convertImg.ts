import fs from 'fs';
import path from 'path';

function base64ToImage(base64String: string): string {
    // Decodificar a string Base64
    const imgBuffer = Buffer.from(base64String, 'base64');
    // Criar o caminho completo para salvar a imagem
    const fileName = `${Date.now()}.jpeg`;
    const fullPath = path.join('src/image', fileName);
    // Escrever o arquivo de imagem no sistema de arquivos
    fs.writeFile(fullPath, imgBuffer, (err) => {
        if (err) {
            console.error('Erro ao salvar a imagem:', err);
        } else {
            console.log('Imagem salva em:', fullPath);
        }
    });
    return fullPath;
}

export default {
    base64ToImage
}