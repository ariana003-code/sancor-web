import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sancor Salud | Planes de Salud y Asesoramiento",
  description:
    "Asesoramiento personalizado en planes de Sancor Salud. Consultá cobertura, beneficios y descuentos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta
          name="google-site-verification"
          content="JYOUcZsvuo6PDHq-3sB9Sqo3fHyxZpxT5B-aHmhskDw"
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
