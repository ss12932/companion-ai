"use client";

import { Companion } from "@prisma/client";
import ChatMessage from "@/components/chat-message";

interface ChatMessagesProps {
  messages: any[];
  isLoading: boolean;
  companion: Companion;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({
  messages = [],
  isLoading,
  companion,
}) => {
  return (
    <div className="flex-1 overflow-y-auto pr-4">
      <ChatMessage />
    </div>
  );
};

export default ChatMessages;
