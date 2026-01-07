const artworks = [
    { title: "Sculpture One", image: "assets/images/sculptures/sculpture1.jpg" },
    { title: "Sculpture Two", image: "assets/images/sculptures/sculpture2.jpg" },
    { title: "Sculpture Three", image: "assets/images/sculptures/sculpture3.jpg" },
    { title: "Sculpture Four", image: "assets/images/sculptures/sculpture4.jpg" },
    { title: "Sculpture Five", image: "assets/images/sculptures/sculpture5.jpg" },
    { title: "Sculpture Six", image: "assets/images/sculptures/sculpture6.jpg" }
];

const gallery = document.getElementById("gallery");
gallery.innerHTML = "";

artworks.forEach(art => {
    gallery.innerHTML += `
        <div class="gallery-item" onclick="openArt('${art.title}', '${art.image}')">
            <img src="${art.image}" alt="${art.title}">
            <div class="gallery-caption">${art.title}</div>
        </div>
    `;
});

function openArt(title, image) {
    localStorage.setItem("artTitle", title);
    localStorage.setItem("artImage", image);
    location.href = "view.html";
}
