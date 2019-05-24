// build the menu items by pulling data from db in compiling individual elements for rendering on the webpage
function createMenuItem(menuData) {
  const picture = menuData.picture;
  const $menu_item = $("<article>");

  const $picture = $(`<img src=${picture}>`);
  const $name = $("<h4>").text(menuData.name);
  const $description = $("<p>").text(menuData.description).addClass("text");
  const $price = $(`<h4 class="price">${menuData.price}</h4>`);

  $menu_item.append($picture).append($name).append($description).append($price);
  return $menu_item;
}

// get the menu and post to the main webpage

  $.ajax({
    method: "GET",
    url: "/api/menu"
  }).done((menu) => {
    console.log(menu);
    for(item of menu) {
      // $("<div>").text(item.name).appendTo($("body"));
      $(".menu-items").append(createMenuItem(item));
      console.log("rendering complete");
    }
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
