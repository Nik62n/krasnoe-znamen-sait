
export interface EmployeeType {
  id: number;
  name: string;
  profession: string;
  position: string;
  description: string;
  image: string;
  achievements: string[];
}

export const employees: EmployeeType[] = [
  {
    id: 1,
    name: "Иванов Сергей Петрович",
    profession: "Инженер",
    position: "Главный инженер",
    description: "Более 25 лет опыта в разработке и внедрении инновационных технических решений. Руководил разработкой нескольких ключевых проектов компании.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    achievements: ["Патент 2018", "Заслуженный инженер РФ", "Лауреат премии им. Курчатова"]
  },
  {
    id: 2,
    name: "Смирнова Анна Владимировна",
    profession: "Экономист",
    position: "Финансовый директор",
    description: "Эксперт в области финансового планирования и стратегического развития. Разработала систему финансового контроля, повысившую эффективность компании на 30%.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    achievements: ["MBA Harvard", "Лучший финансист 2023", "Автор методики KPI-Z"]
  },
  {
    id: 3,
    name: "Петров Николай Иванович",
    profession: "Архитектор",
    position: "Ведущий архитектор",
    description: "Талантливый архитектор с уникальным видением пространства. Спроектировал более 50 объектов, отмеченных профессиональными наградами.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    achievements: ["Гран-при АРХИWOOD", "Золотое сечение 2021", "Член Союза Архитекторов"]
  },
  {
    id: 4,
    name: "Козлова Елена Дмитриевна",
    profession: "Маркетолог",
    position: "Директор по маркетингу",
    description: "Выстроила эффективную маркетинговую стратегию, позволившую компании выйти на новые рынки. Специалист по брендингу и digital-маркетингу.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
    achievements: ["Best CMO 2022", "Digital Summit Award", "Сертификация Google Expert"]
  },
  {
    id: 5,
    name: "Кузнецов Александр Сергеевич",
    profession: "Программист",
    position: "Технический директор",
    description: "Разработал уникальную систему автоматизации производственных процессов, внедрённую на всех объектах компании. Специалист в области ML и BigData.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    achievements: ["IT-лидер года", "AWS Solution Architect", "5 международных патентов"]
  }
];
