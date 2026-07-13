import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Buy Latest Indian Ethnic Wear for Women, Men and Kids in USA and Worldwide | Utsav Fashion",
  description: "Shop trending sarees, lehengas, salwar kameez, kurta pajama, dhoti, sherwani, nehru jackets for festivals, weddings, parties, and special occasions. Get express delivery to the USA, UK, India, Australia and Worldwide.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
