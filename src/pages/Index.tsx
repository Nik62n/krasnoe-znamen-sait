
import React from 'react';
import { employees } from '@/data/employees';
import EmployeeCard from '@/components/EmployeeCard';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Хедер с логотипом */}
      <header className="bg-white py-8 px-4 shadow-md">
        <div className="container mx-auto text-center">
          <img 
            src="https://cdn.poehali.dev/files/c5b8fc89-e433-46ae-9deb-73bcf08bf05f.png" 
            alt="Завод «КРАСНОЕ ЗНАМЯ» основан в 1918 г." 
            className="max-w-full h-auto mx-auto max-h-40"
          />
        </div>
      </header>

      {/* Секция с историей */}
      <section className="py-12 px-4 bg-red-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-red-800">
            Богатая история предприятия
          </h2>
          <div className="prose prose-lg mx-auto text-gray-700">
            <p>
              <span className="font-semibold">ООО "Красное Знамя"</span> — предприятие с вековой историей, основанное в 1918 году. 
              Начав свой путь как небольшая мастерская, сегодня мы являемся одним из ведущих производственных предприятий региона.
            </p>
            <p>
              За годы работы наше предприятие прошло через разные этапы становления: от механизации производственных процессов 
              в 30-е годы до внедрения передовых цифровых технологий в современную эпоху.
            </p>
            <p>
              В годы Великой Отечественной войны завод был эвакуирован, но уже в 1944 году возобновил работу на прежнем месте, 
              активно участвуя в восстановлении народного хозяйства страны.
            </p>
            <p>
              Настоящей гордостью ООО "Красное Знамя" всегда были и остаются его сотрудники — профессионалы своего дела, 
              чей труд вносит неоценимый вклад в развитие предприятия и всей отрасли.
            </p>
          </div>
        </div>
      </section>

      {/* Секция с сотрудниками */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-red-800">
            Наши специалисты
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
            Представляем вам некоторых из наших выдающихся сотрудников, чьи знания, опыт и преданность делу
            позволяют ООО "Красное Знамя" сохранять лидирующие позиции на рынке.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {employees.map(employee => (
              <div key={employee.id} className="flex justify-center">
                <EmployeeCard employee={employee} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-red-800 text-white py-6 px-4">
        <div className="container mx-auto text-center">
          <p className="text-red-200 text-sm">
            Адрес: г. Рязань, пр. Шабулина, 2А | Телефон: +7 (495) 123-45-67 | Email: info@krasnoe-znamya.ru
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
