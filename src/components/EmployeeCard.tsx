
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Employee } from '@/data/employees';

interface EmployeeCardProps {
  employee: Employee;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee }) => {
  const { name, position, achievements, photoUrl } = employee;
  
  // Получаем номер сотрудника для аватара
  const getNumber = (fullName: string) => {
    return fullName.split('.')[0];
  };

  return (
    <Card className="w-full max-w-md transition-all duration-300 hover:shadow-lg">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <div className="rounded-full p-1 border-4 border-red-600 overflow-hidden h-24 w-24 flex items-center justify-center">
          <Avatar className="h-full w-full">
            {photoUrl ? (
              <AvatarImage src={photoUrl} alt={name} className="object-cover" />
            ) : null}
            <AvatarFallback className="bg-red-100 text-red-700 font-bold text-xl">{getNumber(name)}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-1">
          <CardTitle className="text-xl">{name}</CardTitle>
          <CardDescription className="text-lg font-medium text-red-700">{position}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <h4 className="mb-2 font-semibold">Достижения:</h4>
        {achievements.length > 0 ? (
          <ul className="space-y-1 pl-5 list-disc">
            {achievements.map((achievement, index) => (
              <li key={index} className="text-sm">{achievement}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sm italic text-gray-500 pl-5">Пока нет достижений</p>
        )}
      </CardContent>
      <CardFooter className="border-t pt-4 text-xs text-gray-500">
        Сотрудник ООО "Красное Знамя"
      </CardFooter>
    </Card>
  );
};

export default EmployeeCard;
