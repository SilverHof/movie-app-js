export const createHeader = () => {
    // get body block
    const bodyBlock = document.querySelector('body');


    // create header's elements
    const headerBlock = document.createElement('header');
    const headerContainer = document.createElement('div');
    const headerInner = document.createElement('div');

    const headerLogo = document.createElement('button');
    const headerMenuList = document.createElement('ul');
    headerMenuList.insertAdjacentHTML(
        'afterbegin',
        `<button class="header__menu-item header__menu-item_movies">Movies</button>
        <button class="header__menu-item header__menu-item_series">Series</button>
        <button class="header__menu-item header__menu-item_tv-shows">TV Shows</button>
        <button class="header__menu-item header__menu-item_actors">Actors</button>`
    );

    const headerSettingsBox = document.createElement('div');
    const headerFormBox = document.createElement('form');
    const headerFormInput = document.createElement('input');
    const headerFormBtn = document.createElement('button');
    const headerSwitchBtn = document.createElement('button')


    // add classes to header's elements
    headerBlock.classList.add('header');
    headerContainer.classList.add('header__container', 'container');
    headerInner.classList.add('header__inner');

    headerLogo.classList.add('header__logo');
    headerMenuList.classList.add('header__menu-list');

    headerSettingsBox.classList.add('header__settings-box')
    headerFormBox.classList.add('header__form-box');
    headerFormInput.classList.add('header__form-input');
    headerFormBtn.classList.add('header__form-btn');
    headerSwitchBtn.classList.add('header__switch-btn');


    // add info to header's elements
    headerLogo.textContent = `movie_land`;
    headerFormInput.placeholder = `Search right here...`;
    headerFormBtn.textContent = `Search`;
    headerSwitchBtn.textContent = `dark mode`;


    // append header's elements to body
    bodyBlock.append(headerBlock);
    headerBlock.append(headerContainer);
    headerContainer.append(headerInner);

    headerInner.append(
        headerLogo,
        headerMenuList,
        headerSettingsBox,
    );

    headerSettingsBox.append(
        headerFormBox,
        headerSwitchBtn
    );

    headerFormBox.append(
        headerFormInput,
        headerFormBtn
    );

    
}