import React from "react";
import { Container } from "@material-ui/core";

export default function ContentLayout({ className, children }: any) {
  return (
    <section>
      <Container maxWidth="lg" className={className}>
        {children}
      </Container>
    </section>
  );
}
