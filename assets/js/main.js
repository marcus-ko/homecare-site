"use strict"; // window.setTimeout(function () {  
// var x = document.querySelector("iframe").contentWindow;
// x.document.querySelector("body").style.backgroundColor = "blue";
// }, 20000);  

$(document).ready(function () {
  // $('body').autoPadding({
  //   source: $('.js-header'),
  // });
  //removeIf(production)
  console.log("document ready"); //endRemoveIf(production)

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://weatherapi-com.p.rapidapi.com/current.json?q=Chicago%2C%20IL",
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "4c9d3192ccmshcb8088c0dd009fdp1642cdjsna50924d37ba9",
      "x-rapidapi-host": "weatherapi-com.p.rapidapi.com"
    }
  };
  $.ajax(settings).done(function (response) {
    console.log(response);
  }); // change background color on nav when scrolling

  $(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  }); // var iframe = $("#cnaJobsPage");
  // iframe.contents().find(".featured-employer-nav").css({"display":"none"});
  // this would turn the 1st iframe in document blue.
  // input phone mask
  // $(":input").inputmask();
  // $("#inputPhone").inputmask({
  //   mask: '999-999-9999',
  //   placeholder: ' ',
  //   showMaskOnHover: false,
  //   showMaskOnFocus: false,
  //   onBeforePaste: function (pastedValue, opts) {
  //     var processedValue = pastedValue;
  //     //do something with it
  //     return processedValue;
  //   }
  // });
});