import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./Components/Nav";

export const metadata = {
  title: "Projects",
  description: "Generated a single page project web application",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

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
