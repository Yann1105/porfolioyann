
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const response = await fetch("https://formspree.io/f/mblyejno", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "I'll get back to you as soon as possible.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "An error occurred while sending your message.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
          Let's stay in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Got a project idea? Got a question? Don't hesitate to contact me to discuss your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
              Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">odgyannboris1105@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">+226 72 55 63 86 | 64 42 82 53</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">Borgho, Ouagadoudou</span>
                </div>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Suivez-moi
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/ouedraogo-yann-boris-b15638273/"
                  className="p-3 bg-slate-800 rounded-lg hover:bg-purple-600 transition-colors duration-200 group"
                >
                  <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </a>
                <a
                  href="https://github.com/Yann1105/"
                  className="p-3 bg-slate-800 rounded-lg hover:bg-cyan-600 transition-colors duration-200 group"
                >
                  <Github className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <Card className="bg-slate-900/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-xl text-white">
              Send me a message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-gray-300">
                  Full name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="bg-slate-800 border-slate-600 text-white focus:border-purple-500"
                    placeholder="Votre nom"
                  />
                </div>

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
                    disabled={isSubmitting}
                    className="bg-slate-800 border-slate-600 text-white focus:border-purple-500"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-300">
                    Message
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    rows={5}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-white focus:outline-none focus:border-purple-500 resize-none disabled:opacity-50"
                    placeholder="Décrivez votre projet ou votre question..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 disabled:opacity-50"
                >
                  <Send className="mr-2" size={16} />
                  {isSubmitting ? "Sending in progress..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
