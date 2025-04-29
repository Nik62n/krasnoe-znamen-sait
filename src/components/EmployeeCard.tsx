
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Employee } from '@/data/employees';

interface EmployeeCardProps {
  employee: Employee;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee }) => {
  const { name, position, achievements, photoUrl, yearsOfService } = employee;
  
  // Получаем инициалы для аватара
  const getInitials = (fullName: string) => {
    return fullName
      .split(' ')
      .map(name => name[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <Card className="w-full max-w-md transition-all duration-300 hover:shadow-lg">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <Avatar className="h-20 w-20 border-2 border-red-700">
          <AvatarImage src={photoUrl} alt={name} />
          <AvatarFallback className="bg-red-100 text-red-700">{getInitials(name)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <CardTitle className="text-xl">{name}</CardTitle>
          <CardDescription className="text-lg font-medium text-red-700">{position}</CardDescription>
          <Badge variant="outline" className="mt-1">
            Стаж: {yearsOfService} {yearsOfService === 1 ? 'год' : (yearsOfService > 1 && yearsOfService < 5) ? 'года' : 'лет'}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <h4 className="mb-2 font-semibold">Достижения:</h4>
        <ul className="space-y-1 pl-5 list-disc">
          {achievements.map((achievement, index) => (
            <li key={index} className="text-sm">{achievement}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="border-t pt-4 text-xs text-gray-500">
        Сотрудник ООО "Красное Знамя"
      </CardFooter>
    </Card>
  );
};

export default EmployeeCard;
