import "./globals.css";
import Link from "next/link";
import "../assets/mdi/css/materialdesignicons.min.css";
import Nav from "@/composants/NavBar/Nav";
export const metadata = {
  title: "Test dev app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Nav />
        <div>{children}</div>
      </body>
    </html>
  );
}
