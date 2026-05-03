import { useState } from "react"

const productStrategy = {
  rule: "Sempre abra com o produto de MAIOR GIRO",
  tiers: [
    {
      label: "Cliente ativo (comprou nos últimos 30 dias)",
      icon: "🟢",
      lead: "Produto de maior giro — sem hesitar",
      why: "Já confia em você. Quer resultado rápido. O giro faz o dinheiro girar sem ele precisar pedir prazo ou desconto.",
      avoid:
        "Não abra com o mais caro logo de cara — espere ele pedir reposição antes de subir o ticket.",
    },
    {
      label: "Cliente inativo (mais de 30 dias sem comprar)",
      icon: "🟡",
      lead: "Ticket médio-baixo com giro comprovado",
      why: "Barreira de entrada baixa. Ele compra, vende rápido, lembra de você. Na segunda compra você sobe o ticket.",
      avoid:
        "Não abra com o produto mais caro — vai virar objeção de preço e ele vai pro Guilherme.",
    },
    {
      label: "Cliente grande / comprador frequente",
      icon: "🔵",
      lead: "Combo: giro alto + 1 item de ticket maior como sugestão",
      why: "Ele já tem confiança. Apresenta o produto âncora como novidade, não como pressão. Deixa ele sentir que está na frente dos outros.",
      avoid:
        "Nunca fale em preço primeiro. Fale em margem e velocidade de giro.",
    },
  ],
}

