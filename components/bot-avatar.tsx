import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface BotAvatarProps {
  src: string;
}

const BotAvatar: React.FC<BotAvatarProps> = ({ src }: BotAvatarProps) => {
  return (
    <Avatar className="w-12 h-12">
      <AvatarImage src={src} />
    </Avatar>
  );
};

export default BotAvatar;
