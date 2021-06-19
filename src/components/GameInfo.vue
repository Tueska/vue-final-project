<template>
  <div id="gameInfo" v-if="gameInfo != 'Error'">
    <h1>{{ this.gameInfo.title }}</h1>
    <p>{{ this.gameInfo.description }}</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import axios from "axios";
import { GameInfoTypeOrError, GameInfoType } from "@/interfaces/GameInfoType";

@Options({
  props: {
    game: Number,
  },
  watch: {
    game: function(newVal) {
      axios({
        method: "GET",
        url: "https://free-to-play-games-database.p.rapidapi.com/api/game",
        headers: {
          "x-rapidapi-key":
            "d19335f5f2mshd18d3d2f7703cebp124fe3jsn36f8a0db2672",
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        },
        params: { id: newVal },
      })
        .then((res) => {
          this.gameInfo = res.data as GameInfoType;
          console.log(this.gameInfo);
        })
        .catch(() => {
          this.gameInfo = "Error";
        });
    },
  },
})
export default class GameInfo extends Vue {
  game = 1;
  gameInfo: GameInfoTypeOrError = "Error";
}
</script>

<style>
#gameInfo {
  text-align: left;
  background: #00000080;
  width: 40%;
  height: 80%;
  padding: 2em;
}
</style>
