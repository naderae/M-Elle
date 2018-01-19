//
document.addEventListener("turbolinks:load", function(event) {


  var items = document.querySelectorAll('.sale-category');
  // console.log(items);

  for (var i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function(e){

      e.preventDefault()

      var category = e.target.id;
      // console.log(category);
      console.log(category);
      $.ajax({
        method: "POST",
        url: 'http://localhost:3000/clothings/fetch_items',
        data: JSON.stringify({ category: category}),
        dataType: "JSON"
      }).done(function(data){
          alert("success!");
          console.log(data);
        });

      });
    };
});
