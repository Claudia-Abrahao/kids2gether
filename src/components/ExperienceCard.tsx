import Image from 'next/image';

interface ExperienceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  price: string;
}

const ExperienceCard = ({ title, description, imageUrl, price }: ExperienceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-blue-600 font-bold">{price}</span>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm transition-colors">
            Saiba mais
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard; 