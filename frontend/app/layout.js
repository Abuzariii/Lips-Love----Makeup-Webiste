import { DataProvider } from "@/Context/dataContext";
import "../Styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <DataProvider>
        <body>{children}</body>
      </DataProvider>
    </html>
  );
}
