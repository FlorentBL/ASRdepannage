import { Phone } from "lucide-react";
import { type ButtonProps } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CtaButtonProps extends ButtonProps {
  href: string;
  children: React.ReactNode;
}

const CtaButton = ({ href, children, className, ...props }: CtaButtonProps) => {
  return (
    <Button
      size="lg"
      className={cn(
        "gradient-yellow hover:shadow-button transition-bounce text-base sm:text-lg font-inter font-bold px-4 sm:px-8 py-4",
        className
      )}
      asChild
      {...props}
    >
      <a href={href} className="flex items-center space-x-3">
        <Phone className="h-6 w-6 flex-shrink-0" />
        <span>{children}</span>
      </a>
    </Button>
  );
};

export { CtaButton };
