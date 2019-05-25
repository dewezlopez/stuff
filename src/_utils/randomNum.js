/**
 * generates a random number
 *
 * @param {number} [min=10000] - the minimum number for generatation
 * @param {number} [max=99999] - the maxiumum number for generatation
 *
 * @returns {number} random number between min and max
 */
export default (min = 10000, max = 99999) => {
  if (typeof min !== "number" && typeof max !== "number") {
    console.error("non-number suplied to randomNum generator");
    return false;
  }
  let random_number = Math.random() * (max - min) + min;
  return Math.floor(random_number);
};
