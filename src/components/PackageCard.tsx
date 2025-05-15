import Image from 'next/image';

interface PackageCardProps {
  title: string;
  description: string;
  imageUrl: string;
  price: string;
  duration: string;
}

const PackageCard = ({ title, description, imageUrl, price, duration }: PackageCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
          {duration}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-blue-600 font-bold">{price}</span>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm transition-colors">
            Ver detalhes
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard; 