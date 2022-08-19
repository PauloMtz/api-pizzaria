import crypto from 'crypto'; // vem no pacote do node js
import multer from "multer";

import { extname, resolve } from 'path'; // vem no pacote do node js

export default {
    // destino da foto e nome
    upload(folder: string) {
        return {
            storage: multer.diskStorage({
                // __dirname é diretório atual, volta uma pasta, volta outra pasta
                destination: resolve(__dirname, '..', '..', folder),
                filename: (request, file, callback) => {
                    const fileHash = crypto.randomBytes(16).toString("hex");
                    const fileName = `${fileHash}-${file.originalname}`;
                    // o primeiro parâmetro é um error, que não está sendo tratado
                    return callback(null, fileName);
                }
            })
        }
    }
}