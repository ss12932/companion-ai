"use client";

import { Companion } from "@prisma/client";
import ChatMessage, { ChatMessageProps } from "@/components/chat-message";

interface ChatMessagesProps {
  messages: ChatMessageProps[];
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
      <ChatMessage
        src={companion.src}
        role="system"
        content={`Hello I am ${companion.name}, ${companion.description}`}
      />
      <ChatMessage
        role="user"
        content={`Hello I am ${companion.name}, ${companion.description}`}
      />
    </div>
  );
};

export default ChatMessages;
