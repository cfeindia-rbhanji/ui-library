// Page Component
//
// This components allows to wrap the page content in two variants container and full width
//
// @component
// @example
// Basic usage - by default all the content will be in container
//    <Page>YOUR CONTENT HERE</Page>
// OR <Page variant="container">YOUR CONTENT HERE</Page>
//
// Full width usage - All the content will be full width without spacing
//   <Page variant="full-width">YOUR CONTENT HERE</Page>
//
import React from "react";
import { cn } from "@/lib/utils";
interface PageProps {
  className?: string;
  children: React.ReactNode;
  variant?: "container" | "full-width"; // Optional prop to specify the layout
}

const Page: React.FC<PageProps> = ({
  children,
  variant = "container",
  className,
}) => {
  return (
    <main
      className={cn(
        `page w-full py-20 lg:py-8 ${
          variant === "container" && `containerPadding container`
        }`,
        className
      )}
    >
      {children}
    </main>
  );
};

export default Page;
