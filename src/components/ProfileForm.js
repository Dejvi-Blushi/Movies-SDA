import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import axios from 'axios';

// Validation Schema
const userSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  username: z.string().min(1, 'Username is required'),
  email: z.string().email('Invalid email address'),
  gender: z.string().min(1, 'Gender is required'),
});

const ProfileForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:8080/users', data, {
        headers: { 'Content-Type': 'application/json' },
      });

      console.log('Response:', response.data);
      alert('User added successfully!');
      reset(); // Reset form after successful submission
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      alert('Failed to add user');
    }
  };

  return (
    <div className='max-w-md mx-auto p-6 shadow-md rounded-lg'>
      <h2 className='text-xl font-bold mb-4'>Add a User</h2>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
        <div>
          <label className='block font-medium'>Name:</label>
          <input {...register('name')} className='border border-blue-600 bg-[rgb(15,21,45)] p-2 w-full rounded' />
          {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
        </div>
        <div>
          <label className='block font-medium'>Username:</label>
          <input {...register('username')} className='border border-blue-600 bg-[rgb(15,21,45)] p-2 w-full rounded' />
          {errors.username && <p className='text-red-500'>{errors.username.message}</p>}
        </div>
        <div>
          <label className='block font-medium'>Email:</label>
          <input {...register('email')} type='email' className='border border-blue-600 bg-[rgb(15,21,45)] p-2 w-full rounded' />
          {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
        </div>
        <div>
          <label className='block font-medium'>Gender:</label>
          <select {...register('gender')} className='border border-blue-600 bg-[rgb(15,21,45)] p-2 w-full rounded'>
            <option value=''>Select gender</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value='other'>Other</option>
          </select>
          {errors.gender && <p className='text-red-500'>{errors.gender.message}</p>}
        </div>
        <button type='submit' className='bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProfileForm;