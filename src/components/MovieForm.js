import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import axios from 'axios';

// Validation Schema
const movieSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  image: z.string().url('Invalid URL'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
});

const MovieForm = () => {
  const { register, handleSubmit, formState: { errors }, reset, } = useForm({ resolver: zodResolver(movieSchema),});

  const onSubmit = async (data) => {
    
    try {
      const response = await axios.post('http://localhost:8080/movies', data, {
        headers: { 'Content-Type': 'application/json' },
      });

      console.log('Response:', response.data);
      alert('Movie added successfully!');
      reset(); // Reset form after successful submission
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      alert('Failed to add movie');
    }
  };

  return (
    <div className='max-w-md mx-auto p-6 shadow-md rounded-lg'>
      <h2 className='text-xl font-bold mb-4'>Add a Movie</h2>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 '>
        <div>
          <label className='block font-medium'>Title:</label>
          <input {...register('title')} className='border border-blue-600 bg-[rgb(15,21,45)] p-2 w-full rounded' />
          {errors.title && <p className='text-red-500'>{errors.title.message}</p>}
        </div>
        <div>
          <label className='block font-medium'>Image URL:</label>
          <input {...register('image')} className='border border-blue-600 bg-[rgb(15,21,45)] p-2 w-full rounded' />
          {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
        </div>
        <div>
          <label className='block font-medium'>Description:</label>
          <textarea {...register('description')} className='border border-blue-600 bg-[rgb(15,21,45)] p-2 w-full rounded'></textarea>
          {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
        </div>
        <button type='submit' className='bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default MovieForm;