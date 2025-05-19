
import React, { createContext, useContext, useState, ReactNode } from "react";
import { toast } from "@/components/ui/use-toast";

// Тип данных пользователя
export interface User {
  name: string;
  login: string;
}

// Интерфейс для контекста авторизации
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

// Создаем контекст
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Провайдер контекста авторизации
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Функция входа с симуляцией 50% успеха
  const login = async (username: string, password: string): Promise<boolean> => {
    if (!username.trim()) return false;

    // Симуляция задержки сетевого запроса
    await new Promise(resolve => setTimeout(resolve, 500));

    // Симуляция 50% шанса успешной авторизации
    const isSuccess = Math.random() > 0.5;

    if (isSuccess) {
      const newUser = {
        name: username,
        login: username.toLowerCase(),
      };
      
      setUser(newUser);
      
      // Показываем тост с приветствием
      toast({
        title: `Здравствуйте, ${newUser.name}!`,
        description: "Вы успешно вошли в систему",
      });
      
      return true;
    }
    
    return false;
  };

  // Функция выхода из системы
  const logout = () => {
    setUser(null);
    toast({
      title: "Выход из системы",
      description: "Вы успешно вышли из системы",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: Boolean(user),
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Хук для использования контекста авторизации
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
