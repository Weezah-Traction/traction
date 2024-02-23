import { plans } from '$lib/data';

/**
 * The load function iterates over the `teams` array and returns an object.
 * Each object in the array 'mascots' has 'name' and 'mascot' properties.
 * The value for the 'name' and 'mascot' keys are derived from the corresponding properties of each 'team' object.
 *
 * @module {Function} load
 * @returns {{plans: {date: string, header: string, description: string}[]}} - An object with teams array
 */
export function load() {
  return {
    plans: plans.map((plans) => ({
      date: plans.date,
      header: plans.header,
      description: plans.description

    }))
  };
}