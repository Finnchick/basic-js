const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct) {
    this.direct = direct === undefined ? true : direct;
}

encrypt(message, key) {
    let encryptMessage = this.crypt(message, key, true);
    return this.direct ? encryptMessage : encryptMessage.split('').reverse().join('');
}

decrypt(encryptedMessage, key) {
    let message = this.crypt(encryptedMessage, key, false);        
    return this.direct ? message : message.split('').reverse().join('');
}

crypt(message, key, encrypt) {
    if (message === undefined || key === undefined) {
        throw new Error('Message or key not defined');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    let index = 0;

    message = message
        .toUpperCase()
        .split('')
        .map((c, i) => {
            if (/^[A-Z]$/.test(c)) {

                if (index >= key.length) {
                    index = 0;
                }

                let shift = key.charCodeAt(index) - 65;
                index++;
                let codedChar = encrypt ? c.charCodeAt(0) + shift : c.charCodeAt(0) - shift;

                c = encrypt ?
                    codedChar > 90 ?
                        codedChar - 26 : codedChar
                    : codedChar < 65 ?
                        codedChar + 26 :
                        codedChar;

                c = String.fromCharCode(c);
            }

            return c;
        });

    return message.join('');
}
}

module.exports = VigenereCipheringMachine;
