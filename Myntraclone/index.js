/************************
 GLOBAL STATE (with localStorage)
*************************/
let bagItems = JSON.parse(localStorage.getItem('bagItems')) || [];
let wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];

/************************
 BAG & WISHLIST LOGIC
*************************/
function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  updateBagCount();
}

function addToWishlist(itemId) {
  wishlistItems.push(itemId);
  localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
  updateWishlistCount();
}

/************************
 COUNT UPDATE FUNCTIONS
*************************/
function updateBagCount() {
  const bagCountElement = document.querySelector('.bag-item-count');
  if (!bagCountElement) return;

  if (bagItems.length === 0) {
    bagCountElement.innerText = '';
    bagCountElement.style.display = 'none';
  } else {
    bagCountElement.innerText = bagItems.length;
    bagCountElement.style.display = 'inline-block';
  }
}

function updateWishlistCount() {
  const wishlistCountElement = document.querySelector('.wishlist-item-count');
  if (!wishlistCountElement) return;

  if (wishlistItems.length === 0) {
    wishlistCountElement.innerText = '';
    wishlistCountElement.style.display = 'none';
  } else {
    wishlistCountElement.innerText = wishlistItems.length;
    wishlistCountElement.style.display = 'inline-block';
  }
}

/************************
 HOME PAGE RENDER
*************************/
function displayhome() {
  const itemsContainerElement = document.querySelector('.items-container');
  //for updation of wishlist in 2nd html to

  if (!itemsContainerElement) {
    return;
  }

  let items = [
    {
      id: '001',
      item_image: '1.jpg',
      company_name: 'Carlton London',
      item_name: 'Rodium-Plated CZ Floral Studs',
      ratings: { stars: 4.5, noOfReviews: 1400 },
      current_price: 606,
      original_price: 1045,
      discount_percentage: 42,
         delivery_date: '10 feb 2026',
    },
    {
      id: '002',
      item_image: '2.jpg',
      company_name: 'Cukoo',
      item_name: 'Women Padded Halter Neck Swimming Dress',
      ratings: { stars: 4.3, noOfReviews: 140 },
      current_price: 1507,
      original_price: 2599,
      discount_percentage: 42,
      delivery_date: '10 feb 2026',
    },
    {
      id: '003',
      item_image: '3.jpg',
      company_name: 'Nuevosdamas',
      item_name: 'Women Red & White Printed A-Line Knee-Length Skirt',
      ratings: { stars: 4.1, noOfReviews: 2100 },
      current_price: 495,
      original_price: 1599,
      discount_percentage: 69,
      delivery_date: '10 feb 2026',
    },
    {
      id: '004',
      item_image: '4.jpg',
      company_name: 'Adidas',
      item_name: 'Indian Cricket ODI Jersey',
      ratings: { stars: 5.0, noOfReviews: 1500 },
      current_price: 999,
      original_price: 999,
      discount_percentage: 0,
      delivery_date: '10 feb 2026',
    },
    {
      id: '005',
      item_image: '5.jpg',
      company_name: 'Roadster',
      item_name: 'Pure Cotton T-shirt',
      ratings: { stars: 0, noOfReviews: 0 },
      current_price: 489,
      original_price: 1399,
      discount_percentage: 65,
      delivery_date: '10 feb 2026',
    },
    {
      id: '006',
      item_image: '6.jpg',
      company_name: 'Nike',
      item_name: 'Sports Running Shoes',
      ratings: { stars: 4.2, noOfReviews: 980 },
      current_price: 2499,
      original_price: 4999,
      discount_percentage: 50,
      delivery_date: '10 feb 2026',
    },
    {
      id: '007',
      item_image: '7.jpg',
      company_name: 'The Indian Garage Co',
      item_name: 'Men Slim Fit Regular Shorts',
      ratings: { stars: 4.2, noOfReviews: 432 },
      current_price: 639,
      original_price: 1599,
      discount_percentage: 60,
      delivery_date: '10 feb 2026',
    },
    {
      id: '008',
      item_image: '8.jpg',
      company_name: 'Nivea',
      item_name: 'Men Fresh Deodorant 150ml',
      ratings: { stars: 4.2, noOfReviews: 980 },
      current_price: 142,
      original_price: 285,
      discount_percentage: 50,
      delivery_date: '10 feb 2026',
    },
    {
      id: '009',
      item_image: '9.jpg',
      company_name: 'Sangria',
      item_name: 'Embroidered Flared Maxi Gown',
      ratings: { stars: 4.1, noOfReviews: 1324 },
      current_price: 1332,
      original_price: 4849,
      discount_percentage: 73,
      delivery_date: '10 feb 2026',
    },
    {
      id: '010',
      item_image: '10.jpg',
      company_name: 'Style X Revolte',
      item_name: 'Single-Breasted Overcoat',
      ratings: { stars: 4.2, noOfReviews: 9801 },
      current_price: 1919,
      original_price: 4799,
      discount_percentage: 60,
      delivery_date: '10 feb 2026',
    },
    {
      id: '011',
      item_image: '11.jpg',
      company_name: 'Include',
      item_name: 'Boys Hooded Lightweight Corduroy Cotton Tailored Jacket',
      ratings: { stars: 4.6, noOfReviews: 409 },
      current_price: 999,
      original_price: 1999,
      discount_percentage: 50,
      delivery_date: '10 feb 2026',
    },
  ];

  let itemsHTML = '';

  items.forEach(item => {
    itemsHTML += `
      <div class="item-container">
        <img class="item-image" src="${item.item_image}" alt="item image">

        <div class="rating">
          ${item.ratings.stars} ⭐ | ${item.ratings.noOfReviews}
        </div>

        <div class="company-name">${item.company_name}</div>
        <div class="item-name">${item.item_name}</div>

        <div class="price">
          <span class="current-price">₹${item.current_price}</span>
          <span class="original-price">₹${item.original_price}</span>
          <span class="discount">${item.discount_percentage}% OFF</span>
        </div>

        <button class="btn-add-bag" onclick="addToBag('${item.id}')">
          Add to Bag
        </button>
      </div>
    `;
  });

  itemsContainerElement.innerHTML = itemsHTML;
}

/************************
 INIT (page load)
*************************/
displayhome();
updateBagCount();
updateWishlistCount();
