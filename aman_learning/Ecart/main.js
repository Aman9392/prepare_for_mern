//   ----------  items scritp-------
let cart = document.querySelectorAll('.add_item');
let cart_min = document.querySelectorAll('.number_minus');
let remov_item = document.querySelectorAll('.cross');
let product = [
    {
        name: 'Madhur Suger',
        tag: 'aurasoft',
        Price: 45,
        incart: 0,
        image: "https://www.madhursugar.com/assets/images/adv-pack-green.png"

    },
    {
        name: 'Candyman Chocor',
        tag: 'Candy',
        Price: 110,
        incart: 0,
        image: "https://m.media-amazon.com/images/I/713RMBZQUXL._SX679_.jpg"

    },
    {
        name: 'Tata Gold ',
        tag: 'Tea',
        Price: 100,
        incart: 0,
        image: "https://rukminim1.flixcart.com/image/416/416/l0lbrm80/tea/d/g/r/-original-imagccn5en4vadh2.jpeg?q=70"

    },
    {
        name: 'Naturoz Daily California Almonds',
        tag: 'Dryfruts',
        Price: 200,
        incart: 0,
        image: "https://rukminim1.flixcart.com/image/416/416/xif0q/nut-dry-fruit/4/o/m/250-daily-california-1-pouch-naturoz-original-imagg9sgkzpkfwhy.jpeg?q=70"

    }
]
for (let i = 0; i < cart.length; i++) {
    cart[i].addEventListener('click', () => {
        cartNumbers(product[i]);
        totalCost(product[i]);

    })
}
function cartNumbers(product) {
    // console.log("product",product);
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    // console.log("productNumbers",productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1)
        document.querySelector('.nav-item span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1)
        document.querySelector('.nav-item span').textContent = 1;
    }
    setItem(product);
}

// function setItem(product) {
//     let cartItem = localStorage.getItem('productsInCart');

//     cartItem = JSON.parse(cartItem);
//     console.log("carItem" , cartItem );
//     if (cartItem !== null) {
//         const itemInCart = cartItem.filter((item) => item.tag === product.tag)
//         console.log("itemInCart", itemInCart);
//         if (itemInCart[product.tag] === product.incart) {
//             cartItem  = {
//                 ...cartItem,
//                 [product.tag]:product
//             }
//             cartItem[product.tag].incart +=1;
//         }
//         else{
//             product.incart= 1;
//             cartItem = [...cartItem, product]
//         }
//     }
//     else {
//         product.incart = 1;
//         cartItem = [product]
//     }
//     localStorage.setItem("productsInCart", JSON.stringify(cartItem));
//         // displayCart();
//         // totalCost(product);
//     }

function setItem(product) {
    let cartItem = localStorage.getItem('productsInCart');
    cartItem = JSON.parse(cartItem);
    if (cartItem != null) {
        if (cartItem[product.tag] == undefined) {
            cartItem = {
                ...cartItem,
                [product.tag]: product
            }
        }
        cartItem[product.tag].incart += 1;

    } else {
        product.incart = 1;
        cartItem = {
            [product.tag]: product
        }
    }
    console.log(typeof cartItem);
    localStorage.setItem("productsInCart", JSON.stringify(cartItem));
    // displayCart();
    // totalCost(product);
}

// function setItem(product) {
//     let cartItem = localStorage.getItem('productsInCart');

//     cartItem = JSON.parse(cartItem);
//     console.log("carItem", cartItem);
//     if (cartItem !== null) {
//         const itemInCart = cartItem.filter((item) => item.tag === product.tag)
//         console.log("itemInCart", itemInCart);
//         if (itemInCart.length > 0) {
//            for(itemInCart in product){
//                product.tag == itemInCart
//            }
//            [product.tag].incart += 1
//         }
//         else {
//             [product.tag].incart = 1;
//             cartItem = [...cartItem, product]
//         }
//     }
//     else {
//         product.incart = 1;
//         cartItem = [product]
//     }
//     localStorage.setItem("productsInCart", JSON.stringify(cartItem));
//     // displayCart();
//     // totalCost(product);
// }
// ------------------s-------------------------
// function setItem(product) {
//     let cartItem = localStorage.getItem('productsInCart');

//     cartItem = JSON.parse(cartItem);
//     console.log("carItem", cartItem);
//     if (cartItem !== null) {
//         const itemInCart = cartItem.filter((item) => item.tag === product.tag)
//         console.log("itemInCart", itemInCart);
//         if (itemInCart.length > 0) {
//             [product.tag].incart += 1;
//             cartItem = [...cartItem, product]
//         }
//         else {
//             [product.tag].incart = 1;
//             cartItem = [...cartItem, product]
//         }
//     }
//     else {
//         product.incart = 1;
//         cartItem = [product]
//     }
//     localStorage.setItem("productsInCart", JSON.stringify(cartItem));
//     // displayCart();
//     // totalCost(product);
// }




