import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Send, Bot, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const Chatbot = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm AquaChat, your water health assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(inputMessage);
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: "bot",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputMessage("");
  };

  const generateBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes("contamination") || input.includes("water quality")) {
      return "Water contamination levels in your area are currently at 45%. I recommend boiling water before consumption and using water purification tablets. Would you like specific guidance for your location?";
    }
    
    if (input.includes("symptom") || input.includes("sick") || input.includes("pain")) {
      return "I understand you're experiencing symptoms. Common waterborne illness symptoms include nausea, vomiting, and diarrhea. Please consult a healthcare provider if symptoms persist. Would you like me to help you find nearby medical facilities?";
    }
    
    if (input.includes("prevention") || input.includes("avoid")) {
      return "To prevent waterborne diseases: 1) Boil water for 1 minute before drinking 2) Wash hands frequently 3) Avoid raw foods 4) Use bottled water when possible. Need more specific prevention tips?";
    }
    
    if (input.includes("emergency") || input.includes("help")) {
      return "For medical emergencies, call 108 immediately. For non-emergency health concerns, I can help you find nearby healthcare facilities or provide general health guidance. What specific help do you need?";
    }

    if (input.includes("report") || input.includes("test")) {
      return "You can get your personalized health report by visiting the Dashboard and selecting symptoms you're experiencing. This will help assess your risk level. Would you like me to guide you through the process?";
    }
    
    return "I'm here to help with water quality concerns, health symptoms, and prevention tips. Could you please be more specific about what you'd like to know? I can assist with contamination data, health reports, or general water safety guidance.";
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm p-4 flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate(-1)}
          className="mr-3"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center mr-3">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-foreground">AquaChat</h1>
            <p className="text-xs text-green-600">Online</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                message.sender === "user"
                  ? "bg-gradient-primary text-white"
                  : "bg-white shadow-sm border"
              }`}
            >
              <div className="flex items-start space-x-2">
                {message.sender === "bot" && (
                  <Bot className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                )}
                <div className="flex-1">
                  <p className="text-sm">{message.text}</p>
                  <p 
                    className={`text-xs mt-1 ${
                      message.sender === "user" 
                        ? "text-white/70" 
                        : "text-muted-foreground"
                    }`}
                  >
                    {formatTime(message.timestamp)}
                  </p>
                </div>
                {message.sender === "user" && (
                  <User className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                )}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="bg-white border-t p-4">
        <form onSubmit={handleSendMessage} className="flex space-x-2">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Ask about water quality, symptoms, or health tips..."
            className="flex-1"
          />
          <Button type="submit" size="icon" className="bg-gradient-primary">
            <Send className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;