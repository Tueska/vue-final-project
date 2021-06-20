<template>
  <div id="navbar">
    <div id="flexbox">
      <img src="@/assets/magnifying-glass.svg" />
      <input
        id="searchInput"
        type="text"
        placeholder="Search games..."
        v-model="query"
        @change="search"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import axios from "axios";
import GameType from "@/interfaces/GameType";

@Options({
  prop: {
    query: String,
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
  query!: string;

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
        this.allGames = res.data;
        this.gameList = res.data;
      })
      .catch(() => {
        this.gameList = "Error";
      });
  }

  search(): void {
    this.filterList(this.query);
  }

  filterList(query: string): void {
    console.log(query);
    var temp = this.allGames as GameType[];
    var filteredList = temp.filter((element: GameType) => {
      return element.title.toLowerCase().match(query.toLowerCase());
    });

    this.gameList = filteredList;
  }
}
</script>

<style scoped>
#navbar {
  position: fixed;
  z-index: 50;
  width: 100%;
  background-color: #2a413edd;
  backdrop-filter: blur(10px);
  -webkit-box-shadow: 10px 10px 5px 0px #222222e7;
  -moz-box-shadow: 10px 10px 5px 0px #222222bf;
  box-shadow: 10px 10px 5px 0px #222222bf;
  padding: 1em;
  margin: 0;
  top: 0;
  left: 0;
}

input {
  width: 25%;
  background: none;
  color: white;
  font-size: 1em;
  border: none;
  border-bottom: white 1px solid;
  /* transition: width 0.1s ease; */
}

input::placeholder {
  color: lightgray;
}

input:focus {
  outline: none;
}

#flexbox {
  display: flex;
  justify-content: start;
}

#flexbox img {
  height: 2.5em;
  margin-right: 0.75em;
  transform: scaleX(-1);
}

input {
  padding: 0.5em;
}
</style>

function game(game: any, arg1: (GameType: any) => any) { throw new
Error("Function not implemented."); }
