import { Card, CardContent } from "@/components/ui/card";
import { Truck, ShieldCheck, RefreshCcw } from "lucide-react";

export function InfoBanners() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="flex items-center gap-3 p-4">
            <Truck className="h-5 w-5 text-primary" />
            <p className="text-sm font-medium">Fast & Reliable Delivery</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center gap-3 p-4">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <p className="text-sm font-medium">Verified Vendors Only</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center gap-3 p-4">
            <RefreshCcw className="h-5 w-5 text-primary" />
            <p className="text-sm font-medium">Easy Returns & Refunds</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
