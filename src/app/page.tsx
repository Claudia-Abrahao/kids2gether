
import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import ExperienceCard from '@/components/ExperienceCard';
import PackageCard from '@/components/PackageCard';
import Footer from '@/components/Footer';
import CarouselHero from "@/components/CarouselHero2";

export default function Home() {
  const experiences = [
    {
      title: 'Parque de Diversões',
      description: 'Diversão garantida para toda a família em um dos maiores parques temáticos do Brasil.',
      imageUrl: '/experience1.jpg',
      price: 'A partir de R$ 150,00'
    },
    {
      title: 'Zoológico Interativo',
      description: 'Experiência única de contato com animais e aprendizado sobre a natureza.',
      imageUrl: '/experience2.jpg',
      price: 'A partir de R$ 120,00'
    },
    {
      title: 'Museu da Criança',
      description: 'Aprendizado divertido em um museu interativo feito especialmente para crianças.',
      imageUrl: '/experience3.jpg',
      price: 'A partir de R$ 80,00'
    }
  ];

  const packages = [
    {
      title: 'Férias em Gramado',
      description: 'Pacote completo para a família em uma das cidades mais encantadoras do Brasil.',
      imageUrl: '/package1.jpg',
      price: 'A partir de R$ 2.500,00',
      duration: '5 dias'
    },
    {
      title: 'Praia e Aventura',
      description: 'Combinando praias paradisíacas com atividades de aventura para toda a família.',
      imageUrl: '/package2.jpg',
      price: 'A partir de R$ 3.200,00',
      duration: '7 dias'
    },
    {
      title: 'Cidade Maravilhosa',
      description: 'Conheça o Rio de Janeiro com experiências especiais para crianças.',
      imageUrl: '/package3.jpg',
      price: 'A partir de R$ 1.800,00',
      duration: '4 dias'
    }
  ];
  
  return (
    <main className="min-h-screen">
      <Header />
      <CarouselHero />

      <HeroBanner />

      {/* Experiences Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Experiências em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} {...experience} />
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Pacotes em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <PackageCard key={index} {...pkg} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="bg-blue-100 py-12">
  <div className="container mx-auto text-center px-4">
    <h2 className="text-3xl font-bold mb-4 text-blue-800">Faça parte da Comunidade Kids2gether!</h2>
    <p className="mb-6 text-gray-700">
      Compartilhe suas histórias, descubra roteiros incríveis e viva momentos únicos em família.
    </p>
    <a
      href="/comunidade"
      className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
    >
      Quero Fazer Parte
    </a>
  </div>
</section>

      <Footer />
    </main>
  );
}
