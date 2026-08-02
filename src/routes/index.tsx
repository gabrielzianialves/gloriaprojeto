import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BatteryCharging,
  Gauge,
  HandHeart,
  HeartPulse,
  Image as ImageIcon,
  Linkedin,
  Mail,
  Play,
  ShieldCheck,
  Smile,
  Sparkles,
  Utensils,
} from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import heroAsset from "@/assets/hero.png.asset.json";
import logoAsset from "@/assets/logo.png.asset.json";
import gloriaAsset from "@/assets/gloria.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Projeto Glória — Tecnologia Assistiva Alimentar" },
      {
        name: "description",
        content:
          "Dispositivo assistivo adaptado ao antebraço, criado a partir de um caso real, para dar mais autonomia e conforto durante as refeições.",
      },
      { property: "og:title", content: "Projeto Glória — Tecnologia Assistiva Alimentar" },
      {
        property: "og:description",
        content:
          "Uma solução tecnológica para transformar a forma como pessoas com limitações motoras vivenciam a alimentação.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PROJECT_EMAIL = "[EMAIL DO PROJETO]";

const objetivos = [
  {
    icon: Utensils,
    title: "Autonomia Alimentar",
    text: "Garantir que essas pessoas consigam se alimentar de forma autônoma.",
  },
  {
    icon: Smile,
    title: "Bem-estar Psicológico",
    text: "Reduzir o estresse e a sensação de incapacidade que essas doenças trazem consigo.",
  },
  {
    icon: HeartPulse,
    title: "Conforto nas Refeições",
    text: "Reduzir a dor e a instabilidade ao segurar o talher durante as refeições.",
  },
];

const equipe = [
  { name: "Gabriel Ziani Alves", linkedin: "#" },
  { name: "Pedro Marinho R. C. Corrêa", linkedin: "#" },
  { name: "Vitor Paiva Nunes de Paula", linkedin: "#" },
];

const propostaDestaques = [
  { icon: HandHeart, label: "Adaptação ao antebraço" },
  { icon: Gauge, label: "Menor necessidade de movimento do punho" },
  { icon: ShieldCheck, label: "Maior estabilidade do talher" },
  { icon: Sparkles, label: "Redução do esforço durante a alimentação" },
];

function SectionLabel({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-current/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] opacity-80">
      {children}
    </span>
  );
}

