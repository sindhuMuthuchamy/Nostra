// offer close
var offerBar = document.getElementById("offer")
var offerPara = document.getElementById("offer-para")
var closeOffer = document.getElementById("close-offer")

closeOffer.addEventListener("click",function(){
    offerBar.style.display="none"
})

// sidemenubar
let sidenav = document.getElementById("sidenav")
let menubarClose = document.getElementById("menubar-close")
let menubarPara = document.getElementById("menubar-para")
let menuicon = document.getElementById("menuicon")

menuicon.addEventListener("click",function(){
    sidenav.style.left=0
})


menubarClose.addEventListener("click",function(){
    sidenav.style.left="-50%"
})

// collection check box

let check = document.getElementsByName("check")
let container= document.getElementById("container")
// let image1 = document.getElementById("imagecontainer1")
var image1 = document.getElementById("imagecontainer1")
var img1 = document.getElementById("img1")
var name1 = document.getElementById("name1")
var price1 = document.getElementById("price1")

let image2 = document.getElementById("imagecontainer2")
let image3 = document.getElementById("imagecontainer3")
let image4 = document.getElementById("imagecontainer4")
let image5 = document.getElementById("imagecontainer5")
let image6 = document.getElementById("imagecontainer6")
let image7 = document.getElementById("imagecontainer7")
let image8 = document.getElementById("imagecontainer8")
let image9 = document.getElementById("imagecontainer9")

for(count = 0;count<check.length;count=count+1)
    {
    check[count].addEventListener("click",function(){
        if(event.target.checked){
            // console.log("checked")
            console.log(image1)
            container.innerHTML = image1
        }
        else{
            console.log("unchecked")
            container.textContent=image1
        }
    })
}

// collection
var productContainer = document.getElementById("container")
var search = document.getElementById("search")
var productList = productContainer.getElementsByClassName("collection-img")
var result = document.getElementById("result")

search.addEventListener("keyup",function(){
    var enteredValue = event.target.value.toUpperCase()

    for (count=0; count<productList.length; count=count+1){
        var productname = productList[count].querySelector("h2").textContent

        if(productname.toUpperCase().indexOf(enteredValue)<0){
            productList[count].style.display="none"
        }
        else{
            productList[count].style.display="block"
            console.log("result")
            // container.textContent= "No result found"
        }

    }
})