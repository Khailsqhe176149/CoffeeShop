// ///cach so 1
// //khoi tao
// var Person = {};
//
// //them thuoc tinh
// Person.name = '';
// Person.age = '';
// Person.Address ='';
//
// //cach so 2
// var Person2 = {
//     name : 'Hauvt11',
//     age : 0,
//     address : 'Ha Noi',
//     getName : function setName(){Person2.name = 'Hauvt12'; return Person2.name}
// };
//
// //cach so 3
// var Person3 = new Object();
// Person3.name = '';
// Person3.age ='';
// Person.address ='';



function myValidationFunction() {
    let x = document.forms["myForm"]["name"].value;
    if (x == "") {
        alert("Name is required!");
        return false;
    }
    return true;
}


