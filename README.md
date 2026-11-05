# Projeto Integrador - Instituto 💪 Seja Forte e Corajosa 🌻 

Este projeto consiste em um site institucional, responsivo e interativo desenvolvido como parte da Experiência de Aprendizagem da disciplina de **Fundamentos da Web e Desenvolvimento Front-end**.

## 🎯 Objetivo do Projeto
O **Instituto Seja Forte e Corajosa** é uma Organização Não Governamental (ONG) fictícia criada para o contexto acadêmico. O objetivo do site é divulgar a causa da instituição: o acolhimento, apoio psicológico e capacitação profissional de mulheres em situação de vulnerabilidade social ou vítimas de violência, promovendo sua autonomia financeira e emancipação social.

---

## 👥 Integrantes da Equipe
*   Amanda Tormente Maciel - RGM 49825101
*   Giovanna Malta Vicente - RGM 49711661
*   Izabely dos Santos - RGM 49631781
*   Larissa Fujiwara - RGM 49655132
*   Vivian Cristina Muller Vicente - RGM 49745409

---

## Estrutura de Páginas do Site
O site é composto por 4 páginas HTML interligadas através de um menu de navegação funcional e consistente:
1.  **Início (`index.html`):** Apresentação da ONG, causa defendida, destaques visuais e mural interativo de depoimentos (Histórias de Impacto).
2.  **Quem Somos (`sobre.html`):** Contextualização da história da instituição e blocos expansíveis contendo a Missão, Visão e Valores organizacionais.
3.  **Nossos Projetos (`projetos.html`):** Detalhamento das 3 principais iniciativas ativas (*Mulheres do Amanhã*, *Tecendo o Futuro* e *Transformando Vidas*) e como a comunidade pode contribuir com insumos ou voluntariado.
4.  **Seja Voluntário(a) (`contato.html`):** Orientações para participação, seção de doações simuladas via PIX e o formulário oficial de cadastro de voluntárias.

---

## Funcionalidades JavaScript Implementadas
Conforme os requisitos obrigatórios da rubrica, foram desenvolvidas exatamente duas frentes de funcionalidades utilizando JavaScript puro (Vanilla JS), em arquivo externo e com registro de eventos via `addEventListener()`:

### Funcionalidade 1: Validação do Formulário de Contato
*   **Onde está:** Na página `contato.html`.
*   **Como funciona:** Escuta o evento de `submit` do formulário, impede o recarregamento padrão com `preventDefault()` e higieniza as entradas removendo espaços extras com `.trim()`. 
*   **Regras de validação:** 
    *   Nome (mínimo de 3 caracteres);
    *   E-mail (verifica preenchimento e formato básico estrutural via `checkValidity()`);
    *   Assunto (campo obrigatório, não pode ser vazio);
    *   Mensagem (mínimo de 10 caracteres).
*   **Retorno visual:** Exibe um alerta estilizado em vermelho no próprio HTML em caso de erro. Se todos os dados forem válidos, exibe um painel verde contendo uma confirmação explícita de que os dados **não foram salvos por se tratar de uma simulação acadêmica**, limpando o formulário em seguida.

### Funcionalidade 2: Interações Adicionais via DOM
*   **Copiar Chave PIX (Página de Contato):** Ao clicar no botão de doação simulada, o texto e a cor do botão mudam dinamicamente dando um feedback imediato de sucesso ("Chave Pix Copiada com Sucesso!!"). Um temporizador (`setTimeout`) restaura o estado e a cor rosa original do botão após 2 segundos de forma cíclica.
*   **Expansão de Diretrizes Institucionais (Página Quem Somos):** Botões interativos escondem ou exibem os parágrafos detalhados de Missão, Visão e Valores, alternando as setas indicadoras (▲/▼) e os rótulos de forma repetível.
*   **Mural de Depoimentos (Página Inicial):** Permite expandir ou recolher histórias extras de impacto na comunidade, garantindo uma interface limpa.

---

## Instruções de Execução
Como o projeto limita-se estritamente ao ecossistema Front-end (sem dependências de banco de dados ou linguagens de backend):
1.  Baixe e extraia o arquivo `.zip` enviado.
2.  Navegue até a pasta raiz do projeto.
3.  Dê um duplo clique no arquivo `index.html` para abri-lo diretamente em qualquer navegador moderno (Chrome, Edge, Firefox, Safari).
4.  Para testar a responsividade, utilize as ferramentas de desenvolvedor do navegador (F12) e simule resoluções próximas de **390px** (mobile) e **1280px** (desktop).

---

## Fontes e Créditos
*   **Identidade Visual:** Paleta baseada em tons de roxo (`#6b46c1`) e rosa (`#d53f8c`) para representar empoderamento e sororidade.
*   **Imagens utilizadas:** Imagens de caráter ilustrativo obtidas através de busca no Google Imagens e emojis.
*   **Tipografia:** Família de fontes limpas ('Segoe UI', Tahoma, Verdana).
*   *Aviso Legal:* Este site é um protótipo estritamente acadêmico. Nenhuma transação financeira real é processada e nenhum dado pessoal preenchido no formulário é armazenado ou transmitido.
