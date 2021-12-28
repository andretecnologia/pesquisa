# Pesquisa

```
ng new pesquisa --routing=true --style=scss --skip-tests
```
_html_
```
<form (ngSubmit)="pesquisa()" action="">
  <button type="submit">Pesquisar</button>
</form>
```
_app.module.ts_
```
import { FormsModule } from '@angular/forms';
FormsModule
```

```
ng add @angular/material --skip-confirmation

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

MatInputModule,
MatButtonModule,
```

```
ng g s endereco

ng g class endereco

import { HttpClientModule } from '@angular/common/http';
HttpClientModule
```

```
CREATE DATABASE endereco;

CREATE TABLE endereco(
id SERIAL PRIMARY KEY,
rua VARCHAR(255),
numero integer );
```

```
mkdir node_backend
cd node_backend
npm init -y
npm install pg
touch db.js
```

## Referências

- [Source 1](https://www.digitalocean.com/community/tutorials/how-to-use-postgresql-with-node-js-on-ubuntu-20-04)

- [Source 2](https://medium.com/@onejohi/building-a-simple-rest-api-with-nodejs-and-express-da6273ed7ca9#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjAzZTg0YWVkNGVmNDQzMTAxNGU4NjE3NTY3ODY0YzRlZmFhYWVkZTkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2NDA2NTYzNjEsImF1ZCI6IjIxNjI5NjAzNTgzNC1rMWs2cWUwNjBzMnRwMmEyamFtNGxqZGNtczAwc3R0Zy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExNzgzNDA4NzAzNDc1NzU4Njg2NSIsImVtYWlsIjoiZW5lZ29jaW9zLmFuZHJlQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJuYW1lIjoiQW5kcsOpIEx1aXogUm9zYSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQU9oMTRHaXBYN2lBcWNlSkNBZnNybzZDeFRic0wySmZVeFdKOUJyaXMzek52cWM9czk2LWMiLCJnaXZlbl9uYW1lIjoiQW5kcsOpIiwiZmFtaWx5X25hbWUiOiJMdWl6IFJvc2EiLCJpYXQiOjE2NDA2NTY2NjEsImV4cCI6MTY0MDY2MDI2MSwianRpIjoiMjIyM2VjNDUzOTZhMzA1NDkyZDQzZjA3ODM0Yjg2N2RmNmI1NDJiOSJ9.hQ3tdgJJ4ylKyzxRoQWih3Oq3fexKYIqlSZ_psPo2n62lUSsBe_4CElzQr--Sbti8o__SZLMHhzq6xfvE0Z0ExGApHxBfzRVtAzmzfIiprJs6wuTXi_jbsPxT-3P2rMSc5UylZ7KKWcf00cJAZWmXjGgRKtHQCpPZGLC4_22Pn71wtWXoTwfi89LAjI7dUS_iMjdXHlSv00K2z6Nyz58Kp15fx26TghnEOSKbv149A4mFLT8hVEerECIuC2FH2Y6_s_r1nYDtTh0XVVzbRoesthKHZOLq3mM4AG0ljZJYs8QnPZ3375nrsy-DQpx9FGNjXPlBtQGpEiIsw0KHIrRoQ)

- [Source 3](https://www.tabnine.com/code/javascript/functions/pg/Pool/query)

- [Source 4](https://celke.com.br/artigo/como-permitir-acesso-a-api-com-cors-parte-7)

- [Source 5](https://stackblitz.com/angular/dlxbkjqaoba)


