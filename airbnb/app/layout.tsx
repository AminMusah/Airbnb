import "./globals.css";
import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./components/providers/ToastProvider";
import AuthProvider from "./components/providers/AuthProvider";
import LoginModal from "./components/modals/LoginModal";
import UserProvider from "./context/UserContext";
import RentModal from "./components/modals/RentModal";
const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb",
  description: "Aibnb",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <UserProvider>
          <AuthProvider>
            <ToasterProvider />
            <LoginModal />
            <RegisterModal />
            <RentModal />
            <Navbar />
            {children}
          </AuthProvider>
        </UserProvider>
      </body>
    </html>
  );
}
