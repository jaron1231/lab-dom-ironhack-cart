function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');

//   calculatePriceButton.onclick = getTotalPrice;




  
//   createItemButton.onclick = createNewItem;

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };


function makeAlert() {
  const products = document.getElementsByClassName('product-section');  
  let totalCartPrice = 0;
  for(var i = 0; i<products.length ; i++) {
      
  const product = products[i];
  const productPrice = parseInt(product.querySelector(".price").innerText);
  const productQuant = parseInt(product.querySelector(".quantity").value) || 0;
  const finalPrice = productPrice * productQuant;
  totalCartPrice = totalCartPrice + finalPrice;
  product.querySelector('.totalprice').innerText = '$'+finalPrice;
    }
  document.querySelector('.totalcartprice').innerText = '$'+totalCartPrice;
}

function clickDelete(btn) {
  var parentNode = btn.parentNode
  parentNode.remove();
  makeAlert();
}

//newproduct

function createHtml() {
  const newTitle = document.querySelector(".new-title").value;
  const newPrice =document.querySelector(".new-price").value;
  const newProduct = `
  <div class="title">
    <p>${newTitle}</p>
  </div>
  <div >
      <span>$</span><span class="price" >${newPrice}</span> 
  </div>
  <div><label >Qty</label> <input class="quantity" type="number" name="firstname" placeholder="0"/>
  </div>
  <div class="totalprice">
      0
  </div>
  <button class = "btn-delete" onclick="clickDelete(this)">Delete</button>
`
const newProductHtml = document.createElement("div");
newProductHtml.classList.add("product-section");
newProductHtml.innerHTML = newProduct;
document.querySelector(".products").appendChild(newProductHtml);
}
