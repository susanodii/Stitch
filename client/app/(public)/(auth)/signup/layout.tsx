import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Stitch App",
  description:
    "Stitch App is an online market place for fashion designers, to list their products and get hired",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
