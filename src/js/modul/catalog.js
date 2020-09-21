let catalog = () => {
    const catalog__button = document.querySelectorAll(".catalog__button a"),
          catalog__wrapper = document.querySelectorAll(".catalog__wrapper");

          catalog__button.forEach((el) => {
              el.addEventListener("click", (e) => {
                  e.preventDefault();
                  let tab = document.querySelector(el.getAttribute('href'));
                  document.querySelector('#tabNav .catalog__active')
                  .classList.remove('catalog__active');
                  document.querySelector('#tabsWrap .catalog__wrapper_active')
                  .classList.remove('catalog__wrapper_active');

                  el.classList.add('catalog__active');
                  tab.classList.add('catalog__wrapper_active');
              })
          })
}
export default catalog;