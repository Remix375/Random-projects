const imageHolder = document.getElementById("catImage");

const changeImage = () => {
    console.log("hey")
    const randomNum = Math.floor(Math.random() * 10000000);
    console.log(randomNum)
    const link = 'https://thiscatdoesnotexist.com/?' + randomNum;

    imageHolder.src = link;


}


imageHolder.onclick = changeImage