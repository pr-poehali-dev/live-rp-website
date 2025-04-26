import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GameNavbar from "@/components/GameNavbar";
import GameFooter from "@/components/GameFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { ArrowLeft, UserCircle, Lock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const [formErrors, setFormErrors] = useState({
    username: "",
    password: ""
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
      rememberMe: checked
    });
  };

  const validateForm = () => {
    let valid = true;
    const errors = {
      username: "",
      password: ""
    };

    if (!formState.username) {
      errors.username = "Введите имя пользователя или email";
      valid = false;
    }

    if (!formState.password) {
      errors.password = "Введите пароль";
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Success - simulate login
      toast({
        title: "Вход выполнен успешно!",
        description: "Добро пожаловать в LIVE RP",
        variant: "default",
      });

      // Redirect after delay
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  const handleForgotPassword = () => {
    toast({
      title: "Восстановление пароля",
      description: "Инструкции по восстановлению пароля отправлены на вашу почту",
      variant: "default",
    });
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
                  Вход в аккаунт
                </CardTitle>
                <CardDescription className="text-center text-gray-300">
                  Войдите в свой аккаунт LIVE RP
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="username" className="text-gray-200">
                        Имя пользователя или Email
                      </Label>
                      <div className="relative">
                        <UserCircle className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Input 
                          id="username"
                          name="username"
                          placeholder="Введите имя пользователя или email"
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
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password" className="text-gray-200">
                          Пароль
                        </Label>
                        <button 
                          type="button" 
                          onClick={handleForgotPassword}
                          className="text-xs text-game-accent hover:underline"
                        >
                          Забыли пароль?
                        </button>
                      </div>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Input 
                          id="password"
                          name="password"
                          type="password"
                          placeholder="Введите пароль"
                          className="pl-10 bg-background"
                          value={formState.password}
                          onChange={handleInputChange}
                        />
                      </div>
                      {formErrors.password && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.password}</p>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="rememberMe" 
                        checked={formState.rememberMe}
                        onCheckedChange={handleCheckboxChange}
                      />
                      <Label htmlFor="rememberMe" className="text-sm text-gray-300">
                        Запомнить меня
                      </Label>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full mt-6 bg-game-accent hover:bg-game-secondary"
                  >
                    Войти
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  
                  <div className="mt-4 text-center text-sm text-gray-300">
                    Нет аккаунта? <Link to="/register" className="text-game-accent hover:underline">Зарегистрироваться</Link>
                  </div>
                </form>
              </CardContent>
              
              <CardFooter className="flex flex-col">
                <div className="relative my-4 w-full">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-border/40"></span>
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="bg-card px-2 text-gray-400">или войти через</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 w-full">
                  <Button variant="outline" className="border-game-accent/30 hover:bg-game-accent/10">
                    <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" className="h-5 w-5 mr-2" alt="Discord" />
                    Discord
                  </Button>
                  <Button variant="outline" className="border-game-accent/30 hover:bg-game-accent/10">
                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" className="h-5 w-5 mr-2" alt="Steam" />
                    Steam
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      
      <GameFooter />
    </div>
  );
};

export default LoginPage;