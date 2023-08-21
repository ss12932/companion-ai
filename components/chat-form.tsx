"use client";
import { ChatRequestOptions } from "ai";
import { ChangeEvent, FormEvent } from "react";

interface ChatFormProps {
  input: string;
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onSubmit: (
    e: FormEvent<HTMLFormElement>,
    chatRequestOptions?: ChatRequestOptions | undefined
  ) => void;
  isLoading: boolean;
}

const ChatForm = ({}: ChatFormProps) => {
  return <div>Chat Form</div>;
};

export default ChatForm;
