// $(() => {
//   $.ajax({
//     method: "GET",
//     url: "/api/users"
//   }).done((users) => {
//     for(user of users) {
//       $("<div>").text(user.name).appendTo($("body"));
//     }
//   });
// });

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

$('button.add-item').on('click', function(){
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

function findItemTitle(parent){
 return (parent.find('.item-title').text());
};

// get the price form the menu item

function findItemPrice(parent, elmSelector = '.price'){
  return parseFloat(
    parent.find(elmSelector).text().replace('$', "")
  );
};

function sumItems(){
  let sum = 0;
  $('.c-cart').each(function(elm){
    const parent = $(this)
    sum += findItemPrice(parent, '.c-price')
  })
  return sum;
}

$('.c-cart-container').on('click', '.c-remove-item', function(){
  $(this).closest('.c-cart').remove();
  $('.c-total-dollar').text(`$${sumItems()}`)
});




