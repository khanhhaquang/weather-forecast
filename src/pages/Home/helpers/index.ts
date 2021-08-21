// temporarily support yyyy/mm/dd
export const getWeekDay = (date: Date): string => {
  const weekDaysArr = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return weekDaysArr[date.getDay()];
};

export const roundVal = (value: number): number => Math.round(value);
