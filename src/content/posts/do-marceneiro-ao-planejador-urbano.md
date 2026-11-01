---
title: "Do marceneiro ao planejador urbano: o que muda quando código fica barato"
description: "Boa parte das nossas boas práticas nasceu quando escrever código era caro. Com IA, o valor do engenheiro migra para decidir, delimitar e verificar"
pubDate: 2026-11-01
tags:
  - inteligencia-artificial
  - engenharia-de-software
  - arquitetura-de-software
  - spec-driven-development
  - harness-engineering
  - tomada-de-decisao
draft: true
---

Existe uma cena que ficou comum em times que já usam IA no dia a dia. O agente entrega uma implementação inteira em poucos minutos e, logo depois, alguém passa a tarde ajustando a estrutura de pastas, extraindo uma abstração para não repetir quatro linhas e renomeando classes até tudo ficar "do jeito certo".

Nada disso é errado em si. O estranho é a distribuição do esforço. A parte que ficou barata recebe o mesmo cuidado artesanal de antes, enquanto a parte que continua cara (decidir o que construir, onde ficam os limites e como saber se aquilo está certo) fica com a sobra de atenção.

[PEDRO: se tiver, um caso seu em que você ou o time se pegou polindo código gerado enquanto a decisão importante ficou para depois]

Na minha leitura, isso não é preguiça nem falta de técnica. É modelo mental. Muitas das práticas que a gente defende como "boa engenharia" nasceram num tempo em que cada linha custava tempo humano para escrever, ler e mudar. O custo mudou. O jeito de pensar sobre ele, ainda não.

Este texto é sobre isso: por que modelos mentais antigos atrapalham até gente brilhante, quais das nossas regras eram respostas à escassez, por que a ideia de uma "fábrica de software com agentes" é a metáfora errada da vez e onde fica o trabalho do engenheiro quando gerar código custa quase nada.

## Até gente brilhante tropeça no próprio modelo mental

Em *Genius Makers*, Cade Metz conta a história das redes neurais desde os primeiros experimentos, e um dos personagens dessa história é Marvin Minsky, um dos fundadores da inteligência artificial como campo de pesquisa. Em 1969, Minsky e Seymour Papert publicaram *Perceptrons*, um livro que demonstrava matematicamente os limites das redes neurais de uma camada.

A demonstração estava correta. O efeito, nem tanto. O livro é frequentemente apontado como um dos fatores que esfriaram o interesse e o financiamento em redes neurais por mais de uma década, no período que ficou conhecido como inverno da IA.

O que me interessa nessa história não é quem estava certo. É o mecanismo. A aposta do Minsky era numa IA simbólica: inteligência como regras e representações construídas explicitamente. Uma máquina que aprendesse padrões a partir de exemplos, chegando a respostas que ninguém tinha programado, não cabia bem nesse modelo. E o que não cabe no modelo tende a parecer limitação da tecnologia, quando muitas vezes é limitação de quem está olhando.

Se isso aconteceu com uma das mentes mais influentes da computação, vale desconfiar de nós mesmos. O erro mais comum diante de uma tecnologia nova não é subestimá-la.  
É medi-la com a régua da anterior.

## Metáforas são rodinhas de bicicleta, não leis da física

Toda tecnologia nova chega emprestando o vocabulário da anterior. James Watt usou o cavalo como unidade para vender máquinas a vapor, e até hoje medimos motor de carro em cavalos. Os sistemas operacionais trouxeram para a tela uma mesa de escritório, com pastas, arquivos e lixeira. O ícone de salvar ainda é um disquete, e muita gente que programa hoje nunca segurou um.

Essas metáforas cumprem bem o papel de ponte para o novo. O problema começa quando a ponte vira parede: a metáfora deixa de ser lembrada como metáfora e passa a ser tratada como a forma natural das coisas.

O disquete é inofensivo. Ninguém deixa de salvar um arquivo por causa dele. Mas a engenharia de software tem os seus disquetes, e alguns não são nada inofensivos: estruturas, rituais e regras desenhados para restrições de décadas atrás, defendidos hoje como se fossem leis da física.

