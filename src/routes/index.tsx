import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  Check,
  CheckCircle2,
  Heart,
  ShieldCheck,
} from "lucide-react";

import heroImage from "@/assets/gestante-hero.jpg";
import logo from "@/assets/logo.png.asset.json";
import logoWhite from "@/assets/logo-white.png.asset.json";
import mariWithYouImage from "@/assets/mari-com-voce.png.asset.json";
import mariPhoto from "@/assets/mari-betioli.png.asset.json";
import testimonialWomen from "@/assets/depoimentos-mulheres.png.asset.json";
import testimonial1 from "@/assets/depoimento-1.jpg.asset.json";
import testimonial2 from "@/assets/depoimento-2.jpg.asset.json";
import testimonial3 from "@/assets/depoimento-3.jpg.asset.json";
import testimonial4 from "@/assets/depoimento-4.jpg.asset.json";
import modulo1 from "@/assets/modulo-1.jpg.asset.json";
import modulo2 from "@/assets/modulo-2.jpg.asset.json";
import modulo3 from "@/assets/modulo-3.jpg.asset.json";
import modulo4 from "@/assets/modulo-4.jpg.asset.json";
import modulo6 from "@/assets/modulo-6.jpg.asset.json";
import modulo7 from "@/assets/modulo-7.jpg.asset.json";
import modulo8 from "@/assets/modulo-8.jpg.asset.json";
import bonus1 from "@/assets/bonus-1.jpg.asset.json";
import bonus2 from "@/assets/bonus-2.jpg.asset.json";
import bonus3 from "@/assets/bonus-3.jpg.asset.json";
import bonus4 from "@/assets/bonus-4.jpg.asset.json";
import bonus5 from "@/assets/bonus-5.jpg.asset.json";
import bonus6 from "@/assets/bonus-6.jpg.asset.json";
import bonus7 from "@/assets/bonus-7.jpg.asset.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Escolha sua preparação | O Poder do Parto" },
      {
        name: "description",
        content:
          "Escolha a preparação ideal para viver o parto com mais segurança, consciência e confiança.",
      },
      { property: "og:title", content: "Escolha sua preparação | O Poder do Parto" },
      {
        property: "og:description",
        content:
          "Escolha a preparação ideal para viver o parto com mais segurança, consciência e confiança.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

const essentialFeatures = [
  "8 módulos de preparação para o parto",
  "Preparo físico e emocional",
  "Indução, cesárea e intervenções",
  "Técnicas de alívio da dor",
  "Construção do plano de parto",
  "Acesso vitalício ao conteúdo",
];

const completeFeatures = [
  "Tudo o que está no plano Essencial",
  "Mari com Você: canal direto pelo WhatsApp",
  "Mensagens de texto e áudio para tirar dúvidas",
  "Apoio educativo durante toda a gestação",
  "Acesso ao acompanhamento até o parto",
];

const comparison = [
  ["Curso O Poder do Parto", true, true],
  ["8 módulos de preparação", true, true],
  ["Acesso vitalício", true, true],
  ["Mari com Você: canal direto pelo WhatsApp", false, true],
  ["Mensagens de texto e áudio", false, true],
  ["Acompanhamento durante a gestação, até o parto", false, true],
] as const;

const modules = [
  ["Módulo 1", "Primeiros Passos", "Entenda tudo sobre a jornada que está começando.", modulo1.url],
  ["Módulo 2", "A Realidade do Parto", "Descubra como funciona o sistema e garanta um parto respeitoso.", modulo2.url],
  ["Módulo 3", "Preparo Emocional", "Trabalhe o medo, a ansiedade e fortaleça sua confiança.", modulo3.url],
  ["Módulo 4", "Como Funciona o Parto", "Identifique e saiba o que fazer em cada fase do trabalho de parto.", modulo4.url],
  ["Módulo 5", "O Corpo na Gravidez", "Cuide de si e prepare-se fisicamente para o parto.", modulo4.url],
  ["Módulo 6", "Indução & Cesárea", "Entenda indicações, intervenções e parto normal após cesárea.", modulo6.url],
  ["Módulo 7", "Técnicas de Alívio da Dor", "Respiração, massagem, acupressão e outros métodos naturais.", modulo7.url],
  ["Módulo 8", "Plano de Parto", "Crie um plano de parto que funciona e seja respeitado.", modulo8.url],
] as const;

const bonuses = [bonus1, bonus2, bonus3, bonus4, bonus5, bonus6, bonus7];

const faqs = [
  {
    question: "Qual é a diferença entre Essencial e Completo?",
    answer:
      "O Essencial dá acesso ao curso O Poder do Parto. O Completo inclui todo o conteúdo do Essencial e também o Mari com Você: um canal direto pelo WhatsApp para falar com a Mari durante a gestação, até o parto.",
  },
  {
    question: "O Guia das 18 Perguntas está incluído?",
    answer:
      "Não. O guia é um complemento opcional de R$ 27, oferecido como order bump no checkout. Você escolhe se deseja adicioná-lo à compra.",
  },
  {
    question: "Por quanto tempo tenho acesso?",
    answer:
      "Os dois planos foram estruturados com acesso vitalício, para você rever o conteúdo sempre que precisar.",
  },
  {
    question: "Posso fazer mesmo estando no final da gestação?",
    answer:
      "Sim. As aulas são organizadas para você priorizar os temas mais importantes conforme o momento da sua gestação.",
  },
  {
    question: "O curso substitui o acompanhamento médico?",
    answer:
      "Não. O conteúdo é educativo e não substitui pré-natal, consulta, diagnóstico ou orientação da equipe responsável pela sua assistência.",
  },
  {
    question: "Como funciona a garantia?",
    answer:
      "Você tem sete dias após a compra para conhecer o conteúdo e solicitar o reembolso, conforme as condições apresentadas no checkout.",
  },
];

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={light ? "eyebrow text-primary-foreground/70" : "eyebrow text-primary"}>
      {children}
    </p>
  );
}

