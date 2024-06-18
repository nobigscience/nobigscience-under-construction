import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full flex items-center justify-center px-4 py-4 md:py-6 border border-b-color-border-gray">
      <nav>
        <Link href="/" className="font-nbs text-2xl md:text-3xl">
          nobigscience
        </Link>
      </nav>
    </header>
  );
};

export default Header;
