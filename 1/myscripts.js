const mainImage = document.getElementById("csgoMainImage");

mainImage.onclick = () => {
    if (mainImage.src === "file:///C:/Project/Web/Random%20projects/1/ressources/imagecsgo.jpg"){
        mainImage.src = "file:///C:/Project/Web/Random%20projects/1/ressources/imagecsgo2.jpg";
    } else {
        mainImage.src = "file:///C:/Project/Web/Random%20projects/1/ressources/imagecsgo.jpg";
    }
}