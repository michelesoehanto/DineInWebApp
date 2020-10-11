<template>
    <div>              
            
         <base-header class="header pb-8 pt-5 pt-lg-8 d-flex"
                     style="min-height: 1000px; background-image: url(img/theme/profile-cover.jpg); 
                     background-size: cover; background-position: center top;">
            <!-- Mask -->
            <span class="mask bg-gradient-success opacity-8"></span>
            <div class="row justify-content-center">
                <div class="col-sm-8">
                    <div class="card bg-secondary shadow border-0">
                     <div class="card-header bg-transparent pb-5">
                        <img :src="logo" class="thankyoulogo" alt="...">
                            <div class="text-center mt-2 mb-3"><h1 style=font-size:40px>You're all ready to DineIn!</h1></div>
                                
                                <hr>
                                <div style = margin-left:120px>
                                    <h3 style=font-size:20px>Reservation Details:</h3>
                                    <br>
                                    <div class = "row">
                                        <div class="col-sm-6" style=font-weight:bold>Reservation ID:</div>
                                        <div class="col-sm-6" style=font-weight:bold>Date & Time:</div>
                                    </div>

                                    <div class = "row">
                                        <div class="col-sm-6">#123422439589Z</div>
                                        <div class="col-sm-6">26 September 2020, 12:00</div>
                                        
                                    </div>

                                    <p></p>
                                    <div class = "row">
                                        <div class="col-sm-6" style=font-weight:bold>Diner Details:</div>  
                                        <div class="col-sm-6" style=font-weight:bold>Number of People: </div>                                       
                                    </div>
                                    <div class = "row">
                                        <div class="col-sm-6" >Christopher Liew</div> 
                                        <div class="col-sm-6" >5 pax</div> 
                                    </div>

                                    <div class = "row">
                                        <div class="col-sm-6">+653249242</div>
                                        
                                        
                                    </div>

                                    <div class = "row">
                                        <div class="col-sm-6">chrisliew@gmail.com</div>
                                    </div>
                                    <p></p>
                                    <div class = "row">
                                        <div class="col-sm-6" style=font-weight:bold>Payment Method:</div>
                                        <div class="col-sm-8"> Mastercard - XXXX XXXX XXXX 1234</div>
                                    </div>
                                    
                                    <p></p>
                                   
                                </div> 

                                
                                <hr>
                                <h3 style=margin-left:120px;font-size:20px>Order Summary:</h3>
                                <br>
                                <div style = margin-left:120px>
                                    <div class = "row">
                                        <div class = "col-sm-4">
                                            <img :src="salad" class="foodchoosen" alt="..."></div>
                                        <div class = "col-sm-6">
                                            <div class= "NameFood">Caesar Salad</div>                    
                                            Description: No eggs and onions
                                            <br />
                                            Price: $18.00
                                            <br />
                                            Quantity: 1
                                            <br/>
                                            <br/>
                                            <p class="qty" align= right> $18.00 </p>
                                        </div>                  
                                    </div>
                                    <br>
                                    <div class = "row">
                                        <div class = "col-sm-4">
                                            <img :src="steak" class="foodchoosen" alt="..."></div>
                                        <div class = "col-sm-6">
                                            <div class= "NameFood">Ribeye Steak</div>
                                            
                                            Description: Medium Rare
                                            <br />
                                            Price: $18.00
                                            <br />
                                            Quantity: 1
                                            <br/>
                                            <br/>
                                            <p class="qty" align= right>$18.00 </p>
                                            
                                        </div>
                                    </div>

                                    <div class = "row">
                                        <div class = "col-sm-4">
                                            <br>
                                            <span class= "price"> Sub-Total:
                                            <br/> Service Charge: 
                                            <br/> Tax:
                                            <p class ="NameFood">Total: </p>
                                            </span>
                                        </div>
                                        <div class = "col-sm-6">
                                            <br>
                                            <p class="qty" align= right>$36.00 
                                            <br/> $3.60
                                            <br/> $2.77
                                            <br/> $42.37
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </base-header>
    </div>
</template>

<script>
 export default {
    name: 'sidebar',
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
    height:90%;
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


</style>