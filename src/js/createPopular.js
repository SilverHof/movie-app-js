export const createPopular = (showitems) => {
    // get main block to fill by top rated block
    const mainBlock = document.querySelector('.main');


    // create top rated block
    const popularBlock = document.createElement('section');
    const popularContainer = document.createElement('div');
    const popularInner = document.createElement('div');
    const popularTitle = document.createElement('h1');
    const popularItems = document.createElement('div');


    // add classes to top rated block
    popularBlock.classList.add('popular');
    popularContainer.classList.add('popular__container', 'container');
    popularInner.classList.add('popular__inner');
    popularTitle.classList.add('popular__title');
    popularItems.classList.add('popular__items');


    // add info to elements
    popularTitle.textContent = `Popular Shows`;


    // add top rated elements to main block
    mainBlock.append(popularBlock);
    popularBlock.append(popularContainer);
    popularContainer.append(popularInner);
    popularInner.append(
        popularTitle,
        popularItems
    );


    const IMG_URL = `https://image.tmdb.org/t/p/w500/`;


    // generate movie item blocks
    showitems.forEach(showitem => {
        // get info from response
        const { title, poster_path, vote_average, release_date, id } = showitem;

        const popularItemBox = document.createElement('div');

        const popularItemImg = document.createElement('img');

        const popularItemContent = document.createElement('div');
        const popularItemData = document.createElement('div');
        const popularItemTitle = document.createElement('h2');
        const popularItemVote = document.createElement('div');


        // add classes to top rated item
        popularItemBox.classList.add('popular__item-box');

        popularItemImg.classList.add('popular__item-img');

        popularItemContent.classList.add('popular__item-content');
        popularItemData.classList.add('popular__item-data');
        popularItemTitle.classList.add('popular__item-title');
        popularItemVote.classList.add('popular__item-vote');


        // add info to top rated items
        popularItemImg.src = IMG_URL + poster_path;
        popularItemData.textContent = release_date.slice(0, 4);
        popularItemTitle.textContent = title;
        popularItemVote.textContent = vote_average;

        const vote = parseInt(vote_average);

        if (vote > 7.5 && vote < 10) {
            popularItemVote.classList.add('green-vote');
        } else if(vote > 5.5 && vote < 7.5) {
            popularItemVote.classList.add('yellow-vote');
        } else {
            popularItemVote.classList.add('red-vote');
        }


        // add items to top rated
        popularItems.append(popularItemBox);
        popularItemBox.append(
            popularItemImg,
            popularItemContent
        );
        popularItemContent.append(
            popularItemData,
            popularItemTitle,
            popularItemVote
        );
    });

    

}