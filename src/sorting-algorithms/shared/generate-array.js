const generateArray = (numberOfElements) => {
  let array = Array.from({ length: numberOfElements }, 
  () => Math.floor(Math.random() * 100));
  return array;
}

export default generateArray;