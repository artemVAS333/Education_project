export const openMenu = () => {
    const menu = document.querySelector('.header_menu');
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
    } else {
        menu.classList.add('active');
    }

    const burger = document.querySelector('.header_burger');
    if (burger.classList.contains('active')) {
        burger.classList.remove('active');
    } else {
        burger.classList.add('active');
    }

    const body = document.querySelector('body');
    if (body.classList.contains('lock_scroll')) {
        body.classList.remove('lock_scroll');
    } else {
        body.classList.add('lock_scroll');
    }
}