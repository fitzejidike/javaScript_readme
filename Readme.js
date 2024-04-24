
function testScore(scores){
   let passscore = scores.filter(function (scores){
      return scores >= 70;
   });
         return passscore;

}
console.log(testScore([66,98,56,87,74,54,35,67,99,70,]));
module.exports = (testScore);
