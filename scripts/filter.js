(function () {
  const elem = document.querySelector(".products__list");
  const iso = new Isotope(elem, {
    // options
    itemSelector: ".products__item",
    filter: ".popular",
  });
  const filterList = document.querySelector(".filter");
  const optionLinks = filterList.querySelectorAll(".filter__link");
  const activeClass = "filter__item--active";

  optionLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      filterList.querySelector("." + activeClass).classList.remove(activeClass);
      e.preventDefault();
      let filterValue = link.getAttribute("data-filter");
      link.closest(".filter__item").classList.add(activeClass);
      iso.arrange({ filter: `.${filterValue}` });
    });
  });
})();
