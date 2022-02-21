const SerialPort = require('serialport');

function send(cmd) {
    return new Promise((resolve, reject) => {
        const port = new SerialPort('/dev/ttyUSB0', { baudRate: 115200, autoOpen: false });
        port.open((err) => {
            if (err) reject(err);
            port.write(cmd, 'utf8', (e) => {
                if(e) reject(e);
                resolve();
            });
        });
    });
}

async function main() {
    try {
        await send('AT+CMGS=081340689762\r\nHalo dari javascript\x1A\x1A');
    } catch (e) {
        console.log(e);
    }
}

main();