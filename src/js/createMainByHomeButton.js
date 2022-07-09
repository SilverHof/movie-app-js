export const createMainByHomeButton = () => {
    const mainBlock = document.createElement('main');
    mainBlock.classList.add('main');
    const bodyBlock = document.querySelector('body');
    bodyBlock.append(mainBlock);
}