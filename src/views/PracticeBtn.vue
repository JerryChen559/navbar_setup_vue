<template>
  <div class="practicebtn">
    <h1>Page to practice buttons</h1>

    <!-- button types -->
    <v-btn class="pink white--text">Click Me</v-btn>
    <v-btn depressed color="pink">Click Me 2</v-btn>
    <v-btn flat color="pink">Click Me 3</v-btn>

    <!-- icons with text. use left to seperate -->
    <v-btn depressed class="pink white--text">
      <v-icon left>email</v-icon>
      <span>Email Me</span>
    </v-btn>

    <!-- small button -->
    <v-btn depressed small class="pink white--text">
      <v-icon small left>email</v-icon>
      <span>Email Me</span>
    </v-btn>

    <!-- large button, icon right -->
    <v-btn depressed large class="pink white--text">
      <span>Email Me</span>
      <v-icon large right>email</v-icon>
    </v-btn>

    <!-- favorite button, heart icon, fab makes it round -->
    <v-btn fab depressed small dark color="purple">
      <v-icon small>favorite</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {};
</script>
