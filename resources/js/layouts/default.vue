<template>
  <div class="wrapper">
    <sidebar />
    <div class="main-panel" data="green">
      <navbar />
      <!-- Content -->
      <div class="content">
        <router-view></router-view>
      </div>
      <footer />
    </div>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar";
import Sidebar from "~/components/Sidebar";
import Footer from "~/components/Footer";

export default {
  name: 'MainLayout',

  components: {
    Navbar,
    Sidebar,
    Footer
  }
};
</script>

<style>
</style>