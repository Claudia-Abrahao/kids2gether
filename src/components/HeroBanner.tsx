import Image from 'next/image';

const HeroBanner = () => {
  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      {/* Banner Image */}
      <div className="absolute inset-0">
        <Image
          src="/banner1.jpg"
          alt="Kids2gether Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-orange-200 bg-opacity-40"></div>
      </div>

      {/* Banner Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Férias Inesquecíveis para Toda a Família
            </h1>
            <p className="text-xl mb-8">
              Descubra destinos e experiências especiais criados especialmente para famílias com crianças.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
              Conheça Nossos Pacotes
            </button>
          </div>
        </div>
      </div>

      {/* Banner Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <button className="w-3 h-3 rounded-full bg-white"></button>
        <button className="w-3 h-3 rounded-full bg-white bg-opacity-50"></button>
        <button className="w-3 h-3 rounded-full bg-white bg-opacity-50"></button>
      </div>
    </div>
  );
};

export default HeroBanner; 