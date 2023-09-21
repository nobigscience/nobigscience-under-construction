import Image from 'next/image';
import Math_SVG from '@/app/assets/icons/math.svg';
import LevitatingLogoHeading from '@/app/components/LevitatingLogoHeading';


const HomePage = () => {
  return (
    <div className="flex place-items-center flex-col text-center">
      <LevitatingLogoHeading/>
      <h2 className="text-4xl pb-9">Puslapis kuriamas!</h2>
      <Math_SVG
        className="w-[155.83px] h-[155.83px] fill-color-secondary"
        aria-hidden="true"
        alt="Matematikos reikmenys"
      />
      <p className="pt-10">
        <span className="font-bold">nobigscience</span> - tai būsima
        matematikos MOKYMOSI platforma.
      </p>
      <p className="">
        Jei norite sužinoti daugiau, rašykite el. paštu:{' '}
        <a
          className="font-bold"
          href="mailto:joneatene@gmail.com"
          aria-label="'nobigscience' el. paštas"
        >
          joneatene@gmail.com
        </a>
      </p>
    </div>
  );
};

export default HomePage;
