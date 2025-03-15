import "./globals.css";

export const metadata = {
  title: "Bugless Battle",
  description: "Bugs happen... Just not here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
