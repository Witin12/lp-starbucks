const BannerSection = () => {
  return (
    <section className="-mt-8 w-full bg-white relative max-w-full overflow-x-hidden">
      <img src="/img/bg.jpg" alt="Copo da Starbucks" className="w-full" />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:top-1/4 md:left-16 max-w-full sm:transform-none sm:left-24 lg:top-1/4">
        <h1 className="text-black sm:text-3xl md:text-3xl lg:text-8xl font-bold leading-none text-left sm:text-left">
          Starbucks®<span className="block">Happy Hour</span>
        </h1>
        <p className="mt-5 text-black text-sm sm:text-base md:text-lg text-left sm:text-left">
          Encontraremos você em sua caixa de entrada. Ofertas de bebidas estão
          <span className="block">a caminho.</span>
        </p>
        <div className="flex justify-center sm:justify-start max-w-full">
          <img src="/img/c1.jpg" alt="Bebida da Starbucks" className="h-16 sm:h-24 md:h-36 w-auto rounded-full border-4 border-green-800 m-4" />
          <img src="/img/c2.jpg" alt="Bebida da Starbucks" className="h-16 sm:h-24 md:h-36 w-auto rounded-full border-4 border-green-800 m-4" />
          <img src="/img/c3.jpg" alt="Bebida da Starbucks" className="h-16 sm:h-24 md:h-36 w-auto rounded-full border-4 border-green-800 m-4" />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;