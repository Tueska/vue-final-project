<template>
  <div id="gameInfo" v-if="gameInfo != 'Error'">
    <table>
      <td>
        <img
          v-bind:src="this.gameInfo.thumbnail"
          v-bind:alt="this.gameInfo.title + ' Thumbnail'"
        /><br />
        <h1>{{ this.gameInfo.title }}</h1>
        <a v-bind:href="gameInfo.game_url" target="_blank" class="button"
          >Play Game</a
        >
        <br /><br />
        <p>
          Genre: {{ this.gameInfo.genre }} | Platform:
          {{ this.gameInfo.platform }}
        </p>
        <p>Release Date: {{ this.gameInfo.release_date }}</p>
        <p>Developer: {{ this.gameInfo.developer }}</p>
        <p>Publisher: {{ this.gameInfo.publisher }}</p>
      </td>
      <td>
        <h2>Description</h2>
        <p>{{ this.gameInfo.description }}</p>
      </td>
    </table>
    <div class="images">
      <div class="image" v-for="img in this.gameInfo.screenshots" :key="img">
        <img v-bind:src="img.image" @click="toggleEnlargement(img.id)" />
      </div>
    </div>
    <div v-bind:class="{ hideImageOverlay: !imageVisible }">
      <img class="imageLarge" v-bind:src="this.gameInfo.screenshots[0].image" />
    </div>
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
      this.imageVisible = false;
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
  imageVisible = false;
  imageID = 0;

  toggleEnlargement(img: number): void {
    this.imageID = img;
    this.imageVisible = !this.imageVisible;
  }
}
</script>

<style>
#gameInfo {
  text-align: left;
  background: #000000ec;
  width: 40%;
  height: 80%;
  padding: 2em;
  overflow-y: auto;
  overflow-x: hidden;
  transform: translate(62.5%, 7.5%);
}

.images {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  column-gap: 1em;
}

.images .image img {
  height: 150px;
}

.imageLarge {
  position: fixed;
  top: 0;
  left: 0;
  float: left;
  width: 100%;
  height: 100% / 5;
  z-index: 1000;
  overflow: hidden;
}

.hideImageOverlay {
  display: none;
}

.button {
  font: bold 1em Arial;
  text-decoration: none;
  background-color: #1f302e;
  color: #ffa5a6;
  padding: 1em 2em;
  border-radius: 25px;
}

.button:hover {
  background-color: #ffa5a6;
  color: #1f302e;
}

td {
  padding: 1em !important;
  vertical-align: top;
}

td h2 {
  margin: 0;
}
</style>
