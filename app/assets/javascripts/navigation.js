
document.addEventListener("DOMContentLoaded", function(event) {


  var items = document.querySelectorAll('.sale-category');
  // console.log(items);

  for (var i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function(e){

      e.preventDefault()

      var category = e.target.id;
      // console.log(category);
      console.log(category);
      $.ajax({
        type: "POST",
        url: '/clothings/retrieve',
        data: JSON.stringify({ category: category}),
        dataType: "json",
        success: function(){
          alert("success!!");

        },
        error:function(){
          alert("failure!")

        }
      });
    });
  }



});
