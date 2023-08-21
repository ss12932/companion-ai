"use client";

import { useToast } from "@/components/ui/use-toast";
import { useTheme } from "next-themes";

export interface ChatMessageProps {
  role: "system" | "user";
  content?: string;
  isLoading: boolean;
  src?: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  role,
  content,
  isLoading,
  src,
}) => {
  const { toast } = useToast();
  const { theme } = useTheme();
  const onCopy = () => {
    if (!content) return;
    navigator.clipboard.writeText(content);
    toast({
      description: "Copied to clipboard.",
    });
  };
  return <div>ChatMessage</div>;
};

export default ChatMessage;
