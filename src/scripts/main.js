import "../styles/main.scss";
import $ from "jquery";
import "slick";
import "slick-carousel";

/* //? slick slider for general pages */
$(function () {
  $(".wrap-slick").slick({
    infinity: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    adaptiveHeight: true,
    dots: true,
    arrows: false,
    appendDots: $(".my_dots_container"),

    /* //! if need use arrows btn for slider */
    // prevArrow: document.querySelectorAll(".my-arrow-prev"),
    // nextArrow: document.querySelectorAll(".my-arrow-next"),
  });
});

