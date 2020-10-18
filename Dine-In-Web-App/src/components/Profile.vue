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
      <h2>Profile Page of {{profileInfo.user_name}}</h2>
      <p>We have also added a media query for screens that are 400px or less, which will vertically stack and center the navigation links.</p>
      <h3>Resize the browser window to see the effect.</h3>
    </div>
  </body>

</div>
</template>
<script>
// Functionality
// 1) Get and Update Profile Information from Firebase
import database from '../firebase.js'

export default {
  data() {
    return {
      profileInfo: {},
      user_id: 1 // Should be passed as a prop from Login Page upon Log In
    }
  },
  methods: {
    fetchProfile: function() {
      database.collection('users').get().then((querySnapShot) => { //where("user_name", "==", this.user_id)
        querySnapShot.forEach(doc=>{
          // User Profile Data
          console.log("User data =>", doc.data());
          this.profileInfo.user_name = doc.data().user_name;
          // Personal Information (Salutation + First Name + Last Name + DOB)
          this.profileInfo.name = doc.data().name;
          // Contact Details
          this.profileInfo.contact = doc.data().contact_details;
          // Payment Details (CC + Wallet only)
          this.profileInfo.payment = doc.data().cc_payment_info;
          this.profileInfo.wallet_balance = doc.data().wallet_balance;
        })
      }).catch(function(error) {
        console.log("Error getting documents: ", error);
    });
    }
  }
  
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

