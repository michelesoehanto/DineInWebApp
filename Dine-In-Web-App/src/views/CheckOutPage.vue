<template>
    <div>
        <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                        style="min-height: 600px; background-image: url(img/theme/profile-cover.jpg); background-size: cover; background-position: center top;">
            <span class="mask bg-gradient-success opacity-8"></span>
            <br/>      
            <div class="row">
                <div class="col-sm-6">
                    <div class="card bg-secondary shadow border-0">
                        <div class="card-header bg-transparent pb-5">
                            <div class="text-center mt-2 mb-3"><h1 style=font-size:40px>Order Cart!</h1></div>
                                <hr>
                                <div style = margin-left:20px>
                                    <div class = "row">
                                        <div class = "col-sm-5">
                                            <div class = "headers">
                                                <base-button size="sm" outline type="default" icon="ni ni-fat-remove"></base-button>
                                                <img :src="salad" style="width:115%" alt="...">
                                                                    
                                            </div>
                                        </div>
                                        
                                        <div class = "col-sm-7"> 
                                            <br/>
                                            <div class= "NameFood">Caesar Salad</div>
                                                                    
                                                Description: No eggs and onions
                                                <br />
                                                Price: $18.00
                                                <br />
                                                Quantity: 1
                                                <br/>
                                                <br/>
                                                <div class = "row">
                                                    <div class= "col-sm-6">
                                                        <!-- <quantity-counter></quantity-counter> -->
                                                    </div>
                                                    <div class= "col-sm-5">
                                                        <span class="qty" align= right id= "header-content"> $18.00 </span>
                                                    </div>
                                                </div>
                                            
                                        </div>
                                    </div>
                                                            
                                            
                                    
                                    <div class = "row">
                                        <div class = "col-sm-5">
                                            <div class = "headers">
                                                <base-button size="sm" outline type="default" icon="ni ni-fat-remove"></base-button>
                                                                        
                                                <img :src="steak" style="width:115%" alt="...">
                                            </div>
                                                                    
                                        </div>

                                        <div class = "col-sm-7"> 
                                            <br/>
                                            <div class= "NameFood">Ribeye Steak</div>
                                                Description: Medium Rare
                                                <br />
                                                Price: $18.00
                                                <br />
                                                Quantity: 1
                                                <br/>
                                                <br/>
                                                <div class = "row">
                                                    <div class= "col-sm-6">
                                                        <!-- <quantity-counter></quantity-counter> -->
                                                    </div>
                                                    <div class= "col-sm-5">
                                                        <span class="qty" align= right id= "header-content"> $18.00 </span>
                                                    </div>
                                                </div>
                                        </div>   
                                    </div>
                                    <router-link to="/menu"><base-button block type="success">Add More</base-button></router-link>
                                    
                                </div>
                        </div>
                    </div>
                </div>


                 <div class="col-sm-6">
                    <div class="card bg-secondary shadow border-0">
                        <div class="card-header bg-transparent pb-5">
                            <div style = margin-left:80px>
                                <h2> Payment Method: </h2>
                                <div class = "row">
                                    <div class =  "col-sm-5">
                                        <input type="radio" id="one" value="One" v-model="picked"> <!-- Change to Bootstrap Radio Buttons | See argon docs-->
                                        <label for="one" style=font-size:16px>MasterCard / Visa</label>
                                    </div>
                                    <div class=  "col-sm-5">
                                        <input type="radio" id="two" value="Two" v-model="picked"> <!-- Change to Bootstrap Radio Buttons | See argon docs -->
                                        <label for="two" style=font-size:16px>Cash</label>
                                    </div>
                                </div>
                                
                            </div>
                            <hr>
                            <div style = margin-left:80px>
                                <div class = "row">
                                    <div class = "col-sm-4">
                                        <div class= "NameFood"> Sub-Total: </div>
                                            Service Charge: 
                                            <br/> 
                                            GST:
                                            <p class ="NameFood">Total: </p>
        
                                    </div>
                                    <div class = "col-sm-6">
                                        <p class="qty" align= right>$36.00 
                                            <br/> $3.60
                                            <br/> $2.77
                                            <br/> $42.37
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <router-link to="/confirmationpage"><base-button block type="danger">Place Order</base-button></router-link>
                        </div>
                    </div>
                </div>
            </div>
            
        </base-header>  
    </div>                    
</template>

<script>
// import QuantityCounter from '../components/QuantityCounter.vue'

export default {
    name: 'sidebar',
    // components: {
    //     QuantityCounter
    // },
    props: {
      logo: {
        type: String,
        default: 'img/brand/success.png',
        description: 'tick mark'
      },
      salad: {
        type: String,
        default: 'img/brand/Caesar_Salad.jpg',
        description: 'salad'
      },
      steak: {
        type: String,
        default: 'img/brand/Ribeye_Steak.jpg',
        description: 'steak'
      }
    }
 }
</script>

<style>
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
</style>
