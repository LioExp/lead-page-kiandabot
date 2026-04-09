import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import kiandaBotLogo from "@assets/image_1775598178279.png";
import { 
  Bot, 
  Store, 
  Users, 
  Share2, 
  BarChart3, 
  QrCode, 
  Star,
  Zap,
  CheckCircle2,
  ArrowRight,
  Clock
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" } }),
};

export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground selection:bg-primary/20 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/60">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img src={kiandaBotLogo} alt="KiandaBot" className="w-9 h-9 rounded-xl object-cover" />
            <span className="font-display font-bold text-xl tracking-tight">KiandaBot</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#como-funciona" className="text-muted-foreground hover:text-foreground transition-colors">Como funciona</a>
            <a href="#publico" className="text-muted-foreground hover:text-foreground transition-colors">Para quem é</a>
            <a href="#recursos" className="text-muted-foreground hover:text-foreground transition-colors">Recursos</a>
            <a href="#planos" className="text-muted-foreground hover:text-foreground transition-colors">Planos</a>
          </div>
          <Button asChild className="rounded-full font-bold">
            <a href="https://wa.me/244957207924?text=Olá! Gostaria de participar do beta do Kianda-Bot" target="_blank">Entrar na Beta</a>
          </Button>
        </div>
      </nav>

      <main className="pt-16">
        {/* HERO */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
          {/* Glow behind hero */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="container mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="flex flex-col gap-6"
            >
              <Badge className="w-fit bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 text-sm px-4 py-1.5 rounded-full font-semibold">
                MVP Funcional — Abr. 2026
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.08] tracking-tight">
                Transforme <span className="text-primary">WhatsApp</span> em uma máquina de vendas.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed font-medium">
                O KiandaBot não é só um bot de automação. É um ecossistema que organiza vendas no WhatsApp, recompensa donos de grupos e afiliados, e gera dados reais do mercado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="rounded-full text-base h-14 px-8 font-bold shadow-[0_0_40px_-10px_hsl(262,90%,55%)] hover:shadow-[0_0_60px_-12px_hsl(262,90%,55%)] transition-all duration-300" asChild>
                  <a href="https://wa.me/244957207924?text=Olá! Gostaria de participar do beta do Kianda-Bot" target="_blank">
                    Quero entrar na beta <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full text-base h-14 px-8 font-bold" asChild>
                  <a href="#como-funciona">Saiba mais</a>
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-8 mt-6 border-t border-border/60">
                <div>
                  <div className="text-3xl font-display font-bold">40+</div>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-0.5">Vendedores</div>
                </div>
                <div className="w-px h-10 bg-border" />
                <div>
                  <div className="text-3xl font-display font-bold">28</div>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-0.5">Respostas</div>
                </div>
                <div className="w-px h-10 bg-border" />
                <div>
                  <div className="text-3xl font-display font-bold">Beta</div>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-0.5">Ativo</div>
                </div>
              </div>
            </motion.div>

            {/* Phone mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative lg:h-[600px] flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-primary/8 blur-[80px] rounded-full" />

              <div className="relative z-10 w-[300px] h-[590px] bg-[#1a0030] rounded-[3rem] border-[7px] border-primary/20 shadow-[0_0_60px_-10px_hsl(262,90%,55%)] overflow-hidden flex flex-col">
                <div className="absolute top-0 inset-x-0 h-6 z-20 rounded-t-[2.5rem] flex justify-center bg-[#1a0030]">
                  <div className="w-28 h-5 bg-black/40 rounded-b-2xl" />
                </div>
                <div className="flex-1 bg-[#ece5dd] flex flex-col pt-12 pb-6 px-3 gap-3 overflow-hidden relative">
                  <motion.div
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 }}
                    className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[85%]"
                  >
                    <p className="text-xs font-semibold text-purple-700 mb-1">KiandaBot</p>
                    <p className="text-sm text-gray-800">Novo produto publicado nos seus grupos:</p>
                    <img src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=300&auto=format&fit=crop" className="w-full h-24 object-cover rounded-lg mt-2" alt="Produto" />
                    <p className="text-xs font-bold text-gray-700 mt-2">Nike Air Force — 35.000 Kz</p>
                    <div className="mt-2 bg-purple-100 text-purple-700 text-xs p-2 rounded-md font-semibold text-center">
                      Ver link rastreado
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.6 }}
                    className="bg-[#d9fdd3] p-3 rounded-2xl rounded-tr-none shadow-sm max-w-[85%] self-end"
                  >
                    <p className="text-sm text-gray-800 font-medium">Venda confirmada!</p>
                    <p className="text-xs text-gray-600 mt-1">Comissão de <strong>875 Kz</strong> creditada.</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.2 }}
                    className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[85%]"
                  >
                    <p className="text-xs font-semibold text-purple-700 mb-1">KiandaBot</p>
                    <p className="text-sm text-gray-800">Melhor horário para postar hoje: <strong>18h–20h</strong></p>
                  </motion.div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-6 top-28 bg-background border border-border p-4 rounded-2xl shadow-xl z-20 hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/15 text-primary flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">Venda Rastreada</div>
                    <div className="text-xs text-muted-foreground">+5% Comissão</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-10 bottom-36 bg-background border border-border p-4 rounded-2xl shadow-xl z-20 hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[hsl(25,100%,55%)]/15 text-[hsl(25,100%,45%)] flex items-center justify-center">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">Auto-postagem</div>
                    <div className="text-xs text-muted-foreground">Em 21 grupos</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CORE MESSAGE */}
        <section id="como-funciona" className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 blur-[200px]" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-8">
                Muito mais que um robô.<br />Um <span className="text-primary">ecossistema local</span>.
              </h2>
              <p className="text-lg md:text-2xl text-secondary-foreground/75 leading-relaxed font-medium">
                "O KiandaBot organiza vendas no WhatsApp, recompensa donos de grupos e afiliados, e transforma o comércio informal em negócios rastreáveis e rentáveis."
              </p>
            </div>
          </div>
        </section>

        {/* TARGET USERS */}
        <section id="publico" className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Badge className="bg-primary/10 text-primary border-none mb-4">Público-Alvo</Badge>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Para quem é o KiandaBot?</h2>
              <p className="text-muted-foreground text-lg">Criamos soluções específicas para cada ator do comércio em Angola.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Store,
                  title: "Vendedores Individuais",
                  desc: "Automação de postagens, rastreamento de vendas, mais tempo livre para focar no negócio."
                },
                {
                  icon: Users,
                  title: "Donos de Grupos",
                  desc: "Monetize a sua comunidade. Ganhe comissão por cada venda originada no seu grupo."
                },
                {
                  icon: Share2,
                  title: "Afiliados",
                  desc: "Partilhe produtos em vários grupos e receba comissão automaticamente, sem gerir stock."
                },
                {
                  icon: Bot,
                  title: "Lojas e Fornecedores",
                  desc: "Divulgue promoções em larga escala e receba encomendas estruturadas via WhatsApp."
                }
              ].map((item, i) => (
                <motion.div key={i} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
                  <Card className="bg-card border-border/60 shadow-sm hover:shadow-md hover:border-primary/30 transition-all hover:-translate-y-1 duration-300 h-full">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <CardTitle className="font-display text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed text-sm font-medium">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="recursos" className="py-24 bg-muted/40 border-y border-border/60">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative rounded-3xl overflow-hidden border border-border/60 shadow-2xl group order-2 lg:order-1">
                <div className="absolute inset-0 bg-secondary/15 group-hover:bg-transparent transition-colors z-10" />
                <img src="/network.png" alt="Rede de Afiliados" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
              </div>

              <div className="order-1 lg:order-2">
                <Badge className="bg-primary/10 text-primary border-none mb-4">Diferenciais</Badge>
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Tecnologia desenhada para a nossa realidade.</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Diferente de CRMs genéricos, o KiandaBot entende como os negócios funcionam nos grupos de WhatsApp angolanos.
                </p>

                <div className="space-y-4">
                  {[
                    "Publicação automática em múltiplos grupos simultaneamente",
                    "Geração de links rastreados por post para atribuição exata",
                    "Split de comissões: 5% plataforma, 2.5% dono do grupo, 2.5% afiliado",
                    "Sistema de reputação do vendedor (1–5 estrelas)",
                    "Análise preditiva do melhor horário para postar",
                    "Catálogo inteligente com gestão de stock integrada",
                    "Rastreamento por QR Code para vendas offline"
                  ].map((feat, i) => (
                    <motion.div key={i} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center text-primary shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="font-medium text-foreground/90">{feat}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW COMMISSIONS WORK */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Badge className="bg-primary/10 text-primary border-none mb-4">Modelo de Comissões</Badge>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Todos ganham. Automaticamente.</h2>
              <p className="text-muted-foreground text-lg">Cada venda distribui comissões em tempo real, sem cálculos manuais.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Store, role: "Vendedor", pct: "Vende", detail: "Confirma a venda com um comando simples. O bot faz o resto.", color: "text-primary", bg: "bg-primary/10" },
                { icon: Users, role: "Dono do Grupo", pct: "2,5%", detail: "Por cada venda originada no seu grupo, automaticamente.", color: "text-[hsl(25,100%,45%)]", bg: "bg-[hsl(25,100%,55%)]/10" },
                { icon: Share2, role: "Afiliado", pct: "2,5%", detail: "Partilhou o link rastreado e trouxe o cliente? A comissão é sua.", color: "text-primary", bg: "bg-primary/10" },
              ].map((item, i) => (
                <motion.div key={i} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
                  <Card className="text-center border-border/60 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 h-full">
                    <CardHeader className="items-center pb-3">
                      <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-3`}>
                        <item.icon className="w-7 h-7" />
                      </div>
                      <CardTitle className="font-display text-2xl font-bold">{item.pct}</CardTitle>
                      <p className="font-semibold text-foreground/80 text-sm">{item.role}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.detail}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TRACTION */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-primary-foreground/20 text-center">
              {[
                { value: "40+", label: "Vendedores Interessados" },
                { value: "28", label: "Respostas ao Form" },
                { value: "Beta", label: "1 Utilizador Ativo" },
                { value: "Abr. 26", label: "MVP Funcional" },
              ].map((stat, i) => (
                <motion.div key={i} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
                  <div className="text-4xl md:text-5xl font-display font-bold mb-2">{stat.value}</div>
                  <div className="text-sm font-semibold uppercase tracking-wider opacity-80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="planos" className="py-24 bg-muted/40">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Planos acessíveis. Retorno real.</h2>
              <p className="text-muted-foreground text-lg">Comece grátis. Pague apenas quando vender.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto items-start">
              {[
                {
                  name: "Grátis",
                  price: "0 Kz",
                  period: "30 dias",
                  tag: "Novos utilizadores",
                  features: [
                    "30 dias sem custos",
                    "Até 20 posts",
                    "1 grupo",
                    "Links rastreados básicos",
                    "Sem cartão de crédito"
                  ],
                  popular: false,
                  accent: true,
                  cta: "Começar grátis"
                },
                {
                  name: "Básico",
                  price: "3.000 Kz",
                  period: "/mês",
                  tag: null,
                  features: [
                    "Até 50 posts/mês",
                    "3 grupo",
                    "Links rastreados básicos",
                    "Suporte padrão"
                  ],
                  popular: false,
                  accent: false,
                  cta: "Assinar"
                },
                {
                  name: "Premium",
                  price: "5.000 Kz",
                  period: "/mês",
                  tag: null,
                  features: [
                    "Posts ilimitados",
                    "Grupos ilimitados",
                    "Links avançados",
                    "Suporte prioritário",
                    "Análise de horários"
                  ],
                  popular: true,
                  accent: false,
                  cta: "Assinar Premium"
                },
                {
                  name: "Lojas",
                  price: "10.000 Kz",
                  period: "/mês",
                  tag: null,
                  features: [
                    "Tudo do Premium",
                    "Catálogo inteligente",
                    "Gestão de stock",
                    "Múltiplos vendedores",
                    "API Access"
                  ],
                  popular: false,
                  accent: false,
                  cta: "Contactar"
                }
              ].map((plan, i) => (
                <motion.div key={i} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
                  <Card className={`relative h-full ${plan.popular ? 'border-primary shadow-xl ring-2 ring-primary/30 scale-105 z-10' : plan.accent ? 'border-[hsl(25,100%,55%)]/40 shadow-md' : 'border-border/60 hover:border-border'}`}>
                    {plan.popular && (
                      <div className="absolute top-0 inset-x-0 -translate-y-1/2 flex justify-center">
                        <Badge className="bg-primary text-primary-foreground uppercase tracking-widest text-[10px] font-bold px-3 py-1">Mais Popular</Badge>
                      </div>
                    )}
                    {plan.accent && (
                      <div className="absolute top-0 inset-x-0 -translate-y-1/2 flex justify-center">
                        <Badge className="bg-[hsl(25,100%,55%)] text-white uppercase tracking-widest text-[10px] font-bold px-3 py-1">Experimente Grátis</Badge>
                      </div>
                    )}
                    <CardHeader className="text-center pb-2 pt-6">
                      {plan.tag && (
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">{plan.tag}</p>
                      )}
                      <CardTitle className="font-display text-lg text-muted-foreground mb-2">{plan.name}</CardTitle>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-3xl font-display font-bold">{plan.price}</span>
                        <span className="text-muted-foreground font-medium text-sm">{plan.period}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <ul className="space-y-3">
                        {plan.features.map((feat, j) => (
                          <li key={j} className="flex items-center gap-3 text-sm font-medium">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button
                        className="w-full font-bold"
                        variant={plan.popular ? 'default' : plan.accent ? 'outline' : 'outline'}
                        style={plan.accent ? { borderColor: 'hsl(25,100%,55%)', color: 'hsl(25,100%,40%)' } : {}}
                        asChild
                      >
                        <a href="https://wa.me/244957207924?text=Olá! Gostaria de participar do beta do Kianda-Bot" target="_blank">{plan.cta}</a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-secondary text-secondary-foreground text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/10 blur-[150px]" />
          <div className="container mx-auto px-4 relative z-10 max-w-3xl">
            <img src={kiandaBotLogo} alt="KiandaBot" className="w-16 h-16 rounded-2xl object-cover mx-auto mb-6 shadow-xl" />
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Pronto para revolucionar o comércio no WhatsApp?
            </h2>
            <p className="text-secondary-foreground/70 text-lg mb-10 max-w-xl mx-auto">
              Junte-se a mais de 40 vendedores que já estão a transformar os seus grupos em canais de venda organizados e rentáveis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full text-lg h-14 px-10 font-bold shadow-[0_0_40px_-10px_hsl(262,90%,55%)] hover:shadow-[0_0_60px_-15px_hsl(262,90%,55%)] transition-all duration-300" asChild>
                <a href="https://wa.me/244957207924?text=Olá! Gostaria de participar do beta do Kianda-Bot" target="_blank">
                  Quero entrar na beta <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-lg h-14 px-10 font-bold border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10" asChild>
                <a href="#planos">Ver planos</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-background border-t border-border py-10">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <img src={kiandaBotLogo} alt="KiandaBot" className="w-7 h-7 rounded-lg object-cover" />
            <span className="font-display font-bold text-lg tracking-tight">KiandaBot</span>
          </div>
          <div className="text-sm font-medium text-muted-foreground text-center">
            Criado por <span className="font-bold text-foreground">Lio (LioExp)</span> — Abril 2026
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="mailto:kiandabot@gmail.com" className="hover:text-foreground transition-colors font-medium">kiandabot@gmail.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}