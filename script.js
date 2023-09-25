// IT WILL DISPLAY THE DATA ON CONSOLE ONLY 

/*const api_url= "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
//get the data from api

async function getquote(url){

    //fetch the data
    const response= await fetch(url);

    //store the data fetched

    var data=await response.json();
    //display data in console

    console.log(data);
}

//call  the getquote function it will fetch and store then display on console

getquote(api_url);

*/

/*------------------------------------------------ */

// TO DISPLAY DATA  and author ON QUOTEBOX  


const quote= document.getElementById("quote");
const author =document.getElementById("author");
const api_url= "https://api.quotable.io/random";

//get the data from api

async function getquote(url){

    //fetch the data
    const response= await fetch(url);

    //store the data fetched

    var data=await response.json();
    //display data in quotebox instaed of console

    //see on console that quote is presnt in content and author name in author

    quote.innerHTML =data.content;
    author.innerHTML=data.author;
}

//call  the getquote function it will fetch and store then display on console

getquote(api_url);


//twitter share link

function tweet(){
 //   window.open("https://twitter.com/intent/tweet?text=Hello%20world" , "Tweet Window" , "Width=600px, height= 300px")


 //to show quote instead of hellow orld and author name
    window.open("https://twitter.com/intent/tweet?text=" +quote.innerHTML +"----by " +author.innerHTML, "Tweet Window" , "Width=600px, height= 300px")
}
