var generator = require('generate-password');

function randomPasswordGenerator() {
    let password = generator.generate ({
        length: 10,
        numbers: true
    });

    console.log(password);
}


randomPasswordGenerator();