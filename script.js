console.log('works');

function submit() {
  event.preventDefault();
  let searchInput = document.querySelector('.search-input').value;
  fetchResult(searchInput);
}

function fetchResult(searInput) {
  const urlApi = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searInput}`;

  fetch(urlApi)
    .then((response) => response.json())
    .then((data) => {
      const results = data.query.search;

      console.log(results);
      showResults(results);
    });
}

function showResults(results) {
  const searchResults = document.querySelector('.showResult');

  searchResults.innerHTML = '';

  results.forEach((result) => {
    const url = `https://en.wikipedia.org/wiki/${result.title}`;

    searchResults.insertAdjacentHTML(
      'beforeend',

      `<div class="result-divi">
    <h3 class="title-result">
   <a href="${url}" target="_blank" class="link-result"rel="noreferrer">${result.title}</a>
    </h3> 
   <span class="result-divi-text">${result.snippet}</span><br>
      <a href="${url}" class="result-link" target="_blank" rel="noreferrer">For More Info....</a>
       </div>`
    );
  });
}
