import { createMain } from './createBlocks/createMain';
import { getMovieDatailsById } from './getShowsApi';


export const delegateEvents = () => {
    // get all elements which has .items-list class
    const itemsLists = document.querySelectorAll('.items-list');

    // add listener to all elements which has .items-list class
    itemsLists.forEach(itemsList => {
        itemsList.addEventListener('click', function(event) {
            if (event.target.closest('.item-box')) {
                const MOVIE_ID = event.target.id;
                // run a function to get movie details
                getMovieDatailsById(MOVIE_ID);
            }
        });
    });    
};


export const generateMain = () => {
    const homepageBtn = document.querySelector('.header__logo');
    const mainBlock = document.querySelector('.main');


    // create main block by click on homepage button
    homepageBtn.addEventListener('click', homepageClick);
    function homepageClick() {
        mainBlock.remove();
        createMain();
    }
}