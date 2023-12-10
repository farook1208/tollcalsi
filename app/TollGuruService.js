'use client'

import axios from 'axios';

const API_KEY = 'YOUR_TOLLGURU_API_KEY';
const TOLLGURU_API_BASE_URL = 'mgdQd2R7fRHTqB24BHqGdPG8tmRnD2Qj';

const axiosInstance = axios.create({
  baseURL: TOLLGURU_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': API_KEY,
  },
});

const TollGuruService = {
  getTolls: async (origin, destination) => {
    try {
      const response = await axiosInstance.post('/calculate', {
        source: origin,
        destination: destination,
        vehicleType: '2AxlesAuto',
        departure_time: '2023-12-10T10:00:00Z', // Example departure time
      });
      return response.data;
    } catch (error) {
      throw new Error('Error fetching tolls: ' + error.message);
    }
  },
  // Add other TollGuru API functions as needed
};

export default TollGuruService;
