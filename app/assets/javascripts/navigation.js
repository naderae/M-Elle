
document.addEventListener("turbolinks:load", function(event) {


  var items = document.querySelectorAll('.sale-category');
  // console.log(items);

  for (var i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function(e){

      e.preventDefault()

      var category = $(this).data('cat');
      var sale = $(this).data('sale');


      console.log(category);
      console.log(sale);
      $.ajax({
        method: "POST",
        url: 'clothings/fetch_items/',
        data: { category: category, sale: sale},
        dataType: "JSON"
      }).done(function(data){
            // alert("success!");

          var clothings = JSON.stringify(data);
          // console.log(clothings);
          parsed_data = JSON.parse(clothings)
          console.log(parsed_data);
          parsed_data["clothings"]

          $('.landing').css('background-image', 'none');
          $('.container').css('background-image', 'none');
          $('.page-content').html('');



          for (var i = 0; i < parsed_data["clothings"].length; i++) {
            if (parsed_data["clothings"][i].price_old) {
              $('.page-content').append('<div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter sprinkle"><div class="item-pic"><a href="/clothings/' + parsed_data['clothings'][i].id + '"><img src="' + parsed_data['clothings'][i].images[0]['url'] + '"> </a></div><br><div class="item-info"><span class="item-description">' + parsed_data['clothings'][i].description  + '</span><br><span class="old-price">$' + parsed_data['clothings'][i].price_old + '</span><span class="item-price">$' + parsed_data['clothings'][i].price + '</span></div></div>')
            } else {
                $('.page-content').append('<div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter sprinkle"><div class="item-pic"><a href="/clothings/' + parsed_data['clothings'][i].id + '"><img src="' + parsed_data['clothings'][i].images[0]['url'] + '"> </a></div><br><div class="item-info"><span class="item-description">' + parsed_data['clothings'][i].description  + '</span><br><span class="item-price">$' + parsed_data['clothings'][i].price + '</span></div></div>')
            }

            }
        });
      });
    };
  });
