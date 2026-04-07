import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Bot, 
  Store, 
  Users, 
  Share2, 
  BarChart3, 
  Clock, 
  QrCode, 
  Star, 
  ShieldCheck,
  Zap,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold font-display text-xl">K</div>
            <span className="font-display font-bold text-xl tracking-tight">KiandaBot</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#como-funciona" className="text-muted-foreground hover:text-foreground transition-colors">Como funciona</a>
            <a href="#publico" className="text-muted-foreground hover:text-foreground transition-colors">Para quem é</a>
            <a href="#recursos" className="text-muted-foreground hover:text-foreground transition-colors">Recursos</a>
            <a href="#planos" className="text-muted-foreground hover:text-foreground transition-colors">Planos</a>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="hidden sm:inline-flex bg-secondary text-secondary-foreground border-none">
              Unitel Go Challenge 2026
            </Badge>
            <Button asChild className="rounded-full font-bold">
              <a href="mailto:gochallenge@unitel.co.ao">Entrar na Beta</a>
            </Button>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* HERO SECTION */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/50 to-background z-10" />
            <img 
              src="/hero-bg.png" 
              alt="Background" 
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-background/80 mix-blend-multiply" />
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center py-20">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex flex-col gap-6"
            >
              <Badge className="w-fit bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 text-sm px-4 py-1.5 rounded-full font-medium">
                Candidato Unitel Go Challenge 2026
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight">
                Transforme <span className="text-primary">WhatsApp</span> em uma máquina de vendas.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed font-medium">
                O KiandaBot não é só um bot de automação. É um ecossistema que organiza vendas no WhatsApp, recompensa donos de grupos e afiliados, e gera dados valiosos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="rounded-full text-base h-14 px-8 font-bold shadow-[0_0_40px_-10px_hsl(var(--primary))] hover:shadow-[0_0_60px_-15px_hsl(var(--primary))] transition-all duration-300" asChild>
                  <a href="mailto:gochallenge@unitel.co.ao">
                    Quero entrar na beta <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full text-base h-14 px-8 font-bold border-border bg-background/50 backdrop-blur-sm hover:bg-muted" asChild>
                  <a href="#como-funciona">
                    Saiba mais
                  </a>
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-8 mt-8 border-t border-border/50">
                <div>
                  <div className="text-3xl font-display font-bold text-foreground">40+</div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Vendedores</div>
                </div>
                <div className="w-px h-12 bg-border/50" />
                <div>
                  <div className="text-3xl font-display font-bold text-foreground">MVP</div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Funcional</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative lg:h-[600px] flex items-center justify-center"
            >
              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 blur-[100px] rounded-full z-0" />
              
              {/* Phone Mockup */}
              <div className="relative z-10 w-[300px] h-[600px] bg-secondary rounded-[3rem] border-[8px] border-secondary-foreground/10 shadow-2xl overflow-hidden flex flex-col">
                <div className="absolute top-0 inset-x-0 h-6 bg-secondary z-20 rounded-t-[2.5rem] flex justify-center">
                  <div className="w-32 h-6 bg-background rounded-b-2xl" />
                </div>
                
                {/* Chat UI */}
                <div className="flex-1 bg-[#efeae2] dark:bg-[#0b141a] flex flex-col pt-12 pb-6 px-4 gap-4 overflow-hidden relative">
                  <div className="absolute inset-0 opacity-40 bg-[url('https://i.pinimg.com/originals/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg')] bg-cover mix-blend-overlay" />
                  
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="bg-white dark:bg-[#202c33] p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] relative z-10"
                  >
                    <p className="text-sm text-gray-800 dark:text-gray-200">🚀 Novo Tênis Nike Air Force disponível!</p>
                    <img src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=400&auto=format&fit=crop" className="w-full h-32 object-cover rounded-lg mt-2" alt="Produto" />
                    <p className="text-xs text-muted-foreground mt-2 font-medium">Preço: 35.000 Kz</p>
                    <div className="mt-2 bg-primary/10 text-primary-foreground dark:text-primary text-xs p-2 rounded-md font-semibold text-center">
                      Comprar agora (Link KiandaBot)
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 }}
                    className="bg-[#d9fdd3] dark:bg-[#005c4b] p-3 rounded-2xl rounded-tr-none shadow-sm max-w-[85%] self-end relative z-10"
                  >
                    <p className="text-sm text-gray-800 dark:text-gray-100">Compra confirmada! 🎉</p>
                    <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">Sua comissão de 875 Kz foi creditada.</p>
                  </motion.div>
                </div>
              </div>
              
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-6 top-32 bg-background border border-border p-4 rounded-2xl shadow-xl z-20 hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center">
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
                className="absolute -left-12 bottom-40 bg-background border border-border p-4 rounded-2xl shadow-xl z-20 hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">Auto-postagem</div>
                    <div className="text-xs text-muted-foreground">Em 12 grupos ativos</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CORE MESSAGE */}
        <section id="como-funciona" className="py-24 bg-secondary text-secondary-foreground relative">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-8">
                Muito mais que um robô.<br/>Um <span className="text-primary">ecossistema local</span>.
              </h2>
              <p className="text-lg md:text-2xl text-secondary-foreground/80 leading-relaxed font-medium">
                "O KiandaBot não é só um bot de automação. É um ecossistema que organiza vendas no WhatsApp, recompensa donos de grupos e afiliados, e gera dados valiosos para a Unitel."
              </p>
            </div>
          </div>
        </section>

        {/* TARGET USERS */}
        <section id="publico" className="py-24 bg-background relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Badge className="bg-primary/10 text-primary border-none mb-4">Público-Alvo</Badge>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Para quem é o KiandaBot?</h2>
              <p className="text-muted-foreground text-lg">Criamos soluções específicas para cada ator do comércio informal e formal de Angola.</p>
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
                  desc: "Monetize sua comunidade. Ganham comissão por cada venda originada no seu grupo."
                },
                {
                  icon: Share2,
                  title: "Afiliados",
                  desc: "Partilham produtos em vários grupos e recebem comissão automaticamente, sem gerir stock."
                },
                {
                  icon: Bot,
                  title: "Lojas e Fornecedores",
                  desc: "Divulgam promoções em larga escala e recebem encomendas estruturadas via WhatsApp."
                }
              ].map((item, i) => (
                <Card key={i} className="bg-card border-border/50 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300">
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
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES WITH IMAGE */}
        <section id="recursos" className="py-24 bg-muted/30 border-y border-border/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden border border-border/50 shadow-2xl group">
                <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors z-10" />
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
                    "Split de comissões (5% plataforma, 2.5% dono, 2.5% afiliado)",
                    "Sistema de reputação do vendedor (1-5 estrelas)",
                    "Análise preditiva do melhor horário para postar",
                    "Catálogo inteligente com gestão de stock integrada",
                    "Rastreamento por QR Code para vendas offline"
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="font-medium text-foreground/90">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* UNITEL DATA DASHBOARD */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge className="bg-primary/10 text-primary border-none mb-4">Inteligência de Dados</Badge>
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Dashboard Unitel Partners</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Transformamos o fluxo caótico de mensagens em dados estruturados. Perfeito para análise de tendências de consumo, picos de atividade e perfil sociodemográfico do comércio informal.
                </p>
                <Button variant="outline" className="rounded-full font-bold border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Explorar Casos de Uso
                </Button>
              </div>

              <div className="relative rounded-3xl overflow-hidden border border-border/50 shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent z-10" />
                <img src="/data.png" alt="Dashboard de Dados" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <div className="bg-background/90 backdrop-blur-md p-4 rounded-xl border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Volume Transacionado (Hoje)</span>
                      <BarChart3 className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-3xl font-display font-bold">14.2M Kz</div>
                    <div className="text-xs font-medium text-green-500 mt-1">+24% vs ontem</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRACTION */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-primary-foreground/20 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-display font-bold mb-2">40+</div>
                <div className="text-sm font-medium uppercase tracking-wider opacity-80">Vendedores Interessados</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-display font-bold mb-2">28</div>
                <div className="text-sm font-medium uppercase tracking-wider opacity-80">Respostas ao Form</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-display font-bold mb-2">Beta</div>
                <div className="text-sm font-medium uppercase tracking-wider opacity-80">1 Usuário Ativo</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-display font-bold mb-2">Abr 26</div>
                <div className="text-sm font-medium uppercase tracking-wider opacity-80">MVP Funcional</div>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="planos" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Planos acessíveis. Retorno real.</h2>
              <p className="text-muted-foreground text-lg">Projetado para caber no bolso do empreendedor angolano, pagando-se a si mesmo com a primeira venda.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Básico",
                  price: "3.000 Kz",
                  period: "/mês",
                  features: ["Até 50 posts/mês", "1 Grupo", "Links rastreados básicos"],
                  popular: false
                },
                {
                  name: "Premium",
                  price: "5.000 Kz",
                  period: "/mês",
                  features: ["Posts ilimitados", "Grupos ilimitados", "Links avançados", "Suporte prioritário", "Análise de horários"],
                  popular: true
                },
                {
                  name: "Lojas",
                  price: "10.000 Kz",
                  period: "/mês",
                  features: ["Tudo do Premium", "Catálogo inteligente", "Gestão de stock", "Múltiplos vendedores", "API Access"],
                  popular: false
                }
              ].map((plan, i) => (
                <Card key={i} className={`relative ${plan.popular ? 'border-primary shadow-xl scale-105 z-10' : 'border-border/50 hover:border-border'}`}>
                  {plan.popular && (
                    <div className="absolute top-0 inset-x-0 -translate-y-1/2 flex justify-center">
                      <Badge className="bg-primary text-primary-foreground uppercase tracking-widest text-[10px] font-bold px-3 py-1">Mais Popular</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-2">
                    <CardTitle className="font-display text-xl text-muted-foreground mb-2">{plan.name}</CardTitle>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-display font-bold">{plan.price}</span>
                      <span className="text-muted-foreground font-medium">{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
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
                    <Button className="w-full font-bold" variant={plan.popular ? 'default' : 'outline'} asChild>
                      <a href="mailto:gochallenge@unitel.co.ao">Começar Agora</a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FOOTER */}
        <section className="py-24 bg-secondary text-secondary-foreground text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/hero-bg.png')] opacity-5 mix-blend-overlay bg-cover bg-center" />
          <div className="container mx-auto px-4 relative z-10 max-w-3xl">
            <Badge className="bg-primary/20 text-primary border-none mb-6 text-sm px-4 py-1.5">O Futuro das Vendas Sociais</Badge>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
              Pronto para revolucionar o comércio no WhatsApp?
            </h2>
            <Button size="lg" className="rounded-full text-lg h-16 px-10 font-bold shadow-[0_0_40px_-10px_hsl(var(--primary))] hover:shadow-[0_0_60px_-15px_hsl(var(--primary))] transition-all duration-300" asChild>
              <a href="mailto:gochallenge@unitel.co.ao">
                Quero entrar na beta
              </a>
            </Button>
          </div>
        </section>

      </main>

      <footer className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center text-primary-foreground font-bold font-display text-sm">K</div>
            <span className="font-display font-bold text-lg tracking-tight">KiandaBot</span>
          </div>
          
          <div className="text-sm font-medium text-muted-foreground text-center md:text-left">
            <p>Criado por <span className="font-bold text-foreground">Lio (LioExp)</span> • Abril 2026</p>
            <p className="mt-1">Candidato Oficial Unitel Go Challenge</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
