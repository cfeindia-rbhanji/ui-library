import * as React from "react";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardContent,
//   CardFooter,
// } from "../ui/card";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";
import { cn } from "@/lib/utils";

interface KPISectionProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
  footerContent?: React.ReactNode;
  className?: string;
  headerClassName?: string;
  contentClassName?: string;
  footerClassName?: string;
}

const KPISection: React.FC<KPISectionProps> = ({
  title,
  description,
  children,
  footerContent,
  className,
  headerClassName,
  contentClassName,
  footerClassName,
}) => {
  return (
    <Card className={cn("shadow-none", className)}>
      <CardHeader className={cn("border-b p-6", headerClassName)}>
        <CardTitle>{title}</CardTitle>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </CardHeader>
      <CardContent className={cn("p-6 pt-6", contentClassName)}>
        {children}
      </CardContent>
      {footerContent && (
        <CardFooter className={footerClassName}>{footerContent}</CardFooter>
      )}
    </Card>
  );
};

export default KPISection;
