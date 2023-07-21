import { DataProvider } from "@/Context/dataContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <DataProvider>
        <body>{children}</body>
      </DataProvider>
    </html>
  );
}
