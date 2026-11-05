// =========================================================================
// FUNCIONALIDADE 1: VALIDAÇÃO DO FORMULÁRIO DE CONTATO (Critério Obrigatório P9)
// =========================================================================

// Manipulação do DOM: Seleciona o formulário e a div onde as mensagens de status serão exibidas
const formCadastro = document.getElementById('formCadastro');
const statusForm = document.getElementById('statusForm');

// Registro de Evento: Escuta quando o usuário tenta enviar (submit) o formulário
if (formCadastro) {
    formCadastro.addEventListener('submit', (evento) => {
        // Evento preventDefault: Impede o comportamento padrão de recarregar a página ao enviar
        evento.preventDefault();

        // Manipulação do DOM / Leitura de Dados: Captura os valores digitados e remove espaços extras com trim()
        const nome = document.getElementById('nome').value.trim();
        const campoEmail = document.getElementById('email'); // Captura o elemento completo para validação nativa
        const email = campoEmail.value.trim();               
        const assunto = document.getElementById('assunto').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        // Manipulação do DOM: Reseta mensagens e estilos de validações anteriores
        statusForm.textContent = "";
        statusForm.className = "mensagem-sucesso oculto"; 

        // Estrutura Condicional (if): Verifica se o nome cumpre o requisito mínimo de 3 caracteres
        if (nome.length < 3) {
            exibirErro("Erro: O nome precisa ter no mínimo 3 caracteres.");
            return; // Interrompe a execução da função
        }

        // Estrutura Condicional (if): Usa o checkValidity() do HTML5 para validar o formato do e-mail
        if (!campoEmail.checkValidity()) {
            exibirErro("Erro: Insira um e-mail válido.");
            return;
        }

        // Estrutura Condicional (if): Valida se o assunto foi preenchido
        if (assunto === "") {
            exibirErro("Erro: O campo assunto não pode ficar vazio.");
            return;
        }

        // Estrutura Condicional (if): Garante que a mensagem tenha pelo menos 10 caracteres
        if (mensagem.length < 10) {
            exibirErro("Erro: A mensagem precisa ter no mínimo 10 caracteres.");
            return;
        }

        // Manipulação do DOM / Resposta de Sucesso: Altera o texto e os estilos inline caso os dados sejam válidos
        statusForm.textContent = `Gratidão, ${nome}! Seu cadastro fictício foi enviado com sucesso. Juntas somos mais fortes! (Envio simulado, nenhum dado foi guardado).`;
        statusForm.classList.remove('oculto');
        statusForm.style.backgroundColor = "#c6f6d5"; // Fundo verde claro para sucesso
        statusForm.style.color = "#22543d";           // Texto verde escuro

        // Manipulação do DOM: Reseta todos os campos de entrada do formulário após o sucesso simulado
        formCadastro.reset();
    });
}

// Função Auxiliar: Centraliza a exibição visual de erros na tela manipulando classes e estilos do DOM
function exibirErro(texto) {
    statusForm.textContent = texto;
    statusForm.classList.remove('oculto'); // Torna o elemento visível tirando a classe utilitária
    statusForm.style.backgroundColor = "#fed7d7"; // Fundo vermelho claro para erro
    statusForm.style.color = "#9b2c2c";           // Texto vermelho escuro
}


// =========================================================================
// FUNCIONALIDADE 2: INTERAÇÃO ADICIONAL VIA DOM - COPIAR PIX (Critério Obrigatório P8)
// =========================================================================

// Manipulação do DOM: Seleciona o botão de cópia do PIX por ID
const btnCopiarPix = document.getElementById('btnCopiarPix');

if (btnCopiarPix) {
    btnCopiarPix.addEventListener('click', () => {
        let feedbackPix = document.getElementById('feedbackPix');
        
        if (!feedbackPix) {
            feedbackPix = document.createElement('p');
            feedbackPix.id = 'feedbackPix';
            feedbackPix.style.fontWeight = 'bold';
            feedbackPix.style.marginTop = '10px';
            feedbackPix.style.textAlign = 'center';
            btnCopiarPix.parentNode.appendChild(feedbackPix);
        }

        btnCopiarPix.textContent = " Chave Pix Copiada com Sucesso!!";
        btnCopiarPix.classList.add('sucesso'); // <-- ADICIONADO: Ativa o verde do CSS       
        
        setTimeout(() => {
            btnCopiarPix.textContent = "📋 Copiar Chave PIX";
            btnCopiarPix.classList.remove('sucesso'); // <-- ADICIONADO: Remove o verde e volta ao padrão
        }, 2000);
    });
}

// =========================================================================
// INTERAÇÃO ADICIONAL: MOSTRAR / OCULTAR DIRETRIZES DA ONG (Página Quem Somos)
// =========================================================================

// Função Reutilizável: Gerencia a visibilidade de blocos de informação usando condições e manipulação de classes
function configurarExpansao(idBotao, idTexto, termoPadrao) {
    const botao = document.getElementById(idBotao);
    const texto = document.getElementById(idTexto);

    // Estrutura Condicional Preventiva: Impede erros no console caso o script rode em páginas sem esses elementos (como a index.html)
    if (botao && texto) {
        // Registro de Evento: Escuta os cliques nos botões de expansão
        botao.addEventListener('click', () => {
            // Estrutura Condicional (if/else): Checa se o texto está invisível pela classe 'oculto'
            if (texto.classList.contains('oculto')) {
                texto.classList.remove('oculto'); // Torna o conteúdo visível
                botao.textContent = `Recolher detalhes ▲`; // Altera dinamicamente o rótulo do botão (Feedback Visual)
            } else {
                texto.classList.add('oculto');    // Oculta o conteúdo novamente
                botao.textContent = `Saiba mais sobre ${termoPadrao} ▼`;
            }
        });
    }
}

// Invocação das Funções de Expansão: Ativa de forma segura o comportamento nos cards institucionais
configurarExpansao('btnMissao', 'txtMissao', 'a missão');
configurarExpansao('btnVisao', 'txtVisao', 'a visão');
configurarExpansao('btnValores', 'txtValores', 'os valores');


// =========================================================================
// INTERAÇÃO ADICIONAL: MOSTRAR / OCULTAR DEPOIMENTOS (Página Inicial)
// =========================================================================

// Manipulação do DOM: Seleciona o botão e os cartões de depoimentos que iniciam escondidos
const btnDepoimentos = document.getElementById('btnDepoimentos');
const dep4 = document.getElementById('depoimento4');
const dep5 = document.getElementById('depoimento5');

// Registro de Evento: Controla a expansão repetível do mural de histórias de impacto
if (btnDepoimentos && dep4 && dep5) {
    btnDepoimentos.addEventListener('click', () => {
        // Estrutura Condicional (if/else): Alterna a visibilidade baseado no estado do primeiro elemento oculto
        if (dep4.classList.contains('oculto')) {
            dep4.classList.remove('oculto'); // Exibe o depoimento 4
            dep5.classList.remove('oculto'); // Exibe o depoimento 5
            btnDepoimentos.textContent = "Recolher depoimentos ▲"; // Atualiza o rótulo com feedback visual indicando abertura
        } else {
            dep4.classList.add('oculto');    // Oculta o depoimento 4
            dep5.classList.add('oculto');    // Oculta o depoimento 5
            btnDepoimentos.textContent = "Ver mais depoimentos ▼"; // Restaura o rótulo original indicando fechamento
        }
    });
}
