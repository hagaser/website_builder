export const getPercentSize = (space, request) => {
  if (request === "height") {
    const height = window.innerHeight;
    return ((space / height) * 100).toFixed(2) + "%";
  }
  else if (request === "width") {
    const width = window.innerWidth;
    return ((space / width) * 100).toFixed(2) + "%";
  }
  console.error('in function "getPercentSize" request (second var) require "height" or "width"');
}