
document.addEventListener("turbolinks:load", function(event) {


  var input = document.getElementById('myInput');

  input.addEventListener('keyup', filter)



  function filter() {

    var searchTerm = input.value.toUpperCase();
    var itemDescriptions = document.getElementsByClassName('item-description');


    for (var i = 0; i < itemDescriptions.length; i++) {

      if (itemDescriptions[i].innerHTML.toUpperCase().indexOf(searchTerm) > -1) {
        itemDescriptions[i].closest('.gallery_product').style.display = "";
      } else {
        itemDescriptions[i].closest('.gallery_product').style.display = "none";
      }
    }

  }

});


// onkeyup="filter()"
