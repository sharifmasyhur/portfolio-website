import { SignatureIntro } from "@/components/SignatureIntro";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { SelectedWork } from "@/components/SelectedWork";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";

export default function App() {
  // The homepage below is mounted and fully ready from the very first
  // render -- it is never gated behind the intro. SignatureIntro is just
  // an overlay sitting on top (fixed, full-viewport, matching ivory
  // background) that fades itself out; that fade IS the reveal, so the
  // homepage underneath doesn't need any transition of its own.
  return (
    <>
      <SignatureIntro />
      <Navbar />
      <main>
        <Hero />
        <About />
        <SelectedWork />
        <Experience />
        <Education />
        <Contact />
      </main>
    </>
  );
}
