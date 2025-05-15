import Image from 'next/image';

interface ComunidadeBannerProps {
  onShowCadastro: () => void;
}

const ComunidadeBanner = ({ onShowCadastro }: ComunidadeBannerProps) => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
      <Image
        src="/comunidade.jpg"
        alt="Comunidade Kids2gether"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
          Junte-se à Comunidade Kids2gether
        </h2>
        <p className="text-white text-lg mb-6 max-w-2xl">
          Aqui cada viagem vira memória real. Feita pela Nathália e sua família!
        </p>
        <button
          onClick={onShowCadastro}
          className="bg-[#f0b922] text-white py-3 px-6 rounded-md hover:bg-yellow-500 transition"
        >
          Quero Participar
        </button>
      </div>
    </div>
  );
};

export default ComunidadeBanner; 