function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books')
  .then((res) => res.json())
  // console.log(res)
  // .then(books => console.log(books))
  .then((books) => renderBooks(books))
}


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(books => {
    const h2 = document.createElement('h2');
    h2.innerHTML = books.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
