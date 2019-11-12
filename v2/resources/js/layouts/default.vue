<template>
  <div class="wrapper">
    <navbar />
    <sidebar />
    <child />
    <footer />
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