import React from "react";
import { cn } from "@/lib/utils";
import { FiGithub } from "react-icons/fi";

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

const GitHub = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <FiGithub ref={ref} {...props} className={cn("size-4 text-foreground", className)}/>    
  )
);

GitHub.displayName = "GitHub";
export default GitHub;
