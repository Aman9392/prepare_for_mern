// let str = 'Aurasoft Digitech Private Limited';
// const vovel  = ['a' ,'e' ,'i', 'o', 'u' ] 
// function count(){
//     for( let str
//         )
// }

// let str = 'Aurasoft Digitech Private Limited';
// function count(str){
// var number = [0,0,0,0,0]
// for(let i=0; i<str.length; i++){
//     if(str[i]=="a" ||str[i]=="A")
//     number[0]+=1
//     if(str[i]=="e"||str[i]=="E")
//     number[1]+=1
//     if(str[i]=="i"||str[i]=="I")
//     number[2]+=1
//     if(str[i]=="o"||str[i]=="O")
//     number[3]+=1
//     if(str[i]=="u"||str[i]=="U")
//     number[4]+=1
//   }
// console.log("a:",number[0],"e:",number[1],"i:",number[2] ,"o:",number[3] ,"u:",number[4]);
// }

// Actual problem was we need to find out below points in the sample string: - 'Aurasoft Digitech Private Limited'.
// 1 all vowels with counts in the string,
// 2 max count vowel if 2 or more have same max count then max will be the one which comes first in alphabets.
// 3 min count vowel if 2 or more have same min count then min will be the one which comes last in alphabets.
// Good Attempt but there are multiple ways to solve above problem, your solution totally hardcoded and incomplete.
// So please check below example and try to optimise example code(if possible) and test all possible scenarios
// with below example code and let me know if it's works or not.



// let str = '';
// let str = 'Count number of vowels in a String in java Script';
// // console.log("typeof(str) :-", typeof(str));
// let arrByStr = str.toLowerCase().split('');
// // console.log("str.toLowerCase()",str.toLowerCase());
// // console.log("str.toLowerCase().split('')", str.toLowerCase().split(''));
// let vowels = ['a', 'e', 'i', 'o', 'u'];


// function getAllVowelCountInStingHandler(str) {
//   let result = {};
//   vowels.forEach(vowel => {
//     // console.log("pawar",typeof(str));
//     const vowelCount = str.filter(item => item === vowel).length || 0;
//     // console.log("item === vowel" ,( item => item === vowel).length );
//     result[vowel] = vowelCount;
//     // console.log("result[vowel] = vowelCount" , result[vowel] = vowelCount);
//   })
// //   console.log("getAllVowelCountInStingHandler", result);
//   return result;
  
// }
// // console.log("return result" ,  result);
// const getAllVowelCountInSting = getAllVowelCountInStingHandler(arrByStr || []);
// console.log(`Task 1 : Get All vowels counts : - ${JSON.stringify(getAllVowelCountInSting)}`);


// function findMaxCountVowel(obj) {
//   let maxCount = 0, maxResult = '';
//   for (let key in obj) {
//     // console.log("let key in obj", key);
//     // console.log("obj[key]", obj[key]);
//     // console.log("maxCount", maxCount);
//     if (obj[key] > maxCount) {
//     //   console.log("obj[key] > maxCount", obj[key] > maxCount);
//       maxCount = obj[key];
//       maxResult = key;
//     }
//   }
//   return maxResult ? maxResult : vowels[0];
// }
// function findMinCountVowel(obj) {
//   let minCount = arrByStr.length, minResult = '';
//   for (let key in obj) {
//     if (obj[key] <= minCount) {
//       minCount = obj[key];
//       minResult = key;
//     }
//   }
//   return minResult ? minResult : vowels[vowels.length - 1];
// }
// console.log(`Task 2 : Find Max count vowel :- ${findMaxCountVowel(getAllVowelCountInSting)}`);
// console.log(`Task 3 : Find Min count vowel :- ${findMinCountVowel(getAllVowelCountInSting)}`); 

