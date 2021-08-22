import { weatherApi } from 'api';
import { AxiosResponse } from 'axios';

export const apiRequestLocation = (city: string): Promise<AxiosResponse> =>
  weatherApi.get(`/location/search/?query=${city}`);

export const apiRequestWeather = (woeid: number): Promise<AxiosResponse> =>
  weatherApi.get(`/location/${woeid}/`);
