// console.log("arrays-loops")
const team = [
{
    id: 1,
    favoriteColor: "orange",
    email: "mallen1813@gmail.com",
    unique: "Trying for 4th child",
    Image: "https://avatars.githubusercontent.com/u/74151134?v=4", 
    name: "luke" 
},
{
    id: 2,
    favoriteColor: "yellow",
    email: "rubiblr@gmail.com",
    unique: "likes to travel",
    Image: "https://avatars.githubusercontent.com/u/86809246?v=4",
    name: "ruby"  
},
{
    id: 3,
    favoriteColor: "green",
    email: "parkercaustin@gmail.com",
    unique: "Son lives in england",
    Image: "https://avatars.githubusercontent.com/u/70224936?v=4",
    name: "austin"

    }
];





// const findId = (Array, id) => {
//     return Array.find(memberObj => memberObj.id === id)
// }

// console.log(findId(team, 3));

// const divElement = document.querySelector('#main');

// divElement.innerHTML = "some other text";

const mainBtn = document.getElementById("main-btn");


const mainBtn2 = document.querySelector("#main-btn");

const changeText = (event) => {
    if (event.target.id === "main-btn") {
    document.querySelector('#text').innerHTML = "You clicked that button!";
    }
     
}

const wholeBody = document.querySelector('body');

wholeBody.addEventListener('click', changeText);

// mainBtn2.addEventListener('click', changeText);





