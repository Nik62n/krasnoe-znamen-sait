
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { EmployeeCard } from "@/components/EmployeeCard";
import { employees } from "@/data/employees";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="container mx-auto py-10 text-center">
        <div className="mx-auto mb-8 flex justify-center">
          <img src="/logo-b.svg" alt="Лого" className="h-20 w-20" />
        </div>
        <h1 className="text-4xl font-bold text-primary mb-2">ООО "Красное Знамя"</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Многолетний опыт и высокий профессионализм на службе вашего благополучия
        </p>
      </header>

      <Separator className="my-6" />

      <section className="container mx-auto py-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Наша история</h2>
        <Card className="mb-12">
          <CardContent className="pt-6">
            <p className="mb-4 text-lg">
              ООО "Красное Знамя" было основано в 1978 году и за прошедшие годы выросло 
              из небольшого предприятия в крупную компанию федерального масштаба.
            </p>
            <p className="mb-4 text-lg">
              Наша организация всегда стремилась собрать лучших профессионалов в своей области,
              обеспечивая не только развитие бизнеса, но и создавая возможности для личностного 
              роста каждого сотрудника.
            </p>
            <p className="mb-2 text-lg">
              Сегодня "Красное Знамя" — это сплоченный коллектив специалистов, 
              чьи достижения признаны на российском и международном уровне.
            </p>
          </CardContent>
        </Card>

        <div className="my-12">
          <h2 className="text-3xl font-bold mb-10 text-center">Наши специалисты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {employees.map((employee) => (
              <EmployeeCard key={employee.id} employee={employee} />
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-muted py-6 mt-10">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">© {new Date().getFullYear()} ООО "Красное Знамя". Все права защищены.</p>
          <p className="text-sm mt-2 text-muted-foreground">г. Москва, ул. Промышленная, д. 14</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
