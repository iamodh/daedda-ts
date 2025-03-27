export const getWorkedTime = (workTime: [string, string]): number => {
  const startTime = Number(workTime[0].replace(":", ""));
  const endTime = Number(workTime[1].replace(":", ""));

  const timeGap = endTime - startTime;
  return Math.round(timeGap / 100);
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  const month = date.getMonth() + 1;
  const day = date.getDate();

  const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
  const weekday = weekdays[date.getDay()];

  return `${month}/${day} ${weekday}`;
};
