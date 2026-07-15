import { useEffect, useState } from 'react';
import {
  ArrowRight,
  ArrowDown,
  Shield,
  Lock,
  Star,
  Eye,
  Flame,
  Clock,
  Check,
  ChevronDown,
} from 'lucide-react';
import { IMG } from './images';
import { FAQS, TESTIMONIALS, PRODUCT } from './copy';
import { useReveal } from './useReveal';

const OFFER_PRICE = 'R$ 37';
const OFFER_OLD = 'de R$ 197 por apenas';
const CHECKOUT_URL = '#checkout';

function CTAButton({
  label = 'QUERO ATIVAR MINHA AURA PREDADORA AGORA',
  sub,
  pulse = true,
}: {
  label?: string;
  sub?: string;
  pulse?: boolean;
}) {
  return (
    <a
      href={CHECKOUT_URL}
      className={`group relative inline-flex w-full flex-col items-center justify-center gap-1 rounded-xl bg-gradient-to-b from-[#e6c178] to-[#c8a35c] px-6 py-5 text-center font-extrabold uppercase tracking-wide text-ink-900 shadow-[0_18px_50px_-12px_rgba(230,193,120,0.55)] transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto sm:px-12 ${
        pulse ? 'cta-pulse' : ''
      }`}
    >
      <span className="flex items-center gap-2 text-base sm:text-lg">
        {label}
        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
      {sub && <span className="text-[11px] font-semibold normal-case tracking-normal text-ink-900/80">{sub}</span>}
    </a>
  );
}

function SectionDivider({ label }: { label?: string }) {
  return (
    <div className="mx-auto flex max-w-2xl items-center gap-4 px-5 py-10">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      {label && (
        <span className="font-serif text-sm italic tracking-wide text-gold/70">{label}</span>
      )}
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    </div>
  );
}

