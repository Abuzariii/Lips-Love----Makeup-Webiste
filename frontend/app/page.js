import Cover from "@/components/landing/cover/cover";

export default function Home() {
  return (
    <main>
      <Cover />
      <div
        style={{
          height: "30vh",
          width: "100%",
          background: "white",
          marginTop: "30px",
        }}
      ></div>
    </main>
  );
}

export const metadata = {
  title: "LIPS LOVE",
  description: "A makeup web-app created by Nextjs 13",
};
