<template>
    <div>              
         <base-header class="header pb-8 pt-5 pt-lg-8 d-flex"
                     style="min-height: 1000px; background-image: url(img/theme/profile-cover.jpg); 
                     background-size: cover; background-position: center top;">
            <!-- Health Declaration + COVID 19 Details -->
            <span class="mask bg-gradient-success opacity-8"></span>
            <div class="row justify-content-center">
                <div class="col-sm-8">
                    <div class="card bg-secondary shadow border-0">
                     <div class="card-header bg-transparent pb-5">
                            <div class="text-center mt-2 mb-3"><h1 style=font-size:32px>Help keep our Restaurants & Diners Safe!</h1><i class="ni ni-favourite-28"></i></div>
                                
                                <hr>
                                <h2 style="text-align:center">Safe Dining Policies</h2>
                                <div class="text-left mt-2 mb-3">
                                    <br>
                                    <p style=font-size:16px>In accordance with the Ministry of Health Singapore's latest advisory as of 21st August 2020
                                        we implore of users of <b>DineIn</b> to dine responsibly so as to ensure that both diners and F&B outlets alike will be able
                                        to continue to enjoy a safe dining experience.  
                                    </p>
                                    <br>
                                    <p style=font-size:16px>To help keep everyone safe please abide by the following rules:  
                                    </p>
                                    <ul>
                                        <li>Please refrain from booking multiple tables for large gatherings at any F&B outlet.</li>
                                        <li>Please continue to wear a mask even after being seated. Diners should only remove theirs masks 
                                            after their food has arrived.</li>
                                        <li>Please scan the <b>SafeEntry</b> QR codes upon entry and exit of the premises for contact tracing.
                                        </li>
                                        <li>Remember to always take your temperature before entering the premises and immediately
                                            seek medical help should you be feeling unwell or have a high temperature.</li>
                                    </ul>     
                                </div>    
                                <hr>
                                <h2 style="text-align:center">Health Declaration</h2>
                                <br>
                                <div class="text-left mt-2 mb-3">
                                    <p>Please complete the following health declaration survey for us to ensure the safety of many diners like yourself. We thank you for your cooperation!</p> 
                                    <p>Check the boxes below if it applies to you:</p>
                                    <br>
                                    <base-checkbox class="mb-3" v-model="checkboxes.unchecked">
                                    Are you staying with anyone who is currently working in healthcare facilities or currently serving SHN? 
                                    </base-checkbox>
                                    <base-checkbox class="mb-3" v-model="checkboxes.checked">
                                    Did you visit any countries outside of Singapore in the last 14 days?
                                    </base-checkbox>
                                    <base-checkbox class="mb-3" v-model="checkboxes.checked2">
                                    Have you felt unwell (E.g. Showed symptoms of fever, runny nose, cough, sore throat, body ache, loss of sense of smell, shortness of breath) in the past 7 days?
                                    </base-checkbox>
                                </div>
                                <hr>
                                <router-link to="/menu"><base-button block type="danger">Proceed</base-button></router-link>
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
    data(){
        return {
         checkboxes: {
            unchecked: false,
            checked: true,
            checked2: false
          }
       }
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
      }
    }
 }
</script>
<style scoped>
ul {
  display: table;
  margin: 0 auto;
}
ul li {
    font-size: 12pt;
    text-align: left;
    font-style: normal;
}
</style>
