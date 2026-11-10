
import { ArrowUpRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ComponentPlayground() {
  return (
    <section className="min-h-screen bg-[#F3F1EC] px-6 py-20 text-[#171717]">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#647C8E]">
          Component Playground
        </p>

        <h1 className="display-font mb-4 text-4xl font-semibold">
          Button Components
        </h1>

        <p className="mb-12 max-w-xl text-sm leading-7 text-[#777777]">
          Exploring shadcn/ui components while preserving the existing
          editorial design system.
        </p>

        <div className="space-y-10">
          <div>
            <h2 className="mb-4 text-sm font-semibold">Variants</h2>
            <div className="flex flex-wrap gap-3">
              <Button>Default</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold">Sizes</h2>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="xs">Extra Small</Button>
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold">With Icons</h2>
            <div className="flex flex-wrap gap-3">
              <Button>
                <Mail />
                Contact Me
              </Button>

              <Button variant="outline">
                Explore Project
                <ArrowUpRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
