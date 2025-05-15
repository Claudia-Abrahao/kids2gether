import Image from 'next/image';
import Link from 'next/link';

interface Historia {
  id: number;
  titulo: string;
  imagem: string;
  conteudo: string;
  autor: string;
  categoria: 'engracadas' | 'inesqueciveis' | 'perrengues';
}

const HistoriasMural = () => {
  const historias: Historia[] = [
    {
      id: 1,
      titulo: 'O Flamingo de Mentira',
      imagem: '/historias/flamingo.jpg',
      conteudo: 'Meu filho achou que o flamingo era de mentira... e correu atrás!',
      autor: 'Maria Silva',
      categoria: 'engracadas'
    },
    {
      id: 2,
      titulo: 'Pôr do Sol em Noronha',
      imagem: '/historias/noronha.jpg',
      conteudo: 'Nosso primeiro pôr do sol juntos em Noronha, um momento mágico.',
      autor: 'João Santos',
      categoria: 'inesqueciveis'
    },
    {
      id: 3,
      titulo: 'A Mochila Esquecida',
      imagem: '/historias/mochila.jpg',
      conteudo: 'Esquecemos a mochila do bebê no aeroporto... e só percebemos no hotel.',
      autor: 'Ana Costa',
      categoria: 'perrengues'
    }
  ];

  const categorias = {
    engracadas: {
      titulo: 'Histórias Engraçadas',
      cor: 'text-blue-600',
      link: '/historias/engracadas'
    },
    inesqueciveis: {
      titulo: 'Momentos Inesquecíveis',
      cor: 'text-green-600',
      link: '/historias/inesqueciveis'
    },
    perrengues: {
      titulo: 'Perrengues de Viagem',
      cor: 'text-red-600',
      link: '/historias/perrengues'
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Histórias da Comunidade
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(categorias).map(([categoria, info]) => {
            const historia = historias.find(h => h.categoria === categoria);
            return (
              <div key={categoria} className="bg-white rounded-lg shadow p-6">
                <h3 className={`text-xl font-semibold mb-2 ${info.cor}`}>
                  {info.titulo}
                </h3>
                {historia && (
                  <>
                    <p className="text-gray-700 mb-4">
                      "{historia.conteudo}"
                    </p>
                    <Link
                      href={info.link}
                      className={`inline-block mt-2 ${info.cor} hover:underline font-medium`}
                    >
                      Ver mais {categoria === 'engracadas' ? 'histórias engraçadas' : 
                              categoria === 'inesqueciveis' ? 'momentos inesquecíveis' : 
                              'perrengues'} →
                    </Link>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HistoriasMural; 