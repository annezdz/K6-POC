# Introdução aos testes de performance com k6



# User API

## 🔖 Requisitos funcionais

### Cadastro

- [X] Deve retornar os id ao cadastrar um novo usuário
- [X] Deve retornar 201 ao cadastrar um novo usuário
- [X] Deve retornar 400 ao tentar cadastrar sem email e senha
- [X] Deve retornar 400 se o email for duplicado

| campos   | descrição                             | tipo     | obrigatório |
| :-----   | :------------------------------------ | :------- | :---------- |
| email    | usuário identificador único           | email    | sim         |
| password | senha do usuário                      | texto    | sim         |

## 🔖 Requisitos não funcionais

### Cadastro

- [ ] O cadastro com sucesso deve ocorrer em até 2 segundos
- [ ] Cadastros sem sucesso devem ocorrer em até 2 segundos
- [ ] Deve poder cadastrar até 100 usuários simultâneos
- [ ] A margem de erro no cadastro deve ser de pelo menos 1%

## 🚀 Tecnologias

- [Node.js] - plataforma de desenvolvimento
- [Express] - framework onde a API foi construída
- [MongoDB] - Banco de dados (Não relacional)
- [k6] - ferramenta para teste de carga, performance, stress etc...

## 👨🏻‍💻 Como executar o projeto

[Node.js](https://nodejs.org/) v16 ou superior para executar.

Para liberar o gerenciador de pacotes Yarn:

```
corepack enable
```

Execute os comandos abaixo para instalar das dependências do projeto:

```sh
cd curso-k6-basico/api
yarn install
yarn dev
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---


# <b>Tipos de Testes de Performance realizados pelo K6

![Alt text](img/image.png)



## <b>Smoke Testing


 É um tipo de teste que visa validar o mínimo funcionamento após uma modificação em determinada aplicação.

 ![Alt text](img/image-1.png)

 ### <b>Benefícios</b>

Utiliza-se uma carga mínima para validar que o core da aplicação continua funcionando após uma mudança na aplicação.

 ![Alt text](img/image-2.png)




 ![Alt text](img/image-3.png)


 ### <b>Teste de Performance (Load Testing)

 - Necessário alinhamento com o time sobre a quantidade de usuários que é esperado para esse sistema.

 ![Alt text](img/image-4.png)

![Alt text](img/image-6.png)

![Alt text](img/image-7.png)

### <b>Benefícios

![Alt text](img/image-8.png)
Na etapa final da construção de um MVP, antes de disponibilizar o produto em ambiente de produção, é importante   conduzir testes de performance na aplicação desenvolvida, com o intuito de avaliar aspectos como o número de usuários simultâneos e requisições simultâneas. 
Em colaboração com a equipe de produto, realizar um estudo para estimar a quantidade de usuários e requisições esperadas durante horários de pico e períodos normais.

## <b>Testes de Stress (Stress Testing)

![Alt text](img/image-9.png)
Precisamos saber desses pontos para realizar o teste de stress.
Ele serve para validar a arquitetura de uma aplicação, identificando gargalos em uma aplicação.

Exemplos: 
- Identificar gargalos em um microserviço específico, que não está escalando bem , que sofre problemas de auto recuperação.
- Testes realizados em períodos de black friday ou quando sabemos que o número de usuários terá demanda alta.

![Alt text](img/image-10.png)

![Alt text](img/image-11.png)

Valida escalamento horizontal (quantidade de máquinas) ou vertical (capacidade de uma máquina).

## <b>Spike Testing

A diferença entre Spike Testing e Stress Testing é que atingimos uma carga extrema em um curto período de tempo (não gradual).

#### Exemplos: anúncios

![Alt text](img/image-12.png)
![Alt text](img/image-13.png)

- 01: Excelente: onde o seu sistema não é degradado durante o aumento de tráfego, o tempo de resposta é semelhante durante o tráfego baixo e alto.
- 02: Bom : o tempo de resposta é mais lento, mas o sistema não apresenta erros e todos os pedidos são tratados e são atendidos.
- 03: Insatisfatório: O sistema produz erros durante o aumento de tráfego, mas volta ao normal depois que o tráfego diminui.
- 04: Ruim: onde o seu sistema trava e não se recupera depois que o tráfego diminui.

![Alt text](img/image-14.png)


## <b>Soak Testing (Teste de imersão)


É o teste que exige mais planejamento e recursos (gastos) por isso precisa ser avaliado se realmente é necessário realiza-lo e planejar.
Sua execução pode durar dias, semanas.

![Alt text](img/image-16.png)
![Alt text](img/image-17.png)

![Alt text](img/image-18.png)

![Alt text](img/image-19.png)
![Alt text](img/image-20.png)

## Importante: 
Usar 80% da capacidade de uma sistema para o Soak Testing (teste de imersão).
Utilizar se o site utiliza Cdn para execução esses testes.
Se o seu sistema utilizar alguma aplicação externa e essa aplicação ocasiona em custos para o seu time,
para sua empresa, você tem que ter em mente esses custos e entrar em de acordo, seja com a sua liderança.

### Exemplos de uso:

Realizar uma série de testes em um novo sistema de suporte à vida, que monitora pacientes. Devido à natureza crítica do sistema, a equipe precisa avaliar o sistema simulando um longo período de uso, a fim de identificar problemas graves, como: bugs ou vazamentos de memória, condições de corrida, esgotamento do armazenamento do banco de dados, entre outros pontos.


# <b>Ciclo de vida de testes no K6

![Alt text](img/image-21.png)

![Alt text](img/image-22.png)


# <b>Métricas do K6


![Alt text](img/image-23.png)
Contadores: realiza somas e incrementos
Medidores: rastrear os maiores valores, menores valores e mais recentes.
Taxas: frequencia com que um valor diferente de 0 ocorre
Tendência: média e percentis de intervalos de confiança.

## Métricas padrões do K6

![Alt text](img/image24.png)


## Métricas Personalizadas

### Contador:

![Alt text](/img/image-28.png)

### Métricas:
![Alt text](/img/image-25.png)
### Taxas:

![Alt text](/img/image-26.png)

### Trend:
![Alt text](/img/image-27.png)


## Thresholds - Limites 


Utilizados como critérios de reprovação ou aprovação

![Alt text](img/image-29.png)

![Alt text](img/image-30.png)

![Alt text](img/image-31.png)


# K6 Cloud

- 1: Vazão : quantidade de requisições por segundo que a sua máquina está conseguindo mandar para sua aplicação
- 2: Recursos computacionais: maiores na cloud
- 3: Zonas: Parte das requisições enviadas do Brasil, parte da requisições será mandadas de Estados Unidos, parte da requisições sendo mandada de Dublin, evitando cargas concentradas em apenas um servidor.

![Alt text](img/image-32.png)
![Alt text](img/image-33.png)
![Alt text](img/image-34.png)
![Alt text](img/image-35.png)

# Testes de Performance em Aplicações WEB

![Alt text](img/image-36.png)
![Alt text](img/image-37.png)
![Alt text](img/image-38.png)
![Alt text](img/image-39.png)