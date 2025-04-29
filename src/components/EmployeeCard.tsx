
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EmployeeType } from "@/data/employees";

interface EmployeeCardProps {
  employee: EmployeeType;
}

export const EmployeeCard = ({ employee }: EmployeeCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img 
          src={employee.image} 
          alt={employee.name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{employee.name}</CardTitle>
          <Badge variant="outline" className="bg-primary/10">{employee.profession}</Badge>
        </div>
        <CardDescription>{employee.position}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{employee.description}</p>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2">
        {employee.achievements.map((achievement, idx) => (
          <Badge key={idx} variant="secondary" className="font-normal">{achievement}</Badge>
        ))}
      </CardFooter>
    </Card>
  );
};
