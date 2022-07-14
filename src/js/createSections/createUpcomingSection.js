import { delegateEvents } from '../delegateEvents';


export const createUpcomingSection = (showitems) => {
    // get main block to fill by top rated block
    const mainBlock = document.querySelector('.main');


    // create top rated block
    const upcomingBlock = document.createElement('section');
    const upcomingContainer = document.createElement('div');
    const upcomingInner = document.createElement('div');
    const upcomingTitle = document.createElement('h1');
    const upcomingItems = document.createElement('div');


    // add classes to top rated block
    upcomingBlock.classList.add('upcoming');
    upcomingContainer.classList.add('upcoming__container', 'container');
    upcomingInner.classList.add('upcoming__inner');
    upcomingTitle.classList.add('upcoming__title');
    upcomingItems.classList.add('upcoming__items', 'items-list');


    // add info to elements
    upcomingTitle.textContent = `Upcoming Shows`;


    // add top rated elements to main block
    mainBlock.append(upcomingBlock);
    upcomingBlock.append(upcomingContainer);
    upcomingContainer.append(upcomingInner);
    upcomingInner.append(
        upcomingTitle,
        upcomingItems
    );


    const IMG_URL = `https://image.tmdb.org/t/p/w500/`;


    // generate movie item blocks
    showitems.forEach(showitem => {
        // get info from response
        const { title, poster_path, vote_average, release_date, id } = showitem;

        const upcomingItemBox = document.createElement('div');

        const upcomingItemImg = document.createElement('img');

        const upcomingItemContent = document.createElement('div');
        const upcomingItemData = document.createElement('div');
        const upcomingItemTitle = document.createElement('h2');
        const upcomingItemVote = document.createElement('div');


        // add classes to top rated item
        upcomingItemBox.classList.add('upcoming__item-box', 'item-box');

        upcomingItemImg.classList.add('upcoming__item-img');

        upcomingItemContent.classList.add('upcoming__item-content');
        upcomingItemData.classList.add('upcoming__item-data');
        upcomingItemTitle.classList.add('upcoming__item-title');
        upcomingItemVote.classList.add('upcoming__item-vote');


        // add info to top rated items
        upcomingItemImg.src = IMG_URL + poster_path;
        upcomingItemData.textContent = release_date.slice(0, 4);
        upcomingItemTitle.textContent = title;
        upcomingItemVote.textContent = vote_average;

        const vote = parseInt(vote_average);

        if (vote > 7.5 && vote < 10) {
            upcomingItemVote.classList.add('green-vote');
        } else if(vote > 5.5 && vote < 7.5) {
            upcomingItemVote.classList.add('yellow-vote');
        } else {
            upcomingItemVote.classList.add('red-vote');
        }


        // add items to top rated
        upcomingItems.append(upcomingItemBox);
        upcomingItemBox.append(
            upcomingItemImg,
            upcomingItemContent
        );
        upcomingItemContent.append(
            upcomingItemData,
            upcomingItemTitle,
            upcomingItemVote
        );
    });

    

}