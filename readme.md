## Proposta

Introduzir a ferramenta, seus principais e mais úteis recursos de gerenciamento do repositório e seu conteúdo.

---

# <img style="height:3.5rem; align-self:center;" src="./img/git.png" alt="git" srcset="">

O Git é uma ferramenta de versionamento de código que ajuda o desenvolvedor a criar e monitorar mudanças em qualquer grupo de arquivos, comumente usado para trabalho coordenado entre programadores no desenvolvimento de projetos, permitindo a manipulação desse código fonte dos desenvolvedores de forma integrada e salvando as alterações feitas ao longo do desenvolvimento.

Ele foi criado por Linus Torvalds em 2005 para o desenvolvimento do kernel Linux pela insatisfação das soluções presentes na época

## Git vs Github

Qualquer programador já ouviu falar no Github e constantemente **Git** e **Github** são confundidos como sendo a mesma coisa... mas não são!

[Git & Github: O que é? Por que? Como iniciar?](https://blog.rocketseat.com.br/iniciando-com-git-github/)

## Principais comandos

- `git init` - inicia no diretório atual um repositório
- `git add <filename>` || `.`
    
    Adicione arquivo no stage do commit, especifique ou adicione todos os arquivos alterados usando `.` ;
    
    Desfazendo staging
    
    [How to Undo a Git Add](https://www.freecodecamp.org/news/how-to-undo-a-git-add/)
    

- `git commit`
    
    Os commits são formados por um snapshot, uma "foto" dos diretórios e seu conteúdo naquele momento.
    
- braches & merge
    
    [Git - O básico de Ramificação (Branch) e Mesclagem (Merge)](https://git-scm.com/book/pt-br/v2/Branches-no-Git-O-b%C3%A1sico-de-Ramifica%C3%A7%C3%A3o-Branch-e-Mesclagem-Merge)
    

# GUI - Graphical use interface

É possível fugir dessa interação via terminal usando uma interface gráfica. Ela permite que visualize a timeline e flow de versões do repositório.

Abaixo é possível ver algumas opções populares de programas que permitem o gerenciamento de repositórios em máquina.

[GUI Clients](https://git-scm.com/downloads/guis)

[GitHub Desktop](https://desktop.github.com/)

---

# 💪🏼 Mão na massa!

Todo desenvolvedor tem a necessidade do controle preciso do código que ele desenvolve, então entra o Git para o controle de versões.

É importante sempre tem mensagens de commit que descrevam a o que foi essencialmente alterado para que o controle seja eficiente e funcional.

Esse projeto levou total de 3h18 para ser concluído e foi inspirado na ferramenta [Clockfy](clockfy.me)
---
----
## 🧪 Sobre o código desenvolvido
O mais excepcional é a parte Javascrip.


A estrutura do arquivo `script.js` começa com a referência de elementos da árvore HTML quais serão manipulados.
### Funções utilizadas
`getTime()` - retorna o tempo atual

`secondCounter()` - captura o tempo atual do timer e retorna adicionando 1 segundo.

`addTask` - pega o tempo total do timer, a atividade inputada e insere um `#task-item` ao HTML.

Então há os event listeners, "ouvidores de eventos", ativos quando um dos botões `#play` || `#stop` é apertado, executando as funções de acordo com as regras necessárias.

É desenvolvido
- Manipulação da DOM
  - Pegando valores do elemento
  - Definindo valores ao elemento
  - Manipulando as classes do elemento
  - Adicionando elementos à interface
- Atribuição de variavel ao escopo global 
- `setInterval()` > *core do timer* > executa callback após tempo definido
- `padStart(tamanho, char)` - deixa string com o tamanho definido completando a diferença com carcteres informados.
- Destructuring atributos
- Arrow functions
