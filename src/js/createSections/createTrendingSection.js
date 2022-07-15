export const createTrendingSection = (showitems) => {
    // get main block to fill by top rated block
    const mainBlock = document.querySelector('.main');


    // create top rated block
    const trendingBlock = document.createElement('section');
    const trendingContainer = document.createElement('div');
    const trendingInner = document.createElement('div');
    const trendingTitle = document.createElement('h1');
    const trendingItems = document.createElement('div');


    // add classes to top rated block
    trendingBlock.classList.add('trending');
    trendingContainer.classList.add('trending__container', 'container');
    trendingInner.classList.add('trending__inner');
    trendingTitle.classList.add('trending__title');
    trendingItems.classList.add('trending__items', 'items-list');


    // add info to elements
    trendingTitle.textContent = `Trending Shows`;


    // add top rated elements to main block
    mainBlock.append(trendingBlock);
    trendingBlock.append(trendingContainer);
    trendingContainer.append(trendingInner);
    trendingInner.append(
        trendingTitle,
        trendingItems
    );


    const IMG_URL = `https://image.tmdb.org/t/p/w500/`;


    // generate movie item blocks
    showitems.forEach(showitem => {
        // get info from response
        const { poster_path, vote_average, id } = showitem;

        const trendingItemBox = document.createElement('div');

        const trendingItemImg = document.createElement('img');

        const trendingItemContent = document.createElement('div');
        const trendingItemTitle = document.createElement('h2');
        const trendingItemVote = document.createElement('div');


        // add classes to top rated item
        trendingItemBox.classList.add('trending__item-box', 'item-box');

        trendingItemImg.classList.add('trending__item-img');

        trendingItemContent.classList.add('trending__item-content');
        trendingItemTitle.classList.add('trending__item-title');
        trendingItemVote.classList.add('trending__item-vote');


        // add data attribute to item box
        trendingItemBox.id = id;
        trendingItemImg.id = id;

        trendingItemContent.id = id;
        trendingItemTitle.id = id;
        trendingItemVote.id = id;

        // add info to top rated items
        trendingItemImg.src = IMG_URL + poster_path;


        // check if title, name, original_name are in showitem
        if (showitem.title) {
            trendingItemTitle.textContent = showitem.title;
        } else if (showitem.name) {
            trendingItemTitle.textContent = showitem.name;
        } else if (showitem.original_name) {
            trendingItemTitle.textContent = showitem.original_name;
        }


        // parse string to integer
        const vote = parseInt(vote_average).toFixed(1);
        trendingItemVote.textContent = vote;


        // check vote and add color
        if (vote > 7.5 && vote < 10) {
            trendingItemVote.classList.add('green-vote');
        } else if (vote > 5.5 && vote < 7.5) {
            trendingItemVote.classList.add('yellow-vote');
        } else {
            trendingItemVote.classList.add('red-vote');
        }


        // add items to top rated
        trendingItems.append(trendingItemBox);
        trendingItemBox.append(
            trendingItemImg,
            trendingItemContent
        );
        trendingItemContent.append(
            trendingItemTitle,
            trendingItemVote
        );
    });
}