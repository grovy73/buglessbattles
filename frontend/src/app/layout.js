import "./globals.css";

import { Anek_Latin } from "next/font/google"

const anek = Anek_Latin(
  {
    subsets: ['latin'],
  }
)

export const metadata = {
  title: "Bugless Battle",
  description: "Bugs happen... Just not here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={anek.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
