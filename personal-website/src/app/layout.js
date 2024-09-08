import { Inter } from "next/font/google";
import { Metrophobic } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const metrophobic = Metrophobic({ subsets: ["latin"], weight: '400' });

export const metadata = {
  title: "Grant Goldman",
  description: "Grant Goldman's Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={metrophobic.className}>{children}</body>
    </html>
  );
}
