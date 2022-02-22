let twoSum = (array, sum) => {
    let numsPair = {},
      results = []

        for (let i = 0; i < array.length; i++){
            if (numsPair[array[i]]){
                results.push([numsPair[array[i]], array[i]])
            }else{
                numsPair[sum - array[i]] = array[i];
            }
        }
          return results;
}

console.log(twoSum([2,7,11,15],9));