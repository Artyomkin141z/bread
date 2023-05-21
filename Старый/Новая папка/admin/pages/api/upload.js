import formidable from "formidable";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req, res) {
    const form = formidable({ multiples: false });

    form.parse(req, (err, fields, files) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: "Ошибка загрузки файла" });
            return;
        }
        console.log(files);
        const oldpath = files.image.filepath;
        console.log(`oldpath: ${oldpath}`)
        const ext = files.image.originalFilename.split(".").pop();
        console.log(`ext: ${ext}`)
        const filename = uuidv4() + "." + ext;
        console.log(`filename: ${filename}`)
        const newpath = `F:/Учеба/Диплом/sneaker/admin/public/uploads/${filename}`;
        console.log(`newpath: ${newpath}`)

        fs.rename(oldpath, newpath, (err) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: "Ошибка загрузки файла" });
                return;
            }

            res.status(200).json({ url: `/uploads/${filename}` });
        });
    });
}
