function createMenuItem(menuData) {
  // const picture = menuData.picture;
  const $menuElement = $("<div>");

  const $picture = $("<div>").text(menu.picture).addClass("image");
  const $name = $("<h2>").text(menuData.name).addClass("name");
  const $description = $("<div>").text(menuData.description);
  const $price = $("<p>").integer(menuData.price);

  $menuElement.append($picture).append($name).append($description).append($price);
  console.log($menuElement);
  return $menuElement;
}

$(() => {
  $.ajax({
    method: "GET",
    url: "/api/menu"
  }).done((menu) => {
    console.log(menu);
    for(item of menu) {  
      $("<div>").prepend(createMenuItem(item));
      console.log("rendering complete");
    }
  });;
});

// get the phone number from the input // POST to /order
$('.phone-form').on('submit', function(){
  $.ajax({
    method: "POST",
    url: "/order",
    data: $(this).serialize(),
    success: function () {
      $('.phone-form').reset();
      $("#thanks").text("Thank you for your order!").show()
    }
  })
});

function getPhoneNumber (){
  return Number($('input.phone').val());
};



// create the list item
function createOrder (title){

    let $order = `
    <ul class="order-summary">
     <li>
    ${title} ${price}
    </li>
    </ul> `

    return $order;
  }


// get the title of the menu item after click on Add Order button

const title = $('button.add-item').on('click', function(){
  console.log(findItemTitle());
  $('ul').append(findItemTitle());
});

function findItemTitle(){
 return ($('#item-title').text());
};

// get the price form the menu item
const price = $('button.add-item').on('click', function(){
  console.log(findItemPrice());
  $('ul').append(findItemPrice());
});

function findItemPrice(){
 return ($('.price').text());
};






















