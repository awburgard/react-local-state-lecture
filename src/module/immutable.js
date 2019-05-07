const numberList = [ 2, 5, 3 ];
const newNumber = 7;

numberList.push(newNumber);
// [ 2, 5, 3, 7 ]

const newNumberList = [...numberList, newNumber];
// [ 2, 5, 3, 7 ]

const user = {
    name: 'Luke',
    freshness: 3
};

const userFreshness = 2;

user.age = userAge;
// {
//      name: 'Luke,
//      freshness: 3,
//      age: 2
// }

const newUserObject = {...user, freshness: 4 }


