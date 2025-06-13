function MovieCard({ title, subtitle, description, image, rating }) {
  return (
    <div className="h-[500px] bg-[#424242] shadow-md rounded-lg overflow-hidden max-w-xs flex flex-col items-center relative">
      <img src={image} alt={title} className=" h-64 object-contain pt-5 hover:scale-110 transition duration-200 hover:cursor-pointer"/>
      <div className="p-4">
        <h2 className="font-bold text-lg">{title}</h2>
        <h3 className="text-sm text-[#e0e0e0] font-bold">{subtitle}</h3>
        <p className="text-[#e0e0e0] text-sm mt-2">{description}</p>
        <div className="flex items-center justify-between mt-4">
          <div className="text-yellow-500 absolute bottom-5">
            {'★'.repeat(Math.round(rating))}{'☆'.repeat(5 - Math.round(rating))}
          </div>
          <span className="text-sm bg-blue-500 text-white px-3 py-1 rounded-full absolute right-5 bottom-5">{rating}</span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;