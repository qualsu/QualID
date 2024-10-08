import "./globals.css";
import "./scroll.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Header } from "./component/header";
import { dark } from '@clerk/themes'
import { Footer } from "./component/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qual ID",
  description: "Единый аккаунт для всех",
  icons: {
    icon: 'https://id.qual.su/_next/static/media/ID.7c4a7838.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="ru">
        <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY} appearance={{
          baseTheme: dark,
        }}>
          <body>
            <Header/>
            {children}
            <Footer/>
          </body>
        </ClerkProvider>
      </html>
  );
}
