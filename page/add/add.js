


// send.onclick = () => {

//     console.log(link.value);
//     console.log(name.value);
//     console.log(describe.value);
//     console.log(price.value);
//     console.log(count.value);

// }
import { shoes } from "../../product.js"
import { clothes } from "../../product.js"

function add() {
    let send = document.getElementById('send')
let img = document.getElementById('img')
let name = document.getElementById('name')
// let describe = document.getElementById('describe')
let price = document.getElementById('price')
let count = document.getElementById('count')

let obj = {
    img:img.value,
    name:name.value,
    price:price.value,
    count:count.value,
}
send.onclick = () => {
    let item = shoes[0]

    item.img = obj.img
    item. name= obj.name
    item.price = obj.price
    item.count = obj.count

    shoes.push(item)
    console.log(shoes);
}
}add()

