import Image from 'next/image';

const ComunidadeIntro = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/3">
          <div className="relative h-64 w-64 mx-auto">
            <Image
              src="/nathalia-family.jpg"
              alt="Nathália e sua família"
              fill
              className="object-cover rounded-full"
            />
          </div>
        </div>
        
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold mb-4">Nossa História</h2>
          <p className="text-gray-600 mb-4">
            A Comunidade Kids2gether nasceu da experiência real da Nathália e sua família. 
            Como mãe de cinco filhos, ela sempre buscou criar momentos especiais em suas viagens, 
            mas percebeu que trocar essas experiências com outras famílias seria incrível.
          </p>
          <p className="text-gray-600 mb-4">
            Foi assim que surgiu a ideia de criar um espaço onde famílias pudessem compartilhar 
            suas experiências, dicas e histórias de viagem. Um lugar onde cada história conta 
            uma aventura única, cada dica pode fazer a diferença na sua próxima viagem, e cada 
            momento compartilhado inspira novas memórias.
          </p>
          <p className="text-gray-600">
            Hoje, nossa comunidade reúne famílias de todo o Brasil, unidas pelo mesmo propósito: 
            criar momentos inesquecíveis com seus filhos, transformando cada viagem em uma 
            verdadeira aventura em família.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComunidadeIntro; 