import Fetch from "@/components/Fetch";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Abuzar</h1>
      <Link href={"/about"}>To About</Link>
      <br />
      <br />
      <Fetch />
    </main>
  );
}

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};