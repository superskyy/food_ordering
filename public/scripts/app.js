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
