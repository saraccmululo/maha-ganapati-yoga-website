import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.jpeg";
import PhotoCarousel from "@/components/Carousel";
import { homepagePhotos } from "@/data/galleryPhotos";

export default function HomePage() {
  return (
    <main className="flex flex-col bg-background text-foreground">
      {/* HERO */}
      <section className="px-4 pt-8 md:pt-20 pb-5 text-center">
        {/* HERO */}
        <section className="relative px-2 py-10 md:px-4 md:py-20 text-center overflow-hidden">
          {/* Faint logo background */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <Image
              src={logo}
              alt="Maha Ganapati Yoga Logo"
              className="opacity-30 w-7/12 md:w-3/4 max-w-xs sm:max-w-sm md:max-w-md"
              priority
            />
            {/* Second Faint logo background Option:
            <Image
              src={logo}
              alt="Maha Ganapati Yoga Logo"
              className="opacity-30 w-3/4 max-w-xs sm:max-w-sm md:max-w-md"
              priority
            />
            */}
          </div>

          {/* Hero content */}
          <div className="relative z-10">
            <h1 className="text-lg md:text-3xl font-extrabold mb-2 tracking-wide">
              Maha Ganapati Yoga
            </h1>
            <p className="text-sm md:text-lg text-foreground font-bold max-w-md mx-auto mb-6">
              Yoga - Pranayama - Meditação
            </p>
          </div>
        </section>

        {/* SERVICES / BENEFITS */}
        <section className="px-4 py-6 md:py-12 bg-background">
          <h2 className="text-md md:text-2xl font-bold text-center mb-2 md:mb-6">
            Hatha e Ashtanga Yoga para equilíbrio, presença e bem-estar.
          </h2>
          <h2 className="text-sm md:text-xl font-bold text-center mb-6">
            Prática consciente para corpo e mente em Bom Jardim - RJ.
          </h2>
        
          <div className="grid gap-6 max-w-4xl mx-auto sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-(--background)/90 p-2 md:p-6 rounded-2xl border-2 border-primary  shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="font-semibold mb-2 text-primary text-md md:text-lg">
                Corpo e flexibilidade
              </h3>
              <p className="text-(--foreground)/70 text-sm md:text-md">
                Fortalecimento, mobilidade e alinhamento com segurança.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-(--background)/90 p-2 md:p-6 rounded-2xl border-2 border-primary shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="font-semibold mb-2 text-primary text-md md:text-lg">
                Redução do estresse
              </h3>
              <p className="text-(--foreground)/70 text-sm md:text-md">
                Respiração, presença e consciência corporal.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-(--background)/90 p-2 md:p-6 rounded-2xl border-2 border-primary shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="font-semibold mb-2 text-primary text-md md:text-lg">
                Para todos os níveis
              </h3>
              <p className="text-(--foreground)/70 text-sm md:text-md">
                Aulas adaptadas para iniciantes e praticantes experientes.
              </p>
            </div>
          </div>
        </section>
        <div className="flex flex-col justify-center mb-8">
          <p className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-t-lg text-md md:text-xl font-medium">
            Aulas físicas e online.
          </p>
          <p className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-b-lg text-md md:text-xl font-medium">
            Marque sua aula experimental grátis!
          </p>
          
        </div>

        <Link
          href="/schedule"
          className="text-sm md:text-lg inline-block bg-primary text-background px-4 py-3 md:px-6 md:py-3 rounded-full md:mb-0 font-semibold shadow hover:opacity-90 transition"
        >
          Ver horários
        </Link>
      </section>

      {/* Carousel */}
      <section className="px-4 py-4">
        <PhotoCarousel photos={homepagePhotos} />
      </section>

      {/* CTA */}
      <section className="px-2 py-4 md:px-4 md:py-6 mt-12 text-center bg-secondary">
        <h2 className="text-lg md:text-2xl font-bold mb-2">
          Pronta para começar sua prática?
        </h2>

        <p className="text-md md:text-lg text-(--foreground)]/90 mb-6 max-w-md mx-auto">
          Entre em contato e marque sua aula presencial ou online.
        </p>

        <Link
          href="/contact"
          className="text-sm md:text-lg inline-block bg-primary text-background px-4 py-3 md:px-6 md:py-3 rounded-full mb-4 font-semibold shadow hover:opacity-90 transition"
        >
          Falar no WhatsApp
        </Link>
      </section>
    </main>
  );
}
