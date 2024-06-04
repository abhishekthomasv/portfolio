"use client";

import { techStack } from "@/data";

import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="pt-20 rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={techStack} direction="right" speed="slow" />
    </div>
  );
}
