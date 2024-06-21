'use client';

import InfoCardSection from '@/components/InfoCardSection/InfoCardSection';
import LandingCarousel from '@/components/LandingCarousel';
import SunSVG from '@/components/SunSVG';
import useMediaQuery from '@/hooks/useMediaQuery';

const HomePage = () => {
  const isTablet = useMediaQuery('(min-width: 768px)');

  return (
    <div className="flex flex-col text-center w-full items-center justify-center gap-12 md:gap-20">
      <section className="w-full flex flex-col gap-8 items-center md:flex-row md:gap-0 md:justify-between md:items-start sm:max-w-[480px] md:max-w-[943px]">
        <div className="w-full flex flex-col md:flex-row md:gap-8 md:justify-between">
          <div className="w-full flex-col gap-8 flex md:gap-14">
            <div className="flex gap-4 justify-between items-center">
              <h1 className="text-4xl max-w-[260px] md:text-5xl lg:text-6xl text-left">
                Matematikos pamokos vasarą
              </h1>

              {!isTablet && (
                <SunSVG className="w-full max-w-[100px] md:max-w-[156px]" />
              )}
            </div>

            <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-center">
              <p className="text-left md:text-lg lg:text-xl flex flex-col gap-4 w-full max-w-[366px]">
                <span>
                  Matematika gali būti įdomi ir{' '}
                  <span className="font-bold text-color-secondary">
                    suprantama.
                  </span>{' '}
                  Svarbu pasitikėti savo jėgomis ir išdrįsti klausti tiek kartų,
                  kol pasidarys{' '}
                  <span className="font-bold text-color-secondary">aišku.</span>{' '}
                </span>
                <span className="block">
                  Į kiekvieną klausimą stengiamės atsakyti mokiniui paprasta ir
                  aiškia kalba.
                </span>
              </p>

              {!isTablet && <LandingCarousel />}
            </div>
          </div>

          {isTablet && (
            <div className="w-full flex-col items-center justify-center gap-12 flex">
              <SunSVG className="w-full max-w-[100px] md:max-w-[156px]" />

              <LandingCarousel />
            </div>
          )}
        </div>
      </section>

      <InfoCardSection />
    </div>
  );
};

export default HomePage;
