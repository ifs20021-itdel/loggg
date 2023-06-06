import multer from "multer"
import {Storage} from "@google-cloud/storage"

const storage = new Storage({
    projectId : 'farmgenius-ccd7d',
    keyFilename: './serviceKeyAccount.json',
});

const bucketName = 'farmgenius-bucket-test';
const bucket = storage.bucket(bucketName);

// konfigurasi multer
const upload = multer ({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024, 
    }
})

export {
    upload
}