function App() {
  useReveal();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [spots, setSpots] = useState(47);
  const [timeLeft, setTimeLeft] = useState({ h: 5, m: 42, s: 13 });

  // Live countdown
  useEffect(() => {
    const t = setInterval(() => {
      setTimeLeft((prev) => {
        let { h, m, s } = prev;
        s -= 1;
        if (s < 0) {
          s = 59;
          m -= 1;
        }
        if (m < 0) {
          m = 59;
          h -= 1;
        }
        if (h < 0) {
          h = 0;
          m = 0;
          s = 0;
        }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);

  // Fake "live" demand ticker (deterministic, decorrelates slightly)
  useEffect(() => {
    const t = setInterval(() => {
      setSpots((s) => {
        if (s <= 11) return s;
        return s - 1;
      });
    }, 38000);
    return () => clearInterval(t);
  }, []);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink-900 text-cream">
      {/* ===================== SOCIAL PROOF MARQUEE ===================== */}
      <div className="relative z-30 border-b border-white/5 bg-black/80 py-2 backdrop-blur">
        <div className="flex overflow-hidden">
          <div className="marquee-track flex shrink-0 whitespace-nowrap">
            {Array.from({ length: 2 }).map((_, i) => (
              <span key={i} className="mx-8 text-xs text-gold/80">
                <Star className="mr-1 inline h-3 w-3 fill-gold text-gold" />
                +12.847 homens já ativaram a aura predadora
                <span className="mx-3 text-white/20">•</span>
                Funciona mesmo sem dinheiro, altura ou bom nível
                <span className="mx-3 text-white/20">•</span>
                Garantia incondicional de 30 dias
                <span className="mx-3 text-white/20">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ===================== HERO ===================== */}
      <header className="relative grain isolate min-h-[92vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMG.hero}
            alt="Homem confiante caminhando na cidade"
            className="slow-zoom h-full w-full object-cover object-center opacity-45"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/70 via-ink-900/80 to-ink-900" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-transparent to-ink-900/60" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-3xl flex-col items-center justify-center px-5 py-20 text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold">
            <Flame className="h-3.5 w-3.5" /> leia antes que saia do ar
          </span>

          <h1 className="font-serif text-4xl font-bold leading-[1.08] text-balance sm:text-6xl lg:text-7xl">
            Por Que Algumas Mulheres <span className="gold-text">Não Conseguem Parar</span> De Olhar Pra Você
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-cream/75 sm:text-xl">
            Existe um <strong className="text-cream">sinal invisível</strong> que faz certos homens serem
            olhados, desejados e abordados em qualquer lugar — na rua, na academia, na balada, no restaurante.
            Ele não tem a ver com dinheiro, altura ou rosto. E está <em className="text-gold-bright not-italic">adormecido dentro de você</em>.
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 text-sm text-cream/55">
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gold" /> Leitura: 9 minutos que podem mudar sua vida amorosa
            </span>
            <a
              href="#historia"
              className="flex flex-col items-center gap-1 text-gold transition-colors hover:text-gold-light"
            >
              <span className="text-xs uppercase tracking-widest">Continue lendo</span>
              <ArrowDown className="h-5 w-5 animate-bounce" />
            </a>
          </div>
        </div>
      </header>

      {/* ===================== HOOK / OPENING ===================== */}
      <section id="historia" className="relative mx-auto max-w-3xl px-5 py-16 sm:py-24">
        <article className="prose-sales reveal">
          <p className="font-serif text-2xl italic leading-relaxed text-gold-bright">
            "Eu não sei o que aconteceu com aquele cara. Ele entrou no bar e três mulheres viraram a cabeça ao mesmo tempo."
          </p>
          <p>
            Você já viveu isso. Sabe exatamente do que estou falando.
          </p>
          <p>
            Tem aquele homem que entra num lugar e <strong>tudo para</strong>. As mulheres levantam os olhos do
            celular. A do balcão sorri sem perceber. A que tá com o namorado <strong>recurva o pescoço</strong> só pra
            acompanhar ele passando. E ele nem repara. Ou finge que não repara.
          </p>
          <p>
            Aí tem você. Entrou no mesmo lugar. Comprou a mesma cerveja. Sentou na mesma mesa.
          </p>
          <p>
            E nada. <strong>Nada.</strong> Você é o cara legal, educado, até bonito às vezes — mas é como se você
            fosse <em>transparente</em>. As mulheres te olham e não veem nada. Não sentem nada. Não sentem
            <strong> a necessidade</strong> de olhar de novo.
          </p>
          <p>
            A questão não é o seu rosto. Nem sua conta bancária. Nem sua altura.
          </p>
          <p>
            A questão é uma coisa só — e ela tem nome. É a <strong>aura</strong>. Mais especificamente, a{' '}
            <strong className="gold-text">Aura Predadora</strong>.
          </p>
          <p>
            E ela está <strong>desligada</strong> dentro de você. Agora. Neste exato segundo.
          </p>
        </article>
      </section>

      <SectionDivider label="a descoberta" />

      {/* ===================== THE SECRET / IMAGE BLOCK ===================== */}
      <section className="relative mx-auto max-w-5xl px-5 py-12">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="reveal">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold">
              <Eye className="h-3.5 w-3.5" /> o que elas realmente veem
            </span>
            <h2 className="font-serif text-3xl font-bold leading-tight sm:text-4xl">
              As Mulheres Não Olham pra Roupa. Elas Olham pra <span className="gold-text">Energia</span>.
            </h2>
            <div className="prose-sales mt-6">
              <p>
                Toda mulher tem um radar. Não foi ela que escolheu ter — é biológico, ancestral, mais velho que
                a linguagem. Esse radar lê <strong>energia</strong>, não aparência. Ele decodifica, em frações de
                segundo, se o homem que acabou de entrar no ambiente é uma <em>presença</em> ou um <em>vazio</em>.
              </p>
              <p>
                Quando a energia é de predador — dominante, calma, certa de si — o radar dispara. O corpo dela
                reage antes da mente. Os olhos seguem. O pescoço vira. A respiração muda. <strong>Ela não
                escolheu olhar. Ela foi obrigada a olhar.</strong>
              </p>
              <p>
                É por isso que você vê caras feios, baixos, carecas, sem grana, cercados de mulheres. E caras
               -modelo, sozinhos no canto do bar. A energia vence a estética. <strong>Sempre.</strong>
              </p>
            </div>
          </div>

          <div className="reveal relative">
            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <img
                src={IMG.womanBlackDress}
                alt="Mulher elegante olhando com interesse na rua à noite"
                className="h-[460px] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 max-w-[220px] rounded-xl border border-gold/30 bg-ink-800/95 p-4 shadow-xl backdrop-blur">
              <p className="font-serif text-sm italic leading-snug text-cream/90">
                "O pescoço vira antes dela perceber que virou."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FULL-WIDTH IMAGE BREAK ===================== */}
      <section className="relative my-10 h-[60vh] min-h-[420px] w-full overflow-hidden">
        <img
          src={IMG.manStreet}
          alt="Homem confiante caminhando na rua"
          className="h-full w-full object-cover object-center opacity-60"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-ink-900/70" />
        <div className="absolute inset-0 flex items-end justify-center px-5 pb-16">
          <p className="max-w-2xl text-center font-serif text-2xl italic leading-snug text-cream/90 sm:text-3xl">
            "O homem com aura não precisa falar. <span className="gold-text">A presença fala por ele.</span>"
          </p>
        </div>
      </section>

      {/* ===================== THE PAIN ===================== */}
      <section className="relative mx-auto max-w-3xl px-5 py-12">
        <article className="prose-sales reveal">
          <h2 className="mb-6 font-serif text-3xl font-bold leading-tight sm:text-4xl">
            A Invisibilidade Mata O Homem Por Dentro
          </h2>
          <p>
            Você já sentiu. Aquela dor surda de existir num lugar e não ser notado. De chegar numa festa e a
            mulher não mudar nada no rosto. De mandar mensagem e esperar horas por uma resposta curta. De ver o
            cara "interessante" receber toda a atenção enquanto você segura a parede.
          </p>
          <p>
            O pior não é a mulher não olhar. O pior é você <strong>deixar de se olhar</strong>. Começa a duvidar
            de si. A achar que tem algo errado. Que você é o problema. Que talvez você não nasceu pra isso.
          </p>
          <p>
            <strong>Você nasceu, sim.</strong> Todo homem nasce com a aura predadora ligada. Ela é parte do seu
            sistema. Mas a vida moderna a apagou. A rotina, a academia de mármore, o emprego sentado, a pornografia,
            a inadequação, o medo de incomodar — tudo isso foi <em>desligando</em> a energia, dia após dia, até
            você virar o homem invisível que é hoje.
          </p>
          <p>
            A boa notícia? <strong>Tem interruptor.</strong> E ele está ao seu alcance.
          </p>
        </article>
      </section>

      <SectionDivider label="o segredo revelado" />

      {/* ===================== THE REVEAL ===================== */}
      <section className="relative mx-auto max-w-3xl px-5 py-12">
        <article className="prose-sales reveal">
          <h2 className="mb-6 font-serif text-3xl font-bold leading-tight sm:text-4xl">
            O Segredo Que Ninguém Te Contou: A Aura Predadora <span className="gold-text">Nunca Desliga</span>
          </h2>
          <p>
            O que faz o homem magnético ser magnético <strong>o tempo todo</strong> não é treino. Não é
            carisma. Não é "confiança". É um estado energético que fica <strong>ativo 24 horas por dia</strong>,
            mesmo dormindo, mesmo de máscara, mesmo calado no canto do ônibus.
          </p>
          <p>
            Pensa comigo: você já viu um homem que exala isso de forma natural. Ele não "finge". Ele não
            "interpreta". Ele <strong>é</strong>. A aura dele é o motor de fundo. Sempre ligado. Sempre pulsando.
            E toda mulher num raio de 20 metros sente.
          </p>
          <p>
            É a diferença entre um farol aceso e um farol apagado. O barco não vê o farol apagado, por melhor que
            seja a lente. Mas acende — e todos os barcos convergem.
          </p>
          <p>
            Você é o farol. E está apagado. <strong>O conhecimento que você vai receber acende.</strong>
          </p>
        </article>
      </section>

      {/* ===================== IMAGE QUOTE: WOMAN LOOKING ===================== */}
      <section className="relative my-10 overflow-hidden rounded-none">
        <div className="grid gap-0 md:grid-cols-2">
          <div className="relative h-[340px] overflow-hidden md:h-[440px]">
            <img
              src={IMG.womanNight}
              alt="Mulher elegante olhando com interesse à noite na cidade"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 to-transparent md:bg-gradient-to-r" />
          </div>
          <div className="flex items-center bg-ink-800 px-8 py-12 md:px-14">
            <div className="reveal">
              <p className="font-serif text-2xl italic leading-relaxed text-cream/90 sm:text-3xl">
                "A mulher não decide te achar atraente. <span className="gold-text">Ela descobre</span> que já te
                acha — depois que o pescoço já virou."
              </p>
              <p className="mt-5 text-sm uppercase tracking-widest text-gold/70">— O que o método ensina</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== THE PROBLEM WITH "TECHNIQUES" ===================== */}
      <section className="relative mx-auto max-w-3xl px-5 py-12">
        <article className="prose-sales reveal">
          <h2 className="mb-6 font-serif text-3xl font-bold leading-tight sm:text-4xl">
            Por Que "Técnicas De Conquista" Te Deixaram Ainda Mais Invisível
          </h2>
          <p>
            Talvez você já tentou. Frases prontas. Gírias. Postura forçada. "Se mostra indiferente." "Não
            mande mensagem rápido demais." Toda aquela parafernália de internet.
          </p>
          <p>
            Sabe por que não funcionou? <strong>Porque é simulação.</strong> E mulher detecta simulação mais
            rápido do que você demora pra pensar na próxima frase. O radar dela lê a <em>fenda</em> entre o que
            você fala e o que você é. E essa fenda grita: "inseguro". Game over.
          </p>
          <p>
            A aura predadora é o oposto. Você não adiciona nada. Você <strong>remove o que está bloqueando</strong>.
            A energia já está aí, dentro de você, sufocada. O método não te transforma em outro homem — te
            devolve o homem que você era pra ser.
          </p>
          <p>
            Por isso, quando ela ativa, <strong>nunca desliga</strong>. Não é atuação. É estado. Você acende o
            interruptor uma vez e ele fica.
          </p>
        </article>
      </section>

      <SectionDivider label="o método" />

      {/* ===================== WHAT'S INSIDE / MODULES ===================== */}
      <section className="relative mx-auto max-w-5xl px-5 py-12">
        <div className="reveal text-center">
          <h2 className="font-serif text-3xl font-bold leading-tight sm:text-4xl">
            O Que Você Vai Receber Em <span className="gold-text">{PRODUCT}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/60">
            Um protocolo direto, sem enrolação. Nada de 40 horas de vídeo que você nunca vai ver. Só o que
            acende o interruptor — e rápido.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {[
            {
              n: '01',
              t: 'Os 3 Gatilhos Da Manhã',
              d: 'Sete minutos ao acordar que reativam a energia predadora antes do primeiro contato humano do dia. Você sai de casa já "aceso". As mulheres reagem diferente desde o elevador.',
            },
            {
              n: '02',
              t: 'O Protocolo Da Postura Predadora',
              d: 'Não é "fica reto". É uma sequência de micro-ajustes que comunicam dominância sem parecer forçado. O corpo muda a energia — a energia muda o olhar delas.',
            },
            {
              n: '03',
              t: 'O Olhar Que Trava',
              d: 'O exercício de 4 minutos que treina o olhar a carregar a aura. Depois disso, mulheres travam quando você olha — e não conseguem desviar primeiro.',
            },
            {
              n: '04',
              t: 'O Mapa Da Aura Constante',
              d: 'Como manter a energia ativa 24h, mesmo cansado, mesmo estressado, mesmo em silêncio. O motor de fundo que nunca apaga.',
            },
            {
              n: '05',
              t: 'A Linguagem Do Silêncio',
              d: 'Como ocupar espaço sem falar. O que separa o homem magnético do "chato que fala demais". Spoiler: as mulheres preferem o silêncio certo.',
            },
            {
              n: '06',
              t: 'O Desbloqueador De Energia Represada',
              d: 'O passo que 97% dos homens ignoram e que é o motivo real de estarem invisíveis. Sem ele, nada do resto cola.',
            },
          ].map((m) => (
            <div
              key={m.n}
              className="reveal group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-800 p-7 transition-colors hover:border-gold/40"
            >
              <span className="font-serif text-5xl font-bold text-gold/20 transition-colors group-hover:text-gold/40">
                {m.n}
              </span>
              <h3 className="mt-3 text-lg font-bold text-cream">{m.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/65">{m.d}</p>
              <span className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold/5 blur-2xl transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </section>

      {/* ===================== IMAGE: GYM / BODY LANGUAGE ===================== */}
      <section className="relative my-10 mx-auto max-w-5xl px-5">
        <div className="grid items-center gap-8 md:grid-cols-[1.2fr_1fr]">
          <div className="reveal relative overflow-hidden rounded-2xl border border-white/10">
            <img
              src={IMG.manGymFlex}
              alt="Homem confiante treinando na academia"
              className="h-[420px] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="reveal">
            <h2 className="font-serif text-3xl font-bold leading-tight sm:text-4xl">
              Não É O Corpo. É O Que O Corpo <span className="gold-text">Comunica</span>.
            </h2>
            <div className="prose-sales mt-5">
              <p>
                Você pode ter o corpo e ainda ser invisível. Já viu fisiculturista sozinho no canto da balada? É
                comum. O corpo sem aura é só volume. Mulher olha, admira, e segue.
              </p>
              <p>
                A aura predadora funciona no <strong>magro, no gordo, no careca, no alto, no baixo, no jovem, no
                maduro</strong>. Porque ela não é forma — é <em>frequência</em>. E a frequência é a mesma em
                qualquer corpo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== STORY / TRANSFORMATION ===================== */}
      <section className="relative mx-auto max-w-3xl px-5 py-12">
        <article className="prose-sales reveal">
          <h2 className="mb-6 font-serif text-3xl font-bold leading-tight sm:text-4xl">
            "Eu Era O Homem Que Segurava A Parede"
          </h2>
          <p>
            Vou ser honesto com você. Por anos eu fui o cara invisível. O amigo. O "gente boa". O que ouvia "você
            é um amor" — frase que, traduzida, significa: <em>não sinto nada por você</em>.
          </p>
          <p>
            Eu achava que era sorte. Que algumas pessoas nasciam com "aquilo" e eu não. Eu consumia conteúdo,
            tentava ser mais interessante, mudava o corte, a roupa. Nada. A parede continuava sendo minha
            companheira fiel nas festas.
          </p>
          <p>
            Até que um amigo — um cara baixo, feio pra maioria, sem grana — me mostrou o que era. Ele não tinha
            nada do que o mundo diz que importa. E era o mais desejado de qualquer rolê. Eu perguntei o segredo.
          </p>
          <p>
            Ele riu. Disse só: <strong>"Eu não faço nada. Eu só não deixo a energia apagar."</strong>
          </p>
          <p>
            Levei meses pra entender. E quando entendi, minha vida mudou em <strong>três semanas</strong>. Na
            primeira semana, olhares. Na segunda, abordagens. Na terceira, eu já não era mais o mesmo homem — e
            as mulheres confirmavam isso sem eu pedir.
          </p>
          <p>
            O que ele me ensinou, organizado em protocolo, é o que está dentro de {PRODUCT}.
          </p>
        </article>
      </section>

      {/* ===================== IMAGE: WOMAN CAFE / LOOKING ===================== */}
      <section className="relative my-10 mx-auto max-w-5xl px-5">
        <div className="grid items-center gap-8 md:grid-cols-[1fr_1.2fr]">
          <div className="reveal relative overflow-hidden rounded-2xl border border-white/10">
            <img
              src={IMG.womanCafe}
              alt="Mulher sorrindo olhando com interesse em um café"
              className="h-[400px] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="reveal">
            <h2 className="font-serif text-3xl font-bold leading-tight sm:text-4xl">
              Elas Vão Perceber <span className="gold-text">Antes De Você</span>
            </h2>
            <div className="prose-sales mt-5">
              <p>
                O sinal mais claro de que a aura ativou não é você sentir. É <strong>elas reagirem</strong>. A
                mulher do café que sorri sem motivo. A do elevador que segura o olhar meio segundo a mais. A
                colega que começa a puxar assunto do nada.
              </p>
              <p>
                Você não vai precisar caçar sinais. <strong>Os sinais vêm até você.</strong> A mudança é tão
                óbvia que você vai rir sozinho lembrando de como era antes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section className="relative mx-auto max-w-5xl px-5 py-16">
        <div className="reveal text-center">
          <h2 className="font-serif text-3xl font-bold leading-tight sm:text-4xl">
            O Que Acontece Quando A Aura <span className="gold-text">Acende</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/60">
            Relatos reais de homens comuns que aplicaram o protocolo. Nomes abreviados por privacidade.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="reveal flex flex-col rounded-2xl border border-white/10 bg-ink-800 p-6"
            >
              <div className="mb-3 flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold" />
                ))}
              </div>
              <blockquote className="flex-1 text-sm leading-relaxed text-cream/80">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-4 border-t border-white/10 pt-3 text-xs text-cream/50">
                <span className="font-bold text-cream/80">{t.name}</span>, {t.age} anos — {t.city}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ===================== GUARANTEE ===================== */}
      <section className="relative mx-auto max-w-4xl px-5 py-16">
        <div className="reveal relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-ink-800 to-ink-700 p-8 text-center sm:p-12">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/10 blur-3xl" />
          <div className="relative">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold/40 bg-gold/10">
              <Shield className="h-10 w-10 text-gold" />
            </div>
            <h2 className="font-serif text-3xl font-bold leading-tight sm:text-4xl">
              Garantia Incondicional De <span className="gold-text">30 Dias</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-cream/80">
              Aplique o protocolo por 30 dias inteiros. Se você não sentir uma mudança real na forma como as
              mulheres te olham — <strong className="text-cream">devolvemos cada centavo</strong>. Sem perguntas,
              sem burocracia, sem desconforto. Um e-mail e o reembolso está feito.
            </p>
            <p className="mt-4 text-sm text-gold/70">
              Todo o risco é nosso. Você só tem a ganhar.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== OFFER / PRICING ===================== */}
      <section id="checkout" className="relative mx-auto max-w-4xl px-5 py-16">
        <div className="reveal relative overflow-hidden rounded-3xl border border-gold/40 bg-ink-800 p-8 shadow-[0_30px_80px_-20px_rgba(230,193,120,0.25)] sm:p-12">
          <div className="absolute inset-x-0 top-0 h-px shimmer-line" />

          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold">
              <Clock className="h-3.5 w-3.5 blink" /> Oferta de lançamento — termina em {pad(timeLeft.h)}:{pad(timeLeft.m)}:{pad(timeLeft.s)}
            </span>

            <h2 className="mt-7 font-serif text-3xl font-bold leading-tight sm:text-4xl">
              Comece Hoje A Ser O Homem Que <span className="gold-text">As Mulheres Olham</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-cream/70">
              Acesso imediato e vitalício a {PRODUCT} + todos os bônus. Pagamento único, sem mensalidade.
            </p>

            <div className="mx-auto mt-8 max-w-md rounded-2xl border border-white/10 bg-ink-900/80 p-7">
              <p className="text-sm uppercase tracking-widest text-cream/50">{OFFER_OLD}</p>
              <div className="my-3 flex items-end justify-center gap-1">
                <span className="font-serif text-6xl font-extrabold leading-none gold-text">{OFFER_PRICE}</span>
              </div>
              <p className="text-sm text-cream/60">pagamento único · acesso imediato · acesso vitalício</p>

              <div className="mt-6 flex flex-col items-center gap-3">
                <CTAButton sub="Acesso imediato após o pagamento" />
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-cream/50">
                  <span className="flex items-center gap-1">
                    <Lock className="h-3.5 w-3.5 text-gold" /> Compra 100% segura
                  </span>
                  <span className="flex items-center gap-1">
                    <Shield className="h-3.5 w-3.5 text-gold" /> 30 dias de garantia
                  </span>
                  <span className="flex items-center gap-1">
                    <Check className="h-3.5 w-3.5 text-gold" /> Pix, cartão e boleto
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-6 text-sm text-gold/70">
              Restam <strong className="text-gold">{spots}</strong> vagas com este valor promocional.
            </p>
          </div>

          {/* Bonus list */}
          <div className="mt-10 border-t border-white/10 pt-8">
            <h3 className="text-center font-serif text-xl font-bold text-cream">
              Você também leva estes <span className="gold-text">3 bônus exclusivos</span>:
            </h3>
            <ul className="mx-auto mt-6 max-w-xl space-y-3">
              {[
                ['Bônus #1', 'O Manual Do Olhar Magnético', 'Como treinar o olhar a provocar frio na espinha em 4 minutos por dia.'],
                ['Bônus #2', 'Áudio De Ativação Noturna', 'Um áudio de 11 minutos para escutar antes de dormir que reforça a aura enquanto você dorme.'],
                ['Bônus #3', 'A Linguagem Do Silêncio (Avançado)', 'Como ocupar espaço e ser notado sem dizer uma palavra — mesmo numa sala cheia.'],
              ].map(([tag, title, desc]) => (
                <li key={title} className="flex gap-4 rounded-xl border border-white/10 bg-ink-900/60 p-4">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gold/70">{tag}</p>
                    <p className="font-bold text-cream">{title}</p>
                    <p className="text-sm text-cream/60">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-center text-sm text-cream/50">
              Valor real dos bônus: <span className="line-through">R$ 214</span> · Hoje:{' '}
              <strong className="text-gold">grátis</strong>
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <CTAButton label="QUERO ATIVAR MINHA AURA PREDADORA AGORA" sub="R$ 37 · acesso imediato · garantia de 30 dias" />
          </div>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section className="relative mx-auto max-w-3xl px-5 py-16">
        <div className="reveal text-center">
          <h2 className="font-serif text-3xl font-bold leading-tight sm:text-4xl">
            Perguntas Que Você <span className="gold-text">Provavelmente Está Fazendo</span>
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {FAQS.map((f, i) => {
            const open = openFaq === i;
            return (
              <div
                key={f.q}
                className="reveal overflow-hidden rounded-xl border border-white/10 bg-ink-800"
              >
                <button
                  onClick={() => setOpenFaq(open ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-semibold text-cream">{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${
                      open ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-cream/70">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===================== FINAL CTA ===================== */}
      <section className="relative isolate overflow-hidden py-20">
        <div className="absolute inset-0">
          <img
            src={IMG.manSuitDark}
            alt="Homem com presença marcante"
            className="h-full w-full object-cover object-center opacity-30"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900 via-ink-900/85 to-ink-900" />
        </div>
        <div className="relative z-10 mx-auto max-w-2xl px-5 text-center">
          <h2 className="reveal font-serif text-3xl font-bold leading-tight sm:text-5xl">
            Você Pode Continuar Invisível. <br className="hidden sm:block" />
            <span className="gold-text">Ou Pode Acender Hoje.</span>
          </h2>
          <p className="reveal mx-auto mt-6 max-w-xl text-lg text-cream/75">
            Daqui a 30 dias você vai estar em algum lugar. As mulheres vão continuar não te olhando — ou vão
            começar a virar o pescoço quando você passar. A diferença é uma decisão. E ela custa{' '}
            <strong className="text-cream">menos que um lanche</strong>.
          </p>
          <div className="reveal mt-9 flex flex-col items-center gap-3">
            <CTAButton />
            <p className="text-xs text-cream/45">
              {OFFER_PRICE} · pagamento único · garantia incondicional de 30 dias
            </p>
          </div>
        </div>
      </section>

      {/* ===================== FOOTER / DISCLAIMER ===================== */}
      <footer className="border-t border-white/10 bg-black py-12">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <p className="font-serif text-xl font-bold text-cream">{PRODUCT}</p>
          <p className="mx-auto mt-4 max-w-2xl text-xs leading-relaxed text-cream/40">
            Este site é um advertorial. Os depoimentos refletem experiências individuais e não garantem os
            mesmos resultados para todos. Este produto é um material educacional digital e não substitui
            acompanhamento profissional psicológico ou terapêutico. Os resultados dependem da aplicação
            individual dos protocolos. Produto digital — nada será enviado fisicamente. Acesso imediato após
            confirmação do pagamento. Garantia de reembolso de 30 dias via solicitação por e-mail. Ao comprar
            você concorda com os Termos de Uso e a Política de Privacidade.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-cream/30">
            <span className="flex items-center gap-1">
              <Lock className="h-3.5 w-3.5" /> Compra segura
            </span>
            <span>·</span>
            <span>© {new Date().getFullYear()} {PRODUCT}. Todos os direitos reservados.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
