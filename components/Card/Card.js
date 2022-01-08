import Image from "next/image";

const Card = ({ title, text, children, img, img_alt }) => {
  return (
    <div className="flex flex-col w-full sm:max-w-xs bg-white dark:bg-gray-900 shadow-lg rounded-xl p-8 gap-4">
      {img && <Image src={img} alt={img_alt} />}

      <h1>{title}</h1>
      <p className="text-sm text-gray-500">{text}</p>
      {children}
    </div>
  );
};

export default Card;
