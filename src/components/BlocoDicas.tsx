import { useState } from 'react';

interface Dica {
  id: string;
  titulo: string;
  conteudo: string;
  autor: string;
}

const BlocoDicas = () => {
  const [novaDica, setNovaDica] = useState('');
  const [novoTitulo, setNovoTitulo] = useState('');

  // Dados de exemplo - em uma aplicação real, estes dados viriam de um banco de dados
  const dicas: Dica[] = [
    {
      id: '1',
      titulo: 'Documentação para crianças',
      conteudo: 'Sempre leve cópias autenticadas da certidão de nascimento e autorização de viagem quando viajar com crianças.',
      autor: 'Maria Silva'
    },
    {
      id: '2',
      titulo: 'Kit de emergência',
      conteudo: 'Prepare um kit com remédios básicos, curativos e itens de higiene para imprevistos durante a viagem.',
      autor: 'João Santos'
    },
    {
      id: '3',
      titulo: 'Entretenimento durante o voo',
      conteudo: 'Leve brinquedos pequenos, livros e jogos para manter as crianças entretidas durante o voo.',
      autor: 'Ana Oliveira'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria implementada a lógica de envio da dica
    setNovaDica('');
    setNovoTitulo('');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold mb-6">Dicas para Preparar sua Viagem</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Dicas da Comunidade</h3>
          <div className="space-y-6">
            {dicas.map(dica => (
              <div key={dica.id} className="border-l-4 border-blue-500 pl-4">
                <h4 className="text-lg font-semibold mb-2">{dica.titulo}</h4>
                <p className="text-gray-600 mb-2">{dica.conteudo}</p>
                <p className="text-sm text-gray-500">Por: {dica.autor}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Compartilhe sua Dica</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="titulo" className="block text-sm font-medium text-gray-700 mb-1">
                Título da Dica
              </label>
              <input
                type="text"
                id="titulo"
                value={novoTitulo}
                onChange={(e) => setNovoTitulo(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="dica" className="block text-sm font-medium text-gray-700 mb-1">
                Sua Dica
              </label>
              <textarea
                id="dica"
                value={novaDica}
                onChange={(e) => setNovaDica(e.target.value)}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Compartilhar Dica
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlocoDicas; 