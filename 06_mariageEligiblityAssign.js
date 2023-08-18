

function mariageEligible(gender,age) {
    var ageValue = +age
    if (age <= 0 || age > 120 || isNaN(ageValue) )  {
        console.log(`invalid input`);
    }
    if (age>=18 && gender == "female") {
        console.log(`${gender} is eligible for mariage and your age is ${age}`);
    }
    if (age>=21 && gender == "male" ) {
        console.log(`${gender} is eligible for mariage and your age is ${age}`);
        
    } 
    if (age>=21 && gender == "other" ) {
        console.log(`${gender} is eligible for mariage and your age is ${age}`);
    }
    else {
        console.log(`${gender} is not eligible for mariage and your age is ${age}`);
    }
}
mariageEligible("male",17);
mariageEligible("male",25);
mariageEligible("female",28);
mariageEligible("female",16);
mariageEligible("other",35);
mariageEligible("other",41);
mariageEligible("other",19);