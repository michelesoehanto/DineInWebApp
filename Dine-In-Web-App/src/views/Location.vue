<template>
    <div>

        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
        <div style=margin-left:2%><h2 class="h1 text-center text-white mb-1">Find a Place to DineIn !</h2></div>
        <br>
        <div class ="row">
            <div class="col-sm-3">
                <input
                type="text"
                placeholder="Location"
                class="trial">
            </div>

            <base-dropdown>
                <base-button slot="title" type="secondary" class="dropdown-toggle" :style= "someStyle">
                {{seat}}
                </base-button>
                <a class="dropdown-item" @click="updateSeat('2 Seaters')">2 Seaters</a>
                <a class="dropdown-item" @click="updateSeat('3 Seaters')">3 Seaters</a>
                <a class="dropdown-item" @click="updateSeat('4 Seaters')">4 Seaters</a>
                <a class="dropdown-item" @click="updateSeat('5 Seaters')">5 Seaters</a>
            </base-dropdown>
       
        
             <base-dropdown>
                <base-button slot="title" type="secondary" class="dropdown-toggle" :style= "someStyle">
                {{price}}
                </base-button>
                <a class="dropdown-item"  @click="updatePrice('Below $15/meal')">Below $15/meal</a>
                <a class="dropdown-item" @click="updatePrice('Below $30/meal')">Below $30/meal</a>
                <a class="dropdown-item" @click="updatePrice('Below $50/meal')">Below $50/meal</a>
                <a class="dropdown-item" @click="updatePrice('Below $70/meal')">Below $70/meal</a>
                <a class="dropdown-item" @click="updatePrice('Below $100/meal')">Below $100/meal</a>
            </base-dropdown>
   

   
           <base-dropdown>
                <base-button slot="title" type="secondary" class="dropdown-toggle" :style= "someStyle">
                {{crowd}}
                </base-button>
                <a class="dropdown-item" @click="updateCrowd('Low')">Low</a>
                <a class="dropdown-item" @click="updateCrowd('Moderate')">Moderate</a>
                <a class="dropdown-item" @click="updateCrowd('High')">High</a>
            </base-dropdown>
      
       
           
            <base-dropdown>
                <base-button slot="title" type="secondary" class="dropdown-toggle" :style= "someStyle">
                {{protect}}
                </base-button>
                <a class="dropdown-item" @click="updateProtect('Low')">Low</a>
                <a class="dropdown-item" @click="updateProtect('Moderate')">Moderate</a>
                <a class="dropdown-item" @click="updateProtect('High')">High</a>
            </base-dropdown>
      
        </div>
        <p></p>
        <p></p>
        <hr>
        <div class = "row">
        <div class = "col-sm-7">
            <img :src="maps" style="width:175%" alt="...">
        </div>    
        </div>    
        </base-header>
        
    </div>
</template>
<script>

export default {
    data() {
        return {
            seat: "Size of Party",
            protect:"Safety Measures",
            crowd: "Crowd Level",
            price: "Price Range",
            someStyle: {
                    'width': '15em',
                    'font-size': 18 + 'px',
                   
            },
           
        }
    },
    props: {
      maps: {
        type: String,
        default: 'img/brand/maps3.png',
        description: 'map'
      }
    },
    methods: {
        updateSeat: function(text) {
        this.seat = text;
        },
        updateProtect: function(text) {
        this.protect = text;
        },
        updateCrowd: function(text) {
        this.crowd = text;
        },
        updatePrice: function(text) {
        this.price = text;
        }
    }
}
</script>

<style>


.trial {
    margin-left:10%;
  border-radius: 20px;
  padding: 10px;
  width: 90%;
  
padding-left:30px;
  background-color: white;
  border: 2px solid #4CAF50;
  color: black;
  outline: none; /* removes the outer border when button is in focus */
  text-align: left;
  font-size:20px;
  
}

</style>
