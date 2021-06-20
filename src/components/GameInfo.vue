<template>
  <div id="gameInfo" v-if="gameInfo != 'Error'">
    <table>
      <td>
        <img
          v-bind:src="this.gameInfo.thumbnail"
          v-bind:alt="this.gameInfo.title + ' Thumbnail'"
        /><br />
        <h1>{{ this.gameInfo.title }}</h1>
        <br />
        <a v-bind:href="gameInfo.game_url" target="_blank" class="button"
          >Play Game</a
        ><br /><br /><br />
        <p><b class="rose">Platform:</b> <br />{{ this.gameInfo.platform }}</p>
        <p><b class="rose">Genre:</b> <br />{{ this.gameInfo.genre }}</p>
        <p>
          <b class="rose">Release Date:</b> <br />{{
            this.gameInfo.release_date
          }}
        </p>
        <p>
          <b class="rose">Developer:</b> <br />{{ this.gameInfo.developer }}
        </p>
        <p>
          <b class="rose">Publisher:</b> <br />{{ this.gameInfo.publisher }}
        </p>
      </td>
      <td>
        <h2 class="rose">Description</h2>
        <p>{{ this.gameInfo.description }}</p>
        <h2 class="rose">Minimum System requirements:</h2>
        <br />
        <table
          v-if="
            gameInfo.platform.toLowerCase() != 'web browser' ||
              gameInfo.minimum_system_requirements != null
          "
        >
          <tr class="rose">
            <td>OS:</td>
            <td>Processor:</td>
            <td>Memory:</td>
            <td>Graphics:</td>
            <td>Storage:</td>
          </tr>
          <tr>
            <td>
              {{ gameInfo.minimum_system_requirements.os }}
            </td>
            <td>
              {{ gameInfo.minimum_system_requirements.processor }}
            </td>
            <td>
              {{ gameInfo.minimum_system_requirements.memory }}
            </td>
            <td>
              {{ gameInfo.minimum_system_requirements.graphics }}
            </td>
            <td>
              {{ gameInfo.minimum_system_requirements.storage }}
            </td>
          </tr>
        </table>

        <p v-else>Unknown / Web Browser Game</p>
      </td>
    </table>
    <div class="images" v-if="this.gameInfo.screenshots.length > 0">
      <div
        class="image"
        v-for="(img, index) in this.gameInfo.screenshots"
        :key="img"
        :class="{ imageHighlight: index == 0 }"
      >
        <img v-bind:src="img.image" @click="selectImage(index)" />
      </div>
    </div>
    <img
      v-if="this.gameInfo.screenshots.length > 0"
      id="imageLarge"
      v-bind:src="this.gameInfo.screenshots[this.imageID].image"
    />
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
      this.imageID = 0;
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
          document.getElementById("gameInfo")?.scrollTo(0, 0);
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
  imageID = 0;

  selectImage(img: number): void {
    var images = document.getElementsByClassName("image");
    var i = images.length - 1;
    while (i >= 0) {
      images[i].classList.remove("imageHighlight");
      i--;
    }
    images[img].classList.add("imageHighlight");
    this.imageID = img;
    document.getElementById("imageLarge")?.scrollIntoView();
  }
}
</script>

<style>
img {
  transition: 0.5s ease;
  border-radius: 1em;
}

#gameInfo {
  position: relative;
  transition: 0.5s ease;
  border-radius: 1em;
  text-align: left;
  background: #000000ec;
  width: 50%;
  height: 80%;
  padding: 2em;
  -webkit-box-shadow: 10px 10px 5px 0px #222222bf;
  -moz-box-shadow: 10px 10px 5px 0px #222222bf;
  box-shadow: 10px 10px 5px 0px #222222bf;
  overflow-y: auto;
  overflow-x: hidden;
  transform: translate(50%, 7.5%);
}

.rose {
  color: #ffa5a6;
}

.images {
  justify-content: center;
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 268px);
  column-gap: 1em;
  row-gap: 1em;
}

.images .image img {
  cursor: pointer;
  height: 150px;
}

.imageHighlight img,
.images .image img:hover {
  transition: 0.025s cubic-bezier(1, 1, 1, 1);
  border: 0.25em solid white;
  box-sizing: border-box;
}

#imageLarge {
  width: 100%;
  position: relative;
  margin-top: 1em;
  border-radius: 1em;
}

.hideImageOverlay {
  display: none;
  transition: display 0.5s ease-in;
}

.button {
  transition: 0.5s ease;
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

@media only screen and (max-width: 1671px) {
  #gameInfo {
    width: 95%;
    margin: auto;
    transform: translateY(10%);
  }

  #imageLarge {
    width: 100%;
  }
}

@media only screen and (max-width: 920px) {
  #gameInfo {
    height: 90%;
    width: 100%;
    padding: 0.5em;
  }

  table td img {
    height: 100px;
  }
}
</style>
