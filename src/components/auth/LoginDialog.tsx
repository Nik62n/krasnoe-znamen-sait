
import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Icon from "@/components/ui/icon";
import { useAuth } from "@/context/AuthContext";

const LoginDialog: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  // Слушаем событие для открытия диалога из других компонентов
  useEffect(() => {
    const handleOpenDialog = () => setIsOpen(true);
    window.addEventListener("open-login-dialog", handleOpenDialog);
    
    return () => {
      window.removeEventListener("open-login-dialog", handleOpenDialog);
    };
  }, []);

  // Сбрасываем форму и ошибки при закрытии диалога
  const handleDialogChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      resetForm();
    }
  };

  const resetForm = () => {
    setShowError(false);
    setUsername("");
    setPassword("");
    setIsLoading(false);
  };

  const handleSubmit = async () => {
    if (isLoading) return;
    
    setIsLoading(true);
    setShowError(false);
    
    try {
      const success = await login(username, password);
      
      if (success) {
        setIsOpen(false);
        resetForm();
      } else {
        setShowError(true);
      }
    } catch (error) {
      setShowError(true);
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleDialogChange}>
      <DialogContent className="sm:max-w-[425px]" onKeyDown={handleKeyDown}>
        <DialogHeader>
          <DialogTitle className="text-center text-[#e32417]">
            Вход в систему
          </DialogTitle>
        </DialogHeader>

        {/* Блок с сообщением об ошибке */}
        {showError && (
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
              disabled={isLoading}
              autoFocus
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
              disabled={isLoading}
            />
          </div>
          <div className="flex justify-center mt-2">
            <Button
              type="button"
              className="bg-[#e32417] hover:bg-red-700"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
                  Вход...
                </>
              ) : (
                "Войти"
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
