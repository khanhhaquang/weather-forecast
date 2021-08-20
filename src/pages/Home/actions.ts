export const getWeather = (city: string) => ({
  type: 'weather/request',
  city,
});