Rodinha de bicicleta é ótima. O problema é esquecer que ela sai.

## Boa parte das nossas boas práticas nasceu da escassez

Pensa nos livros que formaram uma geração de engenheiros. *Refactoring*, do Martin Fowler, é um catálogo de transformações cuidadosas para melhorar a estrutura do código sem mudar seu comportamento. *The Pragmatic Programmer* trata o desenvolvedor como um artesão que evolui de aprendiz a mestre, e isso estava literalmente no subtítulo da primeira edição. *The Phoenix Project* ensina operação de TI por meio de uma fábula, comparando o fluxo de trabalho de TI ao de uma fábrica.

São livros excelentes. E foram escritos para um mundo em que cada linha de código custava tempo humano para escrever, revisar e mudar. Nesse mundo, faz todo sentido gastar horas melhorando uma estrutura, porque a próxima pessoa vai pagar caro para entendê-la. Faz sentido criar uma abstração cedo, porque mudar cinco cópias de um trecho à mão é lento e arriscado.

Com IA, parte dessa conta mudou. Quando um agente reescreve algumas centenas de linhas em segundos, passar três horas polindo uma hierarquia de classes, ou criando uma abstração prematura para não repetir meia dúzia de linhas, deixa de ser demonstração de maestria. Vira um investimento cujo retorno ficou muito menor. Em muitos casos, é nostalgia com custo.

Mas aqui cabe um cuidado, porque a conclusão apressada seria "então duplicação não importa mais". Não é isso. O DRY, na formulação original do próprio *The Pragmatic Programmer*, nunca foi sobre linhas. É sobre conhecimento: cada pedaço de conhecimento deve ter uma representação única, inequívoca e autoritativa dentro do sistema. A leitura dogmática transformou isso em "nunca repita código", e é essa leitura que envelheceu.

Linha repetida ficou barata. Regra de negócio repetida continua cara.

Na verdade, pode ter ficado mais cara. Um agente consegue copiar a mesma regra de cálculo de juros para dez lugares no tempo que alguém leva para abrir o PR. O código sai rápido. A divergência entre as dez cópias aparece meses depois, em produção, quando uma delas muda e as outras não.

> A IA reduziu o custo de produzir código. Não reduziu o custo de estar errado em produção.

## Do marceneiro ao planejador urbano

A metáfora que melhor descreve essa mudança, para mim, é a troca do marceneiro pelo planejador urbano.

O marceneiro olha para a peça. Escolhe a madeira, acompanha o veio, lixa o acabamento. O valor dele está no detalhe de cada objeto. O planejador urbano trabalha em outra escala. Ele não inspeciona o banco da praça. Ele decide por onde passa o tráfego, quanta carga a rede de saneamento aguenta, o que pode ser construído em cada zona e como a cidade cresce sem colapsar.

Durante muito tempo, a identidade do engenheiro de software foi a do marceneiro. O código era a peça, e a qualidade estava no acabamento. Na engenharia com IA, o trabalho se parece cada vez mais com o do planejador: expressar intenção, definir restrições, desenhar limites entre domínios, estabelecer contratos, dimensionar capacidade e orientar o crescimento do sistema.

Isso não é menos engenharia. É engenharia em outro nível e, na prática, mais exigente. O planejador urbano não decide menos que o marceneiro. Decide outras coisas, e as decisões dele duram mais.

É a mesma ideia que defendi em [Carreira sênior não é sobre saber mais — é sobre decidir melhor](/blog/carreira-senior-nao-e-sobre-saber-mais-e-sobre-decidir-melhor/) e em [Escalar sistema é fácil. Escalar decisão é o problema.](/blog/escalar-sistema-e-facil-escalar-decisao-e-o-problema/): quando produzir fica barato, o gargalo vai para a qualidade e a coerência das decisões.

Essa engenharia de planejador já tem ferramentas com nome. **Spec-Driven Development** é a forma de expressar intenção: contratos, critérios de aceite, regras de negócio e limites de comportamento ficam explícitos antes da implementação, para que o agente execute em vez de interpretar. **Harness Engineering** é a forma de garantir os limites: testes automatizados, validação de tipos, linters, regras arquiteturais e guardrails de segurança que verificam continuamente se o que foi gerado continua dentro do zoneamento. Escrevi sobre os dois com mais detalhe em [Spec-Driven Development e Harness Engineering](/blog/spec-driven-development-e-harness-engineering/).

