# EcoMove

## 🛠️ Tecnologias usadas

- CSS
- HTML
- Dotenv
- Cors
- Pg
- Node.js
- Express
- PostgresSQL

---

## Estrutura das pastas

EcoMove/

|-Backend/

├── src/

├── config/          # Configurações gerais (banco de dados, variáveis de ambiente)

├── controllers/     # Lógica de controle que recebe as requisições e envia respostas

├── models/          # Definição dos dados e tabelas (esquemas do banco)

├── repositories/    # Comunicação direta com o banco de dados (consultas)

├── routes/          # Definição dos endpoints da API

├── services/        # Regras de negócio da aplicação

├── middlewares/     # Funções intermediárias (autenticação, validação)

└── server.js        # Ponto de entrada (inicialização do servidor)

├── .env                 # Variáveis de ambiente

├── package-lock.json

├── package.json

|
|-Frontend/

├── css/

   ├── index.css/      # Pasta responsavel pelos arquivos que fazem a estilização do site

├── images/             # Pasta responsavel por armazenar todas as imagens usada no site

   ├── usuario.png/     

├── index.html          # Arquivo responsavel pelo conteudo da pagina

├── index.js            # Arquivo responsavel pela animação usada na pagina  

|── README.md

├── .gitignore


---

## 💻 Como Rodar o Projeto Localmente

Siga rigorosamente a ordem dos passos abaixo para executar a aplicação em sua máquina.

### Pré-requisitos
Antes de começar, certifique-se de ter instalado:
- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org) (Versão 18 ou superior)
- [PostgreSQL](https://postgresql.org) (Em execução)

### Passo a Passo

#### 1. Clonar o Repositório
Abra o terminal e baixe os arquivos do projeto:
```bash
git clone https://github.com
cd EcoMove
```

#### 2. Instalar as Dependências
Instale globalmente e baixe os pacotes principais do ecossistema do projeto (servidor HTTP, variáveis de ambiente e driver do banco de dados):
```bash
npm install express dotenv pg cors
```

#### 3. Verificar o Localhost do Servidor
Acesse a pasta do backend para analisar o arquivo de configuração e conferir qual porta local o ambiente vai utilizar:
```bash
cd server
```

*Abra as configurações do servidor e verifique qual `PORT` está definida para o seu endereço local.*

#### 4. Configurar o `package.json`
Para permitir o uso de importações modernas do ES6 (`import` / `export`), abra o seu arquivo `package.json` no editor e certifique-se de adicionar a propriedade `"type": "module"` nas configurações principais:

```json
{
  "name": "EcoMove",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "node index.js"
  }
}
```

#### 5. Executar o Comando de Inicialização
Após realizar as configurações no arquivo, inicie o servidor executando o seguinte comando no terminal:
```bash
npm run dev
```
O servidor backend estará ativo e respondendo em: `http://localhost:${PORT}`

---

## 📄 Licença

MIT
