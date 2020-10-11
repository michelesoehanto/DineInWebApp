<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :background-color="sidebarBackground"
      short-title="Hello"
      title="Hello"
    >
      <template slot="links">
        <sidebar-item
          :link="{
            name: 'Home',
            icon: 'ni ni-shop text-primary',
            path: '/dashboard'
          }"
        />

        <sidebar-item :link="{name: 'My Profile', icon: 'ni ni-single-02 text-yellow', path: '/profile'}"/>
        <sidebar-item :link="{name: 'My Reservations', icon: 'ni ni-calendar-grid-58 text-green', path: '/checkoutpage'}"/>
        <sidebar-item :link="{name: 'COVID19', icon: 'ni ni-notification-70 text-red', path: '/healthdeclaration'}"/>
        <sidebar-item :link="{name: 'Find Places', icon: 'ni ni-square-pin text-orange', path: '/maps'}"/>
        <sidebar-item :link="{name: 'Login', icon: 'ni ni-key-25 text-info', path: '/login'}"/>
        <sidebar-item :link="{name: 'Join Us', icon: 'ni ni-circle-08 text-pink', path: '/register'}"/>
        <sidebar-item :link="{name: 'For Owners', icon: 'ni ni-spaceship text-black', path: '/restaurant_backend'}"/>
        <sidebar-item :link="{name: 'Logout', icon: 'ni ni-user-run text-purple', path: '/register'}"/>

      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <dashboard-navbar></dashboard-navbar>

      <div @click="toggleSidebar">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
        <content-footer v-if="!$route.meta.hideFooter"></content-footer>
      </div>
    </div>
  </div>
</template>
<script>
  import DashboardNavbar from './DashboardNavbar.vue';
  import ContentFooter from './ContentFooter.vue';
  import { FadeTransition } from 'vue2-transitions';

  export default {
    components: {
      DashboardNavbar,
      ContentFooter,
      FadeTransition
    },
    data() {
      return {
        sidebarBackground: 'primary' //vue|blue|orange|green|red|primary
      };
    },
    methods: {
      toggleSidebar() {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false);
        }
      }
    }
  };
</script>
<style lang="scss">
</style>
