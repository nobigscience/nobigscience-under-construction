import Image from 'next/image';
import PitagoroTeorema_PNG from './assets/pitagoro-teorema.png';
import Slide2_PNG from './assets/slide-2.png';
import Slide3_PNG from './assets/slide-3.png';
import Slide4_PNG from './assets/slide-4.png';

const LandingCarousel = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <Image
        src={PitagoroTeorema_PNG}
        alt="Pitagoro teoremos pavyzdys"
        className="w-full shadow-secondary rounded-[30px] max-w-[480px]"
        priority
      />
    </div>
  );
};

export default LandingCarousel;
