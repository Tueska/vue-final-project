<template>
  <div id="navbar">
    <div id="flexbox">
      <img src="@/assets/magnifying-glass.svg" />
      <input
        id="searchInput"
        v-model="search"
        type="text"
        placeholder="Search games..."
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { PropType } from "node_modules/vue/dist/vue";
import GameType from "@/interfaces/GameType";

@Options({
  props: {
    gameList: Object as PropType<GameType>,
  },
  computed: {
    filteredGames() {
      return this.gameList.filter((game: GameType) => {
        console.log("hejj");
        var list = game.title.toLowerCase().includes(this.search.toLowerCase());
        console.log(list);
      });
    },
  },
})
export default class Navbar extends Vue {
  gameList!: GameType[];
  search!: string;
}
</script>

<style scoped>
#navbar {
  position: fixed;
  z-index: 5000;
  width: 100%;
  background-color: #3d5c58;
  -webkit-box-shadow: 10px 10px 5px 0px #222222bf;
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
