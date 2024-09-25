
// projeto de uma To-Do List que utiliza uma fila (FIFO) para gerenciar tarefas 
// tarefa pode ser adicionada, removida ou marcada como feita
// exibe relogio a direita da tela, copmo opcional PARA AUMENTAR A NOTA, 
//  gera som de saida no final da execucao





function atualizarRelogio() {
    // Obtém a data e hora atual
    let dataAtual = new Date();


    const data = new Date(); // momento atual 
    const horas = data.getHours().toString().padStart(2, '0');
    const minutos = data.getMinutes().toString().padStart(2, '0');
    const segundos = data.getSeconds().toString().padStart(2, '0');
    
    const hhmmmss = [horas, minutos, segundos].join(':');
    console.log(hhmmmss.padStart(120, ' ')) }

import readlineSync from 'readline-sync';

function menu() {
    let fila = new FilaDeTarefas();

    while (true) {
        console.log("            \n[][]][][][][][][][][][]");
        console.log("            \n--- Menu de Tarefas ---");
        console.log("            [01] Incluir tarefa");
        console.log("            [02] Excluir tarefa");
        console.log("            [03] Listar tarefas");
        console.log("            [04] Marcar 1ª tarefa como feita");
        console.log("                   [99] Sair");
        console.log("            \n[][]][][][][][][][][][]");

        const opcao = readlineSync.question("Escolha uma opção: ");

        switch (opcao) {
            case '01':
                let descricao = readlineSync.question("Digite a descrição da tarefa: ");
                let prioridade = readlineSync.question("Digite a prioridade (opcional): ");
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
                console.log("[ BOA SORTE NA NOVA EMPREITADA ]")
                console.log("[   NOS VEREMOS EM BREVE !!! ]")
     //           function playSound() 
                return;

            default:
                console.log("Opcao invalida, tente novamente");
        }
    }
}

menu();
