---
title: "Make or Buy"
description: "Decisão de construir ou comprar plataformas em fintechs envolve custos ocultos e a importância de identificar falhas rapidamente"
pubDate: 2026-01-19
tags:
  - management
  - technology
  - decision-making
  - make-or-buy
draft: false
---

A discussão sobre *make or buy* costuma começar em produtos visíveis: core bancário, KYC, antifraude, crédito. Mas ela quase sempre termina, ou deveria terminar, em um território menos óbvio e muito mais perigoso: plataformas internas.

Ferramentas de onboarding técnico, motores de orquestração, sistemas de conciliação, camadas de autorização, feature flags financeiras, motores de regras, plataformas de dados regulatórios. Nada disso aparece no pitch para investidores. Mas tudo isso define se a fintech escala com clareza ou tropeça na própria complexidade.

A decisão de construir ou comprar plataformas internas não é apenas uma escolha operacional. É uma decisão arquitetural de longo prazo que define como o time pensa, evolui e responde ao risco.

---

## Comprar software não elimina arquitetura — apenas a desloca

Um erro comum é acreditar que comprar uma solução reduz a necessidade de decisões arquiteturais profundas. Na prática, acontece o oposto: a arquitetura apenas muda de lugar.

Quando você compra um sistema externo, a fronteira arquitetural se desloca para as integrações, contratos e adaptações necessárias para que aquele software “caiba” no seu ecossistema. E em fintechs, esse ecossistema é tudo menos simples.

Plataformas internas passam a existir para compensar lacunas do software comprado. Cria-se uma camada de abstração aqui, um serviço de normalização ali, um job de reconciliação acolá. Aos poucos, o time está mantendo uma plataforma inteira, só que agora ela nasceu reativa, não intencional.

Esse tipo de plataforma é caro, frágil e difícil de explicar. Não porque foi mal implementada, mas porque nunca foi assumida como responsabilidade explícita.

Arquitetura ignorada cobra juros compostos.

---

## Plataformas internas são decisões políticas disfarçadas de técnicas

Toda plataforma interna define como os times trabalham, o que é fácil, o que é proibitivo e o que simplesmente “não vale a pena mexer”. Isso tem implicações diretas em risco, compliance e velocidade.

Quando você compra uma plataforma pronta, seja para orquestração, dados ou regras de negócio, você está aceitando uma política operacional embutida. Você passa a operar dentro de limites que não foram desenhados para o seu contexto específico, mas para uma média de mercado.

Construir uma plataforma interna, por outro lado, é assumir que o time está apto a tomar essas decisões conscientemente. Não é sobre controle por controle. É sobre alinhar política, arquitetura e responsabilidade no mesmo lugar.

O ponto-chave aqui não é “temos engenheiros bons o suficiente?”. A pergunta correta é: **queremos que essas decisões façam parte do nosso aprendizado organizacional?**

---

## O custo invisível das plataformas compradas

Plataformas compradas raramente falham de forma catastrófica. Elas falham de forma sutil, cotidiana, acumulativa.

Falham quando:

* Uma regra de negócio precisa ser expressa fora do modelo previsto.
    
* Uma auditoria exige rastreabilidade que o sistema não priorizou.
    
* Um fluxo excepcional vira regra, mas continua tratado como exceção.
    
* Um time precisa inovar, mas encontra barreiras “porque a ferramenta não permite”.
    

Essas falhas não aparecem como incidentes. Elas aparecem como fricção. Como reuniões extras. Como decisões adiadas. Como código defensivo em torno de algo que deveria ser simples.

Esse custo é particularmente perigoso porque ele desacopla o entendimento do domínio da execução técnica. O time começa a conhecer mais os limites da ferramenta do que o próprio negócio. (Mesmo que isso não seja um problema exclusivo de quando se contrata um fornecedor, isso pode acontecer com sistemas internos também)

---

## Quando construir plataformas internas é um investimento estratégico

Construir plataformas internas só faz sentido quando existe clareza sobre o problema que está sendo resolvido e maturidade para sustentar essa escolha.

Plataformas internas são justificáveis quando:

* O domínio é altamente específico e regulatório.
    
* O negócio muda mais rápido do que fornecedores conseguem acompanhar.
    
* A empresa precisa experimentar modelos sem esperar roadmap externo.
    
* O custo de adaptação contínua supera o custo de manutenção própria.
    

Nesses casos, a plataforma não é apenas uma ferramenta. Ela se torna uma linguagem comum entre engenharia, produto e risco. O código passa a documentar decisões que antes ficariam espalhadas em políticas, planilhas e exceções manuais.

Aqui, construir é uma forma de reduzir risco cognitivo. O sistema reflete o que a empresa entende sobre seu próprio funcionamento.

---

## Comprar plataformas também exige arquitetura — talvez mais

Decidir comprar uma plataforma interna não é uma decisão de menor responsabilidade. É uma decisão que exige ainda mais rigor arquitetural.

Comprar bem implica:

* Delimitar claramente o que é responsabilidade do fornecedor e o que nunca será.
    
* Projetar integrações como contratos estáveis, não como atalhos.
    
* Aceitar que haverá zonas de atrito e planejar para elas desde o início.
    
* Evitar que a plataforma comprada vire o “lugar onde tudo acontece”.
    

Plataformas compradas costumam funcionar melhor quando são tratadas como infraestrutura, não como cérebro do sistema. Elas fazem bem o que fazem, e nada além disso.

Quando uma plataforma externa começa a concentrar decisões de negócio, o risco deixa de ser técnico e passa a ser organizacional.

---

## A pergunta final: quem entende o sistema quando algo quebra?

Toda discussão de *build vs buy* em plataformas internas deveria terminar com uma pergunta simples, quase desconfortável:

**quem realmente entende o sistema quando algo foge do esperado?**

Falhas não são teóricas. Elas envolvem dinheiro, clientes, reguladores e reputação. Quando algo quebra, o tempo de resposta importa menos do que a clareza de entendimento.

Se a resposta exige abrir chamados, interpretar contratos e esperar terceiros, o risco está fora do seu controle.  
Se a resposta está no próprio time, o risco pode ser alto, mas é gerenciável.

> Arquitetura é, no fim, a arte de decidir onde o entendimento vive.

---

## Conclusão: plataformas internas não são neutras

Plataformas internas são escolhas estruturais, não detalhes de implementação. Elas moldam o comportamento do time, a velocidade de adaptação e a forma como o risco é absorvido.

Construir significa assumir responsabilidade intelectual e operacional.  
Comprar significa aceitar limites e conviver com fricções previsíveis.

A decisão madura não é evitar o custo, mas escolher qual custo você está disposto a pagar repetidamente ao longo dos anos.

Porque no mundo financeiro, o problema raramente é *se* algo vai falhar.  
O problema é **se você vai entender a falha rápido o suficiente para corrigi-la**.
