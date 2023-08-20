let sum = 0
function clickButton(value){
  const productsNam =  value.childNodes[5].innerText;
  
 const li = document.createElement('li');
 li.innerText = productsNam
 const nameContainer = document.getElementById('product-name-show');
 nameContainer.appendChild(li)

 const productPricestring = value.childNodes[7].innerText.split(' ')[0];
 const productPrice = parseFloat(productPricestring);
 sum = sum + productPrice;


 const totalPrice = document.getElementById('total-price');
 totalPrice.innerText = sum
  const discountPrice = document.getElementById('discount-price')
  const finalTotal = document.getElementById('totals')
  finalTotal.innerText = sum 

  const cuponCodeBtn = document.getElementById('cupon-apply-btn')
  if( sum >= 200 ){
    cuponCodeBtn.disabled = false;
  } 
 
  document.getElementById('cupon-apply-btn').addEventListener('click', function(){
    const cuponName = document.getElementById('cupon-code')
    const cupon = cuponName.value
    if( cupon == 'SELL200'){
      const discount  = (sum * 20) / 100;
      discountPrice.innerText =  discount
      finalTotal.innerText = sum - discount
    }
    
  })


}

// document.getElementById('cupon-apply-btn').addEventListener('click', function(){

//   if( cuponName == 'SELL200'){
//     const discount  = (sum * 20) / 100;
//     discountPrice.innerText =  discount
//     finalTotal.innerText = sum - discount
//   }
// })


// const discount  = (sum * 20) / 100;
// discountPrice.innerText =  discount
// finalTotal.innerText = sum - discount