<template>
  <div v-if="gameInfo != 'Error'" class="gameInfo">
    <GameInfo :gameInfo="gameInfo" />
  </div>
  <div class="grid">
    <p v-for="game in gameList" :key="game.id">
      <Game :game="game" @click="getGameInfo(game.id)" />
    </p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import axios from "axios";
import Game from "./components/Game.vue";
import GameInfo from "./components/GameInfo.vue";
import GameType from "@/interfaces/GameType";
import GameInfoType from "@/interfaces/GameInfoType";

@Options({
  components: {
    Game,
    GameInfo,
  },
})
export default class App extends Vue {
  gameList: GameType[] | "Error" = [];
  gameInfo: GameInfoType | "Error" = "Error";

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
  }

  getGameInfo(game: number): void {
    axios({
      method: "GET",
      url: "https://free-to-play-games-database.p.rapidapi.com/api/game",
      headers: {
        "x-rapidapi-key": "d19335f5f2mshd18d3d2f7703cebp124fe3jsn36f8a0db2672",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
      params: { id: game },
    })
      .then((res) => {
        this.gameInfo = res.data;
        console.log(game);
        console.log(this.gameInfo);
      })
      .catch(() => {
        this.gameInfo = "Error";
      });
  }
}
</script>

<style>
body {
  background-color: #1f302e;
}

.gameInfo {
  background-color: black;
  margin: 1em;
  padding: 1em;
  position: absolute;
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
