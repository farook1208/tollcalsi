"use client"
import React, { useState, useEffect } from 'react';
import TollGuruService from './TollGuruService';

const Page = () => {
  const [tolls, setTolls] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTolls = async () => {
      try {
        const origin = 'Your Origin';
        const destination = 'Your Destination';
        const tollData = await TollGuruService.getTolls(origin, destination);
        setTolls(tollData);
        setIsLoading(false); // Set loading to false after receiving toll data
      } catch (error) {
        console.error(error);
        setIsLoading(false); // Set loading to false in case of an error
      }
    };

    fetchTolls();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p> // Display a loading spinner or message while fetching data
      ) : tolls ? (
        <div>
          <h2>Toll Information</h2>
          {/* Display toll information here */}
          {/* Example: */}
          <ul>
            {tolls.map((toll, index) => (
              <li key={index}>{/* Display individual toll details */}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No toll information available</p> // Display if there are no tolls
      )}
    </div>
  );
};

export default Page;
