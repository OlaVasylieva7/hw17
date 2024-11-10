const imageGallery = document.getElementById("image__gallery");
const loadMoreBtn = document.getElementById("load-more__btn");

const apiKey = "47006346-99ebe066d014da3738a94e72a";
const apiUrl = `https://pixabay.com/api/?key=${apiKey}&editors_choice=true&image_type=photo&per_page=4`;

let currentPage = 1;

function fetchImages(page) {
  fetch(`${apiUrl}&page=${page}`)
    .then((response) => response.json())
    .then((data) => {
      if (!Array.isArray(data.hits)) {
        console.error("data is not an array");
        return;
      }

      data.hits.forEach((item) => {
        const imageItem = document.createElement("div");
        imageItem.classList.add("image__item");

        imageItem.innerHTML = `
          <img src="${item.largeImageURL}" alt="${item.user}">
          <p>author: ${item.user}</p>
          <p>likes: ${item.likes} ❤️</p>
        `;

        imageGallery.appendChild(imageItem);
      });
    })
    .catch((error) => console.error("something went wrong"));
}

loadMoreBtn.addEventListener("click", () => {
  currentPage++;
  fetchImages(currentPage);
});

fetchImages(currentPage);
