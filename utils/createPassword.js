const alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const integers = '0123456789';
const symbols = '!@#$%^&*_-+=';

const createPassword = ((length = 8, hasNumbers = true, hasSymbols = true) => {
    let chars = alphabets;
    hasNumbers ? (chars += integers) : '';
    hasSymbols ? (chars += symbols) : '';
    return generatePassword(length, chars);
});

const generatePassword = ((length, chars) => {
    let password = '';
    for(let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
});

export default createPassword;