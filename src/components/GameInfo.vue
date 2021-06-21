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
      <component :is="description">
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
          <tr>
            <td class="rose">Processor:</td>
            <td>{{ gameInfo.minimum_system_requirements.processor }}</td>
          </tr>
          <tr>
            <td class="rose">Memory:</td>
            <td>{{ gameInfo.minimum_system_requirements.memory }}</td>
          </tr>
          <tr>
            <td class="rose">Graphics:</td>
            <td>{{ gameInfo.minimum_system_requirements.graphics }}</td>
          </tr>
          <tr>
            <td class="rose">Storage:</td>
            <td>{{ gameInfo.minimum_system_requirements.storage }}</td>
          </tr>
        </table>

        <p v-else>Unknown / Web Browser Game</p>
      </component>
    </table>
    <Gallery :screenshots="this.gameInfo.screenshots" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import axios from "axios";
import Gallery from "./Gallery.vue";
import { GameInfoTypeOrError, GameInfoType } from "@/interfaces/GameInfoType";

@Options({
  components: {
    Gallery,
  },
  props: {
    game: Number,
  },
  data() {
    return {
      description: "",
    };
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
  description = "td";

  selectImage(img: number): void {
    let images = document.getElementsByClassName("image");
    let i = images.length - 1;
    while (i >= 0) {
      images[i].classList.remove("imageHighlight");
      i--;
    }
    images[img].classList.add("imageHighlight");
    this.imageID = img;
    document.getElementById("imageLarge")?.scrollIntoView();
  }

  // Doch bei Vanilla JS geblieben, die meisten Packages machen dasselbe
  // → Einen Eventlistener erstellen und wieder entfernen vorm löschen
  mounted(): void {
    window.addEventListener("resize", this.onResize);
  }

  beforeDestroy(): void {
    window.removeEventListener("resize", this.onResize);
  }

  onResize(): void {
    console.log(this.$root);
    if (window.innerWidth <= 650) {
      this.description = "tr";
    } else {
      this.description = "td";
    }
  }
}
</script>

<style>
#gameInfo {
  position: relative;
  transition: 0.5s ease;
  border-radius: 1em;
  text-align: left;
  background: #000000ec;
  width: 60%;
  height: 85%;
  padding: 2em;
  -webkit-box-shadow: 10px 10px 5px 0px #222222bf;
  -moz-box-shadow: 10px 10px 5px 0px #222222bf;
  box-shadow: 10px 10px 5px 0px #222222bf;
  overflow-y: auto;
  overflow-x: hidden;
  transform: translate(30%, 5%);
}

.rose {
  color: #ffa5a6;
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

@media only screen and (max-width: 1500px) {
  #gameInfo {
    width: 90%;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    margin: 0;
    padding: 0;
    transform: translate(5%, 10%);
  }
}

@media only screen and (max-width: 920px) {
  #gameInfo {
    height: 90%;
    transform: translateY(5%);
    width: 100%;
    border-radius: 0;
    padding: 0.5em;
  }

  table td img {
    height: 100px;
  }
}

@media only screen and (max-width: 650px) {
  #gameInfo {
    text-align: center;

    box-sizing: border-box;
  }
  table td img {
    height: 175px;
  }
}
</style>
