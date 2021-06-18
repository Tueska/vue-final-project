<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <Game :game="gameList[1]" /> -->
  <p>{{ gameList }}</p>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
