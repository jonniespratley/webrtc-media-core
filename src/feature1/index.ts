/**
 *
 * @public
 *
 * Feature
 *
 * @param val - a variable.
 * @returns - a string.
 */
export const say = (val: string): string => `Hello ${val}`;

/**
 * Returns the average of two numbers.
 *
 * @remarks
 * This method is part of the {@link core-library#Statistics | Statistics subsystem}.
 *
 * @param x - The first input number
 * @param y - The second input number
 * @returns The arithmetic mean of `x` and `y`
 *
 * @beta
 */
export function getAverage(x: number, y: number): number {
  return (x + y) / 2.0;
}
