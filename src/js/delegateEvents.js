import { getMovieDatailsById } from './getShowsApi';


export const delegateEvents = () => {
    const showItems = document.querySelector('.items-list');


    // add listener to get item box id
    showItems.addEventListener('click', function(event) {
        if (event.target.closest('.item-box')) {
            const MOVIE_ID = event.target.id;

            
            // run a function to get movie details
            getMovieDatailsById(MOVIE_ID);
        }
    })

    // const itemsLists = document.querySelectorAll('.items-list');

    // itemsLists.forEach(itemsList => {
    //     itemsList.addEventListener('click', function(event) {
    //         if (event.target.closest('.item-box')) {
    //             console.log('working');
    //         }
    //     });
    // });

    
}