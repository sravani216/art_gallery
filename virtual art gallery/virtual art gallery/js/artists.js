const artists = [
    {
        name: "Leonardo Da Vinci",
        field: "Renaissance Painter",
        image: "assets/images/artists/daVinci.jpg",
        bio: "Italian polymath of the Renaissance, known for Mona Lisa and The Last Supper."
    },
    {
        name: "Vincent Van Gogh",
        field: "Post-Impressionist Painter",
        image: "assets/images/artists/vanGogh.jpg",
        bio: "Dutch painter famous for Starry Night and expressive brushwork."
    },
    {
        name: "Pablo Picasso",
        field: "Cubist Artist",
        image: "assets/images/artists/picasso.jpg",
        bio: "Spanish artist, co-founder of Cubism, known for Guernica."
    },
    {
        name: "Michelangelo",
        field: "Sculptor & Painter",
        image: "assets/images/artists/michelangelo.jpg",
        bio: "Italian Renaissance master, creator of David and Sistine Chapel ceiling."
    },
    {
        name: "Frida Kahlo",
        field: "Expressionist Painter",
        image: "assets/images/artists/frida.jpg",
        bio: "Mexican artist known for deeply personal self-portraits."
    },
    {
        name: "Auguste Rodin",
        field: "Modern Sculptor",
        image: "assets/images/artists/rodin.jpg",
        bio: "French sculptor known for The Thinker."
    }
];

const container = document.getElementById("artists");
container.innerHTML = "";

artists.forEach(artist => {
    container.innerHTML += `
        <div class="artist-card" onclick="viewArtist(
            '${artist.name}',
            '${artist.field}',
            '${artist.image}',
            '${artist.bio}'
        )">
            <img src="${artist.image}" alt="${artist.name}" style="width:100%">
            <h3>${artist.name}</h3>
            <p>${artist.field}</p>
        </div>
    `;
});

function viewArtist(name, field, image, bio) {
    localStorage.setItem("artistName", name);
    localStorage.setItem("artistField", field);
    localStorage.setItem("artistImage", image);
    localStorage.setItem("artistBio", bio);
    location.href = "artist-view.html";
}
