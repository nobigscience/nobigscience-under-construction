import { ReactNode } from 'react';

type TInfoCardProps = {
  name: string;
  children: ReactNode;
};

const InfoCard = ({ name, children }: TInfoCardProps) => {
  return (
    <div className="rounded-[30px] max-w-[480px] md:max-w-[436px] flex flex-col gap-5 w-full shadow-secondary lg:pb-16 pb-10 md:pb-12">
      <div className="bg-color-yellow-400 w-full flex justify-center items-center px-4 py-4 rounded-t-[30px]">
        <p className="w-full text-center text-2xl font-semibold font-nbs leading-tight">
          {name}
        </p>
      </div>

      <div className="px-4 w-full flex items-center justify-center sm:px-6 lg:px-8 pt-2 lg:pt-5">
        <div className="w-full max-w-[380px] flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
