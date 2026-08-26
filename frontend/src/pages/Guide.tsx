import { useState } from "react";
import { Link } from "react-router";
import { 
  BookOpen, 
  Bot, 
  CandlestickChart, 
  Check, 
  Copy, 
  Sparkles, 
  TrendingUp, 
  TrendingDown, 
  ShieldAlert, 
  Clock, 
  ArrowRight,
  HelpCircle,
  Calculator,
  Target,
  Zap
} from "lucide-react";

interface PromptCardProps {
  title: string;
  category: string;
  badgeColor: string;
  prompt: string;
  description: string;
}

function PromptCard({ title, category, badgeColor, prompt, description }: PromptCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl border border-border/80 bg-card p-5 shadow-sm transition-all hover:border-primary/50 hover:shadow-md flex flex-col justify-between gap-4">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${badgeColor}`}>
            {category}
          </span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-md border border-border bg-muted/60 hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
            title="Copiar pergunta para a área de transferência"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-500" />
                <span className="text-emerald-500 font-bold">Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>Copiar Pergunta</span>
              </>
            )}
          </button>
        </div>
        <h4 className="text-base font-semibold text-foreground">{title}</h4>
        <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
      </div>

      <div className="rounded-lg bg-muted/70 p-3 text-xs font-mono text-foreground/90 border border-border/40 select-all">
        "{prompt}"
      </div>
    </div>
  );
}

