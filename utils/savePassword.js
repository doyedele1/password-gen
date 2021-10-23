import fs from 'fs';
import path from 'path';
import os from 'os';
import color from 'chalk';
import { fileURLToPath } from 'url';

const log = console.log;

const savePassword = ((password) => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    fs.open(path.join(__dirname, '../', 'passwords.txt'), 'a', 777, (e, id) => {
        fs.write(id, password + os.EOL, null, 'utf-8', () => {
            fs.close(id, () => {
                log(color.green("Password saved to passwords.txt"));
            });
        });
    });
});

export default savePassword;