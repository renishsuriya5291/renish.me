import Image from 'next/image';

const Header = () => {
  return (
    <div className="bg-white p-6 rounded-lg flex flex-col sm:flex-row items-center justify-between">
      <div>
        <h1 className="text-4xl font-bold">Renish Suriya</h1>
        <p>Surat, Gujarat, India 395006</p>
        <p><a href="mailto:renishsuriya1441@gmail.com" className="text-highlight">renishsuriya1441@gmail.com</a></p>
        <p><a href="tel:+917874467710" className="text-highlight">+91 787 446 7710</a></p>
        <p><a href="https://github.com/renishsuriya5291" className="text-highlight">github.com/renishsuriya5291</a></p>
        <p><a href="https://linkedin.com/in/renish-suriya-02a579231" className="text-highlight">linkedin.com/in/renish-suriya-02a579231</a></p>
        <p><a href="/renish_resume.pdf" className="text-highlight">Resume</a></p>
      </div>
      <Image
        src="/images/renish.jpg"
        alt="Renish Suriya"
        width={160}
        height={160}
        className="object-contain"  // Removed 'rounded-full' class for a clean look
      />
    </div>
  );
};

export default Header;