export function Guide() {
  const [activeTab, setActiveTab] = useState<"stepByStep" | "b3Examples" | "dayTrade" | "prompts" | "metrics" | "concepts" | "faq">("b3Examples");

  return (
    <div className="min-h-full bg-background p-6 md:p-10 space-y-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="border-b border-border/60 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-primary font-medium text-sm mb-1">
            <BookOpen className="h-4 w-4" />
            <span>Manual do Usuário · Guia Prático</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            Como Usar o Vibe-Trading
          </h1>
          <p className="text-sm text-muted-foreground mt-1 max-w-2xl">
            Passo a passo simples e exemplos reais na Bolsa Brasileira (B3) para analisar ações, encontrar opções com alto potencial e operar no tiro curto (1 a 7 dias).
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <Link
            to="/agent"
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 shadow transition-all"
          >
            <Bot className="h-4 w-4" />
            <span>Ir para o Agente</span>
          </Link>
          <Link
            to="/options"
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border bg-card hover:bg-muted text-foreground font-medium text-sm transition-all"
          >
            <CandlestickChart className="h-4 w-4" />
            <span>Laboratório</span>
          </Link>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-border/60 pb-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab("b3Examples")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer shrink-0 ${
            activeTab === "b3Examples"
              ? "bg-primary/15 text-primary border border-primary/40 font-bold"
              : "text-muted-foreground hover:bg-muted hover:text-foreground"
          }`}
        >
          <Target className="h-4 w-4 text-emerald-500" />
          <span>Exemplos Reais B3 (PETR4, VALE3)</span>
        </button>
        <button
          onClick={() => setActiveTab("dayTrade")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer shrink-0 ${
            activeTab === "dayTrade"
              ? "bg-amber-500/15 text-amber-500 border border-amber-500/40 font-bold"
              : "text-muted-foreground hover:bg-muted hover:text-foreground"
          }`}
        >
          <Zap className="h-4 w-4 text-amber-500" />
          <span>Guia Exclusivo Day Trade</span>
        </button>
        <button
          onClick={() => setActiveTab("metrics")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer shrink-0 ${
            activeTab === "metrics"
              ? "bg-primary/15 text-primary border border-primary/40 font-bold"
              : "text-muted-foreground hover:bg-muted hover:text-foreground"
          }`}
        >
          <Calculator className="h-4 w-4 text-blue-500" />
          <span>Como Ler as Métricas de Opções</span>
        </button>
        <button
          onClick={() => setActiveTab("stepByStep")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer shrink-0 ${
            activeTab === "stepByStep"
              ? "bg-primary/15 text-primary border border-primary/40 font-bold"
              : "text-muted-foreground hover:bg-muted hover:text-foreground"
          }`}
        >
          <Sparkles className="h-4 w-4" />
          <span>Rotina em 3 Passos</span>
        </button>
        <button
          onClick={() => setActiveTab("prompts")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer shrink-0 ${
            activeTab === "prompts"
              ? "bg-primary/15 text-primary border border-primary/40 font-bold"
              : "text-muted-foreground hover:bg-muted hover:text-foreground"
          }`}
        >
          <Copy className="h-4 w-4" />
          <span>Banco de Perguntas</span>
        </button>
        <button
          onClick={() => setActiveTab("concepts")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer shrink-0 ${
            activeTab === "concepts"
              ? "bg-primary/15 text-primary border border-primary/40 font-bold"
              : "text-muted-foreground hover:bg-muted hover:text-foreground"
          }`}
        >
          <CandlestickChart className="h-4 w-4" />
          <span>Conceitos Rápidos</span>
        </button>
        <button
          onClick={() => setActiveTab("faq")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer shrink-0 ${
            activeTab === "faq"
              ? "bg-primary/15 text-primary border border-primary/40 font-bold"
              : "text-muted-foreground hover:bg-muted hover:text-foreground"
          }`}
        >
          <HelpCircle className="h-4 w-4" />
          <span>Perguntas Frequentes</span>
        </button>
      </div>

      {/* Tab: B3 Real Examples */}
      {activeTab === "b3Examples" && (
        <div className="space-y-6">
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-5 text-sm text-foreground">
            <h3 className="font-semibold text-emerald-500 flex items-center gap-2 mb-2 text-base">
              <Target className="h-5 w-5" />
              Cenários Práticos de Operação na B3 (Tiro Curto de 1 a 7 Dias)
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              Abaixo estão os 3 modelos de operação mais utilizados no mercado brasileiro. Você pode <strong>copiar a pergunta com 1 clique</strong> e colar diretamente no Agente:
            </p>
          </div>

          {/* Scenario 1: PETR4 Call */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-border/60 pb-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 text-emerald-500 font-bold text-xs">
                  CENÁRIO 1 · ALTA
                </span>
                <h3 className="text-lg font-bold text-foreground">Petrobras (PETR4) — Compra de CALL para Tiro de 7 Dias</h3>
              </div>
              <span className="text-xs text-muted-foreground">Alvo: 5 a 7 dias úteis</span>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Situação:</strong> PETR4 está cotada a R$ 42,00. Os indicadores mostram que o papel rompeu uma resistência e tem força para buscar R$ 44,00 nesta semana.
            </p>

            <div className="bg-muted/70 p-4 rounded-xl space-y-3 border border-border/50">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                  <Bot className="h-4 w-4 text-primary" />
                  Pergunta Pronta para o Agente:
                </span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText("Analise o papel PETR4 nos últimos 30 dias. A tendência para os próximos 5 a 7 dias úteis é de alta? Se sim, sugira uma opção de compra (CALL a seco ou Trava de Alta) com strike próximo a R$ 42,50, trazendo o Breakeven, a perda máxima travada, o lucro projetado e o Theta diário.");
                    alert("Pergunta copiada! Cole no chat do Agente.");
                  }}
                  className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md border border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-pointer"
                >
                  <Copy className="h-3.5 w-3.5" />
                  <span>Copiar esta Pergunta</span>
                </button>
              </div>
              <p className="text-xs font-mono text-foreground/90 bg-background/60 p-3 rounded-lg border border-border/40 select-all">
                "Analise o papel PETR4 nos últimos 30 dias. A tendência para os próximos 5 a 7 dias úteis é de alta? Se sim, sugira uma opção de compra (CALL a seco ou Trava de Alta) com strike próximo a R$ 42,50, trazendo o Breakeven, a perda máxima travada, o lucro projetado e o Theta diário."
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-muted/40 border border-border/40">
                <div className="text-muted-foreground">Preço da Ação (Spot)</div>
                <div className="font-bold text-foreground text-sm mt-0.5">R$ 42,00</div>
              </div>
              <div className="p-3 rounded-lg bg-muted/40 border border-border/40">
                <div className="text-muted-foreground">Custo da Opção (Prêmio)</div>
                <div className="font-bold text-emerald-500 text-sm mt-0.5">R$ 0,65 por opção</div>
                <div className="text-[10px] text-muted-foreground">Gasta R$ 65 para controlar R$ 4.200</div>
              </div>
              <div className="p-3 rounded-lg bg-muted/40 border border-border/40">
                <div className="text-muted-foreground">Ponto de Empate (Breakeven)</div>
                <div className="font-bold text-foreground text-sm mt-0.5">R$ 43,15</div>
                <div className="text-[10px] text-muted-foreground">Acima disso é 100% lucro</div>
              </div>
              <div className="p-3 rounded-lg bg-muted/40 border border-border/40">
                <div className="text-muted-foreground">Retorno se bater R$ 44,50</div>
                <div className="font-bold text-emerald-500 text-sm mt-0.5">+207% de Lucro</div>
                <div className="text-[10px] text-muted-foreground">Opção vai para R$ 2,00</div>
              </div>
            </div>
          </div>

          {/* Scenario 2: VALE3 Put */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-border/60 pb-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-rose-500/15 text-rose-500 font-bold text-xs">
                  CENÁRIO 2 · BAIXA / PROTEÇÃO
                </span>
                <h3 className="text-lg font-bold text-foreground">Vale (VALE3) — Compra de PUT para Lucrar na Queda</h3>
              </div>
              <span className="text-xs text-muted-foreground">Alvo: 3 a 5 dias úteis</span>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Situação:</strong> VALE3 está a R$ 60,00 e o minério de ferro caiu forte. O papel perdeu suporte e pode corrigir até R$ 57,00.
            </p>

            <div className="bg-muted/70 p-4 rounded-xl space-y-3 border border-border/50">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                  <Bot className="h-4 w-4 text-primary" />
                  Pergunta Pronta para o Agente:
                </span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText("A ação VALE3 mostra sinais de esgotamento e possível correção no curto prazo. Sugira uma opção de venda (PUT a seco ou Trava de Baixa) com strike próximo a R$ 59,00 para buscar rentabilidade na queda nos próximos 5 dias, limitando meu risco.");
                    alert("Pergunta copiada! Cole no chat do Agente.");
                  }}
                  className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md border border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-pointer"
                >
                  <Copy className="h-3.5 w-3.5" />
                  <span>Copiar esta Pergunta</span>
                </button>
              </div>
              <p className="text-xs font-mono text-foreground/90 bg-background/60 p-3 rounded-lg border border-border/40 select-all">
                "A ação VALE3 mostra sinais de esgotamento e possível correção no curto prazo. Sugira uma opção de venda (PUT a seco ou Trava de Baixa) com strike próximo a R$ 59,00 para buscar rentabilidade na queda nos próximos 5 dias, limitando meu risco."
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-muted/40 border border-border/40">
                <div className="text-muted-foreground">Preço da Ação (Spot)</div>
                <div className="font-bold text-foreground text-sm mt-0.5">R$ 60,00</div>
              </div>
              <div className="p-3 rounded-lg bg-muted/40 border border-border/40">
                <div className="text-muted-foreground">Custo da PUT (Prêmio)</div>
                <div className="font-bold text-rose-500 text-sm mt-0.5">R$ 0,70 por opção</div>
                <div className="text-[10px] text-muted-foreground">Perda máxima: R$ 70 a cada 100 opções</div>
              </div>
              <div className="p-3 rounded-lg bg-muted/40 border border-border/40">
                <div className="text-muted-foreground">Ponto de Empate (Breakeven)</div>
                <div className="font-bold text-foreground text-sm mt-0.5">R$ 58,30</div>
                <div className="text-[10px] text-muted-foreground">Abaixo disso é lucro puro na queda</div>
              </div>
              <div className="p-3 rounded-lg bg-muted/40 border border-border/40">
                <div className="text-muted-foreground">Retorno se cair para R$ 57,00</div>
                <div className="font-bold text-emerald-500 text-sm mt-0.5">+185% de Lucro</div>
                <div className="text-[10px] text-muted-foreground">Opção vai para R$ 2,00</div>
              </div>
            </div>
          </div>

          {/* Scenario 3: Trava de Alta Barata */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-border/60 pb-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-blue-500/15 text-blue-500 font-bold text-xs">
                  CENÁRIO 3 · TRAVA DE ALTA (CUSTO QUASE ZERO)
                </span>
                <h3 className="text-lg font-bold text-foreground">Trava de Alta com CALL (Gastar Centavos e Travar o Risco)</h3>
              </div>
              <span className="text-xs text-muted-foreground">Estratégia mais segura</span>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Como funciona:</strong> Você compra a Call do strike 42,50 e vende a Call do strike 44,00. O valor que você recebe na venda paga mais da metade do custo da compra!
            </p>

            <div className="bg-muted/70 p-4 rounded-xl space-y-3 border border-border/50">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                  <Bot className="h-4 w-4 text-primary" />
                  Pergunta Pronta para o Agente:
                </span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText("Quero montar uma Trava de Alta com CALL em PETR4 para 7 dias úteis gastando no máximo R$ 0,35 por ação. Quais strikes comprar e vender para ter a melhor relação risco x retorno com risco 100% delimitado?");
                    alert("Pergunta copiada! Cole no chat do Agente.");
                  }}
                  className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md border border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-pointer"
                >
                  <Copy className="h-3.5 w-3.5" />
                  <span>Copiar esta Pergunta</span>
                </button>
              </div>
              <p className="text-xs font-mono text-foreground/90 bg-background/60 p-3 rounded-lg border border-border/40 select-all">
                "Quero montar uma Trava de Alta com CALL em PETR4 para 7 dias úteis gastando no máximo R$ 0,35 por ação. Quais strikes comprar e vender para ter a melhor relação risco x retorno com risco 100% delimitado?"
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab: Day Trade Guide */}
      {activeTab === "dayTrade" && (
        <div className="space-y-6">
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-5 text-sm text-foreground">
            <h3 className="font-semibold text-amber-500 flex items-center gap-2 mb-2 text-base">
              <Zap className="h-5 w-5" />
              Guia Exclusivo: Como a Inteligência Artificial Ajuda no Day Trade
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              No Day Trade (operações abertas e encerradas no mesmo pregão), a IA atua como o seu <strong>Analista de Mesa e Estrategista de Risco</strong>. Ela faz o trabalho pesado de cálculo e estudo matinal para você focar apenas na execução.
            </p>
          </div>

          {/* Routine in 3 Times */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-border bg-card p-5 space-y-3">
              <div className="flex items-center gap-2 text-amber-500 font-bold text-sm">
                <Clock className="h-4 w-4" />
                <h4>1. Pré-Mercado (08:30 - 09:30)</h4>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Antes do pregão abrir, peça ao Agente os pontos de <strong>Pivot, Suportes e Resistências</strong> dos papéis mais líquidos (PETR4, VALE3, BOVA11) e o humor do mercado externo (Petróleo Brent e S&P 500 futuro).
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 space-y-3">
              <div className="flex items-center gap-2 text-blue-500 font-bold text-sm">
                <Target className="h-4 w-4" />
                <h4>2. Abertura (10:00 - 12:00)</h4>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Identifique rompimentos com volume. Para operar com opções no intraday, escolha contratos <strong>no dinheiro (ATM) com Delta alto (&gt; 0.50)</strong> para pegar valorizações rápidas de +30% a +60% em poucas horas.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 space-y-3">
              <div className="flex items-center gap-2 text-emerald-500 font-bold text-sm">
                <ShieldAlert className="h-4 w-4" />
                <h4>3. Saída e Zeragem (Até 16:30)</h4>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Encerre todas as posições antes do fechamento do pregão. Ao zerar no mesmo dia, você <strong>anula 100% do risco de gap noturno e o efeito do Theta (perda pelo tempo)</strong>!
              </p>
            </div>
          </div>

          {/* Prompts for Day Trade */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-foreground flex items-center gap-2">
              <Bot className="h-4 w-4 text-primary" />
              Perguntas Prontas para o seu Dia de Day Trade (Copie com 1 Clique):
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <PromptCard
                category="☀️ Pré-Mercado & Níveis"
                badgeColor="bg-amber-500/10 text-amber-500"
                title="Mapeamento de Suportes e Resistências do Dia"
                description="Entrega os preços exatos onde a ação tende a travar ou romper durante o pregão de hoje."
                prompt="Faça o estudo pré-mercado de PETR4 e VALE3 para o pregão de hoje. Quais são os pontos de Pivot, suportes e resistências para o intraday e qual o viés do mercado externo (S&P 500 futuro e commodities)?"
              />

              <PromptCard
                category="🚀 Day Trade de Alta (Call)"
                badgeColor="bg-emerald-500/10 text-emerald-500"
                title="Opção de Alta Rápida no Intraday"
                description="Encontra a opção com maior liquidez e Delta acelerado para surfar a alta da manhã."
                prompt="Para um Day Trade de alta em [PETR4 ou BOVA11] hoje, qual strike de CALL possui Delta acima de 0.50 e maior liquidez para buscar valorização rápida no intraday com saída no mesmo pregão?"
              />

              <PromptCard
                category="🔻 Day Trade de Baixa (Put)"
                badgeColor="bg-rose-500/10 text-rose-500"
                title="Opção de Queda para Correção Rápida"
                description="Para lucrar na queda quando a ação perder a mínima do dia com fluxo vendedor."
                prompt="A ação [VALE3] perdeu a mínima do dia com aumento de volume vendedor. Sugira uma opção de venda (PUT) no dinheiro com Delta próximo a -0.50 para um trade rápido de queda no pregão de hoje."
              />

              <PromptCard
                category="🎯 Stop & Alvo Risco/Retorno"
                badgeColor="bg-blue-500/10 text-blue-500"
                title="Definição Matemática de Gain e Loss"
                description="Calcula os pontos exatos de saída com relação risco x retorno de 1 para 3 antes de abrir a ordem."
                prompt="Quero entrar em um Day Trade na opção [CÓDIGO] comprando a R$ 0,40. Onde devo posicionar meu Stop Loss e meu Alvo de Saída (Take Profit) para garantir uma relação matemática de risco/retorno de pelo menos 1 para 3?"
              />
            </div>
          </div>

          {/* Golden Rules */}
          <div className="rounded-xl border border-border bg-card p-5 space-y-3">
            <h4 className="font-bold text-foreground text-sm flex items-center gap-2 text-primary">
              <ShieldAlert className="h-4 w-4" />
              Regras de Ouro para Day Trade com IA:
            </h4>
            <ul className="text-xs text-muted-foreground space-y-2 list-disc list-inside leading-relaxed">
              <li><strong>A IA é o seu Copiloto de Estratégia:</strong> Use-a para planejar os pontos de entrada, alvos e contratos. A execução do clique em milissegundos é feita no seu Home Broker / plataforma de trading.</li>
              <li><strong>Risco 100% Controlado:</strong> Nunca arrisque mais do que 1% do seu capital total em uma única operação de Day Trade.</li>
              <li><strong>Disciplina de Encerramento:</strong> Se atingiu o alvo (Gain) ou o limite de perda (Stop), encerre a posição sem hesitar.</li>
            </ul>
          </div>
        </div>
      )}
      {activeTab === "metrics" && (
        <div className="space-y-6">
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-5 text-sm text-foreground">
            <h3 className="font-semibold text-blue-500 flex items-center gap-2 mb-2 text-base">
              <Calculator className="h-5 w-5" />
              Guia Completo: Como Ler as Métricas de Opções
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              Entenda exatamente o que cada número significa para tomar decisões com segurança e rapidez:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-border bg-card p-5 space-y-3">
              <div className="flex items-center gap-2 text-emerald-500 font-bold">
                <Target className="h-4 w-4" />
                <h4>Ponto de Equilíbrio (Breakeven)</h4>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                É o preço que a ação precisa atingir para você empatar o dinheiro investido. A partir desse centavo, todo movimento vira <strong>lucro líquido</strong> no seu bolso.
              </p>
              <div className="bg-muted/60 p-3 rounded-lg text-xs font-mono">
                Breakeven = Strike da Opção + Prêmio Pago
                <br />
                <span className="text-muted-foreground text-[11px]">Exemplo: Strike R$ 42,50 + R$ 0,65 = <strong>R$ 43,15</strong></span>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 space-y-3">
              <div className="flex items-center gap-2 text-amber-500 font-bold">
                <Clock className="h-4 w-4" />
                <h4>Theta (Decaimento Diário do Tempo)</h4>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Mostra <strong>quantos centavos a opção perde por dia</strong> apenas pela passagem do tempo.
              </p>
              <div className="bg-muted/60 p-3 rounded-lg text-xs font-mono">
                Theta = -R$ 0,04 / dia
                <br />
                <span className="text-muted-foreground text-[11px]">Se a ação ficar parada por 3 dias, a opção perde R$ 0,12. Por isso operações de 7 dias exigem movimento rápido!</span>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 space-y-3">
              <div className="flex items-center gap-2 text-blue-500 font-bold">
                <TrendingUp className="h-4 w-4" />
                <h4>Delta (Velocímetro & Probabilidade)</h4>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Mede quanto a opção anda para cada R$ 1,00 que a ação se move.
              </p>
              <div className="bg-muted/60 p-3 rounded-lg text-xs font-mono">
                Delta = 0,50 (50%)
                <br />
                <span className="text-muted-foreground text-[11px]">Se a ação subir R$ 1,00, sua opção sobe R$ 0,50. Também indica cerca de 50% de chance de dar lucro no vencimento.</span>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 space-y-3">
              <div className="flex items-center gap-2 text-purple-500 font-bold">
                <ShieldAlert className="h-4 w-4" />
                <h4>Prejuízo Máximo (Risco Travado)</h4>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Ao comprar opções (a seco ou em travas), <strong>você NUNCA fica devendo para a corretora</strong>.
              </p>
              <div className="bg-muted/60 p-3 rounded-lg text-xs font-mono">
                Perda Máxima = Apenas o valor do prêmio pago
                <br />
                <span className="text-muted-foreground text-[11px]">Se você comprou 500 opções a R$ 0,50 (R$ 250), o máximo que pode perder se tudo der errado são os R$ 250.</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab: Step By Step */}
      {activeTab === "stepByStep" && (
        <div className="space-y-6">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 text-sm text-foreground">
            <h3 className="font-semibold text-primary flex items-center gap-2 mb-2 text-base">
              <Clock className="h-5 w-5" />
              Por que a ordem dos passos é fundamental?
            </h3>
            <p className="leading-relaxed">
              No mercado de opções, a opção é um <strong>derivativo</strong> da ação. Isso significa que o preço da opção se movimenta em função do que a ação faz. Portanto, <strong>sempre analisamos a ação primeiro</strong> para identificar a direção do papel e, em seguida, escolhemos a opção ideal para buscar a valorização em um prazo curto de até 7 dias.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-blue-500/10 text-blue-500 font-bold flex items-center justify-center text-lg">
                  1
                </div>
                <h3 className="text-lg font-bold text-foreground">Analisar a Ação</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Abra o <strong>Agente</strong> e pergunte se o papel está em tendência de alta, baixa ou lateral nos últimos 30 dias.
                </p>
                <div className="bg-muted/60 p-3 rounded-lg text-xs space-y-1">
                  <span className="font-semibold text-foreground">O que o Agente avalia:</span>
                  <ul className="list-disc list-inside text-muted-foreground space-y-0.5">
                    <li>Médias móveis e volume da B3</li>
                    <li>Suportes e resistências</li>
                    <li>Notícias e momento (RSI)</li>
                  </ul>
                </div>
              </div>
              <Link
                to="/agent"
                className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-primary hover:underline"
              >
                <span>Fazer análise no Agente</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Step 2 */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-amber-500/10 text-amber-500 font-bold flex items-center justify-center text-lg">
                  2
                </div>
                <h3 className="text-lg font-bold text-foreground">Escolher a Opção</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Definida a direção da ação, peça ao Agente para indicar opções com <strong>prêmio barato</strong> e <strong>prazo curto (até 7 dias)</strong>.
                </p>
                <div className="bg-muted/60 p-3 rounded-lg text-xs space-y-1">
                  <span className="font-semibold text-foreground">Decisão rápida:</span>
                  <ul className="list-disc list-inside text-muted-foreground space-y-0.5">
                    <li>Ação vai subir ➔ <strong>CALL</strong> (Opção de Compra)</li>
                    <li>Ação vai cair ➔ <strong>PUT</strong> (Opção de Venda)</li>
                    <li>Limitar risco ➔ <strong>Trava de Alta / Baixa</strong></li>
                  </ul>
                </div>
              </div>
              <Link
                to="/options"
                className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-primary hover:underline"
              >
                <span>Ver Laboratório de Opções</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Step 3 */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-emerald-500/10 text-emerald-500 font-bold flex items-center justify-center text-lg">
                  3
                </div>
                <h3 className="text-lg font-bold text-foreground">Simular Risco e Lucro</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Use o <strong>Laboratório de Opções</strong> para ver no gráfico exatamente quanto você ganha se a ação andar ou quanto perde se ela ficar parada.
                </p>
                <div className="bg-muted/60 p-3 rounded-lg text-xs space-y-1">
                  <span className="font-semibold text-foreground">O que conferir antes de operar:</span>
                  <ul className="list-disc list-inside text-muted-foreground space-y-0.5">
                    <li>Lucro Máximo projetado</li>
                    <li>Prejuízo Máximo limitado ao prêmio</li>
                    <li>Ponto de Equilíbrio (Breakeven)</li>
                  </ul>
                </div>
              </div>
              <Link
                to="/options"
                className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-primary hover:underline"
              >
                <span>Simular no Laboratório</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Tab: Prompts */}
      {activeTab === "prompts" && (
        <div className="space-y-6">
          <p className="text-sm text-muted-foreground">
            Clique no botão <strong>"Copiar Pergunta"</strong> e cole diretamente no chat do Agente para obter respostas precisas e estruturadas:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <PromptCard
              category="1. Análise de Ações da B3"
              badgeColor="bg-blue-500/10 text-blue-500"
              title="Tendência e Níveis de Preço (5 a 7 Dias)"
              description="Verifica se a ação está com força compradora ou vendedora e onde estão os pontos de suporte e resistência."
              prompt="Analise a ação [PETR4, VALE3, BBAS3 ou ITUB4] nos últimos 30 dias. A tendência atual é de alta ou de baixa? Quais são os suportes, resistências e o alvo projetado para os próximos 5 a 7 dias úteis?"
            />

            <PromptCard
              category="1. Análise de Ações da B3"
              badgeColor="bg-blue-500/10 text-blue-500"
              title="Indicadores de Momento e Volume"
              description="Checa se o papel está sobrecomprado (caro) ou sobrevendido (barato) para antecipar repiques."
              prompt="Avalie os indicadores técnicos (RSI, Médias Móveis de 9 e 21 períodos, e Volume) de [CÓDIGO]. O papel apresenta força para um movimento direcional rápido nesta semana?"
            />

            <PromptCard
              category="2. Alta com Opções (Call)"
              badgeColor="bg-emerald-500/10 text-emerald-500"
              title="Sugestão de Compra de Call para Alta Curta"
              description="Quando você acredita que a ação vai subir nos próximos 3 a 7 dias e quer alavancar com pouco capital."
              prompt="Considerando o cenário de alta para [CÓDIGO], sugira uma opção de compra (CALL a seco ou Trava de Alta) com vencimento próximo (7 a 15 dias) e strike perto do dinheiro (ATM). Indique o preço estimado do prêmio e a relação risco/retorno."
            />

            <PromptCard
              category="2. Baixa com Opções (Put)"
              badgeColor="bg-rose-500/10 text-rose-500"
              title="Sugestão de Compra de Put para Queda"
              description="Quando você acredita que a ação vai corrigir ou cair e quer lucrar na descida com risco controlado."
              prompt="A ação [CÓDIGO] mostra sinais de esgotamento de alta e possível correção. Sugira uma opção de venda (PUT a seco ou Trava de Baixa) com prêmio acessível para buscar rentabilidade na queda nos próximos 5 dias."
            />

            <PromptCard
              category="3. Proteção & Risco"
              badgeColor="bg-amber-500/10 text-amber-500"
              title="Trava com Risco Travado (Gasto Pequeno)"
              description="Monta uma estrutura onde você compra uma opção e vende outra mais longe para baratear o custo."
              prompt="Quero montar uma Trava de Alta com CALL em [CÓDIGO] gastando pouco dinheiro e limitando minha perda ao valor investido. Quais strikes comprar e vender para uma operação com alvo de 5 dias úteis?"
            />

            <PromptCard
              category="4. Gestão da Operação"
              badgeColor="bg-purple-500/10 text-purple-500"
              title="Acompanhamento e Ponto de Saída (Take Profit)"
              description="Ajuda a decidir o momento certo de embolsar o lucro ou estopar a operação."
              prompt="Comprei a opção [CÓDIGO DA OPÇÃO] a R$ 0,50 e hoje ela está cotada a R$ 0,85. Faltam 4 dias para o vencimento. Vale a pena realizar o lucro agora devido ao decaimento do tempo (Theta) ou ajustar o stop?"
            />
          </div>
        </div>
      )}

      {/* Tab: Concepts */}
      {activeTab === "concepts" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-border bg-card p-6 space-y-4">
              <div className="flex items-center gap-2 text-emerald-500 font-bold">
                <TrendingUp className="h-5 w-5" />
                <h3 className="text-lg">CALL (Opção de Compra)</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Você compra uma <strong>CALL</strong> quando sua análise indica que a ação vai <strong>SUBIR</strong>.
              </p>
              <ul className="text-xs text-muted-foreground space-y-2 list-disc list-inside">
                <li><strong>Custo Baixo:</strong> Você paga apenas centavos por opção (ex: R$ 0,65 por opção vs R$ 42,00 da ação).</li>
                <li><strong>Alavancagem:</strong> Se a ação subir 3%, a opção pode valorizar 50%, 100% ou mais.</li>
                <li><strong>Perda Máxima Limitada:</strong> Se a ação cair, você só perde o valor que pagou na opção, nada além disso.</li>
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 space-y-4">
              <div className="flex items-center gap-2 text-rose-500 font-bold">
                <TrendingDown className="h-5 w-5" />
                <h3 className="text-lg">PUT (Opção de Venda)</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Você compra uma <strong>PUT</strong> quando sua análise indica que a ação vai <strong>CAIR</strong>.
              </p>
              <ul className="text-xs text-muted-foreground space-y-2 list-disc list-inside">
                <li><strong>Lucro na Queda:</strong> A opção valoriza conforme o preço da ação cai.</li>
                <li><strong>Proteção (Seguro):</strong> Pode ser usada como um seguro de carteira para proteger suas ações contra quedas fortes.</li>
                <li><strong>Risco Controlado:</strong> Risco máximo é apenas o prêmio desembolsado.</li>
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 space-y-4">
              <div className="flex items-center gap-2 text-amber-500 font-bold">
                <Clock className="h-5 w-5" />
                <h3 className="text-lg">O Tempo (Theta) em Operações de até 7 Dias</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Toda opção tem uma data de validade (vencimento). O <strong>Theta</strong> mede quanto a opção perde de valor a cada dia útil apenas pela passagem do tempo.
              </p>
              <ul className="text-xs text-muted-foreground space-y-2 list-disc list-inside">
                <li>Como o seu alvo é de <strong>até 7 dias</strong>, o tempo corre rápido!</li>
                <li>Se em 2 ou 3 dias a ação não se mexer, avalie encerrar a posição para não sofrer o "derretimento" pelo tempo.</li>
                <li>Prefira opções com liquidez e strikes próximos do preço atual (ATM).</li>
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 space-y-4">
              <div className="flex items-center gap-2 text-blue-500 font-bold">
                <ShieldAlert className="h-5 w-5" />
                <h3 className="text-lg">Travas (Alta ou Baixa)</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Consiste em <strong>comprar uma opção e vender outra mais distante</strong> ao mesmo tempo.
              </p>
              <ul className="text-xs text-muted-foreground space-y-2 list-disc list-inside">
                <li><strong>Mais barato ainda:</strong> A venda da opção de cima ajuda a pagar o custo da opção de baixo.</li>
                <li><strong>Menor impacto do tempo:</strong> O tempo correndo ajuda a opção vendida.</li>
                <li><strong>Lucro e Prejuízo 100% delimitados:</strong> Você já sabe exatamente quanto pode ganhar e perder antes de abrir a ordem.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Tab: FAQ */}
      {activeTab === "faq" && (
        <div className="space-y-4">
          <div className="rounded-xl border border-border bg-card p-5 space-y-2">
            <h4 className="font-semibold text-foreground text-sm flex items-center gap-2">
              <HelpCircle className="h-4 w-4 text-primary" />
              Como navegar e criar uma nova conversa do zero?
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              No menu lateral esquerdo, clique no botão <strong>"+"</strong> ao lado de <strong>Sessões</strong> para abrir uma conversa limpa. Você pode criar quantas sessões quiser e renomeá-las (ex: "Análise PETR4 - 26/08") clicando no ícone do lápis.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-5 space-y-2">
            <h4 className="font-semibold text-foreground text-sm flex items-center gap-2">
              <HelpCircle className="h-4 w-4 text-primary" />
              Eu e outra pessoa podemos usar a plataforma ao mesmo tempo?
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Sim!</strong> Cada pesquisa ou conversa que você inicia roda em uma sessão própria. Duas pessoas acessando de computadores ou celulares diferentes não atrapalham o raciocínio nem o histórico uma da outra. As conversas salvas ficam listadas na barra lateral.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-5 space-y-2">
            <h4 className="font-semibold text-foreground text-sm flex items-center gap-2">
              <HelpCircle className="h-4 w-4 text-primary" />
              Onde simulo o gráfico de ganhos e perdas antes de colocar meu dinheiro?
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Vá no menu lateral e clique em <strong>Laboratório de Opções</strong> (ícone de gráfico de velas). Lá você escolhe a estratégia (Call, Put, Trava), digita o preço da ação e o prêmio da opção, e o sistema desenha a curva verde (lucro) e vermelha (prejuízo).
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-5 space-y-2">
            <h4 className="font-semibold text-foreground text-sm flex items-center gap-2">
              <HelpCircle className="h-4 w-4 text-primary" />
              Qual o percentual do meu capital devo colocar em uma opção?
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Como opções têm alto poder de alavancagem, o mais seguro é alocar apenas uma <strong>pequena fração do patrimônio (ex: 1% a 3%)</strong> por operação. Se der certo, a valorização percentual traz um retorno expressivo; se der errado, o capital principal permanece protegido.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
