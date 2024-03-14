const dates = ['4/4/2023', '2/2/2024', '3/2/2024', '1/1/2024', '12/4/2023'];

/**
 * This line of code is using the `map` function to transform each element
 * of the `dates` array into a new array called `new_dates`.
 * The callback function is `(date) => new Date(date)`, which takes a date
 * string in the format 'MM/DD/YYYY' and returns a new `Date` object representing that date.
 * `new_dates` is an array of `Date` objects, each representing a date in the `dates` array.
 */
const new_dates = dates.map((date) => new Date(date));
console.log(new_dates);

/**
 * This function takes an array of Date objects, sorts them from most recent to least recent,
 * takes the first three dates, and returns them as strings in the format MM/DD/YYYY.
 *
 * @param {Date[]} dates_array - An array of Date objects.
 * @returns {string[]} An array of the three most recent dates, formatted as strings.
 */
function get_most_recent_dates(dates_array) {
  return dates_array
    .sort((a, b) => b.getTime() - a.getTime()) //Sort by newest first
    .slice(0, 3) // Get the first 3 items
    .map(
      (date) => `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
    ); // Format as strings
}

const most_recent_dates = get_most_recent_dates(new_dates);
console.log(most_recent_dates);