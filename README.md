

# Avaliação Tecnica DB1

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Para as tarefas de 1 a 3 deverá ser criado um projeto Console, visando avaliar o conhecimento do
candidato em lógica e manipulação de enumeráveis com LINQ.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

1. Para definir uma sequência a partir de um número inteiro o positivo, temos as seguintes
regras:
 Se n é par, o próximo valor é n/2
 Se n é ímpar, o próximo valor é 3n + 1
Usando a regra acima e iniciando com o número 13, geramos a seguinte sequência:
13  40  20  10  5  16  8  4  2  1
Podemos ver que esta sequência (iniciando em 13 e terminando em 1) contém 10 termos.
Embora ainda não tenha sido provado (este problema é conhecido como Problema de
Collatz), sabemos que com qualquer número que você começar, a sequência resultante
chega no número 1 em algum momento.
Desenvolva uma aplicação que descubra qual o número inicial entre 1 e 1 milhão que
produz a maior sequência.
_______________________________________________________________________________________________________________________________________________________________________________________

** Tecnologias utilizadas: .NET Core Console Application
** Projeto disponível em ../DB1-Collatz-Console

- Executar o compilado disponível no diretório: ..\DB1-Collatz-Console\Release\DB1-Collatz-Console.exe;
O utilitário fornece a opção de salvar as sequencias em arquivo *.csv temporário onde é possível ordenar as sequencias geradas e confirmar o resultado.
_______________________________________________________________________________________________________________________________________________________________________________________


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

2. Utilizando LINQ, elabore um método que defina se o seguinte array contém somente
números ímpares e demonstre o resultado no console:
int[] numeros = { 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 };

** Tecnologias utilizadas: .NET Core Console Application
** Projeto disponível em ../DB1-ListHaveJustOdd-Console

- Executar o compilado disponivel no diretório: ..\DB1-Collatz-Console\Release\DB1-Collatz-Console.exe;
O utilitário retorna um boolean caso o array contenha somente numeros ímpares.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

3. Utilizando LINQ, elabore um método que traga somente os números do primeiro array que
não estejam contidos no segundo array e demonstre o resultado no console:
int[] primeiroArray = { 1, 3, 7, 29, 42, 98, 234, 93 };
int[] segundoArray = { 4, 6, 93, 7, 55, 32, 3 };

_______________________________________________________________________________________________________________________________________________________________________________________

** Tecnologias utilizadas: .NET Core Console Application
** Projeto disponível em: ../DB1-NumberContainedsInArray-Console;

- Executar o compilado disponivel no diretório: ..\DB1-NumberContainedsInArray-Console\Release\DB1-NumberContainedsInArray-Console.exe;
O utilitário retorna uma lista com os numeros do primeiro array contidos no segundo array;
_______________________________________________________________________________________________________________________________________________________________________________________

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Exercício 2
Para as tarefas de 4 a 6 deve ser utilizado o framework AngularJS ou Angular 2+, que explorarão a
comunicação com APIs Web, utilizando a API do GitHub, mais especificamente nas informações de
usuários e repositórios (documentação disponível em https://developer.github.com/v3/,
https://developer.github.com/v3/users/ e https://developer.github.com/v3/repos/) para avaliação
dos conhecimentos do candidato no framework escolhido.

4. Utilizando a API informada acima, desenvolva uma tela que exibirá uma lista de usuários do GitHub,
contendo seu Id e Login.
5. A partir da listagem feita no exercício anterior, elabore uma tela que mostre os detalhes de um
usuário específico, contendo seu Id, Login, URL do perfil e Data de cadastro.
6. Juntamente com a tela de detalhamentos de usuário, exiba em uma tabela os repositórios públicos
do usuário, contendo Id, Nome e URL do repositório

_______________________________________________________________________________________________________________________________________________________________________________________

** Tecnologias utilizadas: Angular6, Bootstrap4
** Projeto disponível no diretório: ..\DB1-GitHubAPI-Presenter\db1-app

- Para executar o projeto executar console de comando e navegar até a raiz do diretório: cd db1-app;
- Executar o comando npm install para fazer o download dos pacotes necessários;
- Executar o comando ng serve para compilar a aplicação e levantar servidor local node;
- A aplicação estará disponível na url: http://localhost:4200
_______________________________________________________________________________________________________________________________________________________________________________________

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Parte 3
Para execução das tarefas de 7 a 9, o candidato(a) poderá aproveitar a estrutura desenvolvida nos
exercícios anteriores, porém, criando sua própria API REST com ASP.NET WebAPI ou ASP.NET MVC
Core.
A seguinte regra de negócio será utilizada:
“O RH necessita de uma aplicação para traçar as tecnologias que os candidatos conhecem. Como
cadastros base, será informado ao sistema quais tecnologias a empresa trabalha, e quais vagas
estão disponíveis. Durante a entrevista, candidato será cadastrado a uma vaga e vinculado às
tecnologias que conhece. Ao final do período de triagem de currículos, o RH informará o peso de
cada tecnologia para a vaga em questão, recebendo com isso, um relatório ordenado por candidato,
pontuado de acordo com o conhecimento do mesmo.”

7. Se baseando no requisito acima, desenvolva os cadastros básicos da aplicação
contemplando as seguintes operações: listagem, criação, alteração e exclusão.
8. Utilizando a estrutura elaborada anteriormente, desenvolva a funcionalidade de entrevista
descrita na regra de negócio.
9. Utilizando a estrutura elaborada anteriormente, desenvolva as funcionalidades
contempladas ao final do período de triagem de currículos.

_______________________________________________________________________________________________________________________________________________________________________________________

** Tecnologias utilizadas: ASP.NET Core WebAPI, Entity Framework 6, Arquitetura baseada em DDD
** Projeto disponível no diretório: ..\DB1-Talents-WebAPICore

** DATABASE
- Executar os scripts de criação de banco disponíveis em: ..\DB1-Talents-WebAPICore\DB1.WebAPICore.Data\Scripts;
** BACK-END
- Para executar o projeto abrir o arquivo da solution disponível no diretório: ..\DB1-Talents-WebAPICore\DB1-Talents-WebAPICore.sln;
- Acessar o arquivo ..\DB1-Talents-WebAPICore\DB1.WebAPICore.Data\Context\DB1Context.cs e configurar a conexão com o banco de dados;
- Compilar e rodar aplicação utilizando os menus ou atalho de teclas 'F5';
** FRONT-END
- Utilizado o projeto citado nos itens 4, 5 e 6.
- A aplicação está configurada para utilizar o back-end rodando na url: http://localhost:62824
_______________________________________________________________________________________________________________________________________________________________________________________

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