Um é o plano diretor. O outro é a fiscalização de obra.

## Pasta é organização para humano

Um exemplo bem concreto de metáfora que sobreviveu à própria utilidade é a forma como organizamos código.

Diretórios encadeados em vários níveis, uma pasta `utils` dentro de `shared` dentro de `common`, a separação rígida por tipo técnico (`controllers`, `services`, `repositories`, `helpers`). Tudo isso é organização espacial. Ela responde à pergunta "onde está?" e foi pensada para alguém que navega uma árvore e precisa lembrar o caminho. É a mesa de escritório com gavetas, aplicada ao repositório.

Ferramentas de IA chegam ao código de outro jeito. Busca semântica, embeddings, RAG e janelas de contexto cada vez maiores fazem a ferramenta encontrar o código pelo significado: o que aquela rotina faz, do que ela depende, a que parte do domínio pertence. Para o agente, um caminho como `src/shared/common/utils/helpers/format.ts` diz pouco. O nome, as dependências e o contrato dizem muito.

Isso não quer dizer que estrutura de pastas deixou de importar. Pessoas continuam lendo e revisando código, e um repositório organizado por domínio ajuda humanos e agentes ao mesmo tempo. O ponto é o critério. Organizar por significado (domínio, capacidade, limite de contexto) envelhece melhor do que organizar por tipo técnico. E gastar energia sênior ensinando um agente a respeitar uma taxonomia de pastas de quinze níveis é gastar energia no lugar errado.

A pergunta útil deixou de ser "em qual pasta isso fica?". Passou a ser "em qual limite isso vive e qual contrato ele expõe?".

## A armadilha do autocompletar experiente

Existe um discurso confortável para quem tem muitos anos de carreira: IA seria uma ferramenta para seniores, porque só quem tem repertório consegue perceber quando o modelo está errado.

Ele tem uma parte verdadeira. Verificar exige repertório, e quem nunca viu um deadlock em produção dificilmente vai desconfiar de um código que parece correto. Mas o discurso esconde uma armadilha.

O engenheiro experiente tende a usar IA para acelerar o que já faz. Pede a mesma arquitetura em camadas, as mesmas abstrações e os mesmos padrões que funcionaram há dez ou quinze anos, só que agora gerados em segundos. A IA vira um autocompletar de luxo para hábitos antigos. O fluxo de trabalho não é repensado. Ele só fica mais rápido.

Quem está chegando agora não carrega esse peso. Não tem apego ao DRY literal, à refatoração artesanal ou à organização por pastas. Por isso, tem mais liberdade para montar fluxos de trabalho que já nascem pensando em especificação, contexto e verificação.

Não é sobre idade. É sobre o quanto você precisa desaprender. Quem chega sem dogmas ainda precisa construir repertório para verificar. Quem tem repertório precisa aceitar que parte dele era resposta a restrições que não existem mais. A combinação que mais vale hoje é justamente essa: repertório para desconfiar do resultado e disposição para questionar o próprio ritual.

> Se senioridade virar apego a padrões, a IA só acelera o apego.

## A fábrica de software é a metáfora errada da vez

Se o marceneiro é a metáfora velha, a tentação nova é a fábrica. A ideia de uma "fábrica de software com agentes" aparece em muito discurso recente: o produto descreve o que quer num ticket, o ticket entra numa esteira de agentes e, do outro lado, sai aplicação pronta.

A metáfora da fábrica nem é tão nova. O próprio *The Phoenix Project* usava uma fábrica para explicar fluxo de trabalho em TI, e ali ela funciona bem, porque deploy e operação são trabalho repetível. O problema é estender a mesma lógica para a parte do trabalho que é descoberta.

