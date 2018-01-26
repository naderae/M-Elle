
// $(document).ready(function () {
document.addEventListener("turbolinks:load", function(event) {


    var container = document.querySelector('.container');
    var outer = document.querySelector('.outer');
    var page_body = document.querySelector('.page-content');

    var sale = document.getElementById('sale-title')
    var list = document.getElementById('sale-options');


    sale.addEventListener("click", function(e){

      e.preventDefault()



      if (list.style.display == 'none') {
        list.style.display = 'block';
        page_body.innerHTML = "";
        outer.style.background = "#fffffa url('/assets/sloading3.png') no-repeat center top"
        // outer.style.backgroundImage = "url('/assets/sloading.png')";
        // var div = document.createElement("div");
        // page_body.appendChild(div)
        // div.style.backgroundImage = "url('/assets/landing.jpg')";

      } else {
        list.style.display = 'none';
        page_body.innerHTML = "";
        outer.style.background = "#fffffa url('/assets/sloading3.png') no-repeat center top"
        // outer.style.backgroundImage = "url('/assets/sloading.png')";
        // var div = document.createElement("div");
        // page_body.appendChild(div)
        // div.style.backgroundImage = "url('/assets/landing.jpg')";

      }
    });



    var new_collection = document.getElementById('new-collection-title')
    var list_two = document.getElementById('new-collection-options');


    new_collection.addEventListener("click", function(e){

      e.preventDefault()

      if (list_two.style.display == 'none') {
        list_two.style.display = 'block';
        page_body.innerHTML = "";
        outer.style.background = "#fffffa url('/assets/ncloading5.png') no-repeat center right/65%";
        // outer.style.backgroundSize = "100%";

      } else {
        list_two.style.display = 'none';
        page_body.innerHTML = "";
        outer.style.background = "#fffffa url('/assets/ncloading5.png') no-repeat center right/65%";
        // outer.style.backgroundSize = "100%";
      }
    });






});
