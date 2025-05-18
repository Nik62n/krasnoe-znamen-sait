import React from "react";
import VacancyCard from "@/components/VacancyCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

// Вакансии, сгруппированные по цехам
const vacanciesByDepartment = {
  "165": [
    {
      id: 1,
      title: "Инженер-сметчик 1 категории",
      salary: "80 000 рублей",
      experience: "3–5 лет",
    },
    {
      id: 2,
      title: "Токарь",
      salary: "75 000 рублей",
      experience: "1–2 года",
    },
    {
      id: 3,
      title: "Ведущий инженер-конструктор",
      salary: "70 000 рублей",
      experience: "3–5 лет",
    },
    {
      id: 4,
      title: "Наладчик станков и манипуляторов с ПУ",
      salary: "70 000 рублей",
      experience: "1–2 года",
    },
  ],
  "195": [
    {
      id: 5,
      title: "Оператор станков с ПУ",
      salary: "70 000 рублей",
      experience: "1–2 года",
    },
    {
      id: 6,
      title: "Шлифовщик",
      salary: "70 000 рублей",
      experience: "1–2 года",
    },
    {
      id: 7,
      title: "Токарь-расточник",
      salary: "60 000 рублей",
      experience: "1–2 года",
    },
    {
      id: 8,
      title: "Инженер по качеству 1 категории",
      salary: "57 000 рублей",
      experience: "1–2 года",
    },
  ],
};

const Vacancies: React.FC = () => {
  return (
    <section className="py-3 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-2 text-[#e32417]">
          Текущие вакансии
        </h2>
        <p className="text-center text-sm text-gray-600 max-w-2xl mx-auto mb-3">
          ООО "Красное Знамя" приглашает квалифицированных специалистов
          присоединиться к нашей команде. Мы предлагаем конкурентную заработную
          плату, социальный пакет и возможности для профессионального роста.
        </p>

        {/* Контейнер с фиксированной высотой и скроллбаром */}
        <ScrollArea className="h-[450px] rounded-md border border-red-100 p-4">
          {/* Цех №165 */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-[#e32417] mb-3">
              В цех №165 требуются:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pr-4">
              {vacanciesByDepartment["165"].map((vacancy) => (
                <VacancyCard
                  key={vacancy.id}
                  title={vacancy.title}
                  salary={vacancy.salary}
                  experience={vacancy.experience}
                />
              ))}
            </div>
          </div>

          {/* Разделитель */}
          <Separator className="my-6 bg-red-300" />

          {/* Цех №195 */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-[#e32417] mb-3">
              В цех №195 требуются:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pr-4">
              {vacanciesByDepartment["195"].map((vacancy) => (
                <VacancyCard
                  key={vacancy.id}
                  title={vacancy.title}
                  salary={vacancy.salary}
                  experience={vacancy.experience}
                />
              ))}
            </div>
          </div>
        </ScrollArea>
      </div>
    </section>
  );
};

export default Vacancies;
