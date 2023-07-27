import Cover from "@/components/landing/cover/cover";
import Emilia from "@/components/landing/emilia/emilia";
import Reveal from "@/components/landing/reveal/reveal";

export default function Home() {
  return (
    <main>
      <Cover />
      <Emilia />
      <Reveal />
    </main>
  );
}

export const metadata = {
  title: "LIPS LOVE",
  description: "A makeup web-app created by Nextjs 13",
};
