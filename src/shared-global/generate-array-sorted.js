const generateArraySorted = (numberOfElements) => {
  let array = Array.from({ length: numberOfElements  },
  (el, i) => Math.floor((i + 1) * (99 / numberOfElements))
  );
  return array;
}

export default generateArraySorted;