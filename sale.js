let sum = 0
function clickButton(value){
  const productsNam =  value.childNodes[5].innerText;
  
const nameContainer = document.getElementById('product-name-show');
const count = nameContainer.childElementCount
 const li = document.createElement('li');
li.innerHTML = `${count +1}. ${li.innerText = productsNam}`
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
    cuponName.value = ''
  })
  const purchaseBtn = document.getElementById('purchase-btn');
  if(finalTotal.innerText > 0 ){
    purchaseBtn.disabled = false;
  }
 const homeBtn = document.getElementById('home-btn').addEventListener('click', function(){
  totalPrice.innerText = '00.00'
  discountPrice.innerText = '00.00'
  finalTotal.innerText = '00.00'
  nameContainer.innerText =''
  sum = 0;
 })

}


