
//  instalar   npm install play-sound readline-sync @types/node

// Importação das bibliotecas necessárias
import * as readlineSync from 'readline-sync';
import Player from 'play-sound';

// Configuração do player de áudio
const player = Player({});

// Função para tocar o som
function playSound() {
    player.play('sound.mp3', function(err: any) {
        if (err) {
            console.error("Erro ao tocar o som:", err);
        }
    });
}

// Função que exibe o menu e captura a escolha do usuário
function menu() {
    console.log("\n--- Menu Principal ---");
    console.log("1. Tocar Som");
    console.log("2. Sair");

    const choice = readlineSync.question("Escolha uma opção: ");

    switch (choice) {
        case '1':
            console.log("Tocando som...");
            playSound();
            break;
        case '2':
            console.log("Saindo...");
            process.exit();
        default:
            console.log("Opção inválida, tente novamente.");
    }
}

// Loop para manter o menu em execução
function main() {
    while (true) {
        menu();
    }
}

main();
