import { Button } from "@/components/globals/atoms/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/globals/atoms/card";
import { Input } from "@/components/globals/atoms/input";
import { Label } from "@/components/globals/atoms/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/globals/atoms/tabs";
import { useAuth } from "@/contexts/AuthContext";
import { loginUserSchema, LoginUserType } from "@/schemas/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserType>({
    resolver: zodResolver(loginUserSchema),
    defaultValues: {
      email: "asd@gmail.com",
      password: "123As@",
    },
  });

  const onSubmit = async (data: LoginUserType) => {
    setIsLoading(true);

    console.log(JSON.stringify(data, null, 2));

    try {
      const finalData = data;

      login(finalData.email, finalData.password);
      navigate("/home");
    } catch (error) {
      console.error("Lỗi khi đăng nhập:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>

        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Make changes to your login here. Click save when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Nhập email"
                    {...register("email")}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 ml-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <div className="space-y-2">
                  <Label htmlFor="password">Mật khẩu</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={isVisible ? "text" : "password"}
                      placeholder="Nhập mật khẩu"
                      {...register("password")}
                    />
                    <button
                      className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 cursor-pointer items-center justify-center rounded-e-md transition-all duration-300 outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                      type="button"
                      onClick={toggleVisibility}
                      aria-label={isVisible ? "Hide password" : "Show password"}
                      aria-pressed={isVisible}
                      aria-controls="password"
                    >
                      {isVisible ? (
                        <EyeOff size={16} aria-hidden="true" />
                      ) : (
                        <Eye size={16} aria-hidden="true" />
                      )}
                    </button>
                  </div>
                </div>
                {errors.password && (
                  <p className="mt-1 ml-1 text-sm text-red-600">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex w-full justify-end">
              <Button
                type="submit"
                disabled={isLoading}
                size="lg"
                className="mt-2 w-full"
                onClick={handleSubmit(onSubmit)}
              >
                {isLoading ? "Loading..." : "Login"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="register">
          <Card>
            <CardHeader>
              <CardTitle>Register</CardTitle>
              <CardDescription>
                Change your register here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current">Current register</Label>
                <Input id="current" type="register" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new">New register</Label>
                <Input id="new" type="register" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save register</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default LoginPage;
