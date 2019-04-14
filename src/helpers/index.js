export const randomSpeed = () => {
  let speed = Math.floor((Math.random() * 10) + 90);
  return speed;
}

export const average = arr => arr.reduce((a,b) => a + b, 0) / arr.length;

export const formatDate = date => {
  const fullDate = new Date(date)
  let stringDate = `${fullDate.getDate()}/${fullDate.getMonth()}/${fullDate.getFullYear()} - ${fullDate.getHours()}h${fullDate.getMinutes()}`
  return stringDate;
}