function PlanCard({
  name,
  subtitle,
  amount,
  cash,
  features,
  featured = false,
}: {
  name: string;
  subtitle: string;
  amount: string;
  cash: string;
  features: string[];
  featured?: boolean;
}) {
  return (
    <article
      className={`relative flex flex-col rounded-lg border bg-card p-6 shadow-sm sm:p-8 ${
        featured ? "border-2 border-primary shadow-xl lg:-translate-y-2" : "border-border"
      }`}
    >
      {featured && (
        <span className="absolute right-6 top-0 -translate-y-1/2 rounded-full bg-primary px-4 py-2 text-xs font-bold uppercase text-primary-foreground">
          Mais escolhido
        </span>
      )}
      <p className="text-xs font-bold uppercase text-primary">
        Plano {featured ? "completo" : "essencial"}
      </p>
      <h3 className="mt-3 font-display text-3xl font-semibold leading-tight text-foreground">{name}</h3>
      <p className="mt-3 min-h-16 text-muted-foreground">{subtitle}</p>
      <div className="mt-7">
        <div className="flex flex-wrap items-baseline gap-2 text-primary">
          <span className="text-xl font-bold">12x</span>
          <span className="font-display text-4xl font-bold sm:text-5xl">R$ {amount}*</span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          ou <strong className="text-foreground">R$ {cash}</strong> à vista
        </p>
      </div>
      <ul className="my-7 flex flex-1 flex-col gap-3">
        {features.map((feature) => (
          <li key={feature} className="flex gap-3 text-sm sm:text-base">
            <Check className="mt-0.5 size-5 shrink-0 text-success" strokeWidth={3} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        asChild
        size="lg"
        variant={featured ? "default" : "outline"}
        className="h-14 w-full rounded-full text-base font-bold shadow-none"
      >
        <a href="#garantia">
          {featured ? "Quero a preparação completa" : "Escolher o Essencial"}
        </a>
      </Button>
      <small className="mt-3 text-center text-muted-foreground">
        Garantia incondicional de 7 dias
      </small>
    </article>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="bg-primary px-4 py-2.5 text-center text-xs font-bold text-primary-foreground sm:text-sm">
        A aula terminou. Agora escolha como você quer se preparar.
      </div>

      <header className="page-wrap flex items-center justify-between py-5">
        <a href="#top" className="inline-flex">
          <img src={logo.url} alt="O Poder do Parto" className="w-40 sm:w-52" />
        </a>
        <div className="hidden items-center gap-2 text-sm text-muted-foreground sm:flex">
          <span className="size-2.5 rounded-full bg-success" />
          Ambiente seguro • Garantia de 7 dias
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden pb-20 pt-8 lg:pb-24 lg:pt-14">
          <div className="page-wrap grid items-center gap-12 lg:grid-cols-[1.08fr_.92fr] lg:gap-16">
            <div className="relative z-10 text-center lg:text-left">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-success-soft px-4 py-2 text-sm font-bold text-success-dark">
                <CheckCircle2 className="size-5" />
                Você concluiu a aula gratuita
              </div>
              <Eyebrow>Seu próximo passo</Eyebrow>
              <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
                Informação muda escolhas. <span className="text-primary">Preparação muda experiências.</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground lg:mx-0 lg:text-xl">
                Você já entendeu por que um parto seguro e respeitoso não acontece por acaso. Agora escolha o nível de preparação que faz sentido para você e para o seu bebê.
              </p>
              <Button asChild size="lg" className="mt-8 h-14 rounded-full px-7 text-base font-bold shadow-lg">
                <a href="#planos">
                  Quero escolher minha preparação
                  <ArrowDown />
                </a>
              </Button>
              <p className="mt-4 text-xs text-muted-foreground sm:text-sm">
                Acesso vitalício • 7 dias de garantia • Pagamento seguro
              </p>
            </div>

            <div className="relative mx-auto h-[440px] w-full max-w-md lg:h-[580px]">
              <div className="absolute inset-x-4 bottom-0 top-10 rotate-2 rounded-[46%_46%_18%_18%] bg-accent" />
              <img
                src={heroImage}
                alt="Gestante serena representando uma preparação consciente para o parto"
                width={1024}
                height={1280}
                className="relative h-full w-full rounded-[46%_46%_18%_18%] object-cover object-top shadow-2xl"
              />
              <div className="absolute bottom-5 left-4 rounded-lg border border-primary-foreground/40 bg-background/90 px-4 py-3 shadow-lg backdrop-blur-sm sm:left-[-1rem]">
                <div className="flex items-center gap-3">
                  <Heart className="size-5 fill-primary text-primary" />
                  <div>
                    <p className="text-sm font-bold">Mais confiança para escolher</p>
                    <p className="text-xs text-muted-foreground">Informação para você e seu bebê</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted py-20 text-center">
          <div className="page-wrap max-w-4xl">
            <Eyebrow>A aula foi o começo</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Agora você precisa de um caminho claro até o dia do parto.
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Sem outra aula longa e sem repetir o que você acabou de assistir. Aqui você compara as opções, entende o que recebe e escolhe como quer continuar sua preparação.
            </p>
          </div>
        </section>

        <section id="planos" className="scroll-mt-6 py-24">
          <div className="page-wrap">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <Eyebrow>Escolha sua experiência</Eyebrow>
              <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
                Qual preparação combina com você?
              </h2>
              <p className="mt-5 text-muted-foreground">
                Os dois planos oferecem o curso completo. No plano Completo, você também conta com um canal direto com a Mari durante a gestação.
              </p>
            </div>
            <div className="grid gap-7 lg:grid-cols-2">
              <PlanCard
                name="O Poder do Parto Essencial"
                subtitle="Para quem quer compreender o parto, reconhecer escolhas e chegar mais preparada."
                amount="30,72"
                cash="297,00"
                features={essentialFeatures}
              />
              <PlanCard
                name="O Poder do Parto Completo"
                subtitle="Para quem quer todo o curso e a tranquilidade de poder falar diretamente com a Mari durante a gestação."
                amount="41,06"
                cash="397,00"
                features={completeFeatures}
                featured
              />
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="page-wrap">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <Eyebrow>Compare com calma</Eyebrow>
              <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
                Veja a diferença entre os planos
              </h2>
            </div>
            <div className="overflow-x-auto rounded-lg border border-border bg-card shadow-sm">
              <div className="min-w-[640px]">
                <div className="comparison-row bg-muted font-bold">
                  <div>O que você recebe</div>
                  <div>Essencial</div>
                  <div>Completo</div>
                </div>
                {comparison.map(([label, essential, complete]) => (
                  <div key={label} className="comparison-row border-t border-border">
                    <div>{label}</div>
                    <div>{essential ? <Check className="mx-auto text-success" strokeWidth={3} /> : "—"}</div>
                    <div>{complete ? <Check className="mx-auto text-success" strokeWidth={3} /> : "—"}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted py-20 lg:py-24">
          <div className="page-wrap">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <Eyebrow>Por dentro do curso</Eyebrow>
              <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
                Uma preparação completa, passo a passo
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {modules.map(([number, title, description, image]) => (
                <article
                  key={number}
                  className="overflow-hidden rounded-lg border border-border bg-card shadow-sm"
                >
                  <img
                    src={image}
                    alt={`${number} — ${title}`}
                    className="aspect-[4/3] w-full object-cover"
                    loading="lazy"
                  />
                  <div className="p-5">
                    <span className="text-xs font-bold uppercase tracking-wide text-primary">
                      {number}
                    </span>
                    <h3 className="mt-1 font-display text-lg font-bold">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary py-20 text-primary-foreground lg:py-24">
          <div className="page-wrap">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <Eyebrow light>Bônus incríveis</Eyebrow>
              <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
                Recursos extras para você se sentir ainda mais segura
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
              {bonuses.map((image, i) => (
                <article
                  key={image.asset_id}
                  className="overflow-hidden rounded-lg bg-primary-foreground/10"
                >
                  <img
                    src={image.url}
                    alt={`Bônus ${i + 1}`}
                    className="aspect-[3/4] w-full object-cover"
                    loading="lazy"
                  />
                  <div className="p-3 text-center text-sm font-bold">Bônus {i + 1}</div>
                </article>
              ))}
            </div>
          </div>
        </section>



        <section className="bg-primary py-20 text-primary-foreground lg:py-24">
          <div className="page-wrap grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <Eyebrow light>Exclusivo do plano Completo</Eyebrow>
              <h2 className="mt-4 font-display text-5xl font-semibold">Mari com Você</h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
                No plano Completo, além de todo o conteúdo do curso, você tem um canal direto com a Mari para organizar perguntas, esclarecer dúvidas educativas e se preparar para conversar com sua equipe.
              </p>
              <ul className="my-7 grid gap-3">
                {[
                  "Acompanhamento individual pelo WhatsApp",
                  "Mensagens de texto e áudio",
                  "Acesso da compra até o nascimento do bebê",
                  "Vagas limitadas para preservar a qualidade do atendimento",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="size-5 text-success-bright" strokeWidth={3} />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" variant="secondary" className="h-14 rounded-full px-7 text-base font-bold">
                <a href="#planos">Quero o plano Completo</a>
              </Button>
              <p className="mt-4 max-w-2xl text-xs text-primary-foreground/65">
                Serviço educativo. Não substitui consulta, diagnóstico ou atendimento de emergência.
              </p>
            </div>
            <div className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 p-3 backdrop-blur-sm sm:p-4">
              <img
                src={mariWithYouImage.url}
                alt="Mari com Você — acompanhamento individual pelo WhatsApp até o parto"
                className="w-full rounded-md object-cover shadow-xl"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="page-wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="mx-auto w-full max-w-md overflow-hidden rounded-lg border border-border bg-card p-3 shadow-lg sm:p-4">
              <img
                src={mariPhoto.url}
                alt="Mari Betioli segurando um modelo de bebê e uma bacia pélvica"
                className="aspect-square w-full rounded-md object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <Eyebrow>Quem vai te acompanhar</Eyebrow>
              <h2 className="mt-3 font-display text-5xl font-semibold">Mari Betioli</h2>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "19 anos trabalhando com gestantes",
                  "Obstetriz, doula e educadora perinatal",
                  "Experiência no Brasil, Portugal e EUA",
                  "Formação em Spinning Babies e Active Birth",
                ].map((item) => (
                  <div key={item} className="rounded-lg bg-muted p-5 font-semibold">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted py-20 lg:py-24">
          <div className="page-wrap">
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>Depoimentos reais</Eyebrow>
              <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
                Mais de 1.700 mulheres transformadas
              </h2>
            </div>
            <img
              src={testimonialWomen.url}
              alt="Mulheres que participaram do Poder do Parto"
              className="mx-auto mt-9 max-h-72 max-w-full object-contain"
              loading="lazy"
            />
            <div className="mt-10 grid grid-cols-2 items-start gap-3 sm:gap-5 lg:grid-cols-4">
              {[testimonial1, testimonial2, testimonial3, testimonial4].map((image, index) => (
                <img
                  key={image.asset_id}
                  src={image.url}
                  alt={`Depoimento de aluna ${index + 1}`}
                  className="w-full rounded-lg border border-border bg-card shadow-sm"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </section>

        <section id="garantia" className="page-wrap scroll-mt-8 pb-24">
          <div className="grid items-center gap-6 rounded-lg bg-success-soft p-7 sm:grid-cols-[auto_1fr] sm:p-12">
            <div className="flex size-24 items-center justify-center rounded-full bg-success text-success-foreground">
              <ShieldCheck className="size-11" />
            </div>
            <div>
              <Eyebrow>Seu risco é zero</Eyebrow>
              <h2 className="mt-2 font-display text-4xl font-semibold">Experimente por 7 dias</h2>
              <p className="mt-3 max-w-3xl text-muted-foreground">
                Acesse o conteúdo e conheça o método. Se sentir que não é para você, solicite o reembolso dentro do período de garantia.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-muted py-24">
          <div className="page-wrap max-w-4xl">
            <div className="text-center">
              <Eyebrow>Dúvidas frequentes</Eyebrow>
              <h2 className="mt-4 font-display text-5xl font-semibold">Antes de escolher</h2>
            </div>
            <Accordion type="single" collapsible className="mt-10 grid gap-3">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`item-${index}`} className="rounded-lg border border-border bg-card px-5">
                  <AccordionTrigger className="py-5 text-left text-base font-bold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="py-24 text-center">
          <div className="page-wrap max-w-3xl">
            <h2 className="font-display text-5xl font-semibold">Seu bebê só nasce uma vez</h2>
            <p className="mt-5 text-xl text-muted-foreground">
              Escolha viver esse momento com mais informação e confiança.
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Você já deu o primeiro passo assistindo à aula. Agora escolha a preparação que vai acompanhar você até o parto.
            </p>
            <Button asChild size="lg" className="mt-8 h-14 rounded-full px-7 text-base font-bold">
              <a href="#planos">Comparar os planos novamente</a>
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-4 py-8 text-center text-xs text-muted-foreground sm:text-sm">
        <img src={logoWhite.url} alt="O Poder do Parto" className="mx-auto w-40 sm:w-44" />
        <p className="mt-4">© 2026 O Poder do Parto • Conteúdo educativo • Não substitui acompanhamento médico</p>
      </footer>

      <div className="fixed inset-x-3 bottom-3 z-50 sm:hidden">
        <Button asChild size="lg" className="h-14 w-full rounded-full text-base font-bold shadow-xl">
          <a href="#planos">Escolher meu plano</a>
        </Button>
      </div>
    </div>
  );
}