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
    $newHornCreature.find('img').attr('src', hornCreature.image_url);
    $newHornCreature.find('img').attr('alt', hornCreature.keyword);
    $newHornCreature.find('p').text(hornCreature.description);
    $newHornCreature.removeClass('photo-template');

    $('.gallery').append($newHornCreature);

  });

  makeDropDown(images);

}

function makeDropDown(images){
  // create keyword to hold keywords
  const keywords = [];

  // i need to push all keywords into the keyword array

  images.forEach((element) => {
    //check if the array already has that word before pushing
    if(keywords.includes(element.keyword)){
      keywords.push(element.keyword);
    }
    
  });

  console.log('keywords arr', keywords);

}


$(startApp);
