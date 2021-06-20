<template>
  <Navbar v-model="gameList" />
  <div
    v-bind:class="{ hideInfoBox: !infoBoxVisible }"
    id="gameInfoBox"
    @click="toggleInfobox()"
  >
    <GameInfo :game="this.gameID" v-on:click.stop />
  </div>
  <div class="grid" v-if="gameList != 'Error'">
    <div v-for="game in gameList" :key="game.id">
      <Game class="grid-item" :game="game" @click="getGameInfo(game.id)" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import axios from "axios";
import Game from "./components/Game.vue";
import GameInfo from "./components/GameInfo.vue";
import GameType from "@/interfaces/GameType";
import Navbar from "./components/Navbar.vue";
import { GameInfoTypeOrError } from "@/interfaces/GameInfoType";

@Options({
  components: {
    Game,
    GameInfo,
    Navbar,
  },
})
export default class App extends Vue {
  gameList: GameType[] | "Error" = [];
  filteredList!: GameType[];
  gameInfo: GameInfoTypeOrError = "Error";
  infoBoxVisible = false;
  gameID = 0;

  beforeCreate(): void {
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
        this.filterList("League");
      })
      .catch(() => {
        this.gameList = "Error";
      });
  }

  filterList(query: string): void {
    console.log(query);
    for (let i = 0; i < this.gameList.length; i++) {
      console.log(this.gameList[i]);
    }
  }

  toggleInfobox(): void {
    this.infoBoxVisible = !this.infoBoxVisible;
  }

  getGameInfo(game: number): void {
    this.gameID = game;
    this.toggleInfobox();
  }
}
</script>

<style>
*::-webkit-scrollbar {
  display: none;
}

* {
  scroll-behavior: smooth;
}

body {
  background-color: #1f302e;
}

#gameInfoBox {
  background-color: #0000008e;
  backdrop-filter: blur(10px);
  width: 100%;
  height: 100%;
  left: 0px;
  padding: 1em;
  position: fixed;
  z-index: 100;
  float: left;
  overflow: hidden;
  top: 0px !important;
}

.hideInfoBox {
  display: none;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(365px, 1fr));
  margin-top: 6em;
  grid-auto-flow: row;
  column-gap: 1em;
  row-gap: 2em;
  padding: 1em;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  color: gainsboro;
}
</style>
