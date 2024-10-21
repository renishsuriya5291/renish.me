import Image from 'next/image';
import './globals.css'; // Adjust path as needed


const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <header className="flex flex-col items-center bg-blue-600 text-white py-6">
          <h1 className="text-5xl font-bold mb-4">Renish Suriya</h1>
          <div className="relative w-32 h-32 mb-4 overflow-hidden rounded-full border-4 border-white shadow-lg">
            <Image
              src="/images/renish.jpg" // Path to your image in the public folder
              alt="Renish Suriya"
              layout="fill"
              objectFit="cover" // Maintain the aspect ratio while covering the container
              className="rounded-full transition-transform duration-300 hover:scale-110"
            />
          </div>
        </header>
        <main className="container mx-auto p-4">{children}</main> {/* Added main section here */}
      </body>
    </html>
  );
};

export default RootLayout;
