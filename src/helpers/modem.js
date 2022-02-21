const SerialPort = require('serialport');

class Modem {
    port = null;
    constructor(path, { baudRate = 115200 }) {
        this.port = new SerialPort(path, { baudRate, autoOpen: false });
    }
    open() {
        return new Promise((resolve, reject) => {
            this.port.open((err) => {
                if (err) return reject(err);
                resolve(this.port);
            });
        });
    }
    send(cmd) {
        return new Promise((resolve, reject) => {
            this.port.write(cmd, 'utf8', (e) => {
                if (e) return reject(e);
                resolve();
            });
        });
    }
    sendSMS(phone, msg) {
        return this.send(`AT+CMGS=${phone}\r\n${msg}\x1A\x1A`);
    }
}