import React from "react";
import Logo from "../_components/Logo";
import Nav from "../_components/Nav";
import Container from "@/components/container";

function Header() {
  return (
    <header className="bg-white w-full py-8 shadow-md fixed top-0 z-10">
      <Container>
        <section className="flex justify-between">
          <div className="flex lg:gap-40">
            <Logo />
            <Nav />
          </div>
          <div className="w-auto">User menu</div>
        </section>
      </Container>
    </header>
  );
}

export default Header;
