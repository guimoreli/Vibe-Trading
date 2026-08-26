# Vibe-Trading · Integração B3, Opções, DeepSeek & Guia do Usuário

Documentação técnica e funcional de todas as melhorias e customizações implementadas no Vibe-Trading para suporte completo ao mercado brasileiro (B3), operações com derivativos (opções), integração com DeepSeek LLM, design responsivo para celular e manual de usuário interativo.

---

## 1. 🇧🇷 Suporte Nativo ao Mercado Brasileiro (B3)

### A. Mapeamento Automático de Tickers da B3
* **Arquivo Modificado:** `agent/backtest/loaders/yfinance_loader.py`
* **Comportamento:** O carregador de cotações agora identifica automaticamente códigos de ações, FIIs e ETFs brasileiros (ex: `PETR4`, `VALE3`, `ITUB4`, `BBAS3`, `BOVA11`, `MXRF11`, etc.) e faz o vínculo direto com o Yahoo Finance usando a extensão `.SA` (ex: `PETR4.SA`).
* **Formatos Suportados:**
  - `XXXX3`, `XXXX4`, `XXXX5`, `XXXX6` (Ações ON e PN)
  - `XXXX11` (ETFs e Fundos Imobiliários)
  - `XXXX34` (BDRs de empresas globais negociadas no Brasil)
  - `.SA`, `.BVMF`, `.BZ` (Sufixos explícitos preservados)

---

## 2. 📊 Laboratório e Métricas de Opções (Black-Scholes & Gregas)

O motor quantitativo calcula métricas de opções em tempo real para operações curtas (1 a 7 dias):

* **Breakeven (Ponto de Empate):** Preço mínimo da ação no vencimento para cobrir o custo da opção.
* **Lucro e Prejuízo Máximos:** Cálculo exato da perda máxima delimitada ao valor do prêmio pago.
* **Relação Risco x Retorno:** Proporções assimétricas calculadas (ex: 1:3 ou 1:4).
* **As Gregas:**
  - **Delta ($\Delta$):** Velocidade de valorização e probabilidade teórica de exercício.
  - **Theta ($\Theta$):** Decaimento temporal por dia útil corrido.
  - **Gamma ($\Gamma$):** Aceleração do Delta.
  - **Vega ($\nu$):** Sensibilidade à Volatilidade Implícita (IV).
* **Laboratório Visual:** Desenho gráfico de Payoff no vencimento para Call, Put e Travas.

---

## 3. 📘 Manual Interativo do Usuário (`/guia`, `/manual`, `/guide`)

* **Arquivo:** `frontend/src/pages/Guide.tsx`
* **Rotas Disponíveis:** `/guide`, `/guia`, `/manual`
* **Seções e Abas:**
  1. **🎯 Exemplos Reais B3 (PETR4, VALE3):** 3 cenários prontos de alta, baixa e trava com cartões e botões para copiar a pergunta para a área de transferência em 1 clique.
  2. **⚡ Guia Exclusivo Day Trade:**
     - Rotina do Day Trader em 3 horários (08:30 Pré-Mercado, 10:00 Abertura com Delta > 0.50, até 16:30 Saída sem risco overnight).
     - 4 Prompts prontos para Day Trade.
     - Regras de ouro de gerenciamento de risco.
  3. **🧮 Como Ler as Métricas de Opções:** Explicação didática de Breakeven, Theta diário, Delta e Perda Máxima.
  4. **✨ Rotina em 3 Passos:** Analisar Ação ➔ Escolher Opção ➔ Simular no Laboratório.
  5. **📋 Banco de Perguntas:** Prompts categorizados com cópia rápida.
  6. **💡 Conceitos Rápidos & FAQ:** Glossário e perguntas frequentes.

---

## 4. 📱 Otimização e Responsividade para Dispositivos Móveis

* **Menu Lateral (Drawer Retrátil):**
  - No celular (`< md`), a barra lateral fica recolhida por padrão e abre em formato de *drawer* deslizante ao tocar no botão de menu (☰).
  - A tela principal do chat agora aproveita **100% da largura útil do celular**.
* **Tipografia e Legibilidade:**
  - Fonte sem serifa (`font-sans`) com tamanho de **16px** e entrelinha relaxada (`1.75`), pensada para leitura confortável de pessoas de idade.
* **Tabelas Responsivas:**
  - Envelopamento em containers com rolagem horizontal e estilo de cartões destacados.

---

## 5. 🤖 Integração com DeepSeek LLM

* **Provedor:** DeepSeek Official API (`https://api.deepseek.com/v1`)
* **Modelo Utilizado:** `deepseek-chat` (DeepSeek-V3 / alta velocidade e custo reduzido)
* **Prompt Caching Automático:** Desconto de 75% a 90% nos tokens de entrada devido ao reconhecimento de contexto do DeepSeek.
* **Idioma Padrão:** Português do Brasil (`pt-BR`) configurado como padrão e fallback em toda a aplicação.

---

## 6. 🔒 Arquitetura de Segurança e Gestão de Segredos

* **Visibilidade do Repositório do Código:** O repositório `guimoreli/Vibe-Trading` é público no GitHub (código-fonte limpo sem credenciais).
* **Isolamento de Credenciais:**
  - **NENHUMA chave de API ou senha está no código Git.**
  - A chave de API do DeepSeek é injetada em tempo de execução via **Kubernetes Secret** (`vibe-trading-secret`) no cluster privado K3s.
* **Acesso Remoto Seguro (`VIBE_TRADING_ALLOW_REMOTE_ACCESS`):**
  - O backend foi ajustado para reconhecer cabeçalhos de proxy reverso (`X-Forwarded-Host`) e liberar o uso sem popups de autenticação intrusivos na rede do homelab/Cloudflare.

---

## 7. 🚀 Pipeline de CI/CD e Publicação

* **GitHub Actions:** Multi-arch Docker build (`linux/amd64`, `linux/arm64`) publicado no GitHub Container Registry (`ghcr.io/guimoreli/vibe-trading:latest`).
* **Deploy Automatizado:** Rollout no cluster K3s na Oracle Cloud com Ingress via Cloudflare Tunnel (`trade.gmservicebr.com.br`).
