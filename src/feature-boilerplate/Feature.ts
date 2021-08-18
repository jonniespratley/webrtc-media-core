export class Feature {
  private static Feature: Feature;

  private constructor() {
    console.log('This is the constructor');
  }

  /**
   *
   */
  public static getInstance(): Feature {
    if (!Feature.Feature) {
      Feature.Feature = new Feature();
    }
    return Feature.Feature;
  }

  /**
   * Simple method to return Hello "String"
   * @public
   *
   * @param str - a string of some sort.
   * @returns - a string.
   */
  public say(str: string): string {
    return `Hello ${str}`;
  }
}
