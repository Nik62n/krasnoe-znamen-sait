
export interface Employee {
  id: number;
  name: string;
  position: string;
  achievements: string[];
  photoUrl: string;
  yearsOfService: number;
}

export const employees: Employee[] = [
  {
    id: 1,
    name: "Петров Иван Сергеевич",
    position: "Главный инженер",
    achievements: [
      "Руководил реконструкцией производственного цеха №3",
      "Внедрил систему автоматизации производства",
      "Награжден почетной грамотой Министерства промышленности"
    ],
    photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format",
    yearsOfService: 15
  },
  {
    id: 2,
    name: "Смирнова Анна Владимировна",
    position: "Начальник отдела контроля качества",
    achievements: [
      "Разработала новую методику проверки продукции",
      "Снизила процент брака на производстве на 27%",
      "Автор 3 патентов в области контроля качества"
    ],
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&auto=format",
    yearsOfService: 12
  },
  {
    id: 3,
    name: "Козлов Дмитрий Александрович",
    position: "Ведущий технолог",
    achievements: [
      "Модернизировал технологический процесс производства",
      "Сократил энергозатраты предприятия на 15%",
      "Участник международной выставки инноваций"
    ],
    photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&auto=format",
    yearsOfService: 8
  },
  {
    id: 4,
    name: "Ковалева Елена Игоревна",
    position: "Главный экономист",
    achievements: [
      "Оптимизировала финансовые потоки предприятия",
      "Привлекла инвестиции на сумму более 50 млн рублей",
      "Разработала стратегию экономического развития до 2030 года"
    ],
    photoUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&auto=format",
    yearsOfService: 10
  },
  {
    id: 5,
    name: "Соколов Алексей Петрович",
    position: "Мастер производственного участка",
    achievements: [
      "Руководил запуском нового конвейера",
      "Подготовил более 30 молодых специалистов",
      "Рационализаторские предложения сэкономили предприятию более 2 млн рублей"
    ],
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format",
    yearsOfService: 20
  }
];
