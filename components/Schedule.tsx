export default function Schedule() {
  const classes = [
    {
      day: "Segunda-feira",
      sessions: [
        { time: "8:00 - 9:00", type: "Presencial e online" },
        { time: "19:00 - 20:00", type: "Presencial e online" },
      ],
    },
    {
      day: "Terça-feira",
      sessions: [
        { time: "8:00 - 9:00", type: "Presencial e online" },
        { time: "19:00 - 20:00", type: "Presencial e online" },
      ],
    },
    {
      day: "Quarta-feira",
      sessions: [
        { time: "8:00 - 9:00", type: "Presencial e online" },
        { time: "15:30 - 16:30", type: "Presencial e online" },
        { time: "19:00 - 20:00", type: "Presencial e online" },
      ],
    },
    {
      day: "Quinta-feira",
      sessions: [
        { time: "8:00 - 9:00", type: "Presencial e online" },
        { time: "19:00 - 20:00", type: "Presencial e online" },
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto pt-4 pb-2 md:p-6">
      <h2 className=" text-lg md:text-2xl font-bold text-center mb-2 md:mb-4">
        Quadro de Aulas
      </h2>
      <p className=" text-sm md:text-lg md:mt-0 text-foreground/70 text-center">
        *Primeira aula experimental em turma{" "}
        <span className="font-semibold">gratuita</span>.
      </p>

      <div className="space-y-4">
        {classes.map((day) => (
          <div
            key={day.day}
            className="bg-(--background)/90 p-2 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <h3 className="text-sm md:text-lg font-semibold md:mb-2 text-primary">
              {day.day}
            </h3>

            <ul className="divide-y divide-(--foreground)/20">
              {day.sessions.map((session, index) => (
                <li
                  key={index}
                  className="flex justify-between py-1.5 text-(--foreground)/80 text-sm"
                >
                  <span>{session.time}</span>
                  <span className="text-(--foreground)/60">{session.type}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
