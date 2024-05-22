import {
    Card,
    CategoryBar,
    DeltaBar,
    MarkerBar,
    ProgressBar,
  } from '@tremor/react';
  
  export const BarHero = () => (
    <div className="mx-auto grid grid-cols-1 gap-12">
      <div className="space-y-3">
       
        <div className="flex justify-center">
            <ProgressBar value={72} />
        </div>
      </div>
     
    </div>
  );