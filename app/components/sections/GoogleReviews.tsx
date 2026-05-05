'use client';
import Script from 'next/script';
import FocusTitle from '../utils/FocusTitle';

export default function GoogleReviews() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="text-center">
        <FocusTitle>
          <h2 className="text-3xl md:text-4xl font-extrabold text-plomb-base mb-16">
              Ce que nos clients <span className="text-plomb-eau">disent de nous</span>
            </h2>
        </FocusTitle>
       <div className="elfsight-app-a21a742a-d994-40cc-a5a0-d0bbae842f90" data-elfsight-app-lazy></div>
        <Script
          src="https://static.elfsight.com/platform/platform.js"
          strategy="afterInteractive"
        />
      </div>
    </section>
  );
}