# Gerador de QR Code e Senhas

Aplicação de linha de comando em Node.js com duas ferramentas:

- **Gerador de QR Code**: transforma um link em um QR Code exibido direto no terminal.
- **Gerador de senhas aleatórias**: cria senhas com tamanho e tipos de caracteres definidos em variáveis de ambiente.

## Requisitos

- [Node.js](https://nodejs.org/) 20.6 ou superior (necessário para a flag `--env-file`)
- npm

## Instalação

```bash
git clone <url-do-repositorio>
cd 11-gerador-qrcode
npm install
```

## Configuração

Crie um arquivo `.env` na raiz do projeto para configurar o gerador de senhas:

```env
UPPERCASELETTERS=true
LOWERCASELETTERS=true
NUMBERS=true
SPECIAL_CHARACTERES=true
PASSWORD_LENGTH=16
```

| Variável              | Descrição                                       | Valores        |
| --------------------- | ----------------------------------------------- | -------------- |
| `UPPERCASELETTERS`    | Inclui letras maiúsculas (`A-Z`)                | `true`/`false` |
| `LOWERCASELETTERS`    | Inclui letras minúsculas (`a-z`)                | `true`/`false` |
| `NUMBERS`             | Inclui números (`0-9`)                          | `true`/`false` |
| `SPECIAL_CHARACTERES` | Inclui caracteres especiais (`@~^&%$#*!`)       | `true`/`false` |
| `PASSWORD_LENGTH`     | Quantidade de caracteres da senha               | número inteiro |

> Ative pelo menos um tipo de caractere, senão a senha não terá de onde sortear os caracteres.

O `.env` está no `.gitignore` e não é versionado.

## Como usar

Inicie a aplicação:

```bash
npm run start:dev
```

Escolha a ferramenta:

```
escolha a ferramente (1- QRCode ou 2-Password)
```

### 1 - QR Code

1. Digite o link que será convertido.
2. Escolha o tamanho:
   - `1` (Normal): QR Code em tamanho grande.
   - `2` (Terminal): QR Code compacto, que cabe melhor na janela do terminal.

O QR Code aparece no terminal e pode ser lido com a câmera do celular.

### 2 - Senha

A senha é gerada na hora com base nas configurações do `.env`:

```
Password:
k7@x#p2m!q9z$w4r
```

## Estrutura do projeto

```
src/
├── index.js                     # Ponto de entrada e menu principal
├── prompts-schema/
│   ├── prompt-main.js           # Pergunta de escolha da ferramenta
│   └── prompt.js                # Perguntas do gerador de QR Code
└── services/
    ├── qr-code/
    │   ├── create.js            # Faz as perguntas do QR Code
    │   └── handle.js            # Gera e exibe o QR Code
    └── password/
        ├── create.js            # Exibe a senha gerada
        ├── handle.js            # Sorteia os caracteres da senha
        └── utils/
            └── permitted-characters.js  # Monta a lista de caracteres permitidos
```

## Tecnologias

- [prompt](https://www.npmjs.com/package/prompt): perguntas interativas no terminal
- [qrcode-terminal](https://www.npmjs.com/package/qrcode-terminal): geração do QR Code no terminal
- [chalk](https://www.npmjs.com/package/chalk): cores nas mensagens do terminal

## Licença

ISC
