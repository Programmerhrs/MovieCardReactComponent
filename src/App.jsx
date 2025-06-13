  import MovieCard from './components/moviecard';
  import './App.css'
  const movies = [
    {
      title: "Batman",
      subtitle: "The Long Halloween",
      description: "'The Batman' tells the story of Batman during his second year of fighting crime in Gotham City, where he investigates a sadistic serial killer known as the Riddler. ",
      image: "/batman.jpeg",
      rating: 3.4
    },
    {
      title: "Oppenheimer",
      subtitle: "The American Prometheus",
      description: "directed by Christopher Nolan, follows the life of J. Robert Oppenheimer, the theoretical physicist who led the Manhattan Project, a top-secret government program to develop the first atomic weapons during World War II",
      image: "openheimer.jpg",
      rating: 4.1
    },
    {
      title: "Intersteller",
      subtitle: "Mankind was born on Earth. It was never meant to die here.",
      description: "It follows a group of astronauts, led by a former NASA pilot, who embark on a mission through a wormhole near Saturn to find a new home for humanity on a distant planet in another galaxy",
      image: "intersteller.jpg",
      rating: 5
    },
  ];

  function App() {
    return (
      <div className='w-full flex flex-col items-center h-full justify-center p-10'>
        <div className="min-screen bg-[#0a7fc2] p-12 w-[80%]  flex items-center flex-col bg ">
        <div className="text-3xl font-bold mb-6 bg-black text-[#e1e1e1] h-14 flex items-center w-full heading"><h1 className='m-auto'>React Movie Cards</h1></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 box place-items-center">
          {movies.map((movie, index) => (
            <MovieCard key={index} {...movie} />
          ))}
        </div>
      </div>
      </div>
    );
  }

  export default App;
