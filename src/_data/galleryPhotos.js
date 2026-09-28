const fs = require("fs");
const path = require("path");

const PHOTOS_DIR = path.join(__dirname, "..", "photos");
const EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

// Every file dropped into src/photos/ becomes a gallery entry automatically.
module.exports = () => {
    if (!fs.existsSync(PHOTOS_DIR)) return [];

    return fs.readdirSync(PHOTOS_DIR)
        .filter(file => EXTENSIONS.has(path.extname(file).toLowerCase()))
        .sort()
        .map(file => {
            const name = path.parse(file).name.replace(/[-_]+/g, " ").trim();
            return {
                src: `./src/photos/${file}`,
                alt: `Dastonia — ${name}`,
            };
        });
};
