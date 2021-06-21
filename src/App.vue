<template>
  <Navbar @gameListUpdateEvent="gameListUpdateEvent" />
  <h1 id="errormessage" v-if="this.gameList == 'Error'">
    Error<br />API not reachable
  </h1>
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
import VueScreen from "vue-screen";
import Game from "./components/Game.vue";
import GameInfo from "./components/GameInfo.vue";
import GameType from "@/interfaces/GameType";
import Navbar from "./components/Navbar.vue";
import { GameInfoTypeOrError } from "@/interfaces/GameInfoType";

@Options({
  components: {
    VueScreen,
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

  gameListUpdateEvent(value: GameType[]): void {
    this.gameList = value;
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
@import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");
* {
  font-family: "Rubik", sans-serif;
  scroll-behavior: smooth;
  scrollbar-width: none;
}

*::-webkit-scrollbar {
  display: none;
}

body {
  background-color: #1f302e;
}

#gameInfoBox {
  background-color: #3d3d3d8e;
  backdrop-filter: blur(10px);
  width: 100%;
  height: 100%;
  left: 0px;
  position: fixed;
  z-index: 100;
  float: left;
  overflow: hidden;
  top: 0px !important;
}

#errormessage {
  transform: translateY(100%);
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
  font-family: Raleway, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  color: gainsboro;
}
</style>
