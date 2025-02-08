const FeaturesSection = () => {
    return (
      <section className="py-16 px-6 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold">Quatro Bebidas, Um Milhão De Razões</h2>
          <p className="mt-2">A Starbucks compartilha a missão de construir um mundo melhor.</p>
          <button className="mt-4 px-6 py-2 bg-green-700 text-white rounded">Saber mais</button>
        </div>
        <img src="/feature-image.jpg" alt="Bebida" className="w-full rounded-lg" />
      </section>
    );
  };
  
  export default FeaturesSection;