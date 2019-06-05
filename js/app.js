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

function displayPage(hornCreatures){

  hornCreatures.forEach(hornCreature => {
    const $newHornCreature = $('.photo-template').clone();

    $newHornCreature.find('h2').text(hornCreature.title);
    $newHornCreature.find('img').src(hornCreature.image_url);
    $newHornCreature.find('img').alt(hornCreature.keyword);
    $newHornCreature.find('p').text(hornCreature.description);
    $newHornCreature.removeClass('photo-template');

    $('.gallery').append($newHornCreature);

  });
}



$(startApp);
