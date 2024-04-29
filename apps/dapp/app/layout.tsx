import './global.css';
export const metadata = {
  title: 'Welcome to demo app',
  description: 'Generated by create-nx-workspace',
};
import localFont from 'next/font/local';
const myFont = localFont({
  src: [
    {
      path: '../fonts/gilroy-regular-webfont.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/gilroy-light-webfont.woff2',
      weight: '300',
      style: 'light',
    },
    {
      path: '../fonts/gilroy-medium-webfont.woff2',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../fonts/gilroy-black-webfont.woff2',
      weight: '700',
      style: 'bold',
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        {children}
      </body>
    </html>
  );
}
