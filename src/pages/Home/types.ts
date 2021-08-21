export type CityData = {
  woeid: number;
};

export type WeatherData = {
  id: number;
  min_temp: number;
  max_temp: number;
  applicable_date: Date;
  weather_state_name: string;
  weather_state_abbr: string;
};
