# Lumi Store

## 📌 Descrição

O Lumi Store é uma aplicação web desenvolvida para simular o processo de finalização de uma compra em um e-commerce.

A aplicação permite que o usuário visualize os produtos adicionados ao carrinho, confira o valor total da compra e avance para uma tela de pagamento. Nessa etapa, o usuário informa os dados do cartão e o sistema realiza uma simulação de processamento do pagamento.

Após o processamento, a aplicação apresenta uma tela de sucesso ou de falha, de acordo com o resultado da validação do cartão.

O projeto foi desenvolvido utilizando React, JavaScript, JSX e CSS, com navegação entre páginas por meio do React Router.

---

## 🔗 Links

**Repositório no GitHub:**  
https://github.com/EduardaRBarcelos/CHECKOUT-REACT

**Quadro Kanban (Trello):**  
https://trello.com/b/KvzTTUSu/checkout-react

---

## 🎯 Objetivos do Projeto

- Desenvolver uma aplicação utilizando React.
- Utilizar componentes funcionais e JSX.
- Trabalhar com props para comunicação entre componentes.
- Utilizar o hook useState.
- Trabalhar com eventos em React.
- Utilizar React Hook Form para gerenciamento do formulário.
- Utilizar Zod para validação dos dados.
- Criar e utilizar um Custom Hook.
- Utilizar React Router para navegação entre telas.
- Trabalhar com arrays, objetos e funções JavaScript.
- Criar uma interface responsiva e acessível.
- Simular um processo de checkout totalmente no navegador.

---

## 💡 Problema que o Projeto Resolve

Em uma loja virtual, o processo de checkout precisa apresentar de forma clara as informações da compra e permitir que o cliente forneça seus dados de pagamento de maneira simples e organizada.

Este projeto resolve esse problema ao criar um fluxo de checkout com etapas bem definidas:

1. Visualização dos produtos e do valor total da compra.
2. Preenchimento dos dados de pagamento.
3. Validação das informações inseridas.
4. Simulação do processamento do pagamento.
5. Exibição do resultado da compra.

Dessa forma, o projeto demonstra como uma aplicação React pode organizar um fluxo de compra completo no lado do cliente, sem a necessidade de um backend ou de um serviço real de pagamento.

---

## 🛠 Tecnologias Utilizadas

- React
- JavaScript
- JSX
- CSS3
- Vite
- React Router DOM
- React Hook Form
- Zod
- hookform/resolvers
- HTML5

---

## 📁 Estrutura do Projeto
```
checkout-react/
│
├── src/
│   ├── assets/
│   │   ├── img/
│   │   │   └── logo.jpg
│   │   └── styles/
│   │       └── index.css
│   │
│   ├── components/
│   │   ├── ItemCarrinho.jsx
│   │   └── ResumoCompra.jsx
│   │
│   ├── data/
│   │   └── produtos.js
│   │
│   ├── hooks/
│   │   └── usepagamento.js
│   │
│   ├── pages/
│   │   ├── carrinho.jsx
│   │   ├── pagamento.jsx
│   │   ├── sucesso.jsx
│   │   └── falha.jsx
│   │
│   ├── utils/
│   │   └── pagamento.js
│   │
│   ├── app.jsx
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```
---

## ⚙️ Funcionalidades

- Exibição dos produtos adicionados ao carrinho.
- Exibição do preço, quantidade e subtotal de cada produto.
- Cálculo automático do valor total da compra.
- Navegação do carrinho para a tela de pagamento.
- Formulário de pagamento com nome do titular, cartão, validade e CVV.
- Validação dos dados utilizando React Hook Form e Zod.
- Aceitação de espaços e hífens no número do cartão.
- Simulação do processamento do pagamento.
- Exibição da mensagem processando compra…, durante o processamento.
- Tela de compra aprovada.
- Tela de compra não aprovada.
- Identificação de cartão com os 16 dígitos iguais como tentativa de golpe.
- Opção para tentar o pagamento novamente.
- Navegação entre as telas utilizando React Router.
- Interface responsiva e com recursos de acessibilidade.

---

## ▶️ Como Executar

- Baixe ou clone este repositório.

- Abra o projeto no Visual Studio Code.

- Abra o terminal na pasta do projeto.

- Instale as dependências:
```bash
   npm install
```
- Inicie o servidor de desenvolvimento:

```bash
   npm run dev
```
- Acesse no navegador o endereço informado pelo Vite.

---

## 🧪 Como Testar

1. Acesse a aplicação e verifique os produtos e o valor total do carrinho.
2. Clique em **Finalizar compra** para acessar o formulário de pagamento.
3. Teste o envio com campos vazios ou dados inválidos e verifique as mensagens de erro.
4. Utilize dados válidos e um cartão com 16 dígitos diferentes para testar a aprovação.
5. Utilize 1111 1111 1111 1111 para testar a situação de tentativa de golpe.
6. Verifique as telas de sucesso, falha e a opção de tentar novamente.
7. Teste também a aplicação em diferentes tamanhos de tela.

---

## 📚 Conceitos Aplicados

Durante o desenvolvimento foram utilizados os seguintes conceitos:

- Componentes funcionais
- JSX
- Props
- Renderização condicional
- Renderização de listas
- key
- useState
- Eventos
- Arrays
- Objetos
- Funções
- map()
- reduce()
- Funções de callback
- Módulos JavaScript
- React Router
- React Hook Form
- Zod
- Custom Hooks
- Validação de formulários
- async/await
- Promise
- setTimeout
- HTML semântico
- CSS responsivo
- Acessibilidade

---

## 🤖 Uso da Inteligência Artificial

A Inteligência Artificial foi utilizada como ferramenta de apoio durante o desenvolvimento do projeto.

Seu uso auxiliou principalmente em:

- Organização da estrutura do projeto.
- Compreensão dos conceitos utilizados no React.
- Orientação sobre componentes, props e hooks.
- Auxílio na utilização do React Router.
- Auxílio na implementação do React Hook Form e Zod.
- Identificação e correção de erros.
- Organização e documentação do código.

Os códigos e sugestões gerados com auxílio da Inteligência Artificial foram analisados, testados e adaptados durante o desenvolvimento do projeto.

A IA foi utilizada como ferramenta de apoio ao aprendizado e ao desenvolvimento, sem substituir a compreensão do funcionamento da aplicação.

---

## 🚀 Melhorias Futuras

Como possíveis melhorias para versões futuras do projeto, podem ser implementados:

- Integração com um backend.
- Integração com um serviço real de pagamento.
- Persistência dos produtos do carrinho.
- Adição e remoção de produtos.
- Alteração da quantidade dos produtos.
- Máscaras para os campos do cartão.
- Inclusão de outras formas de pagamento.
- Histórico de pedidos.
- Autenticação de usuários.
- Integração com banco de dados.
- Testes automatizados.
- Melhorias na interface e experiência do usuário.

---

## 👩‍💻 Autora

Eduarda Barcelos

Projeto desenvolvido para fins acadêmicos. Baixe ou clone este repositório.