export default class File {
    static getMime(filename) {
        const extension = this.getExtension(filename);

        const listaMimes = {
            '3g2': 'video/3gpp2',
            '3gp': 'video/3gp',
            '7z': 'application/x-7z-compressed',
            '7zip': 'application/x-7z-compressed',
            aac: 'audio/x-aac',
            ac3: 'audio/ac3',
            ai: 'application/pdf',
            aif: 'audio/x-aiff',
            aifc: 'audio/x-aiff',
            aiff: 'audio/x-aiff',
            au: 'audio/x-au',
            avi: 'video/x-msvideo',
            bin: 'application/macbinary',
            bmp: 'image/bmp',
            cdr: 'application/cdr',
            cer: 'application/pkix-cert',
            class: 'application/octet-stream',
            cpt: 'application/mac-compactpro',
            crl: 'application/pkix-crl',
            crt: 'application/x-x509-ca-cert',
            csr: 'application/octet-stream',
            css: 'text/css',
            csv: 'text/x-comma-separated-values',
            dcr: 'application/x-director',
            der: 'application/x-x509-ca-cert',
            dir: 'application/x-director',
            dll: 'application/octet-stream',
            dms: 'application/octet-stream',
            doc: 'application/msword',
            docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            dot: 'application/msword',
            dotx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            dvi: 'application/x-dvi',
            dxr: 'application/x-director',
            eml: 'message/rfc822',
            eps: 'application/postscript',
            exe: 'application/octet-stream',
            f4v: 'video/mp4',
            flac: 'audio/x-flac',
            flv: 'video/x-flv',
            gif: 'image/gif',
            gpg: 'application/gpg-keys',
            gtar: 'application/x-gtar',
            gz: 'application/x-gzip',
            gzip: 'application/x-gzip',
            hqx: 'application/mac-binhex40',
            htm: 'text/html',
            html: 'text/html',
            ical: 'text/calendar',
            ico: 'image/x-icon',
            ics: 'text/calendar',
            j2k: 'image/jp2',
            jar: 'application/java-archive',
            jp2: 'image/jp2',
            jpe: 'image/jpeg',
            jpeg: 'image/jpeg',
            jpf: 'image/jp2',
            jpg: 'image/jpeg',
            jpg2: 'image/jp2',
            jpm: 'image/jp2',
            jpx: 'image/jp2',
            js: 'application/x-javascript',
            json: 'application/json',
            kdb: 'application/octet-stream',
            kml: 'application/vnd.google-earth.kml+xml',
            kmz: 'application/vnd.google-earth.kmz',
            lha: 'application/octet-stream',
            log: 'text/plain',
            lzh: 'application/octet-stream',
            m3u: 'text/plain',
            m4a: 'audio/x-m4a',
            m4u: 'application/vnd.mpegurl',
            mid: 'audio/midi',
            midi: 'audio/midi',
            mif: 'application/vnd.mif',
            mj2: 'image/jp2',
            mjp2: 'image/jp2',
            mov: 'video/quicktime',
            movie: 'video/x-sgi-movie',
            mp2: 'audio/mpeg',
            mp3: 'audio/mpeg',
            mp4: 'video/mp4',
            mpe: 'video/mpeg',
            mpeg: 'video/mpeg',
            mpg: 'video/mpeg',
            mpga: 'audio/mpeg',
            oda: 'application/oda',
            odc: 'application/vnd.oasis.opendocument.chart',
            odf: 'application/vnd.oasis.opendocument.formula',
            odg: 'application/vnd.oasis.opendocument.graphics',
            odi: 'application/vnd.oasis.opendocument.image',
            odm: 'application/vnd.oasis.opendocument.text-master',
            odp: 'application/vnd.oasis.opendocument.presentation',
            ods: 'application/vnd.oasis.opendocument.spreadsheet',
            odt: 'application/vnd.oasis.opendocument.text',
            ogg: 'audio/ogg',
            otc: 'application/vnd.oasis.opendocument.chart-template',
            otf: 'application/vnd.oasis.opendocument.formula-template',
            otg: 'application/vnd.oasis.opendocument.graphics-template',
            oth: 'application/vnd.oasis.opendocument.text-web',
            oti: 'application/vnd.oasis.opendocument.image-template',
            otp: 'application/vnd.oasis.opendocument.presentation-template',
            ots: 'application/vnd.oasis.opendocument.spreadsheet-template',
            ott: 'application/vnd.oasis.opendocument.text-template',
            p10: 'application/x-pkcs10',
            p12: 'application/x-pkcs12',
            p7a: 'application/x-pkcs7-signature',
            p7c: 'application/pkcs7-mime',
            p7m: 'application/pkcs7-mime',
            p7r: 'application/x-pkcs7-certreqresp',
            p7s: 'application/pkcs7-signature',
            pdf: 'application/pdf',
            pem: 'application/x-x509-user-cert',
            pgp: 'application/pgp',
            php: 'application/x-httpd-php',
            php3: 'application/x-httpd-php',
            php4: 'application/x-httpd-php',
            phps: 'application/x-httpd-php-source',
            phtml: 'application/x-httpd-php',
            png: 'image/png',
            ppt: 'application/powerpoint',
            pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
            ps: 'application/postscript',
            psd: 'application/x-photoshop',
            qt: 'video/quicktime',
            ra: 'audio/x-realaudio',
            ram: 'audio/x-pn-realaudio',
            rar: 'application/x-rar',
            rm: 'audio/x-pn-realaudio',
            rpm: 'audio/x-pn-realaudio-plugin',
            rsa: 'application/x-pkcs7',
            rtf: 'text/rtf',
            rtx: 'text/richtext',
            rv: 'video/vnd.rn-realvideo',
            sea: 'application/octet-stream',
            shtml: 'text/html',
            sit: 'application/x-stuffit',
            smi: 'application/smil',
            smil: 'application/smil',
            so: 'application/octet-stream',
            srt: 'text/srt',
            sst: 'application/octet-stream',
            svg: 'image/svg+xml',
            swf: 'application/x-shockwave-flash',
            tar: 'application/x-tar',
            text: 'text/plain',
            tgz: 'application/x-tar',
            tif: 'image/tiff',
            tiff: 'image/tiff',
            txt: 'text/plain',
            vcf: 'text/x-vcard',
            vlc: 'application/videolan',
            vtt: 'text/vtt',
            wav: 'audio/x-wav',
            wbxml: 'application/wbxml',
            webm: 'video/webm',
            wma: 'audio/x-ms-wma',
            wmlc: 'application/wmlc',
            wmv: 'video/x-ms-wmv',
            word: 'application/msword',
            xht: 'application/xhtml+xml',
            xhtml: 'application/xhtml+xml',
            xl: 'application/excel',
            xls: 'application/vnd.ms-excel',
            xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            xml: 'application/xml',
            xsl: 'application/xml',
            xspf: 'application/xspf+xml',
            z: 'application/x-compress',
            zip: 'application/x-zip',
            zsh: 'text/x-scriptzsh'
        };

        return listaMimes[extension] ? listaMimes[extension] : null;
    }

    static getExtension(filename) {
        const pieces = filename.split('.');
        return (pieces[pieces.length - 1]).toLowerCase();
    }

    static getFileName(fullPath) {
        const pieces = fullPath.split('/');
        return (pieces[pieces.length - 1]);
    }

    static getFileNameWithoutExtension(fullPath) {
        const filename = this.getFileName(fullPath);
        const pieces = filename.split('.');
        return pieces[0];
    }

    static getDir(fullPath) {
        const filename = this.getFileName(fullPath);
        return fullPath.replace(filename, '');
    }

    static blobToBase64(blob) {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        return new Promise((resolve) => {
            reader.onloadend = () => {
                resolve(reader.result);
            };
        });
    }
}
