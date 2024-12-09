import React from "react";
import { TopBar } from "./TopBar";
import { BrandBar } from "./BrandBar";
import { MainNav } from "./MainNav";

export function Navigation() {
  return (
    <header>
      <TopBar />
      <BrandBar />
      <MainNav />
    </header>
  );
}