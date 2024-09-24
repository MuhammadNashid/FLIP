let products
async function GetData(){
    const res = await fetch("https://dummyjson.com/products")
    if (res.status==200) {
        const Data= await res.json() 
        console.log(Data);
        products=Data.products
        str=``
        products.map((product)=>{
            str+=`
            <div class="card">
<a href="pages/details.html?id=${product.id}">

            <div class="cardtop">
    
                <img src="${product.thumbnail}" alt="" id="img">
            </div>
            <div class="cardbottom">
                    <P class="p0">${product.category}</P>
                    <p class="p1">${product.brand}</p>
                    <span class="title"> <p >${product.title}<img src="images/fa_62673a.png" alt=""></p></span>
                   <div class="disc">
                    <p class="p2">$${product.price}</p>
                    <p class="p3">${product.discountPercentage}<span class="pdetail">%  off</span></p>
                   </div>
                    <p class="p4"><span>Size:</span >${product.dimensions.width}</p>
            </div>
        </div>
        </a>
            `
        })
        document.getElementById("mainside").innerHTML=str
    }
  
}



GetData()

document.getElementById("serch").addEventListener("keyup",async(e)=>{
    console.log(e.target.value);
    const res = await fetch("https://dummyjson.com/products")
    if (res.status==200) {
        const Data= await res.json() 
        console.log(Data);
        products=Data.products
        str=``;
        filter=products.filter((item)=>item.title.toLowerCase().includes(e.target.value.toLowerCase()))

      
        filter.map((product)=>{
            str+=`
            <div class="card">
<a href="pages/details.html?id=${product.id}">

            <div class="cardtop">
    
                <img src="${product.thumbnail}" alt="" id="img">
            </div>
            <div class="cardbottom">
                    <P class="p0">${product.category}</P>
                    <p class="p1">${product.brand}</p>
                    <span class="title"> <p >${product.title}<img src="images/fa_62673a.png" alt=""></p></span>
                   <div class="disc">
                    <p class="p2">$${product.price}</p>
                    <p class="p3">${product.discountPercentage}<span class="pdetail">%  off</span></p>
                   </div>
                    <p class="p4"><span>Size:</span >${product.dimensions.width}</p>
            </div>
        </div>
        </a>
            `
        })  
        document.getElementById("mainside").innerHTML=str
    }
})