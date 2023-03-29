const cardsData = [
  {
    imgSrc: 'images/img.jpg',
    title: 'Картка 1',
    description: "Опис картки 1"
  },
  {
    imgSrc: 'images/img.jpg',
    title: 'Картка 2',
    description: 'Опис картки 2'
  },
  {
    imgSrc: 'images/img.jpg',
    title: 'Картка 3',
    description: 'Опис картки 3'
  },
  {
    imgSrc: 'images/img.jpg',
    title: 'Картка 4',
    description: 'Опис картки 4'
  },
  {
    imgSrc: 'images/img.jpg',
    title: 'Картка 5',
    description: 'Опис картки 5'
  },
  {
    imgSrc: 'images/img.jpg',
    title: 'Картка 6',
    description: 'Опис картки 6'
  },
  {
    imgSrc: 'images/img.jpg',
    title: 'Картка 7',
    description: 'Опис картки 7'
  },
  {
    imgSrc: 'images/img.jpg',
    title: 'Картка 8',
    description: 'Опис картки 8'
  },
  {
    imgSrc: 'images/img.jpg',
    title: 'Картка 9',
    description: 'Опис картки 9'
  },
  {
    imgSrc: 'images/img.jpg',
    title: 'Картка 10',
    description: 'Опис картки 10'
  },
  {
    imgSrc: 'images/img.jpg',
    title: 'Картка 11',
    description: 'Опис картки 11'
  },
  {
    imgSrc: 'images/img.jpg',
    title: 'Картка 12',
    description: 'Опис картки 12'
  },
  {
    imgSrc: 'images/img.jpg',
    title: 'Картка 13',
    description: 'Опис картки 13'
  },
  {
    imgSrc: 'images/img.jpg',
    title: 'Картка 14',
    description: 'Опис картки 14'
  },
  {
    imgSrc: 'images/img.jpg',
    title: 'Картка 15',
    description: 'Опис картки 15'
  },
  {
    imgSrc: 'images/img.jpg',
    title: 'Картка 16',
    description: 'Опис картки 16'
  },
  {
    imgSrc: 'images/img.jpg',
    title: 'Картка 17',
    description: 'Опис картки 17'
  },
  {
    imgSrc: 'images/img.jpg',
    title: 'Картка 18',
    description: 'Опис картки 18'
  },
  {
    imgSrc: 'images/img.jpg',
    title: 'Картка 19',
    description: 'Опис картки 19'
  },
  {
    imgSrc: 'images/img.jpg',
    title: 'Картка 20',
    description: 'Опис картки 20'
  },
  {
    imgSrc: 'images/img.jpg',
    title: 'Картка 21',
    description: 'Опис картки 21'
  },
  {
    imgSrc: 'images/img.jpg',
    title: 'Картка 22',
    description: 'Опис картки 22'
  },
  {
    imgSrc: 'images/img.jpg',
    title: 'Картка 23',
    description: 'Опис картки 23'
  },
  {
    imgSrc: 'images/img.jpg',
    title: 'Картка 24',
    description: 'Опис картки 24'
  },
  {
    imgSrc: 'images/img.jpg',
    title: 'Картка 25',
    description: 'Опис картки 25'
  },
  {
    imgSrc: 'images/img.jpg',
    title: 'Картка 26',
    description: 'Опис картки 26'
  },
  {
    imgSrc: 'images/img.jpg',
    title: 'Картка 27',
    description: 'Опис картки 27'
  },
  {
    imgSrc: 'images/img.jpg',
    title: 'Картка 28',
    description: 'Опис картки 28'
  },
  {
    imgSrc: 'images/img.jpg',
    title: 'Картка 29',
    description: 'Опис картки 29'
  },
  {
    imgSrc: 'images/img.jpg',
    title: 'Картка 30',
    description: 'Опис картки 30'
  },
  {
    imgSrc: 'images/img.jpg',
    title: 'Картка 31',
    description: 'Опис картки 31'
  },
  {
    imgSrc: 'images/img.jpg',
    title: 'Картка 32',
    description: 'Опис картки 32'
  }
]; // Масив об'єків.

(function createCards() {
  // Підвантаження перших 12 карток.
  const cardGrid = document.getElementById('card-grid');
  const cardsHTML = cardsData.map(item => `<div class="card"> <img src="${item.imgSrc}" alt="${item.title}"> <h2>${item.title}</h2> <div class="text-container"><p class="description">${item.description}</p></div> </div>`).slice(0, 12).join(' ');
  cardGrid.innerHTML = cardsHTML;

  // Довантаження ще +4 картки.
  const loadMoreButton = document.getElementById('load-more-button');
  loadMoreButton.addEventListener('click', loadMoreCards);

  function loadMoreCards() {
    const newCardsHTML = cardsData.slice(cardGrid.children.length, cardGrid.children.length + 4).map(item => `<div class="card"> <img src="${item.imgSrc}" alt="${item.title}"> <h2>${item.title}</h2> <div class="text-container"><p class="description">${item.description}</p></div> </div>`).join(' ');
    cardGrid.innerHTML += newCardsHTML;
  }

  // Фільтр по ключовому слову.
  const filterButton = document.getElementById('filter-button');
  filterButton.addEventListener('click', filterCards);
  function filterCards() {
    const filterInput = document.getElementById('filter-input');
    const filterText = filterInput.value.toLowerCase();

    const filteredCardsHTML = cardsData.filter(item => item.title.toLowerCase().includes(filterText) || item.description.toLowerCase().includes(filterText))
    .map(item => `<div class="card"> <img src="${item.imgSrc}" alt="${item.title}"> <h2>${item.title}</h2> <div class="text-container"><p class="description">${item.description}</p></div> </div>`).join(' ');
    cardGrid.innerHTML = filteredCardsHTML;
  }

  // Кнопка сбросу.
  const resetButton = document.getElementById('reset-button');
  resetButton.addEventListener('click', resetCards);

  function resetCards() {
    const cardsHTML = cardsData.map(item => `<div class="card"> <img src="${item.imgSrc}" alt="${item.title}"> <h2>${item.title}</h2> <div class="text-container"><p class="description">${item.description}</p></div> </div>`).slice(0, 12).join(' ');
    cardGrid.innerHTML = cardsHTML;

    const filterInput = document.getElementById('filter-input');
    filterInput.value = '';
    filterInput.blur();
  }
})();

// Повернення на початок сторінки.
const backToTopBtn = document.getElementById("back-to-top-btn");
window.addEventListener("scroll", function () {
  if (window.pageYOffset > window.innerHeight / 2) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
