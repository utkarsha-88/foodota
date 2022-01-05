// Cost of all products in the cart
var total = 0;

var i = 1;

var message = "Please select a size";

// List of the amount of every product in the cart
var itemCost = [];

// Add to cart
function add(n){

   sizeId = "size" + n;

   messageId = "message" +n;

   size = document.getElementById(sizeId).value;

   if (size==="size"){
     document.getElementById(messageId).innerHTML = message;
     return 0;
   }

   brand = "brand" + n;
   priceId = "price" + n;
   quantityId = "quantity" + n;


   name = document.getElementById(brand).innerHTML;

   price = document.getElementById(priceId).innerHTML;

   quantity = document.getElementById(quantityId).value;

   // Creating a li element to add it to ul 
   var node = document.createElement("LI");

   item = "item"+i;
   node.setAttribute("id", item)

   itemCost[i-1] = Number(price) * Number(quantity);

   // Updating the index i 
   i += 1;

    // text of the li element
   var textnode = document.createTextNode(name+""+quantity+" x "+price+" tl, size: "+size);

   // add the text to li element
   node.appendChild(textnode);

   // add li element to ul list
   document.getElementById("items").appendChild(node);


total += Number(price) * Number(quantity);

// update the total
document.getElementById("total").innerHTML = "Total: " + total.toFixed(2) + " TL";

//Add a remove button
document.getElementById(item).innerHTML += '<button onclick="deleItem('+"'"+item+"'"+')">x</button';

}

//delete message when select element is clicked
function deleteE(eId) {
  document.getElementById(eId).innerHTML = ' ';
}

//Remove product from the cart
function deleItem(eId){
  document.getElementById(eId).remove();
  // slice is string method
      // eId (element Id) contain root + number (ex: item4)
      // n is the number in eId 

  n = Number(eId.slice(-1)) - 1;

  // remove the cost of the product deleted from the cart
  total -= itemCost[n];

  // Updating the cost of products in the cart
  document.getElementById("total").innerHTML = "Total: " + total.toFixed(2) + " $"; 
}

