function getCart(){
    let  total= 0
      let disc=localStorage.length
      let realamt=0
      let discamt
      str=``
      for(i=0;i<localStorage.length;i++){
          const key=localStorage.key(i)
          const value=JSON.parse(localStorage.getItem(key));
          total+=value.price
          discdecimal=disc/100
          discamt=total*discdecimal
          realamt=total-discamt
          str+=`
      <div class="address">
          <h3>FromSavedAddress</h3>
          <button>EnterDelivaryPincode</button>
      </div>
      <div id="item">
          <div id="image">
              <img src="${value.thumbnail}" alt="">
          </div>
          <div id="details">
              <span class="name">${value.title}</span>
              <span class="price">$${value.price}</span>
           <span class="button"">   <button class="btn">BUY NOW</button><button class="btn" onclick='dlt(${value.id})'>Remove</button> </span>
          </div>
      </div> `   
      }
      document.getElementById("lside").innerHTML=str
      document.getElementById("pric").innerHTML=total
      if (disc<=10) {
      document.getElementById("disc").innerHTML=disc
          
      }else{
      document.getElementById("disc").innerHTML="10"
  
      }
      
      if(disc<=2){
      document.getElementById("dcharg").innerHTML="3$"
      const addcharg=3+realamt
      document.getElementById("tamount").innerHTML=addcharg
      document.getElementById("svd").innerHTML=discamt
  
  
      }else{
      document.getElementById("dcharg").innerHTML="free"
      document.getElementById("tamount").innerHTML=realamt
      document.getElementById("svd").innerHTML=discamt
      }
  }
  
  function dlt(key){
  localStorage.removeItem(key)
  SetCart();
  
  }function placeOrder(){
      localStorage.clear()
      
    window.location.href="../pages/sucess.html"
  
  } 
getCart()