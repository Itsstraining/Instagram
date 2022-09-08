import { diskStorage } from "multer";
import * as path from "path";
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';
export const storage = diskStorage({
    destination: "./public/images",
    filename: (req, file, callback) => {
        callback(null, generateFilename(file));
    }
});

function generateFilename(file) {
    return `${file.originalname}`;
}

export function uploadImage(file) {
    return new Promise(async (resolve, reject) => {
        const imagePath = path.join(
            __dirname,
            '../../public/images/' + file.originalname,
        );
        try {
            let image = await v2.uploader.upload(imagePath, {
                folder: "iYahuu"
            });
            resolve(image.url);
        } catch (error) {
            console.log(error);
            reject(error);
        }
    })
}