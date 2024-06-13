//adding and removing items
//Function for Footer Year
document.querySelector('#currYear').textContent = new Date().getFullYear()

//This fetches the products from the localStorage to display in table
let cart = JSON.parse(localStorage.getItem('checkout'));
let checkoutTable = document.querySelector('[table-checkout]')
let sum2 = 0
function cartItems(){
    try{
        let cartProducts = Object.groupBy(cart, item => { return item.id});
        for(let i in cartProducts) {
            checkoutTable.innerHTML += `
            <tr>
                <td>${cartProducts[i][0].name}</td>
                <td>${cartProducts[i].length}</td>
                <td>${cartProducts[i][0].amount}</td>
                <td>${eval(`${cartProducts[i][0].amount} * ${cartProducts[i].length}`)}</td>
            </tr>
         `
         sum2 = sum2+ cartProducts[i].length
        }
    }catch(e){
        checkoutTable.innerHTML = "Add items to your cart"
    }
}
cartItems()

//This function is to clear the products in the table
function clearProducts(){
    location.reload()
    localStorage.removeItem('checkout')
    alert('Press "OK" to remove items from your cart')
}
//Function for product payment and clear products on the table
function productPayment(){
    location.reload()
    localStorage.removeItem('checkout')
    alert('Payment Successful')
}

//Function is to total up the cart
let totalAmnt = document.querySelector('#totalAmount')
let sum1 = 0


    for (let i = 0; i < cart.length; i++) {
        sum1 += cart[i].amount
        
    }
    totalAmnt.innerHTML = `R${sum1}`

//Function to total up the quantity
let totalQuant = document.querySelector('#totalQuantity')

    totalQuant.innerHTML = `${sum2}`