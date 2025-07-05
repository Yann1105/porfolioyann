
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, LogOut, Mail, User, Clock, MessageSquare } from "lucide-react";

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  status: 'unread' | 'read' | 'archived';
  created_at: string;
}

const Admin = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const { user, signOut } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/auth");
      return;
    }
    
    fetchMessages();
  }, [user, navigate]);

  const fetchMessages = async () => {
    try {
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setMessages(data || []);
    } catch (error) {
      console.error('Error fetching messages:', error);
      toast({
        title: "Erreur",
        description: "Impossible de charger les messages",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateMessageStatus = async (id: string, status: 'read' | 'archived') => {
    try {
      const { error } = await supabase
        .from('contact_messages')
        .update({ status, updated_at: new Date().toISOString() })
        .eq('id', id);

      if (error) throw error;

      setMessages(messages.map(msg => 
        msg.id === id ? { ...msg, status } : msg
      ));

      toast({
        title: "Statut mis à jour",
        description: `Message marqué comme ${status === 'read' ? 'lu' : 'archivé'}`,
      });
    } catch (error) {
      console.error('Error updating message:', error);
      toast({
        title: "Erreur",
        description: "Impossible de mettre à jour le message",
        variant: "destructive",
      });
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'unread':
        return <Badge variant="destructive">Non lu</Badge>;
      case 'read':
        return <Badge variant="secondary">Lu</Badge>;
      case 'archived':
        return <Badge variant="outline">Archivé</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-purple-400" />
      </div>
    );
  }

  const unreadCount = messages.filter(msg => msg.status === 'unread').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Dashboard <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Admin</span>
            </h1>
            <p className="text-gray-300">
              Bienvenue, {user?.email} • {messages.length} messages • {unreadCount} non lus
            </p>
          </div>
          <div className="flex gap-4">
            <Button
              onClick={() => navigate("/")}
              variant="outline"
              className="border-slate-600 text-gray-300 hover:bg-slate-800"
            >
              Voir le portfolio
            </Button>
            <Button
              onClick={handleSignOut}
              variant="outline"
              className="border-slate-600 text-gray-300 hover:bg-slate-800"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Déconnexion
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-slate-900/50 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center">
                <MessageSquare className="h-8 w-8 text-purple-400" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-300">Total Messages</p>
                  <p className="text-2xl font-bold text-white">{messages.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-slate-900/50 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center">
                <Mail className="h-8 w-8 text-red-400" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-300">Non lus</p>
                  <p className="text-2xl font-bold text-white">{unreadCount}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-slate-900/50 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center">
                <User className="h-8 w-8 text-green-400" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-300">Lus</p>
                  <p className="text-2xl font-bold text-white">{messages.filter(msg => msg.status === 'read').length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Messages */}
        <div className="space-y-4">
          {messages.length === 0 ? (
            <Card className="bg-slate-900/50 border-slate-700">
              <CardContent className="p-8 text-center">
                <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-300 text-lg">Aucun message pour le moment</p>
                <p className="text-gray-500 text-sm">Les messages de contact apparaîtront ici</p>
              </CardContent>
            </Card>
          ) : (
            messages.map((message) => (
              <Card key={message.id} className="bg-slate-900/50 border-slate-700">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-white text-lg">
                        {message.name}
                      </CardTitle>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-purple-400">{message.email}</span>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Clock className="h-4 w-4 mr-1" />
                          {formatDate(message.created_at)}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {getStatusBadge(message.status)}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4 whitespace-pre-wrap">
                    {message.message}
                  </p>
                  <div className="flex gap-2">
                    {message.status === 'unread' && (
                      <Button
                        size="sm"
                        onClick={() => updateMessageStatus(message.id, 'read')}
                        className="bg-purple-600 hover:bg-purple-700"
                      >
                        Marquer comme lu
                      </Button>
                    )}
                    {message.status !== 'archived' && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateMessageStatus(message.id, 'archived')}
                        className="border-slate-600 text-gray-300 hover:bg-slate-800"
                      >
                        Archiver
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(`mailto:${message.email}?subject=Re: Votre message`)}
                      className="border-slate-600 text-gray-300 hover:bg-slate-800"
                    >
                      Répondre
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
