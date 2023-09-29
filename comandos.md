//the magic of live happens when you leave the weights of past and projections of the future and focused all your energy in the present moment.
// a mágia da vida acontece quando você consegue largar as amarras e projeções e focar sua energia totalmente no momento do agora.

npm init -y
npm install fastify
npm install eslint @rocketseat/eslint-config -D
criar .eslintrc.json {
  {
  "extends": "@rocketseat/eslint-config/node",
  "prettier/prettier": [
    "error",
    {
      "endOfLine": "auto"
    }
  ]
}
}
npm i typescrypt -D
npm i @types/node -D
npx tsc --init // cria arquivo tsconfig
alterar o "target" para no mínimo es2020
npx tsc index.ts // pra converter o arquivo TS em JS. até o momento não rodou com ["type": "module"];
npm i tsx -D // converte os arquivos direto, executando o .ts
 "scripts": {
    "dev": "tsx watch index.ts"
  },

npm i knex sqlite3
isolar e exporta configuração do banco
criar arquivo knexfile.ts
criar script "node --loader tsx ./node_modules/.bin/knex" // node --loader tsx: usa o node para ler o arquivo com o tsx.
