'use strict'

function startApp(){
  loadData();
//   attachListeners();
}

function loadData(){
  const success = hornCreatures => displayPage(hornCreatures);

  const failure = error => console.error(error);

  $.get('data/page-1.json', 'json')
    .then(success)
    .catch(failure);
}

function displayPage(arr) {

  arr.forEach(element => {
    const $newHornCreature = $('.photo-template').clone();

    $newHornCreature.find('h2').text(element.title);
    $newHornCreature.find('img').attr('src', element.image_url);
    $newHornCreature.find('img').attr('alt', element.keyword);
    $newHornCreature.find('p').text(element.description);
    $newHornCreature.removeClass('photo-template');

    $('.gallery').append($newHornCreature);
  });
  makeDropDown(arr);
}

function makeDropDown(arr) {
  // create array to hold keywords
  const keywords = [];

  arr.forEach (element => {
    // check if the array already has that word before pushing
    // if the word is not in the array
    if(!keywords.includes(element.keyword)){
      keywords.push(element.keyword)
    }
  });
  console.log(keywords);

  keywords.forEach(element => {
    const markup = `<option value="${element}">${element}</option>`;
    $('select').append(markup);
  });
}

$(startApp);
