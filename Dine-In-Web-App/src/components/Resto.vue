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
            <div class="info" :style="{'background-image':'url(https://vuejs.org/images/logo.png)'}">
                            <h1>Common Man</h1>
                            <p>Address: </p>
                            <p>Phone No: </p>
                            <p>Opening Hours: </p>
            </div>
            <div class= "row">
                <div class= "column left"> 
                    <div class="stati turquoise ">
                        <div>
                            <img :src="vacancy" alt="..." class= 'iconDetails'>
                            <div style="display:inline-block;">
                                <b>0</b>
                                <span>Percentage</span>
                            </div> 
                        </div>
                    </div>
                    <div class="stati turquoise ">
                        <div>
                            <img :src="vacancy" alt="..." class= 'iconDetails'>
                            <div style="display:inline-block;">
                                <b>0</b>
                                <span>Percentage</span>
                            </div> 
                        </div>
                    </div>
                    <div class="stati turquoise ">
                        <div>
                            <img :src="vacancy" alt="..." class= 'iconDetails'>
                            <div style="display:inline-block;">
                                <b>0</b>
                                <span>Percentage</span>
                            </div> 
                        </div>
                    </div>
                    <div class="stati turquoise ">
                        <div>
                            <img :src="vacancy" alt="..." class= 'iconDetails'>
                            <div style="display:inline-block;">
                                <b>0</b>
                                <span>Percentage</span>
                            </div> 
                        </div>
                    </div>
                    <div class="row">
                        <div class="column left1">
                            <div class="card">
                                <p><i class="fa fa-user"></i></p>
                                <h3>11+</h3>
                                <p>Partners</p>
                                
                            </div>

                    
                            <div class="card">
                                <p><i class="fa fa-check"></i></p>
                                <h3>55+</h3>
                                <p>Projects</p>
                            </div>
                   
                            <div class="card">
                                <p><i class="fa fa-smile-o"></i></p>
                                <h3>100+</h3>
                                <p>Happy Clients</p>
                            </div>

                            <div class="card">
                                <p><i class="fa fa-smile-o"></i></p>
                                <h3>100+</h3>
                                <p>Happy Clients</p>
                            </div>
                    
                        </div>

                        
                          <div class="column right1">
                            <div class= "ex3">
                              <div class="testimonials">
                                <div class= 'iconDetails'>
                                    <img :src="person2">
                                </div>
                                <div>
                                    <p><span>Chris Fox.</span> CEO at Mighty Schools.</p>
                                    <p>John Doe saved us from a web disaster.</p>
                                    
                                </div>
                            </div>

                            
                            <div class="testimonials">
                                <div class= 'iconDetails'>
                                    <img :src="person2">
                                </div>
                                <div>
                                    <p><span>Rebecca Flex</span> CEO at Schools.</p>
                                    <p>No one is better than John Doe.</p>
                                    
                                </div>
                            </div>

                            <div class="testimonials">
                                <div class= 'iconDetails'>
                                    <img :src="person2">
                                </div>
                                <div>
                                    <p><span>Rebecca Flex</span> CEO at Schools.</p>
                                    <p>No one is better than John Doe.</p>
                                    
                                </div>
                            </div>

                            <div class="testimonials">
                                <div class= 'iconDetails'>
                                    <img :src="person2">
                                </div>
                                <div>
                                    <p><span>Rebecca Flex</span> CEO at Schools.</p>
                                    <p>No one is better than John Doe.</p>
                                    
                                </div>
                            </div>

                            <div class="testimonials">
                                <div class= 'iconDetails'>
                                    <img :src="person2">
                                </div>
                                <div>
                                    <p><span>Michele Yiew</span> Student.</p>
                                    <p>No one is better than John Doe.</p>
                                    
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class ="row">
                        <div class ="tablescroll">
                        
                        <table>
                        
                          <tr>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Safety1</th>
                            <th>Safety2</th>
                            <th>Safety3</th>
                            <th>Safety4</th>
                          </tr>
                          <tr>
                            <td>17/10/20</td>
                            <td>Griffin</td>
                            <td> Yes </td>
                            <td> Yes </td>
                            <td> Yes </td>
                            <td> Yes </td>
                          </tr>
                          <tr>
                            <td>17/10/20</td>
                            <td>Louis</td>
                            <td> Yes </td>
                            <td> Yes </td>
                            <td> Yes </td>
                            <td> Yes </td>
                          </tr>
                          <tr>
                            <td>17/10/20</td>
                            <td>Joes</td>
                            <td> Yes </td>
                            <td> Yes </td>
                            <td> Yes </td>
                            <td> Yes </td>
                          </tr>
                          <tr>
                            <td>17/10/20</td>
                            <td>Cleveland</td>
                            <td> Yes </td>
                            <td> Yes </td>
                            <td> Yes </td>
                            <td> Yes </td>
                        </tr>

                          <tr>
                            <td>17/10/20</td>
                            <td>Cleveland</td>
                            <td> Yes </td>
                            <td> Yes </td>
                            <td> Yes </td>
                            <td> Yes </td>
                          </tr>
                          <tr>
                            <td>17/10/20</td>
                            <td>Cleveland</td>
                            <td> Yes </td>
                            <td> Yes </td>
                            <td> Yes </td>
                            <td> Yes </td>
                          </tr>
                          <tr>
                            <td>17/10/20</td>
                            <td>Cleveland</td>
                            <td> Yes </td>
                            <td> Yes </td>
                            <td> Yes </td>
                            <td> Yes </td>
                        </tr>
                        <tr>
                            <td>17/10/20</td>
                            <td>Cleveland</td>
                            <td> Yes </td>
                            <td> Yes </td>
                            <td> Yes </td>
                            <td> Yes </td>
                        </tr>
                        <tr>
                            <td>17/10/20</td>
                            <td>Cleveland</td>
                            <td> Yes </td>
                            <td> Yes </td>
                            <td> Yes </td>
                            <td> Yes </td>
                        </tr>
                        
                        </table>
                    </div>
                    </div>
                  </div>
                

                    

                <div class="column right">
                    <div class = "forms">
                        <form action="/action_page.php">
                        <h1>Reserve</h1>
                        <label for="fname">Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name..">

                        <label for="lname">Number of People</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name..">

                        <label for="birthday">Birthday:</label>
                        <input type="date" id="birthday" name="birthday">
                        <br />
                        <br />


                        

                        <img :src= "seats">
                        <br />
                        <br />

                        <label for="country">Seats</label>
                        <select id="country" name="country">
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        </select>

                    
                        <input type="submit" value="Submit">
                        </form>
       
                    </div>
                    
                </div>

            </div>
        </div>
    </body>
</div>
</template>

<script>
// import QuantityCounter from '../components/QuantityCounter.vue'

export default {
    
    props: {
        vacancy: {
        type: String,
        default: 'img/icon/table.png',
        description: 'vacancy'
        },
        person2: {
            type: String,
            default: 'img/restimage/person2.jpg',
            description: 'vacancy'
        },
        person3: {
            type: String,
            default: 'img/restimage/person3.jpg',
            description: 'vacancy'
        },
        seats: {
            type: String,
            default: 'img/restimage/seats.jpg',
            description: 'vacancy'
        },
        restopic1: {
            type: String,
            default: 'img/restimage/restopic1.jpg',
            description: 'vacancy'

        }
        
    }
 }
</script>

<style>
.column {
  float: left;
  padding: 10px;
 
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

.iconDetails {
    float:left; 
    height:70px;
    width:70px;	
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
  padding: 1px 16px;
  height: auto;
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
    width: 35%;
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

