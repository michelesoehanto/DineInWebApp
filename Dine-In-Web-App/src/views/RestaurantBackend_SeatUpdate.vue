<template>
    <div>
        <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                        style="min-height: 600px; background-image: url(img/theme/profile-cover.jpg); background-size: cover; background-position: center top;">
            <span class="mask bg-gradient-success opacity-8"></span>
            <br/>      
            <!-- Card stats -->
            <div class="row align-centre">
                <div class="col">
                    <stats-card title="1 Seater"
                                type="gradient-red"
                                sub-title="30"
                                icon="ni ni-single-02"
                                class="mb-4 mb-xl-0"
                    >
                    <template slot="footer">
                            <base-progress type="warning" :height="5" :value="60" label="Occupancy"></base-progress>
                    </template>
                    </stats-card>
                </div>
                <div class="col">
                    <stats-card title="2 Seater"
                                type="gradient-pink"
                                sub-title="27"
                                icon="ni ni-single-02"
                                class="mb-4 mb-xl-0"
                    >
                    <template slot="footer">
                            <base-progress type="primary" :height="5" :value="35" label="Occupancy"></base-progress>
                    </template>
                    </stats-card>
                </div>
                <div class="col">
                    <stats-card title="3 Seater"
                                type="gradient-orange"
                                sub-title="15"
                                icon="ni ni-single-02"
                                class="mb-4 mb-xl-0"
                    >
                    <template slot="footer">
                            <base-progress type="success" :height="5" :value="25" label="Occupancy"></base-progress>
                    </template>
                    </stats-card>

                </div>
                <div class="col">
                    <stats-card title="4 Seater"
                                type="gradient-info"
                                sub-title="40"
                                icon="ni ni-single-02"
                                class="mb-4 mb-xl-0"
                    >
                    <template slot="footer">
                            <base-progress type="danger" :height="5" :value="75" label="Occupancy"></base-progress>
                    </template>
                    </stats-card>
                </div>
                <div class="col">
                    <stats-card title="5 Seater"
                                type="gradient-primary"
                                sub-title="15"
                                icon="ni ni-single-02"
                                class="mb-4 mb-xl-0"
                    >
                    <template slot="footer">
                            <base-progress type="primary" :height="5" :value="45" label="Occupancy"></base-progress>
                    </template>
                    </stats-card>
                </div>
            </div>
            <br>
                <!-- Food Item 1 -->
            <div class="row">
                <div class="col-sm-12">
                    <div class="card bg-secondary shadow border-0">
                        <div class="card-header bg-transparent pb-5">
                            <div class="text-center mt-2 mb-3">
                                <h3 style=font-size:30px>Update Seat Vacancies</h3>
                                </div>
                                <hr>
                                <div class = "row">
                                <div class="col-">
                                    <base-dropdown>
                                        <base-button v-model="seatType" slot="title" type="primary" class="dropdown-toggle">{{seatType}}</base-button>
                                            <a class="dropdown-item" @click="updateVacancies('Select a seat type')">Select a seat type</a>
                                            <a class="dropdown-item" @click="updateVacancies('1 Seater')">1 Seater</a>
                                            <a class="dropdown-item" @click="updateVacancies('2 Seater')">2 Seater</a>
                                            <a class="dropdown-item" @click="updateVacancies('3 Seater')">3 Seater</a>
                                            <a class="dropdown-item" @click="updateVacancies('4 Seater')">4 Seater</a>
                                            <a class="dropdown-item" @click="updateVacancies('5 Seater')">5 Seater</a>
                                        </base-dropdown>
                                </div> 
                                <div class="col">
                                    <base-input placeholder="Enter New Vacancy Value (in No. of Seats)" :valid="true"></base-input>
                                </div>  
                                </div>   
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <div>
                <base-button block type="danger">Update Status</base-button>
            </div>
        </base-header>  
    </div>                    
</template>

<script>

export default {
    name: 'sidebar',
    data() {
        return {
            seatType: "Select a Seat Type"
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
    },
    methods: {
        updateVacancies: function(text) {
        this.seatType = text;
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
