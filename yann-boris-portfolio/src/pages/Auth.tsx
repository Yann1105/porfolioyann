
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { Loader2 } from "lucide-react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
  });
  
  const { signIn, signUp } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isLogin) {
        const { error } = await signIn(formData.email, formData.password);
        if (error) throw error;
        
        toast({
          title: "Connexion réussie",
          description: "Bienvenue dans l'administration !",
        });
        navigate("/admin");
      } else {
        const { error } = await signUp(formData.email, formData.password, formData.fullName);
        if (error) throw error;
        
        toast({
          title: "Compte créé",
          description: "Vérifiez votre email pour confirmer votre compte.",
        });
      }
    } catch (error: any) {
      console.error("Auth error:", error);
      toast({
        title: "Erreur",
        description: error.message || "Une erreur est survenue",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-slate-900/50 border-slate-700">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-white text-center">
            {isLogin ? "Connexion Admin" : "Créer un compte"}
          </CardTitle>
          <CardDescription className="text-gray-400 text-center">
            {isLogin 
              ? "Connectez-vous pour accéder au dashboard"
              : "Créez votre compte administrateur"
            }
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <Label htmlFor="fullName" className="text-gray-300">
                  Nom complet
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required={!isLogin}
                  className="bg-slate-800 border-slate-600 text-white"
                  placeholder="Votre nom complet"
                />
              </div>
            )}
            
            <div>
              <Label htmlFor="email" className="text-gray-300">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-slate-800 border-slate-600 text-white"
                placeholder="admin@example.com"
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-gray-300">
                Mot de passe
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="bg-slate-800 border-slate-600 text-white"
                placeholder="••••••••"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isLogin ? "Se connecter" : "Créer le compte"}
            </Button>
          </form>

          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-purple-400 hover:text-purple-300 text-sm"
            >
              {isLogin 
                ? "Besoin de créer un compte ?" 
                : "Déjà un compte ? Se connecter"
              }
            </button>
          </div>
          
          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="text-gray-400 hover:text-gray-300 text-sm"
            >
              Retour au portfolio
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
