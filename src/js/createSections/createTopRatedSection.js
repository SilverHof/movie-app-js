import { delegateEvents } from '../delegateEvents';


export const createTopRatedSection = (showitems) => {
    // get main block to fill by top rated block
    const mainBlock = document.querySelector('.main');


    // create top rated block
    const topRatedBlock = document.createElement('section');
    const topRatedContainer = document.createElement('div');
    const topRatedInner = document.createElement('div');
    const topRatedTitle = document.createElement('h1');
    const topRatedItems = document.createElement('div');


    // add classes to top rated block
    topRatedBlock.classList.add('top-rated');
    topRatedContainer.classList.add('top-rated__container', 'container');
    topRatedInner.classList.add('top-rated__inner');
    topRatedTitle.classList.add('top-rated__title');
    topRatedItems.classList.add('top-rated__items', 'items-list');


    // add info to elements
    topRatedTitle.textContent = `Top Rated Shows`;


    // add top rated elements to main block
    mainBlock.append(topRatedBlock);
    topRatedBlock.append(topRatedContainer);
    topRatedContainer.append(topRatedInner);
    topRatedInner.append(
        topRatedTitle,
        topRatedItems
    );


    const IMG_URL = `https://image.tmdb.org/t/p/w500/`;


    // generate movie item blocks
    showitems.forEach(showitem => {
        // get info from response
        const { title, poster_path, vote_average, release_date, id } = showitem;

        const topRatedItemBox = document.createElement('div');

        const topRatedItemImg = document.createElement('img');

        const topRatedItemContent = document.createElement('div');
        const topRatedItemData = document.createElement('div');
        const topRatedItemTitle = document.createElement('h2');
        const topRatedItemVote = document.createElement('div');


        // add classes to top rated item
        topRatedItemBox.classList.add('top-rated__item-box', 'item-box');

        topRatedItemImg.classList.add('top-rated__item-img');

        topRatedItemContent.classList.add('top-rated__item-content');
        topRatedItemData.classList.add('top-rated__item-data');
        topRatedItemTitle.classList.add('top-rated__item-title');
        topRatedItemVote.classList.add('top-rated__item-vote');


        // add info to top rated items
        topRatedItemImg.src = IMG_URL + poster_path;
        topRatedItemData.textContent = release_date.slice(0, 4);
        topRatedItemTitle.textContent = title;
        topRatedItemVote.textContent = vote_average;

        const vote = parseInt(vote_average);

        if (vote > 7.5 && vote < 10) {
            topRatedItemVote.classList.add('green-vote');
        } else if(vote > 5.5 && vote < 7.5) {
            topRatedItemVote.classList.add('yellow-vote');
        } else {
            topRatedItemVote.classList.add('red-vote');
        }


        // add items to top rated
        topRatedItems.append(topRatedItemBox);
        topRatedItemBox.append(
            topRatedItemImg,
            topRatedItemContent
        );
        topRatedItemContent.append(
            topRatedItemData,
            topRatedItemTitle,
            topRatedItemVote
        );
    });

    


}