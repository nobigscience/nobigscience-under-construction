import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full flex border-t border-t-color-border-gray py-5 md:py-10 px-4 md:px-8 items-center lg:px-16">
      <div className="w-full flex justify-center text-center sm:text-left">
        <div className="flex-col flex gap-10 sm:flex-row sm:justify-between lg:gap-52 w-full sm:max-w-[480px] md:max-w-[943px]">
          <div className="flex flex-col justify-between">
            <Link
              href="/"
              className="font-nbs text-2xl md:text-3xl relative bottom-1"
            >
              nobigscience
            </Link>
            <p className="text-xs hidden sm:block text-gray-500">©2024</p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-inter text-lg font-semibold md:text-xl">
              Kontaktai
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="mailto:joneatene@gmail.com"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="underline text-color-secondary text-base visited:text-color-blue-500 font-semibold"
                >
                  joneatene@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:alina.zemliene@gmail.com"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="underline text-color-secondary text-base visited:text-color-blue-500 font-semibold"
                >
                  alina.zemliene@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <p className="text-xs block sm:hidden text-gray-500">©2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
