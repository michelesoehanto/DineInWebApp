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
      <router-link to="/">Home</router-link>
      <router-link to="/profile">Profile</router-link>
      <router-link to="/map">Map</router-link>
    </div>

    <div class="content">
      <h2>Map Page</h2>
      <p>This example use media queries to transform the sidebar to a top navigation bar when the screen size is 700px or less.</p>
      <p>We have also added a media query for screens that are 400px or less, which will vertically stack and center the navigation links.</p>
      <h3>Resize the browser window to see the effect.</h3>
    </div>
  </body>

</div>
</template>
<script>
// Functionality
// 1) ??? TBD ??? Entirely via maps API?

export default {
    
}
</script>
<style>
body {
  margin: 0;
  font-family: "Lato", sans-serif;
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
  height: 1000px;
  background-image: linear-gradient( rgb(78, 223, 78), rgb(85, 199, 228));
}


</style>

