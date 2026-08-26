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
  HelpCircle
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
            className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-md border border-border bg-muted/60 hover:bg-primary/10 hover:text-primary transition-colors"
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
  const [activeTab, setActiveTab] = useState<"stepByStep" | "prompts" | "concepts" | "faq">("stepByStep");

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
            Passo a passo simples para analisar ações, encontrar opções com alto potencial e operar no curto prazo (até 7 dias) com apoio de Inteligência Artificial.
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
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-border/60 pb-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab("stepByStep")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === "stepByStep"
              ? "bg-primary/10 text-primary border border-primary/30"
              : "text-muted-foreground hover:bg-muted hover:text-foreground"
          }`}
        >
          <Sparkles className="h-4 w-4" />
          <span>Rotina em 3 Passos</span>
        </button>
        <button
          onClick={() => setActiveTab("prompts")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === "prompts"
              ? "bg-primary/10 text-primary border border-primary/30"
              : "text-muted-foreground hover:bg-muted hover:text-foreground"
          }`}
        >
          <Copy className="h-4 w-4" />
          <span>Modelos de Perguntas (Copiar e Colar)</span>
        </button>
        <button
          onClick={() => setActiveTab("concepts")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === "concepts"
              ? "bg-primary/10 text-primary border border-primary/30"
              : "text-muted-foreground hover:bg-muted hover:text-foreground"
          }`}
        >
          <CandlestickChart className="h-4 w-4" />
          <span>Conceitos Essenciais</span>
        </button>
        <button
          onClick={() => setActiveTab("faq")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === "faq"
              ? "bg-primary/10 text-primary border border-primary/30"
              : "text-muted-foreground hover:bg-muted hover:text-foreground"
          }`}
        >
          <HelpCircle className="h-4 w-4" />
          <span>Perguntas Frequentes</span>
        </button>
      </div>

      {/* Tab Content */}
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
                    <li>Médias móveis e volume</li>
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

      {/* Tab Content: Prompts */}
      {activeTab === "prompts" && (
        <div className="space-y-6">
          <p className="text-sm text-muted-foreground">
            Clique no botão <strong>"Copiar Pergunta"</strong> e cole diretamente no chat do Agente para obter respostas precisas e estruturadas:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <PromptCard
              category="1. Análise da Ação"
              badgeColor="bg-blue-500/10 text-blue-500"
              title="Tendência e Níveis de Preço (5 a 7 Dias)"
              description="Verifica se a ação está com força compradora ou vendedora e onde estão os pontos de suporte e resistência."
              prompt="Analise a ação [CÓDIGO, ex: PETR4, VALE3, BBAS3] nos últimos 30 dias. A tendência atual é de alta ou de baixa? Quais são os suportes, resistências e o alvo projetado para os próximos 5 a 7 dias úteis?"
            />

            <PromptCard
              category="1. Análise da Ação"
              badgeColor="bg-blue-500/10 text-blue-500"
              title="Indicadores de Momento e Volume"
              description="Checa se o papel está sobrecomprado (caro) ou sobrevendido (barato) para antecipar repiques."
              prompt="Avalie os indicadores técnicos (RSI, Médias Móveis de 9 e 21 períodos, e Volume) de [CÓDIGO]. O papel apresenta força para um movimento direcional rápido nesta semana?"
            />

            <PromptCard
              category="2. Alta (Call)"
              badgeColor="bg-emerald-500/10 text-emerald-500"
              title="Sugestão de Compra de Call para Alta Curta"
              description="Quando você acredita que a ação vai subir nos próximos 3 a 7 dias e quer alavancar com pouco capital."
              prompt="Considerando o cenário de alta para [CÓDIGO], sugira uma opção de compra (CALL a seco ou Trava de Alta) com vencimento próximo (7 a 15 dias) e strike perto do dinheiro (ATM). Indique o preço estimado do prêmio e a relação risco/retorno."
            />

            <PromptCard
              category="2. Baixa (Put)"
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

      {/* Tab Content: Concepts */}
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
                <li><strong>Custo Baixo:</strong> Você paga apenas centavos por opção (ex: R$ 0,30 por opção vs R$ 30,00 da ação).</li>
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

      {/* Tab Content: FAQ */}
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
