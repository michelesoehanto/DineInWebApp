<template>
    <div>
        <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                        style="min-height: 600px; background-image: url(img/theme/profile-cover.jpg); background-size: cover; background-position: center top;">
            <span class="mask bg-gradient-success opacity-8"></span>
            <br/>      
            <div class="row">
                <!-- Food Item 1 -->
                <div class="col-sm-6">
                    <div class="card bg-secondary shadow border-0">
                        <div class="card-header bg-transparent pb-5">
                            <div class="text-center mt-2 mb-3">
                                <h3 style=font-size:30px>French Onion Soup</h3>
                                </div>
                                <hr>
                                <div style = margin-left:20px>
                                    <!-- Image -->
                                    <div class = "row">
                                        <div class = "col">
                                                <div class="row">
                                                    <!-- Image -->
                                                    <img :src="frenchonionsoup" style="width:100%" alt="...">
                                                    </div>
                                                <br>
                                                <div class="row justify-content-md-center">
                                                    <quantity-counter></quantity-counter>
                                                </div>                                               
                                        </div>
                                        <div class = "col">
                                            <div class="row justify-content-md-center">
                                                    <p> </p>
                                                </div> 
                                                <div class="row justify-content-md-center">
                                                    <!-- Food Info -->
                                                    <p style="text-align:center"><i>Classic Soupe à L’oignon <br> with Gruyere & Croutons</i>
                                                    </p>
                                                </div>  
                                                <br>
                                                <div class="row justify-content-md-center">
                                                    <!-- Food Price -->
                                                    <p style="text-align:center"><b>Price: $11.00</b></p>
                                                </div>  
                                        </div>
                                    </div>                                   
                                </div>
                        </div>
                    </div>
                </div>
                <!-- Food Item 2 -->
                <div class="col-sm-6">
                    <div class="card bg-secondary shadow border-0">
                        <div class="card-header bg-transparent pb-5">
                            <div class="text-center mt-2 mb-3">
                                <h3 style=font-size:30px>Caesar Salad</h3>
                                </div>
                                <hr>
                                <div style = margin-left:20px>
                                    <!-- Image -->
                                    <div class = "row">
                                        <div class = "col">
                                                <div class="row">
                                                    <!-- Image -->
                                                    <img :src="salad" style="width:100%" alt="...">
                                                    </div>
                                                <br>
                                                <div class="row justify-content-md-center">
                                                    <quantity-counter></quantity-counter>
                                                </div>                                               
                                        </div>
                                        <div class = "col">
                                            <div class="row justify-content-md-center">
                                                    <p> </p>
                                                </div> 
                                                <div class="row justify-content-md-center">
                                                    <!-- Food Info -->
                                                    <p style="text-align:center"><i>Freshly tossed Tomato, Mozzarella, Capers & Basil Pesto</i>
                                                    </p>
                                                </div>  
                                                <br>
                                                <div class="row justify-content-md-center">
                                                    <!-- Food Price -->
                                                    <p style="text-align:center"><b>Price: $18.00</b></p>
                                                </div>  
                                        </div>
                                    </div>                                   
                                </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Row 2 -->
            <br>
            <div class="row">
                <!-- Food Item 3 -->
                <div class="col-sm-6">
                    <div class="card bg-secondary shadow border-0">
                        <div class="card-header bg-transparent pb-5">
                            <div class="text-center mt-2 mb-3">
                                <h3 style=font-size:30px>Ribeye Steak</h3>
                                </div>
                                <hr>
                                <div style = margin-left:20px>
                                    <!-- Image -->
                                    <div class = "row">
                                        <div class = "col">
                                                <div class="row">
                                                    <!-- Image -->
                                                    <img :src="steak" style="width:100%" alt="...">
                                                    </div>
                                                <br>
                                                <div class="row justify-content-md-center">
                                                    <quantity-counter></quantity-counter>
                                                </div>                                               
                                        </div>
                                        <div class = "col">
                                            <div class="row justify-content-md-center">
                                                    <p> </p>
                                                </div> 
                                                <div class="row justify-content-md-center">
                                                    <!-- Food Info -->
                                                    <p style="text-align:center"><i>Grilled Black Angus Rib Eye Steak with "Vigneron" Butter</i>
                                                    </p>
                                                </div>  
                                                <br>
                                                <div class="row justify-content-md-center">
                                                    <!-- Food Price -->
                                                    <p style="text-align:center"><b>Price: $18.00</b></p>
                                                </div>  
                                        </div>
                                    </div>                                   
                                </div>
                        </div>
                    </div>
                </div>
                <!-- Food Item 4 -->
                <div class="col-sm-6">
                    <div class="card bg-secondary shadow border-0">
                        <div class="card-header bg-transparent pb-5">
                            <div class="text-center mt-2 mb-3">
                                <h3 style=font-size:30px>Couscous Platter</h3>
                                </div>
                                <hr>
                                <div style = margin-left:20px>
                                    <!-- Image -->
                                    <div class = "row">
                                        <div class = "col">
                                                <div class="row">
                                                    <!-- Image -->
                                                    <img :src="couscous" style="width:100%" alt="...">
                                                    </div>
                                                <br>
                                                <div class="row justify-content-md-center">
                                                    <quantity-counter></quantity-counter>
                                                </div>                                               
                                        </div>
                                        <div class = "col">
                                            <div class="row justify-content-md-center">
                                                    <p> </p>
                                                </div> 
                                                <div class="row justify-content-md-center">
                                                    <!-- Food Info -->
                                                    <p style="text-align:center"><i>Finest selection of Lamb Skewer, <br>Chicken & Merguez on a platter</i>
                                                    </p>
                                                </div>  
                                                <br>
                                                <div class="row justify-content-md-center">
                                                    <!-- Food Price -->
                                                    <p style="text-align:center"><b>Price: $32.00</b></p>
                                                </div>  
                                        </div>
                                    </div>                                   
                                </div>
                        </div>
                    </div>
                </div>
            </div>    
            <br>
            <div>
                <router-link to="/checkoutpage"><base-button block type="danger">Proceed to Order</base-button></router-link>
            </div>
        </base-header>  
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
      },
      couscous: {
        type: String,
        default: 'img/brand/couscous_royale.jpg',
        description: 'couscous'
      },
      frenchonionsoup: {
        type: String,
        default: 'img/brand/french_onion_soup.jpg',
        description: 'frenchonionsoup'
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
