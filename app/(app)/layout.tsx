import * as React from "react";

type Props = {
  children: React.ReactNode;
};

export default function ShellLayout({ children }: Props) {
  return <>{children}</>;
}
