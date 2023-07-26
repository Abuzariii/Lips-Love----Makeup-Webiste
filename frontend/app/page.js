import Cover from "@/components/landing/cover/cover";
import Emilia from "@/components/landing/emilia/emilia";

export default function Home() {
  return (
    <main>
      <Cover />
      <Emilia />
    </main>
  );
}

export const metadata = {
  title: "LIPS LOVE",
  description: "A makeup web-app created by Nextjs 13",
};
