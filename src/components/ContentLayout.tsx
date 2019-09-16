import React from "react";
import { Container } from "@material-ui/core";

export default function ContentLayout({ className, children }: any) {
  return (
    <section className={className}>
      <Container maxWidth="lg">{children}</Container>
    </section>
  );
}
