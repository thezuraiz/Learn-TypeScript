/**
 * Represents an array of superhero names.
 * Initially, the array is empty and can store strings representing superhero names.
 */
let mySuperHero: string[] = [];

/**
 * Adds superhero names to the `mySuperHero` array.
 * Example superheroes added: "Super Man", "Spider Man", "Iron Man".
 */
mySuperHero.push("Super Man");
mySuperHero.push("Spider Man");
mySuperHero.push("Iron Man");

/**
 * Defines the structure of a Hero object.
 * Each hero has a `name` (string) and an `age` (number).
 */
type Hero = {
  name: string;
  age: number;
};

/**
 * Represents an array of Hero objects.
 * Example heroes include "Spider Man" (age 20) and "Super Man" (age 40).
 */
let hero: Hero[] = [
  { name: "Spider Man", age: 20 },
  { name: "Super Man", age: 40 },
];

/**
 * Defines the structure of a location object.
 * Each location has `x-cordinates` and `y-cordinates` (both numbers),
 * representing a point in a 2D space.
 */
type location = {
  "x-cordinates": number;
  "y-cordinates": number;
};

/**
 * Represents a 2D array of location objects.
 * Each element in the array is an array of `location` objects,
 * which can be used to store coordinates in a 2D space.
 */
let cordinates: location[][] = [];
