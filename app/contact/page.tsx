import Link from "next/link";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import SendButton from "@/components/SendButton";

export default function ContactPage() {
  const whatsappNumber = "+5522998180012";
  const whatsappMessage = "Olá, gostaria de saber mais informaçōes sobre aula de Yoga.";

  return (
    <main className="flex flex-col bg-background text-foreground min-h-screen">
      <section className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        {/* HEADER */}
        <div className="flex flex-col items-center justify-center px-2 py-2 md:px-4 md:py-4 bg-secondary rounded">
          <h1 className="text-lg md:text-4xl font-bold text-center ">
            Contato
          </h1>
        </div>
        <p className="text-base md:text-2xl text-center text-foreground mt-4 md:mt-8 md:mb-4">
          Dúvidas?
        </p>
        <p className="text-base md:text-2xl text-center text-foreground md:mb-6">
          Fale conosco diretamente pelo WhatsApp, Instagram or envie sua
          mensagem pelo formulário abaixo.
        </p>
        <p className="text-base md:text-xl text-center text-foreground">
          Será um prazer conversarmos!
        </p>

        <hr className=" my-4 md:my-8 border-(--foreground)/20" />

        {/* WHATSAPP */}
        <div className="text-center mb-4">
          <div className="flex items-center justify-center gap-2 mb-2 transition hover:opacity-70">
            <WhatsAppIcon className="w-7 h-7 text-primary" />
            <h3 className=" text-base md:text-2xl text-center text-foreground">
              WhatsApp
            </h3>
          </div>
          <p className="text-base md:text-xl text-(--foreground)/70 mb-6">
            Envia sua dúvidas e marque sua aula.
          </p>
          <Link
            href={`https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(
              whatsappMessage,
            )}`}
            target="_blank"
            className="text-sm md:text-lg inline-block bg-primary text-background px-3 py-2 md:px-6 md:py-3 rounded-full mb-4 font-semibold shadow hover:opacity-90 transition"
          >
            Falar no WhatsApp
          </Link>
        </div>

        <hr className="my-4 md:my-8 border-(--foreground)/20" />

        {/* INSTAGRAM CONTACT */}
        <div className="text-center mb-4">
          <div className="flex items-center justify-center gap-2 mb-2 transition hover:opacity-70">
            <InstagramIcon className="w-7 h-7 text-primary" />
            <p className="text-base md:text-2xl text-foreground">Instagram</p>
          </div>

          <p className="text-base md:text-xl text-(--foreground)/70 mb-6">
            Acompanhe conteúdos, novidades e bastidores das aulas.
          </p>

          <Link
            href="https://www.instagram.com/mahaganapatiyoga"
            target="_blank"
            className="text-sm sm:text-lg inline-block bg-primary text-background px-3 py-2 md:px-6 md:py-3 rounded-full mb-2 font-semibold shadow hover:opacity-90 transition"
          >
            @mahaganapatiyoga
          </Link>
        </div>

        <hr className="my-4 md:my-8 border-(--foreground)/20" />

        {/* FORM */}
        <p className="text-base md:text-xl text-center text-foreground mb-4">
          Formulário
        </p>
        <form id="contactForm" className="space-y-4 mb-4">
          <input
            name="from_name"
            type="text"
            placeholder="Seu nome"
            className="w-full p-3 border border-(--foreground)/30 rounded-md bg-background text-foreground placeholder-(--foreground)/50"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Seu email"
            className="w-full p-3 border border-(--foreground)/30 rounded-md bg-background text-foreground placeholder-(--foreground)/50"
            required
          />
          <textarea
            name="message"
            placeholder="Escreva sua mensagem..."
            className="w-full p-3 border border-(--foreground)/30 rounded-md bg-background text-foreground placeholder-(--foreground)]/50"
            rows={5}
            required
          />
          {/* Honeypot field */}
          <input
            name="website" // users don't see this, bots do.
            type="text"
            style={{ display: "none" }}
            autoComplete="off"
          />
          <div className="text-center">
            <SendButton formId="contactForm" />
          </div>
        </form>
      </section>
    </main>
  );
}
