// CONSTANT 
const CONVENIENCE_FEES = 99;

// ITEMS DATA (REQUIRED) 
const items = [
  {
    id: '001',
    image: '1.jpg',
    company: 'Carlton London',
    item_name: 'Rhodium-Plated CZ Floral Studs',
    current_price: 606,
    original_price: 1045,
    discount_percentage: 42,
    return_period: 14,
    delivery_date: '10 Oct 2023',
  },
  {
    id: '004',
    image: '4.jpg',
    company: 'ADIDAS',
    item_name: 'Indian Cricket ODI Jersey',
    current_price: 999,
    original_price: 999,
    discount_percentage: 0,
    return_period: 14,
    delivery_date: '10 Oct 2023',
  },
  {
    id: '005',
    image: '5.jpg',
    company: 'Roadster',
    item_name: 'Pure Cotton T-shirt',
    current_price: 489,
    original_price: 1399,
    discount_percentage: 65,
    return_period: 14,
    delivery_date: '10 Oct 2023',
  },
];

// STATE
let bagItems = JSON.parse(localStorage.getItem('bagItems')) || [];
let bagItemObjects = [];

//PAGE LOAD 
document.addEventListener('DOMContentLoaded', () => {
  loadBagItemObjects();
  displayBagItems();
  displayBagSummary();
});

//MAP IDS → ITEMS 
function loadBagItemObjects() {
  bagItemObjects = bagItems
    .map(id => items.find(item => item.id === id))
    .filter(Boolean);
}

//RENDER BAG ITEMS
function displayBagItems() {
  const container = document.querySelector('.bag-items-container');
  if (!container) return;

  container.innerHTML = bagItemObjects.map(item => `
    <div class="bag-item-container">
      <img src="${item.image}" class="bag-item-img">

      <div class="item-details">
        <div class="company">${item.company}</div>
        <div class="item-name">${item.item_name}</div>

        <div class="price">
          Rs ${item.current_price}
          <span class="original">Rs ${item.original_price}</span>
          (${item.discount_percentage}% OFF)
        </div>

        <div class="return">14 days return available</div>
        <div class="delivery">Delivery by ${item.delivery_date}</div>
      </div>

      <span class="remove" onclick="removeFromBag('${item.id}')">X</span>
    </div>
  `).join('');
}

//SUMMARY 
function displayBagSummary() {
  const summary = document.querySelector('.bag-summary');

  let totalMRP = 0;
  let totalDiscount = 0;

  bagItemObjects.forEach(item => {
    totalMRP += item.original_price;
    totalDiscount += item.original_price - item.current_price;
  });

  const finalAmount = totalMRP - totalDiscount + CONVENIENCE_FEES;

  summary.innerHTML = `
    <h3>PRICE DETAILS (${bagItemObjects.length} Items)</h3>
    <div>Total MRP <span>Rs ${totalMRP}</span></div>
    <div>Discount <span>-Rs ${totalDiscount}</span></div>
    <div>Convenience Fee <span>Rs ${CONVENIENCE_FEES}</span></div>
    <hr>
    <div><b>Total Amount</b> <b>Rs ${finalAmount}</b></div>
    <button class="place-order">PLACE ORDER</button>
  `;
}

// REMOVE 
function removeFromBag(id) {
  bagItems = bagItems.filter(itemId => itemId !== id);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));

  loadBagItemObjects();
  displayBagItems();
  displayBagSummary();
}