O Rob West escreveu um texto direto sobre isso, [The Agentic Software Factory is the Wrong Metaphor](https://robwest.info/articles/the-agentic-software-factory-is-the-wrong-metaphor/), e o argumento central me parece certeiro: engenharia de software é engenharia de design. A parte "fábrica" do software, a que transforma o design em artefato executável, foi automatizada há décadas. Chama-se compilador, build, pipeline. O que sobra é justamente o que uma linha de montagem não sabe fazer.

Quatro pontos sustentam essa crítica:

- **O design não está resolvido.** Uma linha de montagem pressupõe que a planta está pronta e estável. Em software, descobrir o que construir e como o sistema deve se comportar é o próprio trabalho. Ticket não é planta baixa.
- **Construir muda a especificação.** A implementação ensina coisas sobre o problema que ninguém sabia no começo. O fluxo não é entrada e saída. É ida e volta.
- **Variação tem valor.** Fábrica existe para eliminar variação. Engenharia precisa dela para testar hipóteses, comparar abordagens e descobrir uma solução melhor.
- **A esteira força formalização prematura.** Para alimentar a fábrica, é preciso formalizar requisitos antes de entender o problema. A ambiguidade não some: o agente preenche as lacunas com palpites confiantes e entrega o produto errado numa velocidade inédita.

Esse último ponto conversa com algo que já escrevi aqui algumas vezes: plausível não é a mesma coisa que correto, e velocidade sem escopo claro é só uma forma mais elegante de retrabalho.

Vale também uma ressalva para não confundir as coisas. Spec-Driven Development não é alimentar uma esteira. Uma boa especificação não é formulário de entrada. É o lugar onde a conversa de design acontece de forma explícita, e ela muda quando a implementação ensina algo novo. Spec que não pode mudar é exatamente a formalização prematura que a fábrica exige.

Tentar transformar engenharia de software em linha de montagem é aplicar um modelo mental industrial a uma mudança que é, antes de tudo, cognitiva. É o Minsky de novo: a tecnologia nova medida com a régua da anterior.

## O que continua sendo nosso

Se gerar código deixou de ser o diferencial, o que sobra? Para mim, três coisas que não ficaram mais baratas com IA.

### Gosto

Gosto é a capacidade de olhar para uma solução que funciona e dizer "funciona, mas não é isso". É julgar simplicidade e adequação ao contexto, ao negócio e a quem vai usar. Força bruta gera muitas soluções aceitáveis. Gosto é o que impede o sistema de virar uma pilha de soluções aceitáveis que, juntas, ninguém consegue entender.

### Verificação

Verificar não é ver o teste passar. É confirmar que o comportamento produzido corresponde à intenção: à spec, ao critério de aceite, à decisão arquitetural. Parte disso dá para automatizar no harness. Mas alguém precisa decidir o que o harness verifica, e alguém precisa perceber quando ele está verificando a coisa errada.

### Casos de borda

É antecipar o que acontece sob carga, com concorrência, com falha parcial, com retry, com timeout, com o dado que "nunca deveria chegar assim". Em fintech, caso de borda não é detalhe. É o retry que vira pagamento duplicado, é a conciliação que fecha num dia e não fecha no outro. O modelo gera o caminho feliz muito bem. O caminho infeliz ainda depende de quem já viu sistema quebrar.

Nenhum desses três é sobre velocidade de digitação. Todos são sobre julgamento. É por isso que a IA, bem usada, não substitui a engenharia. Ela vira alavanca de execução, submetida a um design humano.

## Conclusão

O código ficou barato. Nossos modelos mentais ainda não perceberam.

Muitas das regras que a gente defende como boa engenharia continuam valendo, mas por motivos diferentes dos originais. Outras eram rodinhas de bicicleta que esquecemos de tirar.

O trabalho do engenheiro está migrando do acabamento da peça para o desenho da cidade: intenção clara, limites explícitos, contratos, verificação e atenção ao que acontece quando as coisas dão errado.

Se você quiser testar isso no seu time, escolha uma regra do guia de estilo ou do code review e faça duas perguntas. Que custo essa regra foi criada para evitar? Esse custo ainda existe?

Algumas regras vão sobreviver, porque protegem decisão e conhecimento.  
Outras são só o ícone do disquete.
