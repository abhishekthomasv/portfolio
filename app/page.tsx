"use client";

import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import InfiniteMovingCardsDemos from "@/components/InfiniteMovingCardsMain";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import IconButton from "@/components/ui/IconButton";
import { navItems } from "@/data";
import { IoDocumentText } from "react-icons/io5";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
      <div className="max-w-auto w-full">
        <a
          className="fixed top-4 right-4 z-10"
          href="https://drive.google.com/drive/folders/1depMjckkRL1bZim_HLjKs16_q7PjRO14"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton text="Resume">
            <IoDocumentText size={40} color="#93c5fd" />
          </IconButton>
        </a>
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <InfiniteMovingCardsDemos />
        <Footer />
      </div>
    </main>
  );
}