const days = [
  {
    day: "SEG",
    date: "05/05",
    theme: "REATIVAÇÃO",
    color: "#F59E0B",
    icon: "🔥",
    subtitle: "Retomar contato com clientes da sua base que esfriaram",
    goal: "Acionar 8–10 clientes que já estão no seu WhatsApp mas não compram há 15+ dias",
    context:
      "Você já tem o número, já tem histórico. Não é prospecção fria — é retomada de relação. Tom de parceiro, não de vendedor.",
    periods: [
      {
        time: "08h–10h",
        label: "MANHÃ",
        objective: "Abrir sem pressão — só retomar contato",
        clients: "5–6 clientes",
        action:
          "Não fale de produto ainda. Manda uma mensagem leve que mostra que você lembrou dele especificamente — não parece mensagem em massa.",
        messages: [
          {
            trigger: "💬 Abertura por nome — sem produto ainda",
            text: "[Nome], bom dia! Tô passando pra ver como tá o movimento aí. Chegou um lote novo aqui que combina muito com o seu perfil — quando tiver um segundo me fala 👊",
          },
          {
            trigger: "💬 Abertura com gancho de contexto",
            text: "Bom dia, [nome]! Lembrei de você agora — chegou aqui um produto que tá saindo muito bem em loja do seu segmento. Vale dois minutos da sua atenção?",
          },
        ],
      },
      {
        time: "10h–13h",
        label: "MEIO-DIA",
        objective: "Apresentar o produto de maior giro",
        clients: "4–5 clientes",
        action:
          "Quem respondeu recebe foto + argumento de giro. Foco em quanto tempo o produto fica na prateleira — não no preço.",
        messages: [
          {
            trigger: "📦 Produto de maior giro — argumento central",
            text: "[Nome], esse aqui [foto] tá saindo em menos de [X dias] nos clientes que pegaram. Pronta entrega. Quer que eu separo um lote pra você ver os detalhes?",
          },
          {
            trigger: "📦 Tom mais casual — cliente de longa data",
            text: "Meu amigo, esse produto aqui não fica na prateleira. Tô mandando porque sei que você gosta de produto que gira — não de produto que acumula. Dá uma olhada 👇",
          },
        ],
      },
      {
        time: "15h–18h",
        label: "TARDE",
        objective: "Puxar para decisão hoje",
        clients: "3–4 clientes",
        action:
          "Follow-up em quem demonstrou interesse. Uma pergunta direta de fechamento — sem rodeio.",
        messages: [
          {
            trigger: "⚡ Fechamento direto",
            text: "[Nome], consigo separar até hoje. Me confirma a quantidade e já encaminho pra entrega 👍",
          },
          {
            trigger: "⚡ Fechamento com alternativa — facilita a decisão",
            text: "Meu amigo, você prefere fechar o lote completo ou começa com metade pra testar? Me fala que já resolvo aqui.",
          },
        ],
      },
    ],
    objections: [
      {
        q: '"Vou ver com o Guilherme"',
        a: "[Nome], esse aqui tô liberando direto — condição normal de venda. Só preciso da sua confirmação pra garantir o lote antes que saia 👍",
      },
      {
        q: '"Agora não"',
        a: "Sem problema, [nome]! Só quero saber: é questão de momento ou o produto não te animou? Assim eu sei se vale reservar um lote pequeno pra você.",
      },
    ],
  },
  {
    day: "TER",
    date: "06/05",
    theme: "OPORTUNIDADE",
    color: "#10B981",
    icon: "🎯",
    subtitle: "Apresentar novidade para clientes ativos — antes que eles peçam",
    goal: "Contatar 10–12 clientes ativos com oferta de produto de alto giro",
    context:
      "Esses clientes já compram. A mensagem é de parceiro que está trazendo informação de valor — não de vendedor empurrando produto.",
    periods: [
      {
        time: "08h–10h",
        label: "MANHÃ",
        objective: "Abordagem de parceiro — não de vendedor",
        clients: "6–8 clientes",
        action:
          "Manda mensagem que posiciona você como alguém trazendo uma oportunidade pra ele — não alguém tentando vender.",
        messages: [
          {
            trigger: "🤝 Tom de parceiro",
            text: "[Nome], bom dia! Separei uma informação que acho que vale pra você antes de qualquer um. Chegou um produto aqui que tá com giro acima do que eu esperava. Te mando os detalhes?",
          },
          {
            trigger: "🤝 Exclusividade percebida — cliente frequente",
            text: "Minha amiga, tô avisando você primeiro porque sei que você gosta de estar na frente. Lote de pronta entrega, saiu ontem, ainda tem unidade. Quer ver?",
          },
        ],
      },
      {
        time: "10h–13h",
        label: "MEIO-DIA",
        objective: "Envio de material + argumento de margem",
        clients: "5–6 clientes",
        action:
          "Para quem disse 'manda' — foto boa + quanto o cliente pode ganhar com o giro. Concreto, sem enrolação.",
        messages: [
          {
            trigger: "📸 Material com argumento de margem",
            text: "[Foto] [Nome], esse aqui: preço de compra [X], venda média nos lojistas tá em [Y]. Gira em menos de [Z dias]. Pronta entrega hoje. Quanto você precisa?",
          },
          {
            trigger: "📸 Versão mais casual",
            text: "Meu amigo, olha esse [foto]. Produto que se vende sozinho — quem pegou da semana passada já pediu reposição. Faz o pedido pra você?",
          },
        ],
      },
      {
        time: "15h–18h",
        label: "TARDE",
        objective: "Fechar os mais quentes do dia",
        clients: "3–4 clientes",
        action:
          "Quem recebeu material e não respondeu — um follow-up curto e direto. Sem pressão, mas sem deixar esfriar.",
        messages: [
          {
            trigger: "🔒 Follow-up sem pressão",
            text: "[Nome], e aí — curtiu o produto? Posso montar o pedido?",
          },
          {
            trigger: "🔒 Follow-up com urgência suave",
            text: "Meu amigo, tô com o lote reservado até hoje à tarde. Me fala se é pra fechar ou deixo pra próxima entrada 👍",
          },
        ],
      },
    ],
    objections: [
      {
        q: '"Tá caro"',
        a: "[Nome], entendo a sua visão. Mas esse produto aqui você vende em [X dias] — o giro paga a diferença e ainda sobra margem. Quer que eu faça a conta contigo?",
      },
      {
        q: '"Vou pensar"',
        a: "Claro, meu amigo! Fica à vontade. Mas esse lote vai até hoje — posso reservar uma quantidade menor enquanto você decide?",
      },
    ],
  },
  {
    day: "QUA",
    date: "07/05",
    theme: "URGÊNCIA",
    color: "#EF4444",
    icon: "⏳",
    subtitle: "Criar movimento com escassez real — sem forçar",
    goal: "Fechar 5–8 pedidos com base em disponibilidade de estoque e entrega rápida",
    context:
      "Urgência não é grito — é informação. Você está avisando o cliente de algo que é real. Tom de amigo que não quer que ele perca.",
    periods: [
      {
        time: "08h–10h",
        label: "MANHÃ",
        objective: "Aviso de estoque — tom de informação, não de pressão",
        clients: "6–8 clientes",
        action:
          "Manda o alerta de estoque como se fosse uma informação que você está compartilhando — não uma oferta.",
        messages: [
          {
            trigger: "🚨 Aviso de estoque — amigo que avisa",
            text: "[Nome], te aviso antes de acabar: esse lote [produto] tá no final. Sei que você gosta desse tipo de produto. Quer garantir antes que saia?",
          },
          {
            trigger: "🚨 Versão mais direta",
            text: "Minha amiga, saiu boa parte do lote de ontem pra cá. Ainda consigo separar pra você mas preciso de confirmação hoje. Fechamos?",
          },
        ],
      },
      {
        time: "10h–13h",
        label: "MEIO-DIA",
        objective: "Prova social — outros já compraram",
        clients: "4–5 clientes",
        action:
          "Mostrar que outros clientes já tomaram a decisão. Sem inventar — se não tiver, usa o movimento do produto no mercado.",
        messages: [
          {
            trigger: "📊 Prova social — movimento de mercado",
            text: "[Nome], esse produto aqui [foto] — já saiu bastante hoje de manhã. Lojistas da sua região pegaram. Ainda tenho unidade separada. Me confirma?",
          },
          {
            trigger: "📊 Prova social — reposição de cliente",
            text: "Meu amigo, cliente meu que pegou semana passada já pediu reposição. Isso diz muito sobre o giro. Quer aproveitar enquanto tem?",
          },
        ],
      },
      {
        time: "15h–18h",
        label: "TARDE",
        objective: "Colher pedidos do dia — fechamento limpo",
        clients: "4–5 clientes",
        action:
          "Quem ficou em aberto recebe a pergunta de fechamento direto. Sem texto longo — uma linha.",
        messages: [
          {
            trigger: "✅ Fechamento de um clique",
            text: "[Nome], confirma pra mim: quantidade e endereço de entrega. Já encaminho aqui 👊",
          },
          {
            trigger: "✅ Alternativa — facilitar a decisão",
            text: "Meu amigo, me fala só a quantidade. O resto eu resolvo daqui 👍",
          },
        ],
      },
    ],
    objections: [
      {
        q: '"Não tenho verba agora"',
        a: "[Nome], e se a gente monta um pedido menor? Você gira rápido, repõe e já volta com mais. Começa com o que couber agora — sem pressão de volume.",
      },
      {
        q: '"Vou ver com o Guilherme"',
        a: "[Nome], esse lote aqui vai na condição padrão — não precisa de nada especial. Só a sua confirmação mesmo 👍",
      },
    ],
  },
  {
    day: "QUI",
    date: "08/05",
    theme: "RECUPERAÇÃO",
    color: "#8B5CF6",
    icon: "🔄",
    subtitle: "Transformar quem ficou em aberto durante a semana",
    goal: "Recuperar 6–8 decisões pendentes — sem parecer cobrança",
    context:
      "Quem disse 'vou pensar' não disse não. O seguimento certo na hora certa fecha mais do que qualquer desconto.",
    periods: [
      {
        time: "08h–10h",
        label: "MANHÃ",
        objective: "Follow-up com gancho novo — não repete a mesma mensagem",
        clients: "5–6 clientes",
        action:
          "Volta na conversa mas traz algo diferente — uma variação, uma nova informação, um dado de giro. Nunca repete 'e aí, decidiu?'",
        messages: [
          {
            trigger: "🔁 Retomada com novidade",
            text: "[Nome], bom dia! Apareceu aqui uma variação do produto que te mostrei — acho que encaixa ainda melhor no seu mix. Quer ver antes de decidir?",
          },
          {
            trigger: "🔁 Retomada com dado novo",
            text: "Minha amiga, atualização: esse lote que te mostrei tá quase no fim. Ainda consigo garantir o seu se confirmar hoje. Me fala 👊",
          },
        ],
      },
      {
        time: "10h–13h",
        label: "MEIO-DIA",
        objective: "Tratar objeção de prazo com argumento de giro",
        clients: "4–5 clientes",
        action:
          "Clientes que pedem prazo maior — mostrar que o produto se paga antes do vencimento.",
        messages: [
          {
            trigger: "💡 Argumento de giro vs prazo",
            text: "[Nome], entendo que prazo ajuda. Mas esse produto você vende em [X dias] — o dinheiro entra antes de qualquer vencimento. Quer tentar com uma quantidade menor pra ver na prática?",
          },
          {
            trigger: "💡 Proposta de entrada menor",
            text: "Meu amigo, e se a gente começa com uma quantidade enxuta? Você testa, vende, e a gente cresce o pedido no próximo. Sem pressão.",
          },
        ],
      },
      {
        time: "15h–18h",
        label: "TARDE",
        objective: "Última chance antes da sexta",
        clients: "3–4 clientes",
        action:
          "Avisa que amanhã é o último dia de entrega da semana — como informação prática, não ameaça.",
        messages: [
          {
            trigger: "🏁 Aviso de última entrega da semana",
            text: "[Nome], entrega essa semana só até amanhã. Se quiser que chegue na segunda, precisa confirmar hoje ou amanhã cedo. Fica à vontade 👍",
          },
          {
            trigger: "🏁 Pedido direto de posição",
            text: "Minha amiga, preciso de uma posição até hoje à noite. Pode ser 'sim' ou 'deixa pra próxima' — sem problema de qualquer jeito. Só me avisa 🙏",
          },
        ],
      },
    ],
    objections: [
      {
        q: '"Vou pensar mais um pouco"',
        a: "[Nome], sem pressa. Só me avisa até que horas você decide — assim eu sei se vale manter o lote reservado pra você.",
      },
      {
        q: '"Agora não"',
        a: "Tranquilo, meu amigo. Posso entrar em contato semana que vem quando você tiver mais aberto? Me fala o melhor dia.",
      },
    ],
  },
  {
    day: "SEX",
    date: "09/05",
    theme: "FECHAMENTO",
    color: "#06B6D4",
    icon: "🏆",
    subtitle: "Fechar a semana e plantar a próxima",
    goal: "Colher pedidos em aberto + garantir pipeline sólido para segunda-feira",
    context:
      "Sexta é dia de colher, não de semear. Quem ainda não decidiu recebe a última informação. Depois disso: você prepara a semana que vem.",
    periods: [
      {
        time: "08h–10h",
        label: "MANHÃ",
        objective: "Fechamento de semana — entrega ainda hoje",
        clients: "5–6 clientes",
        action:
          "Abre o dia com quem tem pedido em aberto. A entrega de hoje é o argumento — prático e real.",
        messages: [
          {
            trigger: "🚀 Entrega ainda hoje",
            text: "[Nome], bom dia! Última saída da semana é hoje. Se confirmar agora, já encaminho pra entrega. Bora fechar?",
          },
          {
            trigger: "🚀 Urgência real de logística",
            text: "Meu amigo, hoje é o último dia de entrega antes do fim de semana. Posso garantir o seu se me confirmar até as [hora]. Me fala 👊",
          },
        ],
      },
      {
        time: "10h–13h",
        label: "MEIO-DIA",
        objective: "Reposição para quem já comprou",
        clients: "4–5 clientes",
        action:
          "Clientes que compraram essa semana ou semana passada — verificar se precisam repor. Reposição é o pedido mais fácil de fechar.",
        messages: [
          {
            trigger: "🔃 Reposição inteligente",
            text: "[Nome], e aí — como tá saindo o lote? Já posso repor pra sua prateleira não ficar vazia na semana que vem?",
          },
          {
            trigger: "🔃 Reposição com upsell sutil",
            text: "Minha amiga, se o lote tá girando bem, semana que vem entra uma variação que combina. Quer já incluir na reposição?",
          },
        ],
      },
      {
        time: "13h–17h",
        label: "TARDE",
        objective: "Semear contatos para segunda-feira",
        clients: "5–7 clientes",
        action:
          "Não tenta fechar agora — só abre um gancho pra segunda. Quem recebe isso na sexta à tarde já está esperando na segunda.",
        messages: [
          {
            trigger: "📅 Semente para segunda",
            text: "[Nome], na segunda tenho uma novidade que acho que combina muito com o seu perfil. Posso te mandar de manhã cedo?",
          },
          {
            trigger: "📅 Versão mais casual",
            text: "Meu amigo, chega coisa nova aqui na segunda. Aviso você na hora — fica de olho no WhatsApp 😉",
          },
        ],
      },
    ],
    objections: [
      {
        q: '"Deixa pra semana que vem"',
        a: "Sem problema, [nome]! Segunda-feira eu te chamo. Qual o melhor horário pra você — manhã ou depois do almoço?",
      },
      {
        q: '"Vou ver com o Guilherme"',
        a: "[Nome], hoje é último dia de entrega da semana. Se quiser que chegue na segunda, precisa de ok hoje. Consigo resolver direto se precisar 👍",
      },
    ],
  },
]

