
const cartArray = [];


function display(cartProduct){
   let totalPrice = 0;
   //console.log(cartProduct);
   const tableBody = document.getElementById("cart-products");
   tableBody.innerHTML = '';




   for (let i = 0; i < cartProduct.length; i++){
      //console.log(cartArray[i].productName, cartArray[i].productPrice);
      const name = cartArray[i].productName;
      const price = cartArray[i].productPrice;

      totalPrice = totalPrice + price;      
      const tr = document.createElement('tr')

      tr.innerHTML = `
        <td>${i + 1}</td>
        <td>${name}</td>
        <td>${price}</td>    
      
      `;
      tableBody.appendChild(tr);

   }
   const tr = document.createElement('tr');
   tr.innerHTML = `
   
         <td></td>
        <td class="text-2xl text-green-500">Total Price</td>
        <td>${totalPrice}</td>
        
   
   
   `;
   tableBody.appendChild(tr);

}

function addToCart(element) {
  //console.log(element.parentNode.parentNode.children);
  //console.log(element.parentNode.parentNode.children[0].innerText);
  // console.log(element.parentNode.parentNode.children[1].children[0].innerText);

  const productName = element.parentNode.parentNode.children[0].innerText;
  //console.log(productName);

  const productPrice =
    element.parentNode.parentNode.children[1].children[0].innerText;
  //console.log(productPrice);

  const productObj = {
    productName: productName,
    productPrice: parseFloat(productPrice),
  };

  cartArray.push(productObj);
  //console.log(cartArray);
  //console.log(cartArray.length);

  document.getElementById("total-added-product").innerText = cartArray.length;

  display(cartArray);
}





