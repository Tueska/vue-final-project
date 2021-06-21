<template>
  <div id="navbar">
    <div id="flexbox">
      <div id="search">
        <img src="@/assets/magnifying-glass.svg" />
        <input
          id="searchInput"
          type="text"
          placeholder="Search games..."
          v-model="query"
          @change="search"
        />
      </div>
      <div id="logo">
        <img src="@/assets/controller.svg" @click="scrollToTop" />
      </div>
      <div id="drop">
        <div class="dropdown" @change="checkboxUpdate">
          <button class="dropButton">&emsp;Sort by&ensp;</button>
          <div class="dropdown-content">
            <label>
              <input
                checked="true"
                type="radio"
                value="relevance"
                v-model="sortby"
              /><span>Relevance</span>
            </label>
            <br />
            <label>
              <input type="radio" value="release-date" v-model="sortby" /><span
                >Release date</span
              >
            </label>
            <br />

            <label>
              <input type="radio" value="popularity" v-model="sortby" /><span
                >Popularity</span
              >
            </label>
            <br />

            <label>
              <input type="radio" value="alphabetical" v-model="sortby" /><span
                >Alphabetical</span
              > </label
            ><br />
          </div>
          <img src="@/assets/chevron.svg" />
        </div>

        <div class="dropdown" @change="checkboxUpdate">
          <button class="dropButton">&emsp;Platform&ensp;</button>
          <div class="dropdown-content">
            <label>
              <input
                checked="true"
                type="radio"
                value="all"
                v-model="platform"
              /><span>All</span>
            </label>
            <br />
            <label>
              <input type="radio" value="pc" v-model="platform" /><span
                >PC</span
              > </label
            ><br />
            <label>
              <input type="radio" value="browser" v-model="platform" />
              <span>Browser</span> </label
            ><br />
          </div>
          <img src="@/assets/chevron.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import axios from "axios";
import GameType from "@/interfaces/GameType";

@Options({
  data() {
    return {
      query: "",
      platform: "all",
      sortby: "relevance",
    };
  },
  watch: {
    gameList: function(newList) {
      this.gameList = newList;
      this.$emit("gameListUpdateEvent", newList);
    },
  },
})
export default class Navbar extends Vue {
  gameList: GameType[] | "Error" = [];
  allGames!: GameType[];
  querySortBy!: string;
  queryCategory!: string;
  queryPlatform!: string;

  query!: string;
  platform!: string;
  sortby!: string;

  beforeCreate(): void {
    axios({
      method: "GET",
      url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
      headers: {
        "x-rapidapi-key": "d19335f5f2mshd18d3d2f7703cebp124fe3jsn36f8a0db2672",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
      params: {
        "sort-by": this.querySortBy,
        platform: this.queryPlatform,
      },
    })
      .then((res) => {
        this.allGames = res.data;
        this.gameList = res.data;
      })
      .catch(() => {
        this.gameList = "Error";
      });
  }

  sendRequest(): void {
    axios({
      method: "GET",
      url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
      headers: {
        "x-rapidapi-key": "d19335f5f2mshd18d3d2f7703cebp124fe3jsn36f8a0db2672",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
      params: {
        "sort-by": this.querySortBy,
        platform: this.queryPlatform,
      },
    })
      .then((res) => {
        this.allGames = res.data;
        this.gameList = res.data;
      })
      .catch(() => {
        this.gameList = "Error";
      });
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }

  search(): void {
    this.filterList(this.query);
  }

  checkboxUpdate(): void {
    this.querySortBy = this.sortby;
    this.queryPlatform = this.platform;
    this.sendRequest();
  }

  filterList(query: string): void {
    var temp = this.allGames as GameType[];
    var filteredList = temp.filter((element: GameType) => {
      return element.title.toLowerCase().match(query.toLowerCase());
    });

    this.gameList = filteredList;
  }
}
</script>

<style scoped>
* {
  transition: 0.5s ease;
}
#navbar {
  position: fixed;
  z-index: 50;
  width: 100%;
  background-color: #000000c0;
  backdrop-filter: blur(10px);
  -webkit-box-shadow: 0px 10px 5px 0px #222222e7;
  -moz-box-shadow: 0px 10px 5px 0px #222222bf;
  box-shadow: 0px 10px 5px 0px #222222bf;
  padding: 1em;
  top: 0;
  left: 0;
}
/* Searchbox links */
input[type="text"] {
  background: none;
  width: 50%;
  color: white;
  font-size: 1em;
  border: none;
  border-bottom: white 1px solid;
}

input[type="text"]::placeholder {
  color: lightgray;
  font-style: italic;
}

input[type="text"]:focus {
  outline: none;
}

#flexbox {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

#search,
#drop {
  width: 30%;
}

/* Lupe */
#search img {
  vertical-align: bottom;
  height: 2.5em;
  margin-right: 0.75em;
  transform: scaleX(-1);
}

/* Logo (Mitte) */
#logo img {
  height: 5em;
  position: fixed;
  transform: translate(-70%, -60%);
}

.dropdown {
  position: relative;
  display: inline-block;
  margin-top: 0.5em;
}
/* Chevrons neben Dropdownmenü */
.dropdown img {
  height: 1.5em;
  vertical-align: bottom;
}

.dropdown-content {
  background-color: #2a413e;
  -webkit-box-shadow: 0px 10px 5px 0px #222222e7;
  -moz-box-shadow: 0px 10px 5px 0px #222222bf;
  box-shadow: 0px 10px 5px 0px #222222bf;
  color: lightgray;
  display: none;
  border-radius: 0.5em;
  position: absolute;
  z-index: 75;
  width: 100%;
  text-align: center;
  padding: 1em;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropButton {
  text-align: right;
  bottom: 0;
  border: none;
  font-size: 1.2em;
  background-color: transparent;
  color: white;
}

.downdown:hover .dropButton {
  background-color: white;
}

input {
  padding: 0.5em;
}
/* Selected Text fett machen / Markieren */
input[type="radio"]:checked ~ span {
  font-weight: bold;
  color: #ffa5a6;
}

input[type="radio"] {
  display: none;
}

@media only screen and (max-width: 875px) {
  #logo {
    display: none;
  }

  #search,
  #drop {
    width: 50%;
  }
}
</style>
