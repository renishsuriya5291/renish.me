import Image from 'next/image';
import './globals.css';

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gray-100 text-gray-800 font-serif">
        <div className="max-w-5xl mx-auto p-6">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