function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');
    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.Price);
    }
    else {
        localStorage.setItem("totalCost", product.Price);
    }
}
// // -----------------------------minus----------------------------

for (let i = 0; i < cart.length; i++) {
    cart_min[i].addEventListener('click', () => {
        cartNumbers_minus(product[i]);
        totalCost_minus(product[i]);
        // removeItem(product[i])
        // removeItem(product);

    })
}
function cartNumbers_minus(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers - 1)
        document.querySelector('.nav-item span').textContent = productNumbers - 1;
    }
    else {
        localStorage.setItem('cartNumbers', 1)
        document.querySelector('.nav-item span').textContent = 1;
    }
    setItem_minus(product);
}
function setItem_minus(product) {
    let cartItem = localStorage.getItem('productsInCart');
    cartItem = JSON.parse(cartItem);
    if (cartItem != null) {
        console.log("cartItem[product.tag] ", cartItem[product.tag]);
        if (cartItem[product.tag] == undefined) {

            cartItem = {
                ...cartItem,
                [product.tag]: product
            }
        }
        cartItem[product.tag].incart -= 1;
    } else {
        product.incart = 1;
        cartItem = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItem));
    //  displayCart();
    //  totalCost(product);
}

function totalCost_minus(product) {
    let cartCost = localStorage.getItem('totalCost');

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost - product.Price);
    }
    else {
        localStorage.setItem("totalCost", product.Price);
    }
}

// -------------------------onload funcion --------------------
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers')
    if (productNumbers) {

        document.querySelector('.nav-item span').textContent = productNumbers
    }
}
onLoadCartNumbers();
// -------------remove----------------
//    for (let i = 0; i < remov_item.length; i--) {
//     remov_item[i].addEventListener('click',  () => {
//             removeItem(product[i]);
//             removeproduct(product[i]);
//     })
// }
// const porp = product.filter(item => item.tag = product)
//     console.log("item.tag = product" , item.tag = product)


//     item[i].addEventListener('click',  () => {
//                      removeItem(product[i]);
//                    removeproduct(product[i]);
//             })
//     );
//  console.log(porp);

// remov_item[i].addEventListener('click',  () => {
//     removeItem(product[i]);
//     removeproduct(product[i]);
// })


// for (let i = 0; i < remov_item.length; i++) {
//             // console.log("a.tag == product[i]" , tag === product[i]);
//             remov_item[i].addEventListener('click', product.filter((a) => {
//             console.log("product.filter((a)" , product.filter(a));
//             a.tag == product[i]

//             removeItem(product[i]);
//             removeproduct(product[i]);
//     }))
// }
// for(removCart of product){
//     console.log("product in remvoe cart" , product);
//     remov_item[i]

// }

// function removeItem(product) {
//     // console.log("removeItem" , product);
//     let removeItem = localStorage.getItem('cartNumbers')
//     // console.log("removeItem", removeItem);
//     // console.log(typeof removeItem);
//     removeItem = parseInt(removeItem);
//     // console.log(typeof removeItem);
//     if (removeItem) {
//         localStorage.setItem('cartNumbers', removeItem - 1)
//         document.querySelector('.nav-item span').textContent = removeItem - 1;
//     }
//     else {
//         localStorage.setItem('cartNumbers', 1)
//         document.querySelector('.nav-item span').textContent = 1;
//     }
//     removeproduct(product);
// }


// function removeproduct(product) {
//     let remove = localStorage.getItem('productsInCart');
//     // console.log("productsInCart today ", remove);
//     remove = JSON.parse(remove);
//     if (remove != null) {
//         // console.log("remove inside if if", remove);
//         if (remove[product.tag] == undefined) {
//             remove = [product]
//         }
//         remove[product.tag].incart -= 1;
//     } else {
//         product.incart = 1;
//           remove = {
//             [product.tag]: product
//         }
//     }
//     localStorage.removeItem('productsInCart', JSON.stringify(remove));
//     // displayCart();
// }

// removeproduct(product);

function removeproduct(tag) {
    let remove = localStorage.getItem('productsInCart');
    console.log("remvoe get", remove);
    remove = JSON.parse(remove)
    console.log("afterpars" , remove);
    let arr = Object.keys(remove).filter((item) => item !== tag);
    // for(item in remove){
    //     if(item == tag){
            
    //     }
    // }
    console.log("after remvoe", arr);
    localStorage.setItem('productsInCart', JSON.stringify(remove))
}

// function removeproduct(tag) {
//     let remove = localStorage.getItem('productsInCart');
//     remove = JSON.parse(remove);
//     for (item in remove) {
//         if (item == tag) {
//             // console.log("item0" , tag);
//             let arr = object.keys(remove).filter((item) => item !== tag);
//             console.log("arr349", arr);
//         }
//     }
//     localStorage.setItem('productsInCart', Object.assign({}, remove));
// }















