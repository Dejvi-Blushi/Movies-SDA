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
        src={`${location.state.image}`}
        alt='Image Placeholder'
      /><div>
        <div>
          <h1 className='text-8xl pb-10 flex flex-col items-center'>{location.state.title} </h1>
          <p className='text-4xl pb-4'>Description: {location.state.description} </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
