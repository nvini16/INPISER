# INPISER

> **Do Instagram à API até o usuário. Simples, rápido e automático.**

O **INPISER** é uma plataforma web em desenvolvimento para automação e integração com Instagram. A proposta é simplificar o caminho entre o Instagram, APIs e o usuário, centralizando operações em uma experiência única.

O nome **INPISER** é uma abstração de:

- **IN** — Instagram
- **PI** — API
- **SER** — User

## Estado atual

O projeto está em fase de **protótipo inicial**. A base frontend já foi criada, mas as integrações de backend e Instagram ainda não foram implementadas.

Atualmente, o repositório contém uma aplicação Next.js com uma primeira versão do dashboard e de seus componentes de navegação.

### O que já existe

- Estrutura inicial de aplicação Next.js.
- React e TypeScript configurados.
- Tailwind CSS para estilização.
- Rota `/dashboard` com uma primeira interface de gerenciamento.
- Componente reutilizável de Sidebar.
- Identidade visual inicial baseada em preto, branco e verde.
- Repositório Git configurado na branch `main`.

### O que ainda está em desenvolvimento

- Página pública `/`.
- Autenticação e gerenciamento de usuários.
- Banco de dados.
- Arquitetura multiusuário.
- Integração oficial com a API do Instagram/Meta.
- Gerenciamento de contas Instagram conectadas.
- Automações reais.
- Agendamento de publicações.
- Insights baseados em dados reais.
- Backend e APIs próprias do INPISER.

## Stack atual

- **Next.js 16**
- **React 19**
- **TypeScript 5**
- **Tailwind CSS 4**
- **ESLint 9**
- **Git / GitHub**

A stack poderá evoluir conforme os requisitos de backend, autenticação, persistência e integração com a plataforma Meta forem definidos.

## Arquitetura atual

```text
INPISER/
├── src/
│   └── app/
│       ├── componentes/
│       │   └── Sidebar.tsx
│       ├── dashboard/
│       │   └── page.tsx
│       ├── favicon.ico
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx
├── public/
├── package.json
├── package-lock.json
├── next.config.ts
├── tsconfig.json
└── README.md
```

A separação atual estabelece `/` como futura área pública e `/dashboard` como área da aplicação.

## Conceito

O INPISER busca reduzir a distância entre uma ação realizada no Instagram e o resultado entregue ao usuário.

```text
Instagram
    ↓
API
    ↓
INPISER
    ↓
Usuário
```

A visão do produto é transformar processos que normalmente exigiriam múltiplas etapas em fluxos simples, rápidos e automatizados.

## Direção arquitetural

Antes da implementação das integrações externas, o projeto será estruturado para suportar:

```text
Usuário
   ↓
Autenticação
   ↓
INPISER
   ├── Dashboard
   ├── Automações
   ├── Calendário
   └── Insights
          ↓
     Backend / API
          ↓
     Instagram / Meta
          ↓
       Dados
```

A arquitetura definitiva será definida antes da implementação das funcionalidades dependentes de usuários, persistência e integração externa.

## Objetivos

- Integrar o Instagram a serviços e APIs.
- Automatizar processos repetitivos.
- Centralizar operações em uma interface.
- Proporcionar uma experiência simples para o usuário.
- Preparar a aplicação para múltiplos usuários.
- Criar uma base técnica sustentável para futuras integrações.

## Roadmap inicial

- [x] Criar repositório do projeto.
- [x] Estruturar aplicação Next.js.
- [x] Criar primeiro dashboard.
- [x] Criar Sidebar reutilizável.
- [x] Definir identidade inicial do produto.
- [x] Documentar o estado inicial do projeto.
- [ ] Corrigir e consolidar navegação.
- [ ] Definir e implementar a landing page.
- [ ] Consolidar identidade visual.
- [ ] Definir arquitetura de autenticação.
- [ ] Definir banco de dados e modelo multiusuário.
- [ ] Implementar backend.
- [ ] Implementar integração com Instagram/Meta.
- [ ] Implementar automações.
- [ ] Implementar agendamento.
- [ ] Implementar insights reais.

## Status

**Protótipo inicial — em desenvolvimento**

O projeto ainda está em fase de construção. A arquitetura, funcionalidades e tecnologias podem mudar conforme os requisitos do produto forem definidos e validados.

## Autor

**Nathanael**

GitHub: [@nvini16](https://github.com/nvini16)

---

© 2026 INPISER
