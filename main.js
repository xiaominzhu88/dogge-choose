const myPicturesArray = [
  {
    albumId: 1,
    id: 1,
    title: "bullterrier",
    url: "bullterrier_Kopie.jpg",
    thumbnailUrl: "bullterrier_small.jpg"
  },
  {
    albumId: 1,
    id: 2,
    title: "englisch-dogge",
    url: "Englischedogge-Kopie.jpg",
    thumbnailUrl: "Englischedogge-small.jpg"
  },
  {
    albumId: 1,
    id: 3,
    title: "german-dogge",
    url: "german-dogge.jpg",
    thumbnailUrl: "german-dogge-small.jpg"
  },
  {
    albumId: 2,
    id: 4,
    title: "french-dogge",
    url: "frenchdogge-Kopie.jpg",
    thumbnailUrl: "frenchdogge-small.jpg"
  },
  {
    albumId: 2,
    id: 5,
    title: "spain-dogge",
    url: "spain-dogge.jpg",
    thumbnailUrl: "spain-dogge-small.jpg"
  },
  {
    albumId: 2,
    id: 6,
    title: "bannerbxdogge",
    url: "bannerbxdogge.jpg",
    thumbnailUrl: "bannerbxdogge-small.jpg"
  },
  {
    albumId: 2,
    id: 7,
    title: "daenische-dogge",
    url: "daenische-dogge.jpg",
    thumbnailUrl: "daenische-dogge-small.jpg"
  }
];

let imgContainer, IMAGES, button1, button2, allImages, index;

function selectImg() {
  let button1 = document.querySelector("#button1");
  let button2 = document.querySelector("#button2");

  button1.addEventListener("click", showImagesAlbum1);
  button2.addEventListener("click", showImagesAlbum2);
}

function showImagesAlbum1() {
  removeImages();

  IMAGES = document.querySelector("#images");

  myPicturesArray.forEach(currentImage => {
    //console.log(currentImage.albumId);

    if (currentImage.albumId === 1) {
      image = document.createElement("img");

      image.alt = currentImage.title;
      image.id = currentImage.id;
      image.src = currentImage.thumbnailUrl;
      image.url = currentImage.url;

      IMAGES.appendChild(image);
      //console.log(image);
    }

    image.addEventListener("click", () => {
      imgContainer = document.querySelector("#large");
      imgContainer.innerHTML =
        ' <img src="' +
        image.url +
        '"  alt="' +
        image.alt +
        '" id = "' +
        image.id +
        '" > ';
    });
  });
}

function showImagesAlbum2() {
  removeImages();
  IMAGES = document.querySelector("#images");

  myPicturesArray.forEach(function(currentImage) {
    if (currentImage.albumId === 2) {
      image = document.createElement("img");
      image.src = currentImage.thumbnailUrl;
      image.alt = currentImage.title;
      image.id = currentImage.id;
      image.url = currentImage.url;
      IMAGES.append(image);

      image.addEventListener("click", () => {
        imgContainer = document.querySelector("#large");

        imgContainer.innerHTML =
          '<img src="' +
          image.url +
          '" alt="' +
          image.alt +
          '" id = "' +
          image.id +
          '" > ';
      });
    }
  });
}

function removeImages() {
  allImages = document.getElementsByTagName("img");
  while (allImages[0]) {
    allImages[0].parentNode.removeChild(allImages[0]);
  }
}