function Index() {
  return (
    <main className="overflow-x-hidden bg-background text-foreground">
      {/* HERO */}
      <section className="relative isolate min-h-[92vh] surface-deep">
        <img
          src={heroAsset.url}
          alt="Os quatro integrantes do Projeto Glória juntos, sorrindo em frente a uma parede de tijolos"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.229_0.079_279.5/0.55)_0%,oklch(0.229_0.079_279.5/0.3)_38%,oklch(0.229_0.079_279.5/0.9)_78%,oklch(0.229_0.079_279.5/0.98)_100%)]" />

        <div className="relative mx-auto flex min-h-[92vh] w-full max-w-6xl flex-col items-center justify-between px-6 py-10 md:px-10">
          <Reveal className="flex w-full justify-center">
            <img
              src={logoAsset.url}
              alt="Glória — Tecnologia Assistiva Alimentar"
              className="h-9 w-auto md:h-11"
            />
          </Reveal>

          <div className="flex max-w-3xl flex-col items-center pb-12 pt-[38vh] text-center md:pt-[42vh]">
            <Reveal delay={80}>
              <SectionLabel>Tecnologia assistiva em desenvolvimento</SectionLabel>
            </Reveal>
            <Reveal delay={160}>
              <h1 className="mt-6 text-4xl font-bold leading-[1.05] text-cream sm:text-5xl md:text-6xl lg:text-7xl">
                Glória: Tecnologia
                <br />
                Assistiva Alimentar
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream/85 md:text-xl">
                Uma solução tecnológica desenvolvida para transformar a forma como pessoas com
                limitações motoras vivenciam a alimentação.
              </p>
            </Reveal>
            <Reveal delay={320}>
              <a href="#problema" className="mt-10 inline-block">
                <Button
                  size="lg"
                  className="rounded-full bg-cream px-8 text-base font-semibold text-ink shadow-lift hover:bg-cream/90"
                >
                  Conheça o projeto
                  <ArrowRight className="ml-1 h-5 w-5" />
                </Button>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section id="problema" className="scroll-mt-16 px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <SectionLabel>O problema</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold leading-tight md:text-5xl">
              A falta de autonomia durante as refeições
            </h2>
          </Reveal>
          <Reveal delay={120} className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Muitas pessoas com limitações motoras nas mãos enfrentam dificuldades na hora de se
              alimentar. Doenças como{" "}
              <strong className="font-semibold text-foreground">Artrite Reumatoide</strong> e{" "}
              <strong className="font-semibold text-foreground">Artrose</strong> podem comprometer a
              força, a coordenação e os movimentos do punho.
            </p>
            <p>
              Atividades simples, como segurar um talher ou levar o alimento à boca, se tornam um
              grande desafio.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CASO REAL */}
      <section className="px-4 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] surface-deep shadow-lift">
          <div className="grid items-center gap-0 lg:grid-cols-2">
            <Reveal className="p-8 sm:p-12 md:p-16">
              <SectionLabel>História real</SectionLabel>
              <h2 className="mt-6 text-3xl font-bold leading-tight text-cream md:text-4xl">
                O caso real que nos inspirou
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-cream/85">
                O projeto surgiu a partir do caso de uma familiar de um dos integrantes, chamada{" "}
                <strong className="font-semibold text-cream">Glória</strong>, que possui atrofia
                muscular nas mãos, causada pela combinação entre Fibromialgia e Artrite Reumatoide.
                Durante entrevistas, ela relatou dificuldade em manter o alimento estável no talher
                durante o trajeto até a boca e dependência constante de outra pessoa durante as
                refeições.
              </p>
            </Reveal>
            <Reveal delay={140} className="p-6 sm:p-10 lg:p-12">
              <img
                src={gloriaAsset.url}
                alt="Glória, voluntária do projeto, sentada no sofá utilizando o protótipo do dispositivo assistivo"
                loading="lazy"
                className="h-full w-full rounded-3xl object-cover shadow-lift"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* VÍDEO */}
      <section className="px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,0.8fr)_1fr] lg:gap-20">
          <Reveal className="mx-auto w-full max-w-[340px]">
            <div className="relative aspect-[9/16] overflow-hidden rounded-[1.75rem] border border-border bg-secondary shadow-lift">
              {/* Substitua este bloco pelo vídeo vertical (9:16) da voluntária Glória */}
              <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-8 text-center text-secondary-foreground">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-cream/15">
                  <Play className="h-7 w-7" />
                </span>
                <p className="text-sm font-semibold">Vídeo de relato da Glória</p>
                <p className="text-xs opacity-70">
                  Espaço reservado para o vídeo vertical (9:16)
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <SectionLabel>Relato em vídeo</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold leading-tight md:text-5xl">
              A voz de quem vive o desafio
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Ouvir a Glória foi o ponto de partida de tudo. É o relato dela que orienta cada decisão
              do projeto: entender como ela segura o talher, onde a dor aparece e em quais momentos a
              ajuda de outra pessoa se torna necessária.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              O vídeo mantém a experiência dela no centro do desenvolvimento, para que a tecnologia
              responda a uma necessidade real — e não a uma suposição.
            </p>
            <p className="mt-8 rounded-2xl border border-border bg-card p-5 text-sm leading-relaxed text-muted-foreground shadow-soft">
              O uso do nome e da imagem da voluntária Glória neste projeto foi autorizado por meio de
              termos de autorização devidamente assinados, estando a participante ciente e de acordo
              com sua utilização para fins relacionados à divulgação e desenvolvimento do projeto.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PROPOSTA */}
      <section className="bg-secondary px-6 py-24 text-secondary-foreground md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal className="max-w-3xl">
            <SectionLabel>A solução</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold leading-tight md:text-5xl">A nossa proposta</h2>
            <p className="mt-6 text-lg leading-relaxed text-cream/85">
              A maioria dos talheres atuais são estáticos e não oferecem estabilidade. Os modelos
              adaptados existentes ainda exigem apoio direto na mão, o que não funciona quando o
              punho não possui movimentos (que é o caso da nossa voluntária).
            </p>
            <p className="mt-4 text-lg leading-relaxed text-cream/85">
              Por isso, desenvolvemos um{" "}
              <strong className="font-semibold text-cream">dispositivo tecnológico inovador</strong>{" "}
              que se adapta ao antebraço do usuário, o que elimina a necessidade de utilização das
              mãos e a movimentação do punho, reduzindo a dor e proporcionando mais conforto.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <Reveal delay={100}>
              {/* Espaço reservado para as imagens do dispositivo */}
              <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-3 rounded-[1.75rem] border border-dashed border-cream/30 bg-ink/40 p-8 text-center">
                <ImageIcon className="h-8 w-8 opacity-70" />
                <p className="text-sm font-semibold">Imagens do dispositivo</p>
                <p className="text-xs opacity-70">Espaço reservado para as fotos do protótipo</p>
              </div>
            </Reveal>

            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {propostaDestaques.map((item, i) => (
                <Reveal as="li" key={item.label} delay={160 + i * 80}>
                  <div className="flex h-full items-center gap-4 rounded-2xl bg-cream/10 p-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cream/15">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <span className="text-base font-semibold leading-snug">{item.label}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* APLICATIVO */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionLabel>Complemento digital</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold leading-tight md:text-5xl">O aplicativo</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Junto do dispositivo, o projeto conta com um aplicativo mobile para a visualização da
              quantidade e consumo de bateria e calibragem do equipamento.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Através de uma interface fácil e intuitiva, o app foi pensado para que o nosso público
              alvo consiga utilizá-lo de forma satisfatória.
            </p>

            <ul className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { icon: BatteryCharging, label: "Visualização da bateria" },
                { icon: Gauge, label: "Consumo de bateria" },
                { icon: Sparkles, label: "Calibragem do equipamento" },
              ].map((f, i) => (
                <Reveal as="li" key={f.label} delay={100 + i * 80}>
                  <div className="h-full rounded-2xl border border-border bg-card p-5 shadow-soft">
                    <f.icon className="h-6 w-6 text-accent" />
                    <p className="mt-3 text-sm font-semibold leading-snug">{f.label}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={140} className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-8 -z-10 rounded-full bg-accent/10 blur-3xl" />
              {/* Mockup de celular — insira aqui a imagem da interface do app */}
              <div className="w-[280px] rounded-[2.5rem] border-[10px] border-ink bg-ink p-1 shadow-lift sm:w-[300px]">
                <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2rem] bg-muted">
                  <div className="flex h-full flex-col items-center justify-center gap-3 p-8 text-center text-muted-foreground">
                    <ImageIcon className="h-8 w-8 opacity-60" />
                    <p className="text-sm font-semibold text-foreground">Interface do aplicativo</p>
                    <p className="text-xs">Espaço reservado para o mockup da tela inicial</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* OBJETIVOS */}
      <section className="px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto max-w-6xl">
          <Reveal className="max-w-2xl">
            <SectionLabel>Propósito</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold leading-tight md:text-5xl">Nossos objetivos</h2>
          </Reveal>

          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {objetivos.map((o, i) => (
              <Reveal as="li" key={o.title} delay={100 + i * 110}>
                <div className="flex h-full flex-col rounded-[1.5rem] border border-border bg-card p-8 shadow-soft transition-shadow duration-300 hover:shadow-lift">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                    <o.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 text-xl font-bold">{o.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{o.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* EQUIPE */}
      <section className="px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto max-w-6xl">
          <Reveal className="max-w-2xl">
            <SectionLabel>Quem faz</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold leading-tight md:text-5xl">Conheça a equipe</h2>
          </Reveal>

          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {equipe.map((p, i) => (
              <Reveal as="li" key={p.name} delay={100 + i * 110}>
                <div className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-soft">
                  {/* Espaço reservado para a foto do integrante */}
                  <div className="flex aspect-[4/3] items-center justify-center bg-muted text-muted-foreground">
                    <ImageIcon className="h-8 w-8 opacity-60" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between gap-4 p-6">
                    <h3 className="text-lg font-bold leading-snug">{p.name}</h3>
                    <a
                      href={p.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
                      aria-label={`Perfil do LinkedIn de ${p.name}`}
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn [LINK DO PERFIL]
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="scroll-mt-16 px-4 pb-16 md:px-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] surface-deep px-8 py-16 text-center shadow-lift md:px-16 md:py-24">
          <Reveal>
            <SectionLabel>Vamos conversar</SectionLabel>
            <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-bold leading-tight text-cream md:text-5xl">
              Ficou interessado? Entre em contato!
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream/85">
              Convidamos visitantes, pesquisadores, instituições, profissionais da saúde e da área de
              tecnologia assistiva e potenciais parceiros a falarem com a nossa equipe. Toda troca
              ajuda o projeto a evoluir.
            </p>
            <a href={`mailto:${PROJECT_EMAIL}`} className="mt-10 inline-block">
              <Button
                size="lg"
                className="rounded-full bg-cream px-8 text-base font-semibold text-ink hover:bg-cream/90"
              >
                <Mail className="mr-1 h-5 w-5" />
                Entre em contato
              </Button>
            </a>
            <p className="mt-4 text-sm text-cream/70">{PROJECT_EMAIL}</p>
          </Reveal>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="border-t border-border px-6 py-14 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold">Projeto Glória</h3>
            <p className="mt-2 max-w-xs leading-relaxed text-muted-foreground">
              Tecnologia assistiva em prol da autonomia alimentar.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Equipe
            </h4>
            <ul className="mt-3 space-y-2">
              {equipe.map((p) => (
                <li key={p.name}>
                  <a
                    href={p.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm hover:underline"
                  >
                    <Linkedin className="h-4 w-4 text-accent" />
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Contato
            </h4>
            <p className="mt-3 text-sm">
              <a href={`mailto:${PROJECT_EMAIL}`} className="hover:underline">
                {PROJECT_EMAIL}
              </a>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Redes sociais: [LINKS DAS REDES SOCIAIS]
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-6xl border-t border-border pt-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Projeto Glória. Todos os direitos reservados.
        </div>
      </footer>
    </main>
  );
}
