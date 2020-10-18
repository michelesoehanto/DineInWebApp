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
      <h2 v-if="this.loaded == true">Profile page of {{profileInfo.name.first_name}} {{profileInfo.name.last_name}}</h2>
      <p v-if="this.loaded == true">You have a wallet balance of: ${{profileInfo.wallet_balance}}</p>
      <h3>Resize the browser window to see the effect.</h3>
      <br>
      <div>
    <div >
      <p>Upload an image to Firebase:</p>
      <input type="file" @change="previewImage" accept="image/*" >
    </div>
    <div>
      <p>Progress: {{uploadValue.toFixed()+"%"}}
      <progress id="progress" :value="uploadValue" max="100" ></progress>  </p>
    </div>
      <div v-if="imageData!=null">
        <img class="preview" :src="picture">
        <br>
        <button @click="setProfileImage">Upload</button>
      </div>
    </div>
    <img v-if="profileInfo.imgURL != null && loaded == true" :src=profileInfo.imgURL alt="Profile Pic">
  </div>
  </body>

</div>
</template>

<script>
// Functionality
// 1) Get and Update Profile Information from Firebase

import firebase from '../firebase.js'
const database = firebase.firestore();
const storage = firebase.storage();

export default {
  data() {
    return {
      profileInfo: {
        imgURL: null
      },
      user_id: 1, // Should be passed as a prop from Login Page. Upon Log In, Auth should return user_id and update parent before passing to profile
      loaded: false, // Triggered when data has sucessfully been pulled after Vue app is mounted
      uploadValue: 0,
      imageData: null,
    }
  },
  methods: {
    // 1) Pull profile information from Firebase
    fetchProfile: function() {
      database.collection('users').where("user_id", "==", this.user_id).get().then((querySnapShot) => {
        querySnapShot.forEach(doc=>{
          console.log("User data =>", doc.data());
          // Document ID
          this.doc_id = doc.id;
          // User Profile Data
          this.profileInfo.user_name = doc.data().user_name;
          // Personal Information (Salutation + First Name + Last Name + DOB)
          this.profileInfo.name = doc.data().name;
          // Contact Details
          this.profileInfo.contact = doc.data().contact_details;
          // Payment Details (CC + Wallet only)
          this.profileInfo.payment = doc.data().cc_payment_info;
          this.profileInfo.wallet_balance = doc.data().wallet_balance;
          // Profile Image URL
          this.profileInfo.imgURL = doc.data().imgURL;
          // Data loaded sucessfully
          this.loaded = true;
        })
      }).catch(function(error) {
        console.log("Error getting documents: ", error);
    });
    },
    // 2) Update profile information to Firebase 
    // Process: Edit this.profileInfo THEN Use v-on:click with an update button to update profile information)
    updateProfile: function() {
      database.collection('users').doc(this.doc_id).update(
        this.profileInfo
        ).then(function() {
          console.log("Profile information successfully updated!")
        }).catch(function(error) {
          console.log("Error updating profile information: ", error);
        })
    },
    // 3.1) Set Profile Image https://www.genuitec.com/upload-files-using-vue-and-firebase/
    setProfileImage: function() {
        let uploadTask = storage.ref(`${this.imageData.name}`).put(this.imageData);
        uploadTask.on('state_changed', 
        snapshot => {
          this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
        },
        error => {
          console.log("Error uploading profile picture ", error);
        },
        () => {
          this.uploadValue = 100;
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            this.profileInfo.imgURL = downloadURL; // Profile Info has image URL and can directly pull with img tag
            this.updateProfile(); // Call on update profile to update downloadURL
            console.log("New profile image available at: ", downloadURL);
          })
        }
      )
    },
    previewImage(event) {
      this.uploadValue=0;
      this.picture=null;
      this.imageData = event.target.files[0];
    },
  },
  // KIV: Components Vs. Conditional Rendering
  computed: {
    firstNameComputed() {
      return this.profileInfo.name.first_name
    }
  },
  // Lifecycle Hooks 
  // https://www.digitalocean.com/community/tutorials/vuejs-component-lifecycle
  // before rendering
  created() {
    this.fetchProfile()
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

img.preview {
    width: 200px;
}
</style>

