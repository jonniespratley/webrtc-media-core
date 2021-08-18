export class Feature {
  private static Feature: Feature;

  private constructor() {
    console.warn('This is the constructor');
  }

  /**
   * Creates a new instance or returns existing instance.
   * @returns Feature
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
