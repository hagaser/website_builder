export const getArray = (count) => {

  let Arr = []

  for(let i = 0; i < count; i++) {
    Arr.push({index: i, style: {}})
  }

  return Arr
}