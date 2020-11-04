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
        <div class = "content">
        <div class="info" :style="{'background-image':'url(https://vuejs.org/images/logo.png)'}">
                            <h1>Common Man</h1>
                            <p>Address: </p>
                            <p>Phone No: </p>
                            <p>Opening Hours: </p>
        </div>
        </div>

        <div class="content1">
            
            <h1>Main Dish</h1>
            <hr>
            <div class= "row">
                <div class="column">
                    <div class = "flex-item">
                    <div class='container2'>
                                        <div>
                                            <img :src="salad" class='iconDetails' alt="...">
                                        </div>	
                                        <div style = "margin-left:65%">
                                            <div style='font-size:1.8em;font-weight:bold;'>Caesar Salad</div>
                                            <div style="font-size:1em;">Description: No eggs and onions <br />
                                            Price: $18.00
                                            <br />
                                            
                                            <br />
                                            <br />
                                             <br />

                                            <div style='text-align:center'><QuantityCounter></QuantityCounter></div>
                                            
                                            <br />

                                        <br />
                                        <br />
                                            <div style="float:right;font-size:1.2em;font-weight:bold;">$14.00</div>
                                        </div>
                                            
                                    </div>
                                </div>
                    
                    </div>
                </div>
                <div class="column">
                    <div class = "flex-item">
                    <div class='container2'>
                                        <div>
                                            <img :src="steak" class='iconDetails' alt="...">
                                        </div>	
                                        <div style = "margin-left:65%">
                                            <div style='font-size:1.8em;font-weight:bold;'>Rib Eye Steak</div>
                                            <div style="font-size:1em;">Description: Medium Rare<br />
                                            Price: $18.00
                                            <br />
                                            
                                            <br />
                                            <br />
                                             <br />

                                            <div style='text-align:center'><QuantityCounter></QuantityCounter></div>
                                            
                                            <br />

                                        <br />
                                        <br />
                                            <div style="float:right;font-size:1.2em;font-weight:bold;">$14.00</div>
                                        </div>
                                            
                                    </div>
                    </div>
                    
                    </div>
                </div>

            </div>
            <div class= "row">
                <div class="column">
                    <div class = "flex-item">
                                    <div class='container2'>
                                        <div>
                                            <img :src="spaghetti" class='iconDetails' alt="...">
                                        </div>	
                                        <div style = "margin-left:65%">
                                            <div style='font-size:1.8em;font-weight:bold;'>Bolognese</div>
                                            <div style="font-size:1em;">Description: Spaghetti Minced Beef<br />
                                            Price: $18.00
                                            <br />
                                            
                                            <br />
                                            <br />
                                             <br />

                                            <div style='text-align:center'><QuantityCounter></QuantityCounter></div>
                                            
                                            <br />
                                            <br />

                                        <br />
                                            <div style="float:right;font-size:1.2em;font-weight:bold;">$14.00</div>
                                        </div>
                                            
                                    </div>
                                
                    </div>
                </div>
                
            </div>
        </div>

        <div>
            <h1>Beverages</h1>
            <hr>
            <div class= "row">
                <div class="column">
                    <div class = "flex-item">
                        <div class='container2'>
                                        <div>
                                            <img :src="juice" class='iconDetails' alt="...">
                                        </div>	
                                        <div style = "margin-left:65%">
                                            <div style='font-size:1.8em;font-weight:bold;'>Orange Juice</div>
                                            <div style="font-size:1em;">Description: Fresh Orange<br />
                                            Price: $18.00
                                            <br />
                                            
                                            <br />
                                            <br />
                                             <br />

                                            <div style='text-align:center'><QuantityCounter></QuantityCounter></div>
                                            
                                            <br />

                                        <br />
                                            <div style="float:right;font-size:1.2em;font-weight:bold;">$14.00</div>
                                        </div>
                                            
                                    </div>
                    </div>
                    
                    </div>
                </div>
                <div class="column">
                    <div class = "flex-item">
                        <div class='container2'>
                                        <div>
                                            <img :src="coffee" class='iconDetails' alt="...">
                                        </div>	
                                        <div style = "margin-left:65%">
                                            <div style='font-size:1.8em;font-weight:bold;'>Coffee</div>
                                            <div style="font-size:1em;">Description: Handmade for you <br />
                                            Price: $18.00
                                            <br />
                                            
                                            <br />
                                            <br />
                                             <br />

                                            <div style='text-align:center'><QuantityCounter></QuantityCounter></div>
                                            
                                            <br />

                                        <br />
                                            <div style="float:right;font-size:1.2em;font-weight:bold;">$14.00</div>
                                        </div>
                                            
                                    </div>
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
      },
      coffee: {
        type: String,
        default: 'img/restimage/coffee.jpg',
        description: 'coffee'
      },
      juice: {
        type: String,
        default: 'img/restimage/juice.jpg',
        description: 'juice'
      }
    }
 }
