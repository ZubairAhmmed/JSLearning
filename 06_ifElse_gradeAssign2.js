
 var voteEligible = function (age) {
    if (age <= 0 || age > 120) {
        console.log(`${age} your age is invalid`);
      } else {
        
      }
        if (age >= 18) {
          console.log(`${age} you are eligible for vote`);
        } else {
          console.log(`${age} you are not eligible for vote`);
        }
    
}

voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(null);