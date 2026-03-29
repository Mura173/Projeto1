# FECAP - Fundação de Comércio Álvares Penteado

<p align="center">
<a href= "https://github.com/2026-1-NCC3/Projeto1"><img src="Imagens/LogoVitalTech.png" alt="Logo = VitalTech" width="30%" border="0"></a>
</p>

# VitalTech

## Integrantes: <a href="https://github.com/Enzohenrique7">Enzo Henrique</a>, <a href="https://github.com/harryzuh">Harry Zhu</a>, <a href="https://github.com/Mura173">Murilo Ângelo</a>, <a href="https://github.com/vitorkolle">Vitor Kolle</a>

## Professores Orientadores: <a href="https://www.linkedin.com/in/katia-bossi/">Katia Bossi</a>, <a href="https://www.linkedin.com/in/marco-aurelio-lima-barbosa/">Marco Aurélio</a>, <a href="https://www.linkedin.com/in/victorbarq/">Victor Rosetti</a>, <a href="https://www.linkedin.com/in/rodrigo-da-rosa-phd/">Rodrigo da Rosa</a>

## Descrição
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet neque lorem, nec lobortis orci rhoncus vitae. Aenean viverra cursus maximus. Duis metus ligula, lacinia sit amet risus nec, pharetra aliquam ante. In auctor ornare felis vitae pulvinar. Donec ac velit in dolor eleifend mollis. Donec finibus sapien eu pharetra consequat. Sed in euismod tortor. Donec et ante sollicitudin, porta turpis sit amet, dapibus mi. Curabitur fringilla volutpat enim sit amet ultricies. Nulla facilisi. Vivamus aliquam sit amet eros a egestas.

## 📄 Entregas
| **Disciplina**              | **Entrega 1**                      | **Entrega 2**                        |
|-------------------------|--------------------------------|----------------------------------|
| **Análise Descritiva de Dados**          | [Dados, Variáveis e Interpretações](https://github.com/2026-1-NCC3/Projeto1/blob/main/Documentos/Entrega%201/An%C3%A1lise%20Descritiva%20de%20Dados/Entrega%201%20-%20An%C3%A1lise%20Descritiva%20de%20Dados.pdf)     | [------](https://github.com/2026-1-NCC3/Projeto1/tree/main/Documentos/Entrega%202/An%C3%A1lise%20Descritiva%20de%20Dados) |
| **Programação Orientada a Objetivos e Estrutura de Dados**      | [Diagrama de entidades tela principal](https://github.com/2026-1-NCC3/Projeto1/blob/main/Documentos/Entrega%201/Programa%C3%A7%C3%A3o%20Orientada%20a%20Objetos%20e%20Estrutura%20de%20Dados/Diagrama%20VitalTech%20(1).pdf)       | [------](https://github.com/2026-1-NCC3/Projeto1/tree/main/Documentos/Entrega%202/Programa%C3%A7%C3%A3o%20Orientada%20a%20Objetos%20e%20Estrutura%20de%20Dados) |
| **Programação para Dispositivos Móveis**      | [Aplicação Android](https://github.com/2026-1-NCC3/Projeto1/tree/main/src/Android)    | [------](https://github.com/2026-1-NCC3/Projeto1/tree/main/Documentos/Entrega%202/Programa%C3%A7%C3%A3o%20para%20Dispositivos%20M%C3%B3veis)     |
| **Projeto Interdisciplinar: Aplicativo Móvel**| [Apk](https://github.com/2026-1-NCC3/Projeto1/blob/main/Documentos/Entrega%201/Projeto%20Interdisciplinar%20Aplicativo%20M%C3%B3vel/vitaltech_maya.apk)                     | [------](https://github.com/2026-1-NCC3/Projeto1/tree/main/Documentos/Entrega%202/Projeto%20Interdisciplinar%20Aplicativo%20M%C3%B3vel)         |


</br>

## 🛠 Estrutura de pastas

-Raiz<br>
|<br>
|-->documentos<br>
  &emsp;|-->Entrega 1<br>
      &emsp;&emsp;|-->Análise Descritiva de Dados<br>
      &emsp;&emsp;|-->Programação Orientada a Objetos e Estrutura de Dados<br>
      &emsp;&emsp;|-->Programação para Dispositivos Móveis<br>
      &emsp;&emsp;|-->Projeto Interdisciplinar Programação Web<br>
      &emsp;&emsp;|-->Projeto Interdisciplinar Aplicativo Móvel<br>
  &emsp;|-->Entrega 2<br>
      &emsp;&emsp;|-->Análise Descritiva de Dados<br>
      &emsp;&emsp;|-->Programação Orientada a Objetos e Estrutura de Dados<br>
      &emsp;&emsp;|-->Gestão Empresarial e Dinâmica das Organizações<br>
      &emsp;&emsp;|-->Programação para Dispositivos Móveis<br>
      &emsp;&emsp;|-->Projeto Interdisciplinar Aplicativo Móvel<br>
|-->imagens<br>
|-->src<br>
  &emsp;|-->Android<br>
  &emsp;|-->Backend<br>
  &emsp;|-->Web<br>
|readme.md<br>

## 🛠 Instalação

<b>Windows:</b>

Não há instalação! Apenas executável!

<b>HTML:</b>

Não há instalação!
Encontre o index.html na pasta executáveis e execute-o como uma página WEB (através de algum browser).

## 💻 Configuração para Desenvolvimento
### Pré-requisitos
Antes de começar, certifique-se de ter instalado:
<ul>
<li>Node.js (versão recomendada: 18+)</li>
<li>npm </li>
<li>Git</li>
</ul>

### Clonando o repositório
```bash
git clone https://github.com/2025-2-MCC2/Projeto5.git
cd ./Projeto5
```

### Configurando o Back-end
#### Criando e configurando o aquivo .env (Variáveis de ambiente)
````bash
cd ./src/Server

echo "PORT=3000
MYSQL_HOST=mysql.railway.internal
MYSQL_USER=root
MYSQL_DB=railway
MYSQL_PASSWORD=UUibQPMMyiQgoMWZFbLQQhoXKjnkNSAB

JWT_SECRET=lead2025
JWT_EXPIRES=1h > .env
````
#### Baixando as dependências e iniciando o servidor
````bash
npm install

# Inicie o servidor
npm run dev

````
<a href="./Imagens/Postman">Link para imagens de testes de Rotas com Postman</a> </br>


### Configurando o Front-end

`````bash
(Em outro terminal)

cd ./src/Client
npm install

# Inicie o servidor de desenvolvimento
npm run start
``````

### Observações
<ul>
  <li>O front-end estará disponível em http://localhost:5173</li>
  <li>O back-end estará rodando em http://localhost:3000</li>
  <li>Certifique-se de que as URLs de API estejam corretamente configuradas no front-end para comunicação com o back-end</li>
</ul>

## 📋 Licença/License
<a href="https://github.com/2025-2-MCC2/Projeto5">LEAD</a> © 2025 by <a href="https://creativecommons.org">Bruno Rodrigues Da Costa, Enzo Henrique Neves Sena, Harry Zhu, Murilo Angelo Pimentel Braggio, Vitor Paes Kolle  </a> is licensed under <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a>

## 🎓 Referências

<a href="https://liderancasempaticas.com/">Lideranças Empáticas</a> </br>
<a href="https://sweetalert2.github.io/">Sweet Alert</a> </br>
<a href="https://storyset.com/">StorySet</a> </br>


