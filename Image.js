import { Filesystem, Directory } from '@capacitor/filesystem';
import File from './File';

export default class Imagen extends File {
    static async redimensionar(base64Str, MAX_HEIGHT = 450, MAX_WIDTH = 450) {
        const resized_base64 = await new Promise((resolve) => {
            const img = new Image();
            img.src = base64Str;
            img.onload = () => {
                const canvas = document.createElement('canvas');
                let { width } = img;
                let { height } = img;

                if (width > height) {
                    if (width > MAX_WIDTH) {
                        height *= MAX_WIDTH / width;
                        width = MAX_WIDTH;
                    }
                } else if (height > MAX_HEIGHT) {
                    width *= MAX_HEIGHT / height;
                    height = MAX_HEIGHT;
                }
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                // this will return base64 image results after resize
                resolve(canvas.toDataURL());
            };
        });
        return resized_base64;
    }

    static async crearThumbnailYGuardar(config) {
        const mime = this.getMime(config.path);

        const img = await Filesystem.readFile({
            directory: config.directory,
            path: config.path
        });

        let newDataUri = await this.redimensionar(
            `data:${mime};base64,${img.data}`,
            config.height
        );
        newDataUri = newDataUri.replace('http://localhost/', '');

        const filename = this.getFileName(config.path);

        await Filesystem.writeFile({
            path: `${this.getDir(config.path)}thumb-${filename}`,
            data: newDataUri,
            directory: Directory.External
        });
    }
}
