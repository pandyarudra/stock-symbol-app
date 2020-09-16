<template>
  <nav>
    <div class="nav-wrapper">
      <div class="left app-title">
        <a v-show="isAuthenticated" href="#" class="sidenav-trigger col s3" data-target="mobile-nav">
          <i class="material-icons">menu</i>
        </a>
        <a href="#" class="brand-logo col s9">
           <router-link to="/welcome"> MCAP Stock Trading </router-link>
        </a>
      </div>

      <ul v-show="isAuthenticated" id="nav-mobile" class="right hide-on-med-and-down ">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/stockHistory">Stock History</router-link></li>
        <li><router-link to="/author">Author</router-link></li>
        <li><a v-on:click="logoutUser">Admin, Logout</a></li>
      </ul>

      <ul v-show="isAuthenticated" id="mobile-nav" class="sidenav">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/stockHistory">Stock History</router-link></li>
        <li><router-link to="/author">Author</router-link></li>
        <li><a  v-on:click="logoutUser">Admin, Logout</a></li>
      </ul>

    </div>
  </nav>
</template>

<script src="./top-nav-component.js"></script>

<style lang="scss">
    @import './top-nav-component.scss';
</style>