# SeguraMais — Consultoria em Segurança do Trabalho

Site institucional completo para uma consultoria de Segurança e Saúde do Trabalho, adaptado a partir da estrutura original deste repositório. A nova versão apresenta os serviços, diferenciais técnicos, processo de atendimento, perguntas frequentes e um formulário de contato conectado a uma API FastAPI.

## Tecnologias

| Camada | Tecnologia |
| --- | --- |
| Frontend | Next.js 16, React 19, TypeScript, Tailwind CSS 4 e Lucide React |
| Backend | Python 3.11+, FastAPI, Pydantic e Uvicorn |
| Imagem | JPEG de referência fornecida pelo cliente, armazenada em `frontend/public/referencia-seguranca.jpeg` |

O frontend é responsável pela experiência institucional. O backend possui endpoints de saúde e recebimento/validação do formulário de contato. A integração com e-mail, CRM ou banco pode ser adicionada posteriormente no endpoint `POST /api/contact`.

## Estrutura do projeto

```text
RETIRO/
├── frontend/
│   ├── app/
│   │   ├── page.tsx       # Landing page completa e conteúdo editável
│   │   ├── layout.tsx     # Metadados e idioma
│   │   └── globals.css    # Design system, responsividade e animações
│   ├── public/
│   │   └── referencia-seguranca.jpeg
│   ├── package.json
│   └── .env.local.example
├── backend/
│   ├── app/main.py        # API FastAPI
│   ├── requirements.txt
│   └── .env.example
└── README.md
```

As rotas antigas de inscrição e administração foram mantidas no repositório original para preservar a base histórica, mas não são usadas pela nova página inicial. O fluxo ativo do produto é institucional e está concentrado em `frontend/app/page.tsx`.

## Pré-requisitos

- Node.js 20 ou superior e npm;
- Python 3.11 ou superior;
- Git, caso o projeto seja clonado diretamente do repositório.

## Instalação e execução

### Backend

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate       # Windows: .venv\\Scripts\\activate
pip install -r requirements.txt
cp .env.example .env
uvicorn app.main:app --reload --port 8000
```

A API ficará disponível em `http://localhost:8000`. A documentação Swagger fica em `http://localhost:8000/docs` e o health check em `http://localhost:8000/api/health`.

### Frontend

Em outro terminal:

```bash
cd frontend
cp .env.local.example .env.local
npm install
npm run dev
```

Acesse `http://localhost:3000`. Para uma versão de produção:

```bash
npm run build
npm run start
```

## Variáveis de ambiente

### `frontend/.env.local`

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

`NEXT_PUBLIC_API_URL` aponta o formulário para a API. Em produção, substitua pela URL pública do backend.

### `backend/.env`

```env
FRONTEND_URL=http://localhost:3000
ALLOWED_ORIGINS=http://localhost:3000
```

`FRONTEND_URL` e `ALLOWED_ORIGINS` controlam as origens aceitas pelo CORS. Para múltiplos domínios, separe as origens por vírgulas.

## O que cada página faz

| Página/endpoint | Função |
| --- | --- |
| `/` | Landing page da SeguraMais: hero, serviços, apresentação, processo, contato e FAQ. |
| `/api/health` | Verifica se a API está online. |
| `/api/contact` | Valida e recebe nome, empresa e mensagem enviados pelo formulário. |
| `/docs` | Documentação interativa automática da API FastAPI. |

## Onde personalizar o conteúdo

- **Nome, slogan, serviços, contatos, responsáveis técnicas e textos:** `frontend/app/page.tsx`.
- **Cores, tipografia, espaçamento, responsividade e componentes visuais:** `frontend/app/globals.css`, nas variáveis do bloco `:root` e nas classes da página.
- **Título, descrição, Open Graph e idioma:** `frontend/app/layout.tsx`.
- **Imagem principal/referência:** substitua `frontend/public/referencia-seguranca.jpeg` mantendo o mesmo nome, ou altere o `src` nos dois pontos em `page.tsx`.
- **Endpoint de contato:** `backend/app/main.py`. O local indicado para integrar e-mail, WhatsApp, CRM ou banco é a função `contact`.
- **Permissões de origem da API:** `backend/.env`.

## Observações de produção

O endpoint de contato desta versão valida e registra a mensagem no processo do backend, sem persistência. Antes de publicar em produção, recomenda-se conectar a função `contact` a um serviço de e-mail ou banco de dados e configurar variáveis de ambiente específicas do provedor. Nunca inclua segredos diretamente nos arquivos versionados.

## Licença

Este projeto é uma adaptação do repositório fornecido pelo cliente. Consulte o histórico Git para as informações de autoria e licença da base original.
