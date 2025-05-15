import React from "react";
import VacancyCard from "@/components/VacancyCard";

// Сокращенный массив данных о вакансиях (наиболее значимые позиции)
const vacancies = [
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
    id: 9,
    title: "Инженер-конструктор",
    salary: "50 000 рублей",
    experience: "без опыта",
  },
];

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          {vacancies.map((vacancy) => (
            <VacancyCard
              key={vacancy.id}
              title={vacancy.title}
              salary={vacancy.salary}
              experience={vacancy.experience}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vacancies;
