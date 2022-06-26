const userMenuToggle = () => {
    const userMenu = document.querySelector(".user-menu");
    const userBtnClose = document.querySelector(".user-menu__btn");
    const userBtn = document.querySelector(".header__user");

    // Показываем или скрываем меню по клику на кнопке в шапке
    userBtn.addEventListener("click", (e) => {
        //Не выводим событие наверх
        e.stopPropagation();
        //Показываем или скрываем меню
        userMenu.classList.toggle("user-menu--close");
        //Добавляем или удаляем активный класс кнопкк
        userBtn.classList.toggle("white-btn--active");
    });

    //Скрываем меню по клику на кнопке в меню
    userBtnClose.addEventListener("click", () => {
        //Скрываем меню
        userMenu.classList.add("user-menu--close");
        //Удаляем активный класс кнопки в шапке
        userBtn.classList.remove("white-btn--active");
    });

    //Скрываем меню по клику снаружи меню
    document.addEventListener("click", (e) => {
        //Проверяем, что клик не на кнопке в шапке и не на самом меню
        if (e.target !== userMenu && e.target !== userBtn) {
            //Скрываем меню
            userMenu.classList.add("user-menu--close");
            //Удаляем активный класс кнопки в шапке
            userBtn.classList.remove("white-btn--active");
        }
    });

    //Скрываем меню по нажатию клавиш Escape или Tab
    document.addEventListener("keydown", (e) => {
        if (e.key === "Tab" || e.key === "Escape") {
            //Скрываем меню
            userMenu.classList.add("user-menu--close");
            //Удаляем активный класс кнопки в шапке
            userBtn.classList.remove("white-btn--active");
        }
    });
};

export default userMenuToggle;
