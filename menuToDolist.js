"use strict";
// projeto de uma To-Do List que utiliza uma fila (FIFO) para gerenciar tarefas 
// tarefa pode ser adicionada, removida ou marcada como feita
// exibe relogio a direita da tela, copmo opcional PARA AUMENTAR A NOTA, 
//  gera som de saida no final da execucao
Object.defineProperty(exports, "__esModule", { value: true });
function atualizarRelogio() {
    // Obtém a data e hora atual
    var dataAtual = new Date();
    var data = new Date(); // momento atual 
    var horas = data.getHours().toString().padStart(2, '0');
    var minutos = data.getMinutes().toString().padStart(2, '0');
    var segundos = data.getSeconds().toString().padStart(2, '0');
    var hhmmmss = [horas, minutos, segundos].join(':');
    console.log(hhmmmss.padStart(120, ' '));
}
var readline_sync_1 = require("readline-sync");
function menu() {
    var fila = new FilaDeTarefas();
    while (true) {
        console.log("            \n[][]][][][][][][][][][]");
        console.log("            \n--- Menu de Tarefas ---");
        console.log("            [01] Incluir tarefa");
        console.log("            [02] Excluir tarefa");
        console.log("            [03] Listar tarefas");
        console.log("            [04] Marcar 1ª tarefa como feita");
        console.log("                   [99] Sair");
        console.log("            \n[][]][][][][][][][][][]");
        var opcao = readline_sync_1.default.question("Escolha uma opção: ");
        switch (opcao) {
            case '01':
                var descricao = readline_sync_1.default.question("Digite a descrição da tarefa: ");
                var prioridade = readline_sync_1.default.question("Digite a prioridade (opcional): ");
                //  let tarefa = new Tarefa(descricao, prioridade);
                fila.adicionarTarefa(tarefa);
                break;
            case '02':
                fila.removerTarefa();
                break;
            case '03':
                fila.listarTarefas();
                break;
            case '04':
                fila.tarefaPronta();
                break;
            case '99':
                console.log("Saindo...");
                console.log("[ BOA SORTE NA NOVA EMPREITADA ]");
                console.log("[   NOS VEREMOS EM BREVE !!! ]");
                //           function playSound() 
                return;
            default:
                console.log("Opcao invalida, tente novamente");
        }
    }
}
menu();
