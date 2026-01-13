import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");

  const handleLogin = () => {
    // TODO: Implement login logic
    console.log("Login:", loginEmail, loginPassword);
    onClose();
  };

  const handleRegister = () => {
    // TODO: Implement register logic
    console.log("Register:", registerEmail, registerPassword);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-[#0F0F1E] border-[#C9A961]/30">
        <DialogHeader>
          <DialogTitle className="text-[#F8F6F1]">Welcome to Ellira</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-[#1A1A2E]">
            <TabsTrigger value="login" className="text-[#F8F6F1]">Login</TabsTrigger>
            <TabsTrigger value="register" className="text-[#F8F6F1]">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="login" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="login-email" className="text-[#F8F6F1]">Email</Label>
              <Input
                id="login-email"
                type="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="bg-[#1A1A2E] border-[#C9A961]/30 text-[#F8F6F1]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="login-password" className="text-[#F8F6F1]">Password</Label>
              <Input
                id="login-password"
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="bg-[#1A1A2E] border-[#C9A961]/30 text-[#F8F6F1]"
              />
            </div>
            <Button onClick={handleLogin} className="w-full bg-[#C9A961] hover:bg-[#D4B574] text-[#0F0F1E]">
              Login
            </Button>
          </TabsContent>
          <TabsContent value="register" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="register-email" className="text-[#F8F6F1]">Email</Label>
              <Input
                id="register-email"
                type="email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                className="bg-[#1A1A2E] border-[#C9A961]/30 text-[#F8F6F1]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="register-password" className="text-[#F8F6F1]">Password</Label>
              <Input
                id="register-password"
                type="password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                className="bg-[#1A1A2E] border-[#C9A961]/30 text-[#F8F6F1]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="register-confirm-password" className="text-[#F8F6F1]">Confirm Password</Label>
              <Input
                id="register-confirm-password"
                type="password"
                value={registerConfirmPassword}
                onChange={(e) => setRegisterConfirmPassword(e.target.value)}
                className="bg-[#1A1A2E] border-[#C9A961]/30 text-[#F8F6F1]"
              />
            </div>
            <Button onClick={handleRegister} className="w-full bg-[#C9A961] hover:bg-[#D4B574] text-[#0F0F1E]">
              Register
            </Button>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
