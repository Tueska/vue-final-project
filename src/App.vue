<template>
  <div class="grid">
    <p v-for="game in gameList" :key="game.id">
      <Game :game="game" />
    </p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import axios from "axios";
import Game from "./components/Game.vue";
import GameType from "@/interfaces/GameType";

@Options({
  components: {
    Game,
  },
})
export default class App extends Vue {
  gameList: GameType[] | "Error" = [];
  gameID = 0;

  created(): void {
    axios({
      method: "GET",
      url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
      headers: {
        "x-rapidapi-key": "d19335f5f2mshd18d3d2f7703cebp124fe3jsn36f8a0db2672",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    })
      .then((res) => {
        this.gameList = res.data;
      })
      .catch(() => {
        this.gameList = "Error";
      });

    console.log(this.gameList);
  }

  get article(): GameType | "Error" {
    return this.gameList != "Error" ? this.gameList[this.gameID] : "Error";
  }
}
</script>

<style>
body {
  background-color: #1f302e;
}

.grid {
  display: inline-grid;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  color: #ffa5a6;
}
</style>
