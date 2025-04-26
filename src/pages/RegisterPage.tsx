import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GameNavbar from "@/components/GameNavbar";
import GameFooter from "@/components/GameFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { ArrowLeft, UserCircle, Lock, Mail, Check, Key } from "lucide-react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "player",
    agreeTerms: false,
    developerKey: ""
  });

  const [formErrors, setFormErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    developerKey: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
    
    // Clear error when typing
    setFormErrors({
      ...formErrors,
      [name]: ""
    });
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormState({
      ...formState,
      agreeTerms: checked
    });
  };

  const handleRadioChange = (value: string) => {
    setFormState({
      ...formState,
      accountType: value
    });
  };

  const validateForm = () => {
    let valid = true;
    const errors = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      developerKey: ""
    };

    if (!formState.username || formState.username.length < 3) {
      errors.username = "Имя пользователя должно содержать минимум 3 символа";
      valid = false;
    }

    if (!formState.email || !/\S+@\S+\.\S+/.test(formState.email)) {
      errors.email = "Введите корректный email";
      valid = false;
    }

    if (!formState.password || formState.password.length < 6) {
      errors.password = "Пароль должен содержать минимум 6 символов";
      valid = false;
    }

    if (formState.password !== formState.confirmPassword) {
      errors.confirmPassword = "Пароли не совпадают";
      valid = false;
    }

    if (formState.accountType === "developer" && (!formState.developerKey || formState.developerKey !== "LIVE-RP-DEV-2025")) {
      errors.developerKey = "Неверный ключ разработчика";
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Success - simulate registration
      toast({
        title: "Регистрация успешна!",
        description: formState.accountType === "developer" 
          ? "Вы зарегистрированы как главный разработчик. Добро пожаловать в команду!" 
          : "Ваш аккаунт успешно создан. Можно приступать к игре!",
        variant: "default",
      });

      // Redirect after delay
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <GameNavbar />
      
      <main className="pt-24 pb-16">
        <div className="container px-4">
          <Link to="/" className="inline-flex items-center text-gray-400 hover:text-game-accent mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Вернуться на главную
          </Link>
          
          <div className="max-w-md mx-auto">
            <Card className="game-card border-game-accent/30">
              <CardHeader>
                <CardTitle className="text-2xl text-center bg-gradient-to-r from-game-accent to-game-light bg-clip-text text-transparent">
                  Регистрация аккаунта
                </CardTitle>
                <CardDescription className="text-center text-gray-300">
                  Создайте аккаунт для входа в игру LIVE RP
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="username" className="text-gray-200">
                        Имя пользователя
                      </Label>
                      <div className="relative">
                        <UserCircle className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Input 
                          id="username"
                          name="username"
                          placeholder="Введите имя пользователя"
                          className="pl-10 bg-background"
                          value={formState.username}
                          onChange={handleInputChange}
                        />
                      </div>
                      {formErrors.username && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.username}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-200">
                        Email
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Input 
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Введите email"
                          className="pl-10 bg-background"
                          value={formState.email}
                          onChange={handleInputChange}
                        />
                      </div>
                      {formErrors.email && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-gray-200">
                        Пароль
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Input 
                          id="password"
                          name="password"
                          type="password"
                          placeholder="Создайте пароль"
                          className="pl-10 bg-background"
                          value={formState.password}
                          onChange={handleInputChange}
                        />
                      </div>
                      {formErrors.password && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.password}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword" className="text-gray-200">
                        Подтверждение пароля
                      </Label>
                      <div className="relative">
                        <Check className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Input 
                          id="confirmPassword"
                          name="confirmPassword"
                          type="password"
                          placeholder="Подтвердите пароль"
                          className="pl-10 bg-background"
                          value={formState.confirmPassword}
                          onChange={handleInputChange}
                        />
                      </div>
                      {formErrors.confirmPassword && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.confirmPassword}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-gray-200">Тип аккаунта</Label>
                      <RadioGroup 
                        defaultValue="player" 
                        value={formState.accountType}
                        onValueChange={handleRadioChange}
                        className="flex gap-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="player" id="player" />
                          <Label htmlFor="player" className="text-gray-300">Игрок</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="developer" id="developer" />
                          <Label htmlFor="developer" className="text-gray-300">Разработчик</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    {formState.accountType === "developer" && (
                      <div className="space-y-2">
                        <Label htmlFor="developerKey" className="text-gray-200">
                          Ключ разработчика
                        </Label>
                        <div className="relative">
                          <Key className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <Input 
                            id="developerKey"
                            name="developerKey"
                            placeholder="Введите ключ разработчика"
                            className="pl-10 bg-background"
                            value={formState.developerKey}
                            onChange={handleInputChange}
                          />
                        </div>
                        {formErrors.developerKey && (
                          <p className="text-red-500 text-sm mt-1">{formErrors.developerKey}</p>
                        )}
                        <p className="text-xs text-gray-400 italic">
                          Подсказка: для демо используйте ключ LIVE-RP-DEV-2025
                        </p>
                      </div>
                    )}
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="terms" 
                        checked={formState.agreeTerms}
                        onCheckedChange={handleCheckboxChange}
                      />
                      <Label htmlFor="terms" className="text-sm text-gray-300">
                        Я принимаю <Link to="#" className="text-game-accent hover:underline">условия использования</Link> и <Link to="#" className="text-game-accent hover:underline">политику конфиденциальности</Link>
                      </Label>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full mt-6 bg-game-accent hover:bg-game-secondary"
                    disabled={!formState.agreeTerms}
                  >
                    Создать аккаунт
                  </Button>
                  
                  <div className="mt-4 text-center text-sm text-gray-300">
                    Уже есть аккаунт? <Link to="/login" className="text-game-accent hover:underline">Войти</Link>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <GameFooter />
    </div>
  );
};

export default RegisterPage;