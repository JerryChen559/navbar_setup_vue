<template>
  <!-- make the whole app have a light grey background -->
  <v-app class="grey lighten-4">
    <!-- app=stick to top -->
    <!-- <v-toolbar app dark class="indigo">
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>-->
    <Navbar/>
    <!-- styling/margin/padding {property}{direction}-{size} -->
    <v-content class="mx-4 mb-4">
      <!-- <HelloWorld/> -->
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
import Navbar from "@/components/Navbar";

export default {
  name: "App",
  // components: {
  //   HelloWorld
  // },
  components: {
    Navbar
  },
  data() {
    return {
      //
    };
  }
};
</script>
