const popup = () => {
    const catalog__btn = document.querySelectorAll(".catalog__btn"),
        catalog__close = document.querySelector(".catalog__close"),
        catalog__modal = document.querySelector(".catalog__modal");

        catalog__btn.forEach(el => {
            el.addEventListener("click", (e) => {
                e.preventDefault();
                catalog__modal.style.display = "flex";
            });
            catalog__close.addEventListener("click", () => {
                catalog__modal.style.display = "none";
            })
        })
}
export default popup;