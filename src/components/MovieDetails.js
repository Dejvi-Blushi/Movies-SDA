import { useLocation } from 'react-router-dom';

const MovieDetails = () => {
  const location = useLocation();

  if (!location.state) {
    return <h1> No State Available</h1>;
  }
  return (
    <div className='flex justify-center p-4 gap-4' >
      <img
        className='w-[40rem] h-[40rem]'
        src={`http://localhost:8080/${location.state.image}`}
        alt='Image Placeholder'
      /><div>
        <div>
          <h1 className='text-8xl pb-10 flex flex-col items-center'>{location.state.title} </h1>
          <p className='text-2xl pb-4'>Description: {location.state.description} </p>
          <p className='text-2xl pb-4'>Duration Time: {location.state.duration} </p>
          <p className='text-2xl pb-4'>Release Date: {location.state.release} </p>
          <p className='text-2xl pb-4'>Genre: {location.state.genre} </p>
          <p className='text-2xl pb-4'>Actors: {location.state.actors} </p>
          <p className='text-2xl pb-4'>Directors: {location.state.director} </p>
          <p className='text-2xl pb-4'>Country: {location.state.country} </p>
          <p className='text-2xl pb-4'>Production: {location.state.production} </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
