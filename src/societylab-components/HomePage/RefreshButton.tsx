import React from "react";
import { RefreshCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface RefreshButtonProps {
  onClick?: () => void;
  isSpinning?: boolean;
  isLoadingOverlay?: boolean;
  className?: string;
  iconSize?: number;
  position?: string; // e.g., "bottom-6 right-6"
}

const RefreshButton: React.FC<RefreshButtonProps> = ({
  onClick,
  isSpinning = false,
  isLoadingOverlay = false,
  className = "",
  iconSize = 20,
  position = "bottom-50 right-50",
}) => {
  return (
    <div className={cn("fixed z-50", position)}>
      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={onClick}
        className={cn(
          "relative h-12 w-12 rounded-full shadow-lg transition-all hover:shadow-xl",
          className
        )}
      >
        <RefreshCcw
          className={cn(isSpinning && "animate-spin")}
          size={iconSize}
        />

        {isLoadingOverlay && (
          <span className="bg-background/80 absolute inset-0 flex items-center justify-center rounded-full">
            <div className="h-2 w-2 animate-ping rounded-full bg-primary" />
          </span>
        )}
      </Button>
    </div>
  );
};

export default RefreshButton;
