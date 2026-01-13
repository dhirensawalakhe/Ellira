import { useState, useCallback } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { toast } from "sonner";
import { Mail, Lock, Eye, EyeOff, User, Sparkles } from "lucide-react";
// import ElliraLogo from "../../assests/Ellira_logo.png";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  email: string;
  password: string;
  confirmPassword?: string;
}

interface FormErrors {
  email?: string;
  password?: string;
  confirmPassword?: string;
  general?: string;
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loginData, setLoginData] = useState<FormData>({ email: "", password: "" });
  const [registerData, setRegisterData] = useState<FormData>({ email: "", password: "", confirmPassword: "" });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = useCallback((data: FormData, isRegister = false): FormErrors => {
    const newErrors: FormErrors = {};

    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(data.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!data.password.trim()) {
      newErrors.password = "Password is required";
    } else if (data.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (isRegister) {
      if (!data.confirmPassword?.trim()) {
        newErrors.confirmPassword = "Please confirm your password";
      } else if (data.password !== data.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    return newErrors;
  }, []);

  const handleInputChange = (
    field: keyof FormData,
    value: string,
    isRegister = false
  ) => {
    const setter = isRegister ? setRegisterData : setLoginData;
    setter(prev => ({ ...prev, [field]: value }));

    // Clear field-specific error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleLogin = async () => {
    const formErrors = validateForm(loginData);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsLoading(true);
    try {
      // TODO: Implement actual login API call
      console.log("Login:", loginData);
      toast.success("Login successful!");
      onClose();
      // Reset form
      setLoginData({ email: "", password: "" });
      setErrors({});
    } catch (error) {
      setErrors({ general: "Login failed. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async () => {
    const formErrors = validateForm(registerData, true);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsLoading(true);
    try {
      // TODO: Implement actual registration API call
      console.log("Register:", registerData);
      toast.success("Registration successful!");
      onClose();
      // Reset form
      setRegisterData({ email: "", password: "", confirmPassword: "" });
      setErrors({});
    } catch (error) {
      setErrors({ general: "Registration failed. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value as "login" | "register");
    setErrors({}); // Clear errors when switching tabs
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[480px] bg-gradient-to-br from-[#0F0F1E] via-[#1A1A2E] to-[#0F0F1E] border-[#C9A961]/40 shadow-2xl">
        <DialogHeader className="text-center pb-2">
          <div className="flex justify-center mb-4">
            <img
              src="/src/assests/Ellira_logo.png"
              alt="Ellira Logo"
              className="w-16 h-16 object-contain"
            />
          </div>
          <DialogTitle className="text-2xl font-bold text-[#F8F6F1] mb-2">
            Welcome to Ellira
          </DialogTitle>
          <p className="text-[#F8F6F1]/70 text-sm">
            {activeTab === "login" ? "Sign in to your account" : "Create your new account"}
          </p>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-[#1A1A2E]/50 border border-[#C9A961]/20 p-1 rounded-lg mb-6">
            <TabsTrigger
              value="login"
              className="text-[#F8F6F1] data-[state=active]:bg-[#C9A961] data-[state=active]:text-[#0F0F1E] transition-all duration-200 rounded-md font-medium"
            >
              <User className="w-4 h-4 mr-2" />
              Login
            </TabsTrigger>
            <TabsTrigger
              value="register"
              className="text-[#F8F6F1] data-[state=active]:bg-[#C9A961] data-[state=active]:text-[#0F0F1E] transition-all duration-200 rounded-md font-medium"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Register
            </TabsTrigger>
          </TabsList>

          {errors.general && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center p-3 rounded-lg mb-4">
              {errors.general}
            </div>
          )}

          <TabsContent value="login" className="space-y-5 mt-0">
            <div className="space-y-3">
              <Label htmlFor="login-email" className="text-[#F8F6F1] font-medium flex items-center">
                <Mail className="w-4 h-4 mr-2 text-[#C9A961]" />
                Email Address
              </Label>
              <div className="relative">
                <Input
                  id="login-email"
                  type="email"
                  placeholder="Enter your email"
                  value={loginData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={`bg-[#1A1A2E]/80 border-[#C9A961]/30 text-[#F8F6F1] placeholder-[#F8F6F1]/50 focus:border-[#C9A961] focus:ring-[#C9A961]/20 h-12 pl-4 pr-4 rounded-lg transition-all duration-200 ${
                    errors.email ? "border-red-400 focus:border-red-400" : ""
                  }`}
                  disabled={isLoading}
                />
              </div>
              {errors.email && (
                <span className="text-red-400 text-sm flex items-center">
                  <span className="w-1 h-1 bg-red-400 rounded-full mr-2"></span>
                  {errors.email}
                </span>
              )}
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <Label htmlFor="login-password" className="text-[#F8F6F1] font-medium flex items-center">
                  <Lock className="w-4 h-4 mr-2 text-[#C9A961]" />
                  Password
                </Label>
                <button
                  type="button"
                  onClick={() => toast.info("Password reset functionality coming soon!")}
                  className="text-[#C9A961] hover:text-[#D4B574] text-sm font-medium transition-colors"
                >
                  Forgot Password?
                </button>
              </div>
              <div className="relative">
                <Input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={loginData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className={`bg-[#1A1A2E]/80 border-[#C9A961]/30 text-[#F8F6F1] placeholder-[#F8F6F1]/50 focus:border-[#C9A961] focus:ring-[#C9A961]/20 h-12 pl-4 pr-12 rounded-lg transition-all duration-200 ${
                    errors.password ? "border-red-400 focus:border-red-400" : ""
                  }`}
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#F8F6F1]/60 hover:text-[#F8F6F1] transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <span className="text-red-400 text-sm flex items-center">
                  <span className="w-1 h-1 bg-red-400 rounded-full mr-2"></span>
                  {errors.password}
                </span>
              )}
            </div>

            <Button
              onClick={handleLogin}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[#C9A961] to-[#D4B574] hover:from-[#D4B574] hover:to-[#C9A961] text-[#0F0F1E] font-semibold h-12 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-[#0F0F1E] border-t-transparent rounded-full animate-spin mr-2"></div>
                  Signing in...
                </div>
              ) : (
                "Sign In"
              )}
            </Button>
          </TabsContent>

          <TabsContent value="register" className="space-y-5 mt-0">
            <div className="space-y-3">
              <Label htmlFor="register-email" className="text-[#F8F6F1] font-medium flex items-center">
                <Mail className="w-4 h-4 mr-2 text-[#C9A961]" />
                Email Address
              </Label>
              <div className="relative">
                <Input
                  id="register-email"
                  type="email"
                  placeholder="Enter your email"
                  value={registerData.email}
                  onChange={(e) => handleInputChange("email", e.target.value, true)}
                  className={`bg-[#1A1A2E]/80 border-[#C9A961]/30 text-[#F8F6F1] placeholder-[#F8F6F1]/50 focus:border-[#C9A961] focus:ring-[#C9A961]/20 h-12 pl-4 pr-4 rounded-lg transition-all duration-200 ${
                    errors.email ? "border-red-400 focus:border-red-400" : ""
                  }`}
                  disabled={isLoading}
                />
              </div>
              {errors.email && (
                <span className="text-red-400 text-sm flex items-center">
                  <span className="w-1 h-1 bg-red-400 rounded-full mr-2"></span>
                  {errors.email}
                </span>
              )}
            </div>

            <div className="space-y-3">
              <Label htmlFor="register-password" className="text-[#F8F6F1] font-medium flex items-center">
                <Lock className="w-4 h-4 mr-2 text-[#C9A961]" />
                Password
              </Label>
              <div className="relative">
                <Input
                  id="register-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  value={registerData.password}
                  onChange={(e) => handleInputChange("password", e.target.value, true)}
                  className={`bg-[#1A1A2E]/80 border-[#C9A961]/30 text-[#F8F6F1] placeholder-[#F8F6F1]/50 focus:border-[#C9A961] focus:ring-[#C9A961]/20 h-12 pl-4 pr-12 rounded-lg transition-all duration-200 ${
                    errors.password ? "border-red-400 focus:border-red-400" : ""
                  }`}
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#F8F6F1]/60 hover:text-[#F8F6F1] transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <span className="text-red-400 text-sm flex items-center">
                  <span className="w-1 h-1 bg-red-400 rounded-full mr-2"></span>
                  {errors.password}
                </span>
              )}
            </div>

            <div className="space-y-3">
              <Label htmlFor="register-confirm-password" className="text-[#F8F6F1] font-medium flex items-center">
                <Lock className="w-4 h-4 mr-2 text-[#C9A961]" />
                Confirm Password
              </Label>
              <div className="relative">
                <Input
                  id="register-confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  value={registerData.confirmPassword || ""}
                  onChange={(e) => handleInputChange("confirmPassword", e.target.value, true)}
                  className={`bg-[#1A1A2E]/80 border-[#C9A961]/30 text-[#F8F6F1] placeholder-[#F8F6F1]/50 focus:border-[#C9A961] focus:ring-[#C9A961]/20 h-12 pl-4 pr-12 rounded-lg transition-all duration-200 ${
                    errors.confirmPassword ? "border-red-400 focus:border-red-400" : ""
                  }`}
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#F8F6F1]/60 hover:text-[#F8F6F1] transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.confirmPassword && (
                <span className="text-red-400 text-sm flex items-center">
                  <span className="w-1 h-1 bg-red-400 rounded-full mr-2"></span>
                  {errors.confirmPassword}
                </span>
              )}
            </div>

            <Button
              onClick={handleRegister}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[#C9A961] to-[#D4B574] hover:from-[#D4B574] hover:to-[#C9A961] text-[#0F0F1E] font-semibold h-12 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-[#0F0F1E] border-t-transparent rounded-full animate-spin mr-2"></div>
                  Creating account...
                </div>
              ) : (
                "Create Account"
              )}
            </Button>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
