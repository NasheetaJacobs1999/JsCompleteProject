//Footer Year Function
document.querySelector('#currYear').textContent = new Date().getFullYear();

//Product Wrapper
let products = localStorage.getItem('products') ?
    JSON.parse(localStorage.getItem('products')) :
    localStorage.setItem('products', JSON.stringify([
        {
            id: 1,
            name: 'Princess Elsa',
            category: "Figurine",
            image: "https://nasheetajacobs1999.github.io/allimages/images/elsa-princess.jpg",
            detail: 'Disney princess Elsa Fun-Co Pop. Figure is approximately 12.7cm tall.',
            amount: 250
        },
        {
            id: 2,
            name: 'Princess Rapunzel',
            category: "Figurine",
            image: "https://nasheetajacobs1999.github.io/allimages/images/rapunzel-princess.jpg",
            detail: 'Disney princess Rapunzel Fun-Co Pop. Figure is approximately 9.40cm tall.',
            amount: 150
        },
        {
            id: 3,
            name: 'Princess Moana',
            category: "Figurine",
            image: "https://nasheetajacobs1999.github.io/allimages/images/moana-princess.jpg",
            detail: 'Disney princess Moana Fun-Co Pop. Figure is approximately 10.16cm tall.',
            amount: 200
        },
        {
            id: 4,
            name: 'Princess Cinderella',
            category: "Figurine",
            image: "https://nasheetajacobs1999.github.io/allimages/images/cinderella.jpg",
            detail: 'Disney princess Cinderella Fun-Co Pop. Figure is approximately 10.16cm tall.',
            amount: 200
        },
        {
            id: 5,
            name: 'Princess Aurora',
            category: "Figurine",
            image: "https://nasheetajacobs1999.github.io/allimages/images/aurora-princess.jpg",
            detail: 'Disney princess Aurora Fun-Co Pop. Figure is approximately 10.16cm tall.',
            amount: 180
        },
        {
            id: 6,
            name: 'Princess Jasmine',
            category: "Figurine",
            image: "https://nasheetajacobs1999.github.io/allimages/images/jasmine-princess.jpg",
            detail: 'Disney princess Jasmine Fun-Co Pop. Figure is approximately 11.43cm tall.',
            amount: 160
        },
        {
            id: 7,
            name: 'Princess Mulan',
            category: "Figurine",
            image: "https://nasheetajacobs1999.github.io/allimages/images/mulan-princess.jpg",
            detail: 'Disney princess Mulan Fun-Co Pop. Figure is approximately 10.16cm tall.',
            amount: 180
        },
        {
            id: 8,
            name: 'Princess Snow White',
            category: "Figurine",
            image: "https://nasheetajacobs1999.github.io/allimages/images/snow-white-princess.jpg",
            detail: 'Disney princess Snow White Fun-Co Pop. Figure is approximately 10.16cm tall.',
            amount: 180
        },
        {
            id: 9,
            name: 'Princess Ariel',
            category: "Figurine",
            image: "https://nasheetajacobs1999.github.io/allimages/images/ariel-princess.jpg",
            detail: 'Disney princess Ariel Fun-Co Pop. Figure is approximately 11.43cm tall.',
            amount: 180
        },
        {
            id: 10,
            name: 'Princess Tiana',
            category: "Figurine",
            image: "https://nasheetajacobs1999.github.io/allimages/images/tiana-princess.jpg",
            detail: 'Disney princess Tiana Fun-Co Pop. Figure is approximately 11.43cm tall.',
            amount: 160
        }
    ]))
//this puts products/objects in html
let productWrapper = document.querySelector('[data-products]');
function displayProducts(args) {
    productWrapper.innerHTML = " "
    try {
        if (args) {
            args?.forEach((product) => {
                productWrapper.innerHTML += `
                <div class="col">
                <div class="card">
                <img src="${product.image}" class="card-img-top h-50 w-50 img-fluid align-self-center" alt="${product.id}">
                <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.detail}</p>
                <p class="card-text">${product.amount}</p>
                <a class="btn btn-secondary" id="cart" onclick='addToCart(${JSON.stringify(product)})'>Add To Cart</a>
                </div>
                </div>
                </div>
                `
            })
        } else {
            productWrapper.innerHTML = `
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                </div>
                <p>No Products Found</p>
            </div>
            `
        }
    } catch (e) {
        alert('Error Loading Products')
    }
};

displayProducts(products);

//searches products by name
let productSearch = document.querySelector('[data-search-product]');
productSearch.addEventListener('input', () => {
    try {
        let searchItem = products.filter(item => {
            return item.name.toLowerCase().includes(productSearch.value.toLowerCase());
        })
        displayProducts(searchItem);
    } catch (e) {
        alert('Function is under maintainance')
    }
})

//sorts by the price
let productSort = document.querySelector('.btn')
let highest = false;
productSort.addEventListener('click', () => {
    try {
        if (!highest) {
            products.sort((a, b) => b.amount - a.amount);
            highest = true;
        } else {
            products.sort((a, b) => a.amount - b.amount);
            highest = false;
        }
        displayProducts(products)
    } catch (e) {
        alert('This Function is under maintainance')
    }
});

//puts objects in new localStorage for other page
let cart = JSON.parse(localStorage.getItem('checkout')) || [];
function addToCart(product) {
    debugger
    try {
        cart.push(product);
        localStorage.setItem('checkout', JSON.stringify(cart));
    } catch (e) {
        alert('The Cart is under maintainance')
    }
}