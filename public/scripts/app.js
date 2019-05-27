// build the menu items by pulling data from db in compiling individual elements for rendering on the webpage
function createMenuItem(menuData) {
  const picture = menuData.picture;
  const $menu_item = $("<article>").addClass("thumbnail");
  const $menu_item_text = $("<div>").addClass("menu-item-text");
  const $price_and_add = $("<div>").addClass("price-and-add");

  const $picture = $(`<div class="menu-item-image">`).attr("style", `background: url('${picture}') no-repeat center / cover`);
  const $name = $("<h4>").text(menuData.name).addClass("item-title");
  const $description = $("<p>").text(menuData.description).addClass("text");
  const $price = $(`<h4 class="price">$${menuData.price}</h4>`);
  const $submit = $(`<button type="submit" class="btn btn-link add-item">Add to order</button>`);


  $price_and_add.append($price).append($submit);
  $menu_item_text.append($name).append($description).append($price_and_add);
  $menu_item.append($picture).append($menu_item_text);
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
$('.phone-form').on('submit', function(ev){
  ev.preventDefault();
  attachOrderToForm();

  $.ajax({
    method: "POST",
    url: "/order",
    data: $(this).serialize(),
    success: function () {
      $('.phone').val("");
      setTimeout(function(){
        $(".message").slideDown('slow', function(){
          $('.message').append(`Your order will be ready in 30 minutes.`)
        });
      }, 30000);
      $("button").slideUp().select();
      $("i").slideUp().select();
      $(".phone").slideUp().select();
    }
  })
});

function getPhoneNumber (){
  return Number($('input.phone').val());
};

function getOrder() {
  return $('.c-order-title').text();
}

function attachOrderToForm (){
  const order = getOrder();
  $('#order').val(order);
}
// get the title of the menu item after click on Add Order button

$(document).on('click', 'button.add-item', function(){
  const menuItem = $(this).closest('.thumbnail')

  $('.c-cart-container').append(
    `<li class="c-cart">
      <div>
        <span class="c-remove-item"><i class="fas fa-times"></i></span>
        <span class="c-order-title">${findItemTitle(menuItem)}</span>
      </div>
      <div class="c-price">$${findItemPrice(menuItem)}</div>
    </li>`
  );
  $('.c-total-dollar').text(`$${sumItems()}`)
});

// remove from order summary

$('.c-cart-container').on('click', '.c-remove-item', function(){
  $(this).closest('.c-cart').remove();
  $('.c-total-dollar').text(`$${sumItems()}`);
  $('.c-cart-container').append()
});



function findItemTitle(parent){
 return (parent.find('.item-title').text());
};

// get the price form the menu item

function findItemPrice(parent, elmSelector = '.price'){
  return parseFloat(
    parent.find(elmSelector).text().replace('$', "")
  );
};

// sum up the order amounts from order summary
function sumItems(){
  let sum = 0;
  $('.c-cart').each(function(elm){
    const parent = $(this)
    sum += findItemPrice(parent, '.c-price')
  })
  return sum;
}
