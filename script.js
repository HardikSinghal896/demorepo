
// console.log(x);
// getName();
// var x=7;
// const getname= ()=>{
//     console.log("Function hoisting");
// }


// function store(a)
// {
//     var c=4;
//     return function(b){
//         return a+b+c;
//     }
// }

// var sum=store(10);

// console.log(sum(5));

// fetch("https://jsonplaceholder.typicode.com/users")
//  .then((response)=>{
//     return response.json();
//  })
//  .then((data)=>{
//     console.log(data);
//     for(x in data)
//     {
//         document.write(data[x].name,"-",data[x].email,"<br>");
//     }
//  })
//  .catch((error)=>{
//     console.log(error);
//  })

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// const arr1 = [1, 2, 3];
// const arr2 = [3, 4, 5];
// const arr3 = [];
// let i = 0;
// let j = 0;
// while (i < arr1.length && j < arr2.length) //i=4 4<3
// {
//   console.log(1);
//   if (arr1[i] <= arr2[j]) {
//     arr3.push(arr1[i]);
//     i++;
//   }
//   else {
//     arr3.push(arr2[j]);
//     j++;
//   }
// }
// console.log(arr3)
// console.log(i, arr1.length);
// while (i<arr1.length) 4 < 3
// { 
//   if(i<arr1.length){
       
//     arr3.push(arr1[i]);
//   }
//   i++;
// }
// console.log(arr3);
// while (j < arr2.length) // 0<3 // 1<3 // 2<3 // 3<3 (break)
// {
//   arr3.push(arr2[j]); j++;
// }
// console.log(arr3);

// let n=arr3.length;

//   if (arr3.length % 2 === 0) {
//     console.log("Median is:", (arr3[n/2]+arr3[n/2-1])/2);
//   }
//   else {
//     console.log("Median is:", arr3[n/2]);
//   }


// let paragraph123 = document.getElementById("paragraph");

// paragraph123.innerHTML="Difference between innerHTML and innerText";
// // paragraph.write="asdf";
// console.log("console");

console.log(a);
var a;
var b;
var c;