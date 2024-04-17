var fs = require('fs');

async function process () {
    await fs.writeFile('welcome.txt', 'Hello Node', (err) => {
        if(err) {
            console.log("Erreur lors de l'écriture dans le fichier:", err);
        }
        else {
            console.log("Fichier créé avec succès!!");
        }
    });

    await fs.readFile('welcome.txt', (err, data) => {
        if(err){
            console.log("Erreur lors de la lecture du fichier:", err);
        }
        else {
            console.log(data.toString());
        }
    });
}

process();