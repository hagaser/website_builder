export const getArray = (count) => {

  const Arr = []

  for(let i = 1; i < count + 1; i++) {
    Arr.push(i)
  }

  return Arr
}