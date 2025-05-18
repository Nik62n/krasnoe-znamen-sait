import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Icon from "@/components/ui/icon";

const Layout: React.FC = () => {
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const [showLoginError, setShowLoginError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Показываем сообщение об ошибке
    setShowLoginError(true);

    // Если хотите, можете добавить автоматическое скрытие сообщения через некоторое время
    // setTimeout(() => setShowLoginError(false), 5000);
  };

  // Сбрасываем форму и ошибки при закрытии диалога
  const handleDialogChange = (open: boolean) => {
    setLoginDialogOpen(open);
    if (!open) {
      setShowLoginError(false);
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Навигация */}
      <aside className="w-52 bg-gray-50 p-3 shadow-md">
        <div className="flex flex-col space-y-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn(
                "py-2 px-4 rounded-full text-white font-medium bg-[#e32417] hover:bg-red-700 transition-colors text-center",
                isActive && "bg-red-700 shadow-md",
              )
            }
          >
            Общее
          </NavLink>
          <NavLink
            to="/vacancies"
            className={({ isActive }) =>
              cn(
                "py-2 px-4 rounded-full text-white font-medium bg-[#e32417] hover:bg-red-700 transition-colors text-center",
                isActive && "bg-red-700 shadow-md",
              )
            }
          >
            Вакансии
          </NavLink>
          <NavLink
            to="/benefits"
            className={({ isActive }) =>
              cn(
                "py-2 px-4 rounded-full text-white font-medium bg-[#e32417] hover:bg-red-700 transition-colors text-center",
                isActive && "bg-red-700 shadow-md",
              )
            }
          >
            Преимущества
          </NavLink>
          <NavLink
            to="/events"
            className={({ isActive }) =>
              cn(
                "py-2 px-4 rounded-full text-white font-medium bg-[#e32417] hover:bg-red-700 transition-colors text-center",
                isActive && "bg-red-700 shadow-md",
              )
            }
          >
            События
          </NavLink>

          {/* Новая кнопка Войти */}
          <Button
            onClick={() => handleDialogChange(true)}
            className="mt-4 py-2 px-4 rounded-full text-white font-medium bg-gray-700 hover:bg-gray-800 transition-colors text-center"
          >
            Войти
          </Button>
        </div>
      </aside>

      {/* Основной контент */}
      <div className="flex-1">
        {/* Хедер с логотипом */}
        <header className="bg-white py-3 px-4 shadow-md">
          <div className="container mx-auto text-center">
            <img
              src="https://yandex-images.clstorage.net/5vnsC5150/8e1b4f4RtB/xy0SVkO1Ba3i7hQgqaPqAmimGsu0g2es9s0rcFEP70MWwsK1FYp9-zWpUkkzgdvAXQh-3rKz1yn-sH9rYuMGFIl8UwYB60Kt5_pfKuW55hJ96geIocF-qPGUJyBsaZxmMaW11Wj4B9R9_gkdZJ_Eh00xRcako6BwsfcgXmCXenHzIyptXrRBiOTkbhurtfsjRuAA-ILieNXL4V1HYWSfSAmptMBz2TrqcvguPWqsgYVpN1itsZKmV7_gIWRYp0BVxw8LQmeTX7XDznwUnbTrEEjeMeih5Gre29pHQXZQlXInkqzLdvcd_W7pJhtmkIiPcgxOvrCtrW6B9QJRY497cMEaD1pHvlKF7c1RL4Gc-Cx_7ALCguhU2c3TemRde4xdBq2dwHDuAd1F1T0sZZG-h2wlU7KFgLV7r8MsRUymU3j8IgtvWIdstcrHQBiCmM8if-8HxJbBXvnRxVdAXF-ufza3kOh02iX8VfEWLEmiorx3HECwprmTXLnoD1Jmp39I-TsCQEW8Uars02Auu6fUPUTCHdeX2kPS19lbWGRljE0buKn_W94a-UDMIAp3kY2TTyBQjqOAq3eI0yNYa4BXRNQvB3hYoHmpxNRdLpGO-ypm6h3ljeFq1c3Ce2FYUq9dF5-b_3HXCu9hyzMOZLK9vFQod6mwvq9HmvIOUWmIZU7ABC9-UIRbpuPNaD2htcgtdc8A7ajtZvDS-HNDYGWfZBK4k8ZO8yjuUtQ9KlORhqZrI2ithLmoXafoEF98q35m4CEqT1-pf4jw5HkyhZT9PWHDBsilxHr92s9DfERcqm82qrDwcNUg7E3OIANztIedVy1YhbmEqG6Z8yBVe4ZlaNAENU5dlV6H6_JVCZur5Qp15Db-pORN0tffdX5VZ5ZDP7Kg0XLPBtZr2gI9aoyHl20LdqOhgIFtjcc_Z1SPcGbeNS98a7JumO3-TDaqh-kfdcER2ovOQfjc7lBVYWM"
              alt="Завод «КРАСНОЕ ЗНАМЯ» основан в 1918 г."
              className="max-w-full h-auto mx-auto max-h-24"
            />
          </div>
        </header>

        {/* Контент страницы */}
        <main className="min-h-fit">
          <Outlet />
        </main>
      </div>

      {/* Модальное окно входа */}
      <Dialog open={loginDialogOpen} onOpenChange={handleDialogChange}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center text-[#e32417]">
              Вход в систему
            </DialogTitle>
          </DialogHeader>

          {/* Блок с сообщением об ошибке */}
          {showLoginError && (
            <Alert variant="destructive" className="mb-3">
              <Icon name="AlertCircle" className="h-4 w-4" />
              <AlertDescription>
                Ошибка при входе, проверьте логин и пароль.
              </AlertDescription>
            </Alert>
          )}

          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="login" className="text-right">
                Логин:
              </Label>
              <Input
                id="login"
                className="col-span-3"
                placeholder="Введите логин"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="password" className="text-right">
                Пароль:
              </Label>
              <Input
                id="password"
                type="password"
                className="col-span-3"
                placeholder="Введите пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-center mt-2">
              <Button
                type="button"
                className="bg-[#e32417] hover:bg-red-700"
                onClick={handleLogin}
              >
                Войти
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Layout;
