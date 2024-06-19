import Image from 'next/image';
import InfoCard from './InfoCard';
import Jone_PNG from './assets/photos/jone.png';
import Alina_PNG from './assets/photos/alina.png';

const InfoCardSection = () => {
  return (
    <section className="w-full flex flex-col gap-8 md:gap-8 items-center md:flex-row lg:gap-16 md:justify-between md:items-start max-w-[350px] md:max-w-[943px] ">
      <InfoCard name="Jonė">
        <div className="w-full flex flex-col gap-5 lg:gap-8 max-w-[290px] lg:max-w-none">
          <div className="w-full flex gap-4 text-sm lg:text-lg">
            <Image
              src={Jone_PNG}
              alt="Jonės nuotrauka"
              className="w-full max-w-[100px] sm:max-w-[120px] lg:max-w-[140px] rounded-[30px]"
            />

            <div className="w-full flex flex-col gap-4 justify-center">
              <ul className="w-full text-left flex flex-col gap-2 sm:text-base">
                <li>
                  <p>• 4+ metų patirtis</p>
                </li>
                <li>
                  <p>
                    • Pamokos <span className="font-bold">nuotoliu</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* TODO: flex-1 didn't work on info cards to make them the same height on big screens, so setting height manually */}
          <div className="flex justify-center md:h-[176px] lg:h-[152px]">
            <p className="text-left flex flex-col gap-6">
              <span className="flex flex-col gap-1">
                <span className="font-bold text-lg">
                  Pamokos kaina 35€ / 1 val.
                </span>
                <a
                  href="mailto:joneatene@gmail.com"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="underline text-color-secondary text-sm visited:text-color-blue-500 font-semibold sm:text-base"
                >
                  joneatene@gmail.com
                </a>
              </span>
              Psichologijos studentė tyrinėjanti mokymosi ir dėmesio ypatumus.
            </p>
          </div>
        </div>
      </InfoCard>

      <InfoCard name="Alina">
        <div className="w-full flex flex-col gap-5 lg:gap-8 max-w-[290px] lg:max-w-none">
          <div className="w-full flex gap-4 justify-between text-sm lg:text-lg">
            <Image
              src={Alina_PNG}
              alt="Alinos nuotrauka"
              className="w-full sm:max-w-[120px] lg:max-w-[140px] rounded-[30px] max-w-[100px]"
            />
            <div className="w-full flex flex-col gap-4 justify-center">
              <ul className="w-full text-left flex flex-col gap-2 sm:text-base">
                <li>
                  <p>• 6+ metų patirtis</p>
                </li>
                <li>
                  <p>
                    • Pamokos <span className="font-bold">gyvai</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full">
            <p className="text-left flex flex-col gap-6">
              <span className="flex flex-col gap-1">
                <span className="font-bold text-lg">
                  Pamokos kaina 40€ / 1 val.
                </span>
                <a
                  href="mailto:alina.zemliene@gmail.com"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="underline text-color-secondary text-sm text-left visited:text-color-blue-500 font-semibold sm:text-base"
                >
                  alina.zemliene@gmail.com
                </a>
              </span>
              Metodinės priemonės “Tvarioji matematika” bendraautorė. Vykdo
              matematikos didaktikos mokslinius tyrimus.{' '}
            </p>
          </div>
        </div>
      </InfoCard>
    </section>
  );
};

export default InfoCardSection;
