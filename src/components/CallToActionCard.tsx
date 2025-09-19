import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
interface CallToActionCardProps {
  title: string;
  description: string;
  statusText: string;
  buttonText: string;
  buttonLink: string;
  className?: string;
}
const CallToActionCard = ({
  title,
  description,
  statusText,
  buttonText,
  buttonLink,
  className = ""
}: CallToActionCardProps) => {
  return <div className={`space-y-4 ${className}`}>
      <div className="gaming-border card-shadow p-6 rounded-lg text-center">
        <h3 className="text-base font-semibold mb-2">{title}</h3>
        
        <div className="flex items-center justify-center gap-2 text-green-400 mb-3">
          <CheckCircle className="w-3 h-3" />
          <span className="text-xs">{statusText}</span>
        </div>
      </div>
      
      <Link to={buttonLink} className="block">
        <Button className="w-full bg-gradient-to-r from-accent via-primary-glow to-primary text-primary-foreground">
          {buttonText}
        </Button>
      </Link>
    </div>;
};
export default CallToActionCard;