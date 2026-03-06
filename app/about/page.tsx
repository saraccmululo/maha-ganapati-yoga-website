import Image from "next/image";
import Link from "next/link";
import profilePic from "../../public/profile1.jpeg"; 

export default function AboutPage() {

  const START_YEAR = 2019;
  const year = new Date().getFullYear();
  const experience = year - START_YEAR;

  return (
    <main className="flex flex-col bg-background text-foreground min-h-screen">
      <section className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        {/* PAGE HEADER */}
        <div className="flex flex-col items-center justify-center px-2 py-2 md:px-4 md:py-4 bg-secondary rounded mb-8">
          <h1 className="text-lg md:text-4xl font-bold text-center">
            Sobre mim
          </h1>
        </div>

        <h2 className="text-lg md:text-3xl font-bold mb-2 text-center">
          Lygia Costa Cabral Mululo
        </h2>
        <h4 className="text-base md:text-lg text-foreground mb-6 text-center">
          Professora de Yoga com {experience} anos de experiência, formada pelo
          Instituto Śhiva Śhaṅkara, Rio de Janeiro.
        </h4>

        {/* PROFILE + BIO */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <Image
              src={profilePic}
              alt="Lygia professora de yoga"
              className=" w-56 md:w-full rounded-lg shadow-lg"
              priority
            />
          </div>

          <div className="text-base md:w-1/2 space-y-4 text-(--foreground)/80">
            <p>
              Sou especializada em Hatha Yoga e Aṣṭāṅga Vinyāsa Yoga, com
              formação sólida na tradição clássica transmitida pelo Instituto
              Śhiva Śhaṅkara, que integra práticas corporais, respiração
              (prāṇāyama), meditação e estudo da filosofia do Yoga.
            </p>
            <p>
              Maha Ganapati Yoga foi fundada em 2019, em Bom Jardim - RJ, com o
              objetivo de oferecer aulas que promovem equilíbrio, presença e
              bem-estar para todos os níveis de praticantes.
            </p>
            <p>
              Durante minha formação, aprofundei-me não apenas nas posturas
              físicas, mas também nos princípios da consciência corporal,
              alinhamento e presença plena.
            </p>
            <p>
              Acredito que o yoga é uma prática profunda que une corpo, mente e
              espírito, promovendo bem-estar, equilíbrio emocional e maior
              autoconsciência.
            </p>
            <p>
              Minhas aulas são pensadas para serem acessíveis tanto para
              iniciantes quanto para praticantes com mais experiência.
            </p>
            <p>
              Cada sequência é cuidadosamente planejada para fortalecer o corpo,
              alongar com segurança e cultivar uma respiração consciente — tudo
              isso em um ambiente acolhedor e inspirador.
            </p>
          </div>
        </div>

        {/* CLOSING STATEMENT */}
        <p className="mt-8 text-(--foreground)/80 text-lg md:text-xl text-center">
          Estou aqui para te acompanhar na sua jornada de yoga, ajudando você a
          encontrar mais serenidade, clareza e harmonia no seu dia a dia.
        </p>

        {/* CTA LINK */}
        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="text-sm md:text-lg inline-block bg-primary text-background px-3 py-2 md:px-6 md:py-3 rounded-full mb-4 font-semibold shadow hover:opacity-90 transition"
          >
            Entrar em contato
          </Link>
          <hr className="mt-16"></hr>
          <h1 className="text-lg md:text-3xl font-bold mt-16 mb-8 text-center">
            Área de Depoimentos
          </h1>
          <p> Novos depoimentos estão por vir.</p>
          <p>Fiquem ligados!</p>
        </div>
      </section>
    </main>
  );
}
 