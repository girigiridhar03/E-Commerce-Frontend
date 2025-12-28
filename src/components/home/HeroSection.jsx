import React from "react";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section className="bg-muted">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight">
          Buy Quality Products from Trusted Vendors
        </h1>

        <p className="mt-4 max-w-xl text-muted-foreground">
          ShopNest connects you with verified sellers, seamless checkout, and
          reliable delivery.
        </p>

        <div className="mt-6">
          <Button size="lg">Browse Products</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
