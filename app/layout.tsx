import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sancor Salud | Planes de Salud y Asesoramiento",
  description:
  "Asesoramiento personalizado en planes de Sancor Salud. Compará coberturas, beneficios y opciones de prepaga en Argentina. Información clara para elegir tu obra social de forma rápida y sencilla.",
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
