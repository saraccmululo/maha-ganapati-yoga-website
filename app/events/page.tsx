import PhotoCarousel from "@/components/Carousel";
import Schedule from "@/components/Schedule";
import { eventsPhotos } from "@/data/galleryPhotos";

export default function EventsPage() {
  const events = [
    {
      title: "Workshop de Yoga",
      date: "15 de Setembro, 2025",
      description: "Focado em respiracao, flexibilidade e forca",
      contact: "Inscriçōes pelo WhatsApp (22 99818 0012) até 14/09/25",
    },
    {
      title: "Aulão de Final de Semana",
      date: "10 de julho, 2025",
      description: "Venha passar a tarde meditando e praticando yoga",
      contact: "Inscriçōes pelo WhatsApp (22 99818 0012) até 09/06/25",
    },
  ];

  return (
    <main className="flex flex-col bg-background text-foreground min-h-screen">
      <section className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        {/* Page Title */}
        <div className="flex flex-col items-center justify-center px-2 py-2 md:px-4 md:py-4 bg-secondary rounded">
          <h1 className="text-lg md:text-4xl font-bold text-center">
            Aulas e Eventos
          </h1>
        </div>
        {/* Schedule Component */}
        <div className="mb-16">
          <Schedule />
        </div>

        {/* Special Events */}
        <div>
          <h2 className="text-lg md:text-2xl font-semibold mb-6 md:mb-8 text-center">
            Eventos Especiais
          </h2>

          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
            {events.map((event, idx) => (
              <div
                key={idx}
                className="bg-(--background)/90 p-6 rounded-2xl shadow-lg border-2 border-primary hover:shadow-2xl transition-shadow duration-300"
              >
                <h3 className="text-md md:text-xl font-bold mb-2 text-primary">
                  {event.title}
                </h3>
                <p className="text-(--foreground)/70 text-sm mb-2">
                  {event.date}
                </p>
                <p className="text-(--foreground)/80 text-sm">
                  {event.description}
                </p>
                <p className="text-(--foreground)/80 text-sm mt-2">
                  {event.contact}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="mt-12">
          <h2 className="text-lg md:text-2xl font-semibold mb-8 text-center">
            Galeria de Fotos
            <PhotoCarousel photos={eventsPhotos} />
          </h2>
        </div>
      </section>
    </main>
  );
}
