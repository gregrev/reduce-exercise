/*
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractValue(arr, key) {
    // loop through arr with reduce method
    return arr.reduce(function(accum, next){
        // push key input value to accum array
        accum.push(next[key]);
        // return updated accum array
        return accum;
        // initialize the array as empty
    },[]);
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

function vowelCount(str){
    const vowels = "aeiou";
    // split input str and loop through with .reduce
    return str.split('').reduce(function(acc,next){
        // make each next character lowercase
        let lowerCased = next.toLowerCase()
        // use indexOf to see if character is a vowel
        if(vowels.indexOf(lowerCased) !== -1){
            // if character is there add 1
            if(acc[lowerCased]){
                acc[lowerCased]++;
                // if character is not there make the count 1
            } else {
                acc[lowerCased] = 1;
            }
        }
        // return new acc obj
        return acc;
        // start the acc object wiht an empty obj
    }, {});
}

/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/

function addKeyAndValue(arr, key, value) {
    // loop through arr of objects with .reduce method
    return arr.reduce(function(acc,next,idx){
        // add key and value to the objects in at current idx 
        acc[idx][key] = value;
        // return updated arr
        return acc;
        // start with inputed original arr, and is updated each iteration
    },arr);
}

/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    const arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    const names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

function partition(arr, callback) {
        // loopos through elements of arr with .reduce
        return arr.reduce(function(acc,next){
            // check if inputed callback is true of current element
            if(callback(next)){
                // if true add current element it to first new array
                acc[0].push(next);
                // if false add that element to second array
            } else {
                acc[1].push(next);
            }
            // return the acc array
            return acc;
            // initialize the acc array with the 2 empty arrays
        }, [[],[]]);
    }
