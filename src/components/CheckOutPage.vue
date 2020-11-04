<template>
<div>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
    <div class="sidebar">
      <div class="icon">
        <h2>Dinein</h2>
      </div>
      <a class="active" href="#home">Home</a>
      <a href="#news">Profile</a>
      <a href="#contact">Map</a>
      <a href="#about">Restaurants</a>
    </div>

    
    <div class="content">
    <div  class="info"><h1 style='font-size:40px;text-align:center;'>CheckOut Cart</h1></div>
    <hr>
   
    
        <div class = "row"> 
            <div class = "column">
                <div class="container">
                    <div class="white-box">
                        <div style = margin-left:60px>
                            <h1 style='font-size:2.6em;text-align:center;'>Orders</h1>
                                <hr>
                                <div class='row'>
                                    <div class='container2'>
                                        <div>
                                            <img :src="salad" class='iconDetails' alt="...">
                                        </div>	
                                        <div style='margin-left:45%;'>
                                            <div style='font-size:1.8em;font-weight:bold;'>Caesar Salad</div>
                                            <div style="font-size:1em;">Description: No eggs and onions <br />
                                            Price: $18.00
                                            <br />
                                            
                                            <br />
                                            <div style='text-align:center'><QuantityCounter></QuantityCounter></div>
                                            
                                            <br />
                                        
                                            <div style="float:right;font-size:1.2em;font-weight:bold;">$14.00</div>
                                        </div>
                                            
                                    </div>
                                </div>
                                

                                
                                <div class='row'>
                                <div class='container2'>
                                    <div>
                                        <img :src="steak" class='iconDetails' alt="...">
                                    </div>	
                                    <div style='margin-left:45%;'>
                                        <div style='font-size:1.8em;font-weight:bold;'>Rib Eye Steak</div>
                                        <div style="font-size:1em;">Description: Medium Rare <br />
                                        
                            
                                        Price: $18.00
                                        <br />
                                        
                                        <br />
                                        <div style='text-align:center'><QuantityCounter></QuantityCounter></div>
                                        <br />
                                        
                                        
                                        <br/>
                                        </div>
                                       
                                        <div style="float:right;font-size:1.2em;font-weight:bold;">$25.00</div>
                                    </div>
                                        
                                </div>
                                
                                </div>

                                <div class='row'>
                                <div class='container2'>
                                    <div>
                                        <img :src="spaghetti" class='iconDetails' alt="...">
                                    </div>	
                                    <div style='margin-left:45%;'>
                                        <div style='font-size:1.8em;font-weight:bold;'>Bolognese</div>
                                        <div style="font-size:1em;">Description: Spaghetti Minced Beef<br />
                                        
                            
                                        Price: $18.00
                                        <br />
                
                                        
                                        <br/>
                                        <div style='text-align:center'><QuantityCounter></QuantityCounter></div>
                                        <br/>
                                        
                                        
                                        <br/>
                                        </div>
                                       
                                        <div style="float:right;font-size:1.2em;font-weight:bold;">$25.00</div>
                                    </div>
                                        
                                </div>
                                <br />
                                <br />
                                <br />
                                <button style= 'width:100%'>Add More </button>
                                <br />
                                <br />
                                
                                </div>
                            </div>
                            
                                
                       </div>
                    </div>
                </div>
              </div>

              <div class = "column">
                <div class="container">
                    <div class="white-box">
                        <div style = margin-left:60px>
                            <h1 style='font-size:2.6em;text-align:center;'>Payment</h1>
                                <hr>
                                <div class='row'>
                                    <div class='column2' style="font-size:24px">
                                          <div> Sub-Total: </div>
                                          <div> Service Charge: </div>
                                              
                                          <div> GST: </div>
                                          <br/>
                                          <div style="font-weight:bold">Total: </div>
                                          <br/>
                                          
                
                                    </div>
                                    <div class = "column2" style="font-size:24px">
                                                <div  align= right> $36.00 </div>
                                                <div  align= right> $36.00 </div>
                                                <div  align= right> $36.00 </div>
                                                <br/>
                                                <div  align= right style="font-weight:bold"> $36.00 </div>
                                                <br/>
                                                
                                                
                                                   
                                    </div>
                                </div>
                                    <hr>
                                    <div class = "row">
                                    <div class='column3' style="font-size:24px">
                                          <div> Wallet: </div>
                                          
                                          
                
                                    </div>
                                    <div class = "column3" style="font-size:24px">
                                                <div  align= right> $100.00 </div>
                                                
                                                
                                                
                                                   
                                    </div>
                                    
                                  </div>

                                
                                            
                                    
                               

                                
                            
                        
                                <button style= 'width:100%'>Place Order </button>
                               
                                
                            
                      
                            
                                
                       </div>
                    </div>
                </div>
              </div>



                
                
                
            
            
            
            
            

        </div>
            
    </div>
   
    
    </body>
