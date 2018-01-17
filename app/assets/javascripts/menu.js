
// $(document).ready(function () {
document.addEventListener("turbolinks:load", function(event) {

    var sale = document.getElementById('sale-title')
    var list = document.getElementById('sale-options');


    sale.addEventListener("click", function(e){

      e.preventDefault()

      if (list.style.display == 'none') {
        list.style.display = 'block';
      } else {
        list.style.display = 'none';
      }
    });



    var new_collection = document.getElementById('new-collection-title')
    var list_two = document.getElementById('new-collection-options');


    new_collection.addEventListener("click", function(e){

      e.preventDefault()

      if (list_two.style.display == 'none') {
        list_two.style.display = 'block';
      } else {
        list_two.style.display = 'none';
      }
    });






});
