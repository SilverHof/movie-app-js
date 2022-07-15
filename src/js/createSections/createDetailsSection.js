import { createMain } from '../createBlocks/createMain';


export const createDetailsSection = (details, castItems) => {
    // get main block and clear it
    const mainBlock = document.querySelector('.main');
    mainBlock.innerHTML = ``;

    // add url path to img
    const IMG_URL = `https://image.tmdb.org/t/p/w500/`;

    // add details info
    const { poster_path, genres, original_title, overview, runtime, release_date, tagline, vote_average } = details;

    // create details block
    const detailsBlock = document.createElement('section');
    const detailsContainer = document.createElement('div');
    const detailsInner = document.createElement('div');

    const detailsInfo = document.createElement('div');
    const detailsImg = document.createElement('img');
    const detailsMoreBox = document.createElement('div');
    const detailsGenreBox = document.createElement('div');
    const detailsMoreRow = document.createElement('div');
    const detailsDate = document.createElement('div');
    const detailsRuntime = document.createElement('div');
    const detailsVote = document.createElement('div');


    const detailsContent = document.createElement('div');
    const detailsCloseBtn = document.createElement('button');
    const detailsTitle = document.createElement('h2');
    const detailsTagline = document.createElement('h3');
    const detailsOverview = document.createElement('div');
    const detailsCastBox = document.createElement('div');


    // add classes to details elements
    detailsBlock.classList.add('details');
    detailsContainer.classList.add('details__container', 'container');
    detailsInner.classList.add('details__inner');

    detailsInfo.classList.add('details__info');
    detailsImg.classList.add('details__img');
    detailsMoreBox.classList.add('details__more-box');
    detailsGenreBox.classList.add('details__genre-box');
    detailsMoreRow.classList.add('details__more-row')
    detailsDate.classList.add('details__date');
    detailsRuntime.classList.add('details__runtime');
    detailsVote.classList.add('details__vote');

    detailsContent.classList.add('details__content');
    detailsCloseBtn.classList.add('details__close-btn');
    detailsTitle.classList.add('details__title');
    detailsTagline.classList.add('details__tagline');
    detailsOverview.classList.add('details__overview');
    detailsCastBox.classList.add('details__cast-box');


    // add info to elements
    detailsImg.src = IMG_URL + poster_path;

    genres.forEach(genre => {
        const genreItem = document.createElement('div');
        genreItem.classList.add('details__genre-item')
        genreItem.textContent = genre.name;
        
        detailsGenreBox.append(genreItem);
    });


    detailsDate.textContent = release_date.slice(0, 4);
    detailsRuntime.textContent = runtime + ` ` + `min`;
    detailsVote.textContent = vote_average + `/10`;

    detailsCloseBtn.textContent = `close`;
    detailsTitle.textContent = original_title;
    detailsTagline.textContent = tagline;
    detailsOverview.textContent = overview;


    for (let index = 0; index < 10; index++) {
        const actorInfo = castItems.cast[index];
        
        const actorItem = document.createElement('div');
        const actorImg = document.createElement('img');
        const actorName = document.createElement('h3');

        actorItem.classList.add('details__cast-item');
        actorImg.classList.add('details__cast-img');
        actorName.classList.add('details__cast-name');

        actorImg.src = IMG_URL + actorInfo.profile_path;
        actorName.textContent = actorInfo.name;

        detailsCastBox.append(actorItem);

        actorItem.append(
            actorImg,
            actorName
        );
    }


    // add elements to details block
    mainBlock.append(detailsBlock);

    detailsBlock.append(detailsContainer);
    detailsContainer.append(detailsInner);
    detailsInner.append(
        detailsInfo,
        detailsContent
    );

    detailsInfo.append(
        detailsImg,
        detailsMoreBox
    );

    detailsMoreBox.append(
        detailsGenreBox,
        detailsMoreRow
    );

    detailsMoreRow.append(
        detailsDate,
        detailsRuntime,
        detailsVote
    )

    detailsContent.append(
        detailsCloseBtn,
        detailsTitle,
        detailsTagline,
        detailsOverview,
        detailsCastBox
    );


    detailsCloseBtn.addEventListener('click', closeDetails);

    function closeDetails() {
        mainBlock.remove();
        createMain();
    }

}