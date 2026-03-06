import Schedule from "@/components/Schedule";

export default function SchedulePage() {
  
  return (
    <main className="flex flex-col bg-background text-foreground min-h-screen">
      <section className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        {/* Page Title */}
        <div className="flex flex-col items-center justify-center px-26 py-2 md:px-50 md:py-4 bg-secondary rounded">
          <h1 className="text-lg md:text-4xl font-bold text-center">
            Quadro de Aulas
          </h1>
        </div>

        <Schedule />
      </section>
    </main>
  );
}
