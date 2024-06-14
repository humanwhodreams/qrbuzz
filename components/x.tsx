import { BsTwitterX } from "react-icons/bs";
import React from "react";
import { cn } from "@/lib/utils";

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

const X = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <BsTwitterX ref={ref} {...props} className={cn("size-4 text-foreground", className)} />
  )
);

X.displayName = "X";
export default X;
