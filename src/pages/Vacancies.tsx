
import React from 'react';
import VacancyCard from '@/components/VacancyCard';

// Массив данных о вакансиях
const vacancies = [
  {
    id: 1,
    title: 'Инженер-сметчик 1 категории',
    salary: '80 000 рублей',
    experience: '3–5 лет'
  },
  {
    id: 2,
    title: 'Токарь',
    salary: '75 000 рублей',
    experience: '1–2 года'
  },
  {
    id: 3,
    title: 'Ведущий инженер-конструктор',
    salary: '70 000 рублей',
    experience: '3–5 лет'
  },
  {
    id: 4,
    title: 'Наладчик станков и манипуляторов с ПУ',
    salary: '70 000 рублей',
    experience: '1–2 года'
  },
  {
    id: 5,
    title: 'Оператор станков с ПУ',
    salary: '70 000 рублей',
    experience: '1–2 года'
  },
  {
    id: 6,
    title: 'Шлифовщик',
    salary: '70 000 рублей',
    experience: '1–2 года'
  },
  {
    id: 7,
    title: 'Токарь-расточник',
    salary: '60 000 рублей',
    experience: '1–2 года'
  },
  {
    id: 8,
    title: 'Инженер по качеству 1 категории',
    salary: '57 000 рублей',
    experience: '1–2 года'
  },
  {
    id: 9,
    title: 'Инженер-конструктор',
    salary: '50 000 рублей',
    experience: 'без опыта'
  }
];

const Vacancies: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-red-800">
          Текущие вакансии
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
          ООО "Красное Знамя" приглашает квалифицированных специалистов присоединиться к нашей команде.
          Мы предлагаем конкурентную заработную плату, социальный пакет и возможности для профессионального роста.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {vacancies.map(vacancy => (
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
