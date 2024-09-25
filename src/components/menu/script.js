export const openMenu = () => {
    const body = document.querySelector('body');
    const menu = document.querySelector('.header_menu');
    const burger = document.querySelector('.header_burger');
    const menu_list_items = document.querySelectorAll('.menu_list_item');

    for (const element of menu_list_items) {
        element.addEventListener('click', () => {
            burger.classList.remove('active');
            menu.classList.remove('active');
            body.classList.remove('lock');
        });
    }

    burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');
}