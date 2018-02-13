Desafio: Módulo 01
Crie uma aplicação do zero e  configure o

ESLint
-------

-- Como fazê-lo? --
Eu já tinha instalado o eslint globalmente, então
$ npm info "eslint-config-airbnb@latest" peerDependencies
copie e cole o resultado em packages.json
$ run yarn
$ yarn add babel-eslint eslint-config-airbnb eslint-plugin-react-native --dev

crie o arquivo .eslintrc na raiz
copie e cole de https://gist.github.com/diego3g/fdc8dc51fd60b88e2e3611fb1b59d380







EditorConfig
-------

Eu já tenho a extensão para o VSC.
crie o arquivo .editorconfig na raiz, com o seguinte código

root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true




Reactotron
-------

https://github.com/infinitered/reactotron/blob/master/docs/quick-start-react-native.md
$ yarn add reactotron-react-native --dev

crie uma pasta dentro da pasta "src" chamada "config" e lá em um arquivo chamado "ReactotronConfig.js" com o conteúdo...
Tenho un erro no eslint: [eslint] 'reactotron-react-native' should be listed in the project's dependencies, not devDependencies. (import/no-extraneous-dependencies)
que pode ser?




React DevTools
-------
$ yarn add react-devtools --dev
dentro da pasta "config" crie um arquivo chamado "DevToolsConfig.js" com o conteúdo...

//o código dentro será executado apenas em DEV
if (__DEV__) {
  require('react-devtools');
}

adicionar no package.json dentro do bloco "scripts":
"react-devtool": "react-devtools"

para executar, $ yarn run react-devtool

Tenho um aviso amarelo no emulador que diz:
react-devtools agent got no connection




Babel Module Resolver
-------
$ yarn add babel-plugin-module-resolver eslint-import-resolver-babel-module --dev

no arquivo .babelrc adicionar:
"plugins": [
  [
    "module-resolver",
    {
      "cwd": "babelrc",
      "root": ["./src"],
      "extensions": ["*.js", "*.ios.js", "*.android.js"]
    }
  ]
]

no arquivo .eslintrc
"settings": {
  "import/resolver": {
    "babel-module": {}
  }
},


Apareceu erro, com a janela em vermelho...
$ react-native start --reset-cache

*** Não consegui fazer funcionar, dei o seguinte erro ***
error: bundling failed: Error: Unable to resolve module `config/ReactotronConfig` from `/Users/xavier/Projects/RocketSeat-Curso/desafio01/src/index.js`: Module does not exist in the module map






CodeQuinta #6
Construindo layout no React Native
https://www.youtube.com/watch?v=Q7gT462aBU0&t=13s

Foi minha referência ao design!!!

