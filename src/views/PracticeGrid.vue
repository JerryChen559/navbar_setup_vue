<template>
  <div class="practicegrid">
    <h1>Page to practice Grid in Vuetify</h1>

    <v-container fluid class="my-5">
      <!-- vuetify uses the flexbox grid system. work with widths of 12 -->
      <!-- easy-to-make, responsive layout -->
      <!-- v-layout, v-flex -->
      <v-layout row wrap>
        <v-flex xs12 md6>
          <v-btn outline block class="success">1</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn outline block class="success">2</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn outline block class="success">2</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn outline block class="success">2</v-btn>
        </v-flex>
      </v-layout>

      <v-layout row wrap justify-space-around>
        <v-flex xs4 md3>
          <v-btn outline block class="primary">3</v-btn>
        </v-flex>
        <v-flex xs4 md3>
          <v-btn outline block class="primary">4</v-btn>
        </v-flex>
      </v-layout>

      <v-layout colomn>
        <v-flex>
          <v-btn class="success"></v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>



<script>
export default {};
</script>