</script>

<style>
.column {
  float: left;
  padding: 10px;
 
}

.column {
  float: left;
  width: 48.5%;
  
}

.container2 {
	width:80%;
	height:100%;
    padding:10%;
	
    
}

.iconDetails {
    
    float:left; 
    width:60%;	
} 

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

.flex-container {
  padding: 20px;
  margin: 0;

  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  

  -webkit-flex-flow: row wrap;
  justify-content: space-between; /* this make the end divs at sides and equal space between other divs */
}

.flex-item {
  background: #f4f5f4; 
  padding: 5px;
  
  border-radius: 40px 40px 40px 40px;
  margin-top: 10px;

  height:400px;
}

.left {
  width: 60%;
}

.right {
  width: 37%;
}

.left1 {
  width: 46%;
}

.right1 {
  width: 48%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

table{
   overflow:auto;
   height:200px;
   
}

div.ex3 {
  width:auto;
  height: 410px;
  overflow: auto;
}

div.tablescroll {
  
  height: 300px;
  overflow: auto;
}
body {
  margin: 0;
  font-family: "Lato", sans-serif;
}



.info {
  background-image: restopic1;
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  width: 100%;
  padding: 20px;
}


.icon {
  text-align: center;
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
  padding: 1px;
  height: auto;
  background-image: linear-gradient( rgb(78, 223, 78), rgb(85, 199, 228));
}

div.content1 {
  margin-left: 200px;
  padding: 1px 50px;
  height: 2000px;
  background-image: linear-gradient( rgb(78, 223, 78), rgb(85, 199, 228));
}

.stati{
    background: #fff;
    height: 4em;
    padding:1em;
    margin:1em 0; 
    
    margin-right:1.96em;
        -webkit-transition: margin 0.5s ease,box-shadow 0.5s ease; /* Safari */
        transition: margin 0.5s ease,box-shadow 0.5s ease; 
    -moz-box-shadow:0px 0.2em 0.4em rgb(0, 0, 0,0.8);
    -webkit-box-shadow:0px 0.2em 0.4em rgb(0, 0, 0,0.8);
    box-shadow:0px 0.2em 0.4em rgb(0, 0, 0,0.8);
    display:inline-block;
    vertical-align:top;

}
.stati:hover{ 
 
  -moz-box-shadow:0px 0.4em 0.5em rgb(0, 0, 0,0.8); 
-webkit-box-shadow:0px 0.4em 0.5em rgb(0, 0, 0,0.8); 
box-shadow:0px 0.4em 0.5em rgb(0, 0, 0,0.8); 
}

.stati div{
  
  display: block;
  
}
.stati div b {
  font-size:2em;
  width: 100%;
  float:right;
  text-align:right;
  display: block;
}
.stati div span {
  font-size:1.2em;
  width: 100%;
  color: rgb(0, 0, 0,0.8); 
  display: block;
  float:right;
  text-align:right;

}



.stati.bg-turquoise { background: rgb(26, 188, 156); color:white;} 


.testimonials {
  border: 2px solid #ccc;
  background-color: #eee;
  border-radius: 10px;
  padding: 5px;
  margin: 7px 0;
  width:115%;
  
}

/* Clear floats after containers */
.testimonials::after {
  content: "";
  clear: both;
  display: table;
}

/* Float images inside the container to the left. Add a right margin, and style the image as a circle */
.testimonials img {
  float: left;
  width:100%;
  border-radius: 50%;
}

/* Increase the font-size of a span element */
.testimonials span {
  font-size: 20px;
  
  
}



.* {
  box-sizing: border-box;
}

/* Float four columns side by side */


.column2 {
    float: left;
    width: 30%;
    padding: 0 5px;
    margin-left:20px;
}



/* Clear floats after the columns */


/* Responsive columns */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 10px;
  }
}

/* Style the counter cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 5px;
  text-align: center;
  background-color: #444;
  color: white;
  
}

.cards {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
 
  background-color: white;
  color: black;
}

.fa {font-size:50px;}


table {
  border-collapse: collapse;
  width:100%;
}

th, td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even){background-color: #f2f2f2}

th {
  background-color: #4CAF50;
  color: white;
}

input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

.forms {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}


</style>

