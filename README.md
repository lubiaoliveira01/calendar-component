# Componente de Calendário

Está aplicação se resume no desenvolvimento de um componente de calendário reutilizável e customizável. Permite a navegação pelos meses anteriores e posteriores.

Tecnologias utilizadas:
- Typescript;
- React.
          
## Requisitos e como rodar a aplicação

- Tenha o node instalado em sua máquina, de preferência na versão v20.11.0;
- Clone o projeto utilizando o git clone ou da forma que preferir;
- Acesse a página do projeto:
```js
cd calendar-component
```
- Instale as dependências do projeto:
```js
yarn install
```
- Para inicializar a aplicação:
```js
yarn dev
```
- Realizar teste:
```js
yarn test
```

O componente não possui estilização pré-definida, sendo assim ser possível estilizá-lo ao seu critério.
Caso queria adicionar eventos ao seu calendário você poderá fornecer ao componente, através da propriedade "customDate", um JSON, no seguinte formato:
```js
{
  "customDates": [
    {
      "type": "Nome do Evento",
      "date": "AAAA-MM-DD"
    },
    ...
  ]
}
```
