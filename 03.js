var cart = []
var productList = [{
        "kode_produk": "A01",
        "nama_produk": "Sabun Lifeboy 500ml",
        "harga": 30000,
        "quantity": 20
    },{
        "kode_produk": "A02",
        "nama_produk": "Kapal Api 3 in 1",
        "harga": 10000,
        "quantity": 50
    },{
        "kode_produk": "A03",
        "nama_produk": "Indomie Goreng Special",
        "harga": 5000,
        "quantity": 100
    },{
        "kode_produk": "A04",
        "nama_produk": "Minyak Goreng Bimoli",
        "harga": 15000,
        "quantity": 10
    }
]

// insert product choosen to cart variable
function addItemToCart(product){
    cart.push(product)
    // product["quantity"] -= 1     still not working
}

// return total price of all items in cart
function totalCartPurchase(){
    totalPurchase = 0
    for (item in cart) {
        totalPurchase += cart[item]["harga"]
    }
    return totalPurchase
}

// called by 'Cari Produk' button in HTML. Set data in element with id "plist" for produk depend on product code in "pcode" id input text element
function getProduct(id){
    for (item in productList) {
        if (productList[item]["kode_produk"] == document.getElementById("pcode").value) {
            document.getElementById("plist").innerHTML = "Kode Produk: " + productList[item]["kode_produk"] + "<br />"
            + "Produk: " + productList[item]["nama_produk"] + "<br />" + "Harga: Rp." + productList[item]["harga"] + "<br />"
            + "Quantity: " + productList[item]["quantity"] + "<br />"
            + '<button type="button" onclick="+addItemToCart(productList[item])">Masukan ke Keranjang</button>'
            break
        }
        else {
            document.getElementById("plist").innerHTML = "Produk Tidak Ditemukan!"
        }
    }

}

// called by 'Semua Produk' button in HTML. Set data in element with id "plist" for all product in productList
function getAllProduct() {
    var allProduct = ""
    for (item in productList) {
        allProduct += "Kode Produk: " + productList[item]["kode_produk"] + "<br />"
        + "Produk: " + productList[item]["nama_produk"] + "<br />" + "Harga: Rp." + productList[item]["harga"] + "<br />"
        + "Quantity: " + productList[item]["quantity"] + "<br />"
        + '<button type="button" onclick="+addItemToCart(productList[item])">Masukan ke Keranjang</button>' + "<br /><br />"
    }
    document.getElementById("plist").innerHTML = allProduct
}

// called by "Keranjang" button in HTML. Show all products contained in cart, in element with id "clist"
// Also shown total purchase amount of all product in carts, and set the data in "tcart" element id
function getCart() {
    var allProduct = '<table>' +
    '<tr>' +
    '<th scope="col">No</th>' +
    '<th scope="col">Kode Produk</th>' +
    '<th scope="col">Produk</th>' +
    '<th scope="col">Harga</th>' +
    '</tr>'
    var cartNumber = 1
    if (cart.length > 0){
        for (item in cart) {
            allProduct += "<tr>" + 
            "<td>" + cartNumber + "</td>" +
            "<td>" + cart[item]["kode_produk"] + "</td>" +
            "<td>" + cart[item]["nama_produk"] + "</td>" + "\t" +
            "<td>" + cart[item]["harga"] + "</td>" +
            "</tr>"
            cartNumber += 1
        }
        allProduct += "</table>"
    }
    else {
        allProduct = "<p>Keranjang Belanja Masih Kosong!</p>"
    }
    document.getElementById("clist").innerHTML = allProduct
    document.getElementById("tcart").innerHTML = "Jumlah Harga Belanjaan: Rp." + totalCartPurchase()
}Total
