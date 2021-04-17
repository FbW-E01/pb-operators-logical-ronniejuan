// # Programming Basics: Logical Operators

// These exercises are aimed at making you familiar with logical operators. **Print all your checks to the console. Make sure that you are using the *correct* logical operator.**

// 0. Declare two variables: `isDogBetter` with the value of `true`, and `isCatBetter` with the value of `false`.

const  isDogBetter = true;
const   isCatBetter = false;

// 1. Check the result of:

// - a) isDogBetter AND isCatBetter.

console.log(isDogBetter && isCatBetter);

// - b) isDogBetter OR isCatBetter.

console.log(isDogBetter || isCatBetter);


// - c) NOT (isDogBetter AND isCatBetter).

console.log(isDogBetter && isCatBetter);


// 2. Declare three more variables `atoms`, `sandGrains`, `starsInSky`. Give these variables number values.

const atoms      = 12;
const sandGrains = 6;
const starsInSky = 9;

// 3. Check the result of whether:

// - a) `atoms` is greater than `starsInSky` AND `atoms` is greater than `sandGrains`.

console.log((atoms > starsInSky) && (atoms > sandGrains));


// - b) `atoms` is NOT equal to `sandGrains`.

 console.log(atoms !== sandGrains);

// - c) `starsInSky` is less than `sandGrains` OR `starsInSky` is greater than `atoms`.

 console.log((starsInSky <= sandGrains) ||(starsInSky >= atoms));
 


// - d) `atoms` is equal to `starsInSky` OR `atoms` is NOT equal to `sandGrains`.


 console.log((atoms === starsInSky) || (atoms !== sandGrains));

  //console.log((atoms === starsInSky) is false    and (atoms !== sandGrains)); is true so output is true becouse  when  the first value is false  and the second value is true the output will be the true one.



// - e) `atoms` is greater than or equal to 10 AND `sandGrains` is less than or equal to 10.

 console.log((atoms >= 10) && (sandGrains <= 10));

 //atoms is grater or equal to 10  and sandGrains are less than 10 so is true


// - f) `atoms` multiplied by `starsInSky` is less than 100 OR whether `atoms` multiplied by `sandGrains` is greater than 100.

console.log((atoms * starsInSky <100) ||(atoms * sandGrains >100));

//  atoms(12) * starsInsky(9) = 108   so (atoms * starsInSky <100) is false.
//  atoms(12) * sandGrains(6) = 72    so (atoms * sandGrains >100) is false.

// 4. BONUS: In your own words, explain the logic of each result in a comment after the result.




