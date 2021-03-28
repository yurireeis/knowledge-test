# VAEES - Tech Challenge

Bem vindo(a)!

Aqui você terá todas as informações para realizar seu desafio.

O tempo sugerido para conclusão do desafio é de `x` dias, porém, o mesmo pode estender-se caso necessário, nosso foco é a qualidade da sua implementação!

Você deverá criar um fork deste projeto e realizar o desenvolvimento do desafio.

Quando sua implementação  estiver concluída você deverá encaminhar para o e-mail `nosso-emailzinho` o link do seu repositório do Github para que nosso time possa analisar seu código e encaminhar um feedback.

Bom desafio!

<p align="left">
    <img src="https://i2.wp.com/allhtaccess.info/wp-content/uploads/2018/03/programming.gif?fit=1281%2C716&ssl=1" height="165" width="220">
</p>

> ## Desafio

Você deverá construir as rotas para **criação**, **listagem** e **exclusão** de pedido de compras. 

> ## Requisitos

Você pode encontrar as informações da tabela de pedidos em **src/utils/db/sqli/migrations/003-purchase-orders.sql**

### Listagem de Pedidos

- Você deverá expor o endpoint **/orders** que receberá uma requisição do tipo **GET**;
- A lista deverá conter todos os dados do pedido, bem como os dados de fornecedor e produtos;
- Sua lógica deverá tratar exceções corretamente.

### Criação de Pedidos

- Você deverá expor o endpoint **/orders** que receberá uma requisição do tipo **POST**;
- A criação de pedidos deverá aceitar a criação de um ou vários pedidos por vez;
- Você deverá validar se os campos **product_id** e **price** são válidos;
- Sua lógica deverá tratar exceções corretamente.

### Deleção de Pedidos

- Você deverá expor o endpoint **/orders/:id** que receberá uma requisição do tipo **DELETE**;
- Você deverá criar uma nova coluna na tabela de pedidos chamada **deletion_flag** que será do tipo **TEXT(1)**;
- Você deverá atualizar as migrations para criarem os pedidos iniciais corretamente;
- A deleção de pedidos deverá conter apenas um pedido por vez;
- Você deverá validar se o campo **id** é válido antes de realizar a deleção;
- Sua lógica deverá tratar exceções corretamente.

### Diferenciais
- Testar unitariamente todas as classes relacionadas a funcionalidade de pedidos;
- Manter o padrão de código atual do projeto;
- Propor melhorias possíveis no código fonte.

> ## Critérios de Avaliação

### Entrega
- O projeto está completo para ser executado?
- O projeto atende ao que se propõe fazer?
- Todos requisitos foram atendidos?

### Boas Práticas
- O código está de acordo com o guia de estilo do eslint configurado no projeto?
- O código está bem estruturado?
- O código está fluente na linguagem?
- O código faz o uso correto de Design Patterns?

### Documentação
- Você deverá criar dentro da pasta requirements as documentações das rotas desenvolvidas e da tabela do banco de dados;

### Git
- Os commits são pequenos e consistentes?
- As mensagens de commit são claras?

### Código Limpo
- O código possibilita expansão para novas funcionalidades?
- O código é Don't Repeat Yourself?
- O código é fácil de compreender?