export default function PlanoVendas() {
  const [activeDay, setActiveDay] = useState(0)
  const [activeTab, setActiveTab] = useState("plano")
  const [copiedMsg, setCopiedMsg] = useState(null)
  const day = days[activeDay]

  const copyMsg = (text, id) => {
    navigator.clipboard.writeText(text)
    setCopiedMsg(id)
    setTimeout(() => setCopiedMsg(null), 1800)
  }

  return (
    <div
      style={{
        fontFamily: "'DM Sans','Segoe UI',sans-serif",
        background: "#090910",
        minHeight: "100vh",
        color: "#E2E2EE",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&family=Space+Mono:wght@400;700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        ::-webkit-scrollbar{width:4px;height:4px;}
        ::-webkit-scrollbar-track{background:#111;}
        ::-webkit-scrollbar-thumb{background:#2A2A40;border-radius:2px;}
        .dtab{transition:all .2s ease;cursor:pointer;}
        .dtab:hover{transform:translateY(-1px);}
        .cpbtn{transition:all .15s ease;cursor:pointer;border:none;}
        .cpbtn:hover{opacity:.85;}
        .msgcard{transition:border-color .2s;}
        .msgcard:hover{border-color:rgba(255,255,255,.15)!important;}
        .pblock{animation:sIn .25s ease;}
        @keyframes sIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
        .objrow:hover{background:rgba(255,255,255,.03)!important;}
        .ntab{transition:all .2s ease;cursor:pointer;border:none;}
      `}</style>

      {/* Header */}
      <div
        style={{
          background: "#0D0D1A",
          borderBottom: "1px solid #1C1C2E",
          padding: "18px 24px",
        }}
      >
        <div
          style={{
            maxWidth: 940,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Space Mono',monospace",
                fontSize: 10,
                color: "#2E2E4A",
                letterSpacing: "0.18em",
                marginBottom: 4,
              }}
            >
              ATACADO PRONTA ENTREGA · MAIO 2026
            </div>
            <div
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: "#fff",
                letterSpacing: "-0.03em",
              }}
            >
              Plano de Vendas — Semana 1
            </div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {[
              ["plano", "📅 Plano da Semana"],
              ["produto", "📦 Estratégia de Produto"],
            ].map(([tab, label]) => (
              <button
                key={tab}
                className="ntab"
                onClick={() => setActiveTab(tab)}
                style={{
                  background: activeTab === tab ? "#E2E2EE" : "#16162A",
                  color: activeTab === tab ? "#090910" : "#555",
                  border: "1px solid",
                  borderColor: activeTab === tab ? "#E2E2EE" : "#252538",
                  borderRadius: 8,
                  padding: "8px 16px",
                  fontSize: 12,
                  fontWeight: 600,
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* PRODUTO TAB */}
      {activeTab === "produto" && (
        <div style={{ maxWidth: 940, margin: "0 auto", padding: "28px 24px" }}>
          <div
            style={{
              background: "#0D0D1A",
              border: "1px solid #1C1C2E",
              borderRadius: 14,
              overflow: "hidden",
              marginBottom: 20,
            }}
          >
            <div
              style={{
                padding: "20px 24px",
                background: "#111120",
                borderBottom: "1px solid #1C1C2E",
              }}
            >
              <div
                style={{
                  fontFamily: "'Space Mono',monospace",
                  fontSize: 10,
                  color: "#F59E0B",
                  letterSpacing: "0.15em",
                  marginBottom: 6,
                }}
              >
                REGRA CENTRAL
              </div>
              <div
                style={{
                  fontSize: 19,
                  fontWeight: 700,
                  color: "#fff",
                  letterSpacing: "-0.02em",
                }}
              >
                🏆 {productStrategy.rule}
              </div>
              <div
                style={{
                  marginTop: 10,
                  fontSize: 14,
                  color: "#777",
                  lineHeight: 1.7,
                }}
              >
                Não é o mais barato que abre porta — é o que o cliente vende
                rápido e volta pra comprar mais. O produto de maior giro cria{" "}
                <span style={{ color: "#E2E2EE", fontWeight: 600 }}>
                  ciclo de confiança sem precisar de desconto ou prazo especial.
                </span>
              </div>
            </div>
            <div
              style={{
                padding: "20px 24px",
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              {productStrategy.tiers.map((tier, i) => (
                <div
                  key={i}
                  style={{
                    background: "#0A0A16",
                    border: "1px solid #1C1C2E",
                    borderRadius: 10,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      padding: "11px 18px",
                      background: "#101020",
                      borderBottom: "1px solid #1C1C2E",
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <span style={{ fontSize: 16 }}>{tier.icon}</span>
                    <span
                      style={{
                        fontWeight: 600,
                        fontSize: 13,
                        color: "#D0D0E0",
                      }}
                    >
                      {tier.label}
                    </span>
                  </div>
                  <div
                    style={{
                      padding: "14px 18px",
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 12,
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: 9,
                          fontFamily: "'Space Mono',monospace",
                          color: "#10B981",
                          letterSpacing: "0.12em",
                          marginBottom: 6,
                        }}
                      >
                        ABRIR COM
                      </div>
                      <div
                        style={{
                          background: "#0D1F17",
                          border: "1px solid #10B98125",
                          borderRadius: 8,
                          padding: "9px 12px",
                          fontSize: 13,
                          color: "#CCC",
                          lineHeight: 1.5,
                        }}
                      >
                        ✅ {tier.lead}
                      </div>
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: 9,
                          fontFamily: "'Space Mono',monospace",
                          color: "#EF4444",
                          letterSpacing: "0.12em",
                          marginBottom: 6,
                        }}
                      >
                        EVITAR
                      </div>
                      <div
                        style={{
                          background: "#1F0D0D",
                          border: "1px solid #EF444425",
                          borderRadius: 8,
                          padding: "9px 12px",
                          fontSize: 13,
                          color: "#AAA",
                          lineHeight: 1.5,
                        }}
                      >
                        ❌ {tier.avoid}
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      padding: "0 18px 14px",
                      fontSize: 12,
                      color: "#555",
                      lineHeight: 1.6,
                      fontStyle: "italic",
                    }}
                  >
                    💡 {tier.why}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            style={{
              background: "#0D0D1A",
              border: "1px solid #252538",
              borderRadius: 10,
              padding: "16px 20px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 16,
            }}
          >
            {[
              {
                label: "NUNCA abre com",
                value: "Desconto",
                icon: "🚫",
                color: "#EF4444",
              },
              {
                label: "NUNCA foca em",
                value: "Preço",
                icon: "🚫",
                color: "#EF4444",
              },
              {
                label: "SEMPRE foca em",
                value: "Giro + Entrega",
                icon: "✅",
                color: "#10B981",
              },
            ].map((item, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 20, marginBottom: 6 }}>{item.icon}</div>
                <div
                  style={{
                    fontSize: 9,
                    fontFamily: "'Space Mono',monospace",
                    color: "#333",
                    letterSpacing: "0.1em",
                    marginBottom: 4,
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{ fontSize: 14, fontWeight: 700, color: item.color }}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* PLANO TAB */}
      {activeTab === "plano" && (
        <>
          <div
            style={{
              background: "#0D0D1A",
              borderBottom: "1px solid #1C1C2E",
              padding: "0 24px",
            }}
          >
            <div
              style={{
                maxWidth: 940,
                margin: "0 auto",
                display: "flex",
                gap: 2,
                overflowX: "auto",
              }}
            >
              {days.map((d, i) => (
                <button
                  key={i}
                  className="dtab"
                  onClick={() => setActiveDay(i)}
                  style={{
                    background:
                      activeDay === i ? `${d.color}18` : "transparent",
                    color: activeDay === i ? d.color : "#444",
                    border: "none",
                    borderBottom:
                      activeDay === i
                        ? `2px solid ${d.color}`
                        : "2px solid transparent",
                    padding: "14px 22px",
                    fontFamily: "'Space Mono',monospace",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    cursor: "pointer",
                    minWidth: 80,
                  }}
                >
                  <div>{d.day}</div>
                  <div
                    style={{
                      fontSize: 9,
                      fontWeight: 400,
                      marginTop: 2,
                      opacity: 0.7,
                    }}
                  >
                    {d.date}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div style={{ maxWidth: 940, margin: "0 auto", padding: "24px" }}>
            {/* Day header */}
            <div
              style={{
                background: "#0D0D1A",
                border: "1px solid #1C1C2E",
                borderLeft: `3px solid ${day.color}`,
                borderRadius: 12,
                padding: "18px 22px",
                marginBottom: 16,
                display: "grid",
                gridTemplateColumns: "auto 1fr auto",
                gap: 16,
                alignItems: "center",
              }}
            >
              <div style={{ fontSize: 30 }}>{day.icon}</div>
              <div>
                <div
                  style={{
                    fontFamily: "'Space Mono',monospace",
                    fontSize: 9,
                    color: day.color,
                    letterSpacing: "0.18em",
                    marginBottom: 4,
                  }}
                >
                  FOCO DO DIA
                </div>
                <div
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: 3,
                  }}
                >
                  {day.theme}
                </div>
                <div style={{ fontSize: 12, color: "#555" }}>
                  {day.subtitle}
                </div>
              </div>
              <div
                style={{
                  background: `${day.color}12`,
                  border: `1px solid ${day.color}28`,
                  borderRadius: 8,
                  padding: "10px 14px",
                  maxWidth: 230,
                }}
              >
                <div
                  style={{
                    fontSize: 9,
                    fontFamily: "'Space Mono',monospace",
                    color: day.color,
                    letterSpacing: "0.12em",
                    marginBottom: 4,
                  }}
                >
                  META
                </div>
                <div style={{ fontSize: 12, color: "#999", lineHeight: 1.6 }}>
                  {day.goal}
                </div>
              </div>
            </div>

            {/* Context */}
            <div
              style={{
                background: "#0A0A14",
                border: "1px solid #181828",
                borderLeft: `2px solid ${day.color}30`,
                borderRadius: 8,
                padding: "10px 14px",
                marginBottom: 18,
                display: "flex",
                gap: 8,
                alignItems: "flex-start",
              }}
            >
              <span style={{ fontSize: 13 }}>💡</span>
              <span
                style={{
                  fontSize: 12,
                  color: "#555",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                }}
              >
                {day.context}
              </span>
            </div>

            {/* Periods */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                marginBottom: 18,
              }}
            >
              {day.periods.map((period, pi) => (
                <div
                  key={pi}
                  className="pblock"
                  style={{
                    background: "#0D0D1A",
                    border: "1px solid #1C1C2E",
                    borderRadius: 12,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      padding: "11px 18px",
                      background: "#101020",
                      borderBottom: "1px solid #1C1C2E",
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      flexWrap: "wrap",
                    }}
                  >
                    <div
                      style={{
                        background: `${day.color}1A`,
                        color: day.color,
                        fontFamily: "'Space Mono',monospace",
                        fontSize: 10,
                        fontWeight: 700,
                        padding: "3px 8px",
                        borderRadius: 4,
                      }}
                    >
                      {period.time}
                    </div>
                    <div
                      style={{
                        fontWeight: 600,
                        fontSize: 13,
                        color: "#D0D0E0",
                      }}
                    >
                      {period.label}
                    </div>
                    <div style={{ color: "#252535" }}>·</div>
                    <div style={{ color: "#444", fontSize: 12, flex: 1 }}>
                      {period.objective}
                    </div>
                    <div
                      style={{
                        background: "#1A1A2C",
                        borderRadius: 4,
                        padding: "2px 8px",
                        fontSize: 10,
                        color: "#444",
                        fontFamily: "'Space Mono',monospace",
                      }}
                    >
                      {period.clients}
                    </div>
                  </div>
                  <div style={{ padding: "14px 18px" }}>
                    <div
                      style={{
                        fontSize: 12,
                        color: "#4A4A6A",
                        lineHeight: 1.7,
                        marginBottom: 12,
                        padding: "9px 12px",
                        background: "#090910",
                        borderRadius: 7,
                        borderLeft: `2px solid ${day.color}35`,
                      }}
                    >
                      {period.action}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                      }}
                    >
                      {period.messages.map((msg, mi) => (
                        <div
                          key={mi}
                          className="msgcard"
                          style={{
                            background: "#090912",
                            border: "1px solid #181828",
                            borderRadius: 10,
                            overflow: "hidden",
                          }}
                        >
                          <div
                            style={{
                              padding: "6px 13px",
                              background: "#0F0F1E",
                              borderBottom: "1px solid #181828",
                              fontSize: 10,
                              color: "#2E2E50",
                              fontFamily: "'Space Mono',monospace",
                            }}
                          >
                            {msg.trigger}
                          </div>
                          <div
                            style={{
                              padding: "11px 13px",
                              display: "flex",
                              gap: 9,
                              alignItems: "flex-start",
                            }}
                          >
                            <div
                              style={{
                                background: "#1A3A2A",
                                borderRadius: 5,
                                padding: "2px 6px",
                                fontSize: 9,
                                color: "#25D366",
                                fontFamily: "'Space Mono',monospace",
                                whiteSpace: "nowrap",
                                marginTop: 3,
                              }}
                            >
                              WPP
                            </div>
                            <div
                              style={{
                                flex: 1,
                                fontSize: 14,
                                color: "#C5C5DC",
                                lineHeight: 1.65,
                              }}
                            >
                              {msg.text}
                            </div>
                            <button
                              className="cpbtn"
                              onClick={() => copyMsg(msg.text, `${pi}-${mi}`)}
                              style={{
                                background:
                                  copiedMsg === `${pi}-${mi}`
                                    ? `${day.color}20`
                                    : "#151525",
                                color:
                                  copiedMsg === `${pi}-${mi}`
                                    ? day.color
                                    : "#3A3A5A",
                                borderRadius: 6,
                                padding: "5px 9px",
                                fontSize: 10,
                                fontFamily: "'Space Mono',monospace",
                                whiteSpace: "nowrap",
                                marginTop: 2,
                              }}
                            >
                              {copiedMsg === `${pi}-${mi}` ? "✓ ok" : "copiar"}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Objections */}
            <div
              style={{
                background: "#0D0D1A",
                border: "1px solid #1C1C2E",
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  padding: "12px 18px",
                  background: "#101020",
                  borderBottom: "1px solid #1C1C2E",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span>🛡️</span>
                <span
                  style={{ fontWeight: 600, fontSize: 13, color: "#D0D0E0" }}
                >
                  Respostas para Objeções
                </span>
                <span style={{ fontSize: 11, color: "#2A2A45", marginLeft: 2 }}>
                  — mantenha o controle
                </span>
              </div>
              {day.objections.map((obj, oi) => (
                <div
                  key={oi}
                  className="objrow"
                  style={{
                    padding: "14px 18px",
                    borderBottom:
                      oi < day.objections.length - 1
                        ? "1px solid #131322"
                        : "none",
                    display: "grid",
                    gridTemplateColumns: "1fr 1.3fr",
                    gap: 12,
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: 9,
                        color: "#2E2E50",
                        fontFamily: "'Space Mono',monospace",
                        letterSpacing: "0.12em",
                        marginBottom: 5,
                      }}
                    >
                      CLIENTE DIZ
                    </div>
                    <div
                      style={{
                        background: "#131320",
                        borderRadius: 7,
                        padding: "9px 12px",
                        fontSize: 12,
                        color: "#555",
                        fontStyle: "italic",
                        lineHeight: 1.5,
                      }}
                    >
                      {obj.q}
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 9,
                        color: day.color,
                        fontFamily: "'Space Mono',monospace",
                        letterSpacing: "0.12em",
                        marginBottom: 5,
                      }}
                    >
                      VOCÊ RESPONDE
                    </div>
                    <div
                      style={{
                        background: `${day.color}0E`,
                        border: `1px solid ${day.color}20`,
                        borderRadius: 7,
                        padding: "9px 12px",
                        fontSize: 13,
                        color: "#BBB",
                        lineHeight: 1.6,
                      }}
                    >
                      {obj.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: 14,
                padding: "9px 14px",
                background: "#090910",
                border: "1px solid #131322",
                borderRadius: 7,
                fontSize: 10,
                color: "#202035",
                fontFamily: "'Space Mono',monospace",
                textAlign: "center",
                letterSpacing: "0.05em",
              }}
            >
              PROIBIDO: "OI SUMIDO" · DESCONTO PRIMEIRO · ESPERAR O CLIENTE
              DECIDIR SOZINHO
            </div>
          </div>
        </>
      )}
    </div>
  )
}
