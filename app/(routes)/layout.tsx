import React from "react";

export default function AppLayout(props: Readonly<LayoutProps<"/">>) {
  return <React.Fragment>{props.children}</React.Fragment>;
}
