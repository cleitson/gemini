# Leitor de imagens com Gemini Vision

**Descrição**

Este projeto é um backend que tem como proposta ler a imagem de uma conta seja água/gás e a IA Gemini vision consegue ler a quantidade consumida.


## Índice

1. [Sobre o Projeto](#sobre-o-projeto)
2. [Tecnologias Utilizadas](#tecnologias-utilizadas)
3. [Instalação](#instalação)
4. [Como Usar](#como-usar)
5. [Contribuição](#contribuição)
6. [Contato](#contato)



## Sobre o Projeto

Esse projeto foi realizado para um teste técnico de backend onde deve-se desenvolver o backend de um serviço que gerencia a leitura individualizada de consumo de água e gás. Para facilitar a coleta da informação, o serviço utilizará IA. <br>
No total, são 3 endpoints e uma integração com a [API do Google Gemini](https://ai.google.dev/gemini-api/docs/vision).


## Tecnologias Utilizadas
O projeto foi desenvolvido utilizando as seguintes tecnologias:

- **Linguagem de Programação**: Nodejs, Typescript, Docker, MySql


## Instalação

>[!WARNING]
> É necessário ter o Docker-compose instalado no computador. Para mais informações, consulte [Docker Docs](https://docs.docker.com/desktop/install/windows-install/)


> [!IMPORTANT]
> **ATENÇÃO**: você precisará obter uma chave de acesso para usar essa funcionalidade. Ela é gratuita. Não realize despesas financeiras para executar esse projeto. [Obter uma chave de API](https://ai.google.dev/gemini-api/docs/api-key)

Siga os passos abaixo para instalar e configurar o projeto localmente:

1. Clone o repositório:

    ```bash
    git clone https://github.com/cleitson/gemini.git
    ```

2. Entre no diretório do projeto:

    ```bash
    cd gemini
    ```

3. Executar projeto:

    ```bash
    docker compose up --build
    ```

## Como Usar

Após a instalação, e os conteiners estiverem online ira funcionar no ```localhost:3001/```

```json
    {
      "message": "Hello, world!"
    }
```
O projeto tem as seguintes rotas:

<details>
<summary>POST /upload</summary>

  > Envia a imagem para a IA do gemini ler a medida e retornar o valor, um link temporário para a imagem e um uuid de identificador.

  Request Body
  ```json
    {
      "image": "base64", // a imagem deve ser uma string formato base64 *e uma string grande*
      "customer_code": "string",
      "measure_datetime": "datetime",
      "measure_type": "WATER ou GAS"
    }
  ```

  Response
  ```json
    {
      "image_url": "string",
      "measure_value": "interger",
      "measure_uuid": "string"
    }
  ```
</details>

<details>
<summary>PATCH /confirm </summary>

  > Para confirmar ou corrigir o valor lido pelo Gemini.

  Request Body
  ```json
    {
      "measure_uuid": "string",
      "confirmed_value": "interger",
    }
  ```
  ```json
  Response 
    {
      "success": "true"
    }
  ```
</details>
<details>
<summary>GET /< customer code >/list </summary>

  > Responsável por listar as medidas realizadas por um determinado cliente.

  ```typescript
    Ex. localhost:3001/cliente123/list
  ```
  > O endpoint tambem aceita query parameter do tipo "WATER" ou "GAS".

  ```typescript
    Ex. localhost:3001/cliente123/list?measure_type?=WATER
  ```
  
  Response
  ```json
    {
      "customer_code": "string",
      "measures": [
        {
          "measureUuid": "string",
          "measureDatetime": "Date",
          "measureType": "string",
          "hasConfirmed": "boolean",
          "imageUrl": "string"
        },
        {
          "measureUuid": "string",
          "measureDatetime": "Date",
          "measureType": "string",
          "hasConfirmed": "boolean",
          "imageUrl": "string"
        }
      ]
    }
  ```
</details>

<details>
  <summary>GET /src/image/</summary>

  > Retorna a imagem que estava em base64 para uma imagem.jpeg

  ```typescript
    Ex. localhost:3001/src/image/1725065502665.jpeg
  ```


</details>


## Contribuição

Contribuições são bem-vindas! Se você deseja contribuir com este projeto, siga estas etapas:

1. Faça um fork do repositório.

2. Crie uma nova branch para sua feature ou correção de bug:

    ```
    git checkout -b minha-feature
    ```


3. Commit suas alterações:

    ```
    git commit -m "Adiciona nova feature"
    ```

4. Envie suas alterações para o repositório original:

    ```
    git push origin minha-feature
    ```
5. Abra um Pull Request e descreva suas mudanças.


## Contato

  - Linkedin: [Cleitson Lima](https://www.linkedin.com/in/cleitsonlima/)
  - E-mail: cleitson.ftw@gmail.com