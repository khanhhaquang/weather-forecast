export type WeatherData = {
  id: number;
  min_temp: number;
  max_temp: number;
  applicable_date: Date;
  weather_state_name: string;
  weather_state_abbr: string;
};

export type CityDataResponse = {
  woeid: number;
};

export type WeatherDataResponse = {
  consolidated_weather: WeatherData[];
};
