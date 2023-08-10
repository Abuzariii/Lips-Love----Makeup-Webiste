import Cover from "@/components/landing/cover/cover";
import Emilia from "@/components/landing/emilia/emilia";
import Reveal from "@/components/landing/reveal/reveal";
import Lipsticks from "@/components/landing/lipsticks/lipsticks";
import Footer from "@/components/landing/footer/footer";

export default function Home() {
  return (
    <>
      <Cover />
      <Emilia />
      <Reveal />
      <Lipsticks />
      <Footer />
    </>
  );
}

export const metadata = {
  title: "LIPS LOVE",
  description:
    "A full stack e-commerce makeup web application built using Nextjs 13",
};
