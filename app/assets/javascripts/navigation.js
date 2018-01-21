//
document.addEventListener("turbolinks:load", function(event) {


  var items = document.querySelectorAll('.sale-category');
  // console.log(items);

  for (var i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function(e){

      e.preventDefault()

      var category = $(this).data('cat');
      var list_type = $(this).data('list-type')


      console.log(category);
      console.log(list_type);
      $.ajax({
        method: "POST",
        url: 'http://localhost:3000/clothings/fetch_items',
        data: { category: category, list_type: list_type},
        dataType: "JSON"
      }).done(function(data){
          alert("success!");
          console.log(data);

        });

      });
    };
  });
