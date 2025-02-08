import React, { useState, useEffect } from 'react';
import axios from 'axios';

const About = () => {
    const [movieImg, setMovieImg] = useState();

    useEffect(
        () => {
            const fetchMovieImg = async () => {
                axios
                    .get('http://localhost:8080/movies')
                    .then((response) => setMovieImg(response.data[0].image))
                    .catch((err) => console.log('Error:', err.message));
            };

            fetchMovieImg();
        }, []);

    return (<>
        <div className="sm:flex justify-center gap-24 p-10">
            <div className="">
                <div className="">
                    <img src={`http://localhost:8080${movieImg}`} className='w-[25rem]' alt='placeholder' />
                </div>
            </div>
            <div className="sm:w-1/2 p-5">
                <div className="text">
                    <span className="text-gray-500 border-b-2 border-blue-600 uppercase">About us</span>
                    <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">What is <span className="text-blue-600">MoviesFlix</span>?
                    </h2>
                    <p >
                        MoviesFlix is a website that offers free movies and TV streaming. MoviesFlix is one of the largest sites offering a huge collection of movies for free streaming and download. Most reviews of MoviesFlix show good ratings from users. They have updated content featuring on their website and give you access to the latest movie releases. It is a big convenience to have when you decide at the spur of the moment to catch a movie. You don't have to be worried about high ticket prices, booking the right seats or having to negotiate weekend traffic on your way to the theatre.

                        All you need is your computer with a web browser or a mobile device, a good internet connection, a bowl of Popcorn, and you are all set for a night at the movies.

                        You can choose to access the website through your Smart TV and get a good movie experience.
                    </p>
                    <h4 className="my-4 font-bold text-3xl  sm:text-4xl ">            You save time by using  <span className="text-blue-600">MoviesFlix</span>
                    </h4>
                    <p>

                        There are times when online movie websites allow you to download it first and then watch. With MoviesFlix, it's not the same. You do not have to waste time downloading movies as you can watch them seamlessly online. It saves you time as well as doesn't keep you waiting especially when you are anxious and excited to watch a new movie or TV series.
                    </p>
                </div>
            </div>
        </div></>
    );
}

export default About;