import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./Components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Projects",
  description: "Generated a single page project web application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
