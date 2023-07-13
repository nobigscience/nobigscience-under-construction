'use client';
import React from 'react';
import { Levitate } from '@/app/hooks/useLevitate';

const LevitatingLogoHeading = () => {
  return (
    <Levitate>
      <h1 className="pb-7 text-6xl sm:text-7xl md:text-8xl">nobigscience</h1>
    </Levitate>
  );
};

export default LevitatingLogoHeading;
