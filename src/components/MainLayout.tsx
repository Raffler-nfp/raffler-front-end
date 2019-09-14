import React from "react";
import { Container } from "@material-ui/core";

export default function MainLayout({ className, children }: any) {
  return (
    <section>
      <Container maxWidth="xl" className={className}>
        {children}
      </Container>
    </section>
  );
}