</div>

                                                            
                                            
                                    
            
</template>

<script>
import QuantityCounter from '../components/QuantityCounter.vue'

export default {
    name: 'sidebar',
     components: {
         QuantityCounter
     },
    props: {
      logo: {
        type: String,
        default: 'img/restimage/success.png',
        description: 'tick mark'
      },
      salad: {
        type: String,
        default: 'img/restimage/Caesar_Salad.jpg',
        description: 'salad'
      },
      steak: {
        type: String,
        default: 'img/restimage/Ribeye_Steak.jpg',
        description: 'steak'
      },
      spaghetti: {
        type: String,
        default: 'img/restimage/spaghetti.jpg',
        description: 'tick mark'
      }
    }
 }
</script>

<style>
body {
  margin: 0;
  font-family: "Lato", sans-serif;
}

.iconDetails {
    
    float:left; 
    width:40%;	
} 

.container2 {
	width:100%;
	height:auto;
	padding:1%;
    
}

.thankyoulogo {
    height:50px;
    width:50px;
   
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    
}

.order {
    color: #525f7f;
    font-weight: bold;
}

.foodchoosen {
    height:100%;
    width:90%;
    float:left;
 
    margin-bottom: 20px;

}

.center {
    margin-left: auto;
    margin-right: auto;
    border: 3px solid #73AD21;
    padding: 10px;
    height: auto;
}

.demotext {
    float: left ;
}

.NameFood {
    font-weight:bold;
    font-size:20px;
}

.qty {
    font-weight:bold;
}

#just-line-break {
  white-space: pre-line;
}

#line-break-and-tab {
  white-space: pre-wrap;
}

.price{
    font-size:18px;
   
}

.info {
  background-image: steak;
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  width: 100%;
  padding: 20px;
}

.headers {
  margin: 0 auto; max-width: 800px; /*centering header*/
  

  position: relative; /*scale header images to 120px*/
  white-space: nowrap; /*keep one-line*/
  overflow: hidden; /*hide excess images parts on small screens*/
}
.headers>img { height: 100%; padding:20px;}

#header-content {
  position: absolute;
  bottom: 0;
  right: 0;
}

#addmore {

  border-radius: 20px;
  padding: 12px 28px;
  width:100%;
  background-color: white;
  border: 2px solid #4CAF50;
  color: black;
  cursor: pointer;
  
  outline: none; /* removes the outer border when button is in focus */
}

#addmores {

  border-radius: 20px;
  padding: 12px 28px;
  width:78%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: #4CAF50;
  border: 2px solid #4CAF50;
  color: black;
  cursor: pointer;
  
  outline: none; /* removes the outer border when button is in focus */
}

label {
  margin-left: 10px;
}

.sidebar {
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
}

.sidebar a {
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
}
 
.sidebar a.active {
  background-color: #4CAF50;
  color: white;
}

.sidebar a:hover:not(.active) {
  background-color: #555;
  color: white;
}

div.content {
  margin-left: 200px;
  padding: 1px 16px;
  height: 1500px;
  background-image: linear-gradient( rgb(78, 223, 78), rgb(85, 199, 228));
}



.container {
    position: absolute; 
    margin: 0; 
    width:40%; 
    height:auto;
    background: #f4f5f4; 
    min-height: 600px; 
    
    border-radius: 40px 40px 40px 40px;
}


.white-box { 
    width: 90%; 
    margin-top: 50px; 
    
    
} 


.column {
  float: left;
  width: 40%;
  margin-right:60px;
  padding: 50px;
  height: 300px; /* Should be removed. Only for demonstration */
}

.column2 {
  float: left;
  width: 30%;
  
  padding: 50px;
  height: 100px; /* Should be removed. Only for demonstration */
}

.column3 {
  float: left;
  width: 30%;
  
  padding: 50px;
  /* Should be removed. Only for demonstration */
}


.row {
  content: "";
  display: table;
  clear: both;
  margin-bottom:10px;
  display: block;
 
  
}

.row:after {
  content: "";
  display: table;
  clear: both;
}


 .left, .right {
      height: 50%;
      width: 50%;
      position: fixed;
      overflow-x: hidden;
      padding-top: 20px;
   }
   .left {
      left: 0;
      background-color: rgb(36, 0, 95);
   }
   .right {
      right: 0;
      background-color: rgb(56, 1, 44);
   }

</style>                      
                               