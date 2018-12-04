<template>
  <div class="friends">
    <h1>Friends Page</h1>

    <v-container>
      <!-- using cards for players. padding of 3 -->
      <v-card flat class="pa-3" v-for="friend in friends" :key="friend.username">
        <v-layout row wrap>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">User Name</div>
            <div>{{friend.username}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Player Name</div>
            <div>{{friend.name}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Players Ranking</div>
            <div>#{{friend.rank}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Hometown</div>
            <div>{{friend.hometown}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Win Rate</div>
            <div>{{friend.winrate}}%</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div>
              <v-chip>{{friend.winrate}}%</v-chip>
            </div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          username: "jer",
          name: "Jerry Chen",
          rank: "1",
          hometown: "Dallas",
          winrate: "67"
        },
        {
          username: "json",
          name: "Jayson Laico",
          rank: "2",
          hometown: "Houston",
          winrate: "73"
        }
      ]
    };
  }
};
</script>
