import * as React from "react";
import { Header } from "@/components/shared/header";

export default function AppLayout(props: Readonly<LayoutProps<"/">>) {
  return (
    <React.Fragment>
      <Header />
      {props.children}
    </React.Fragment>
  );
}
