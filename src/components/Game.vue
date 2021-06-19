<template>
  <div id="game">
    <a>
      <img v-bind:src="game.thumbnail" v-bind:alt="game.short_description" />
      <div id="overlay">
        <div class="text">
          <h2 id="image">{{ game.title }}</h2>
          <p id="description">{{ game.short_description }}</p>
          <p id="genre">{{ game.genre }}</p>
        </div>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import GameType from "@/interfaces/GameType";
import { PropType } from "node_modules/vue/dist/vue";

@Options({
  props: {
    game: Object as PropType<GameType>,
  },
})
export default class Game extends Vue {
  game!: GameType;
}
</script>

<style scoped>
#game {
  width: 365px;
  height: 200px;
  display: inline-block;
}
#game a {
  display: inline-block;
  position: relative;
  width: 365px;
  height: 206px;
}
#game a #image {
  display: block;
  width: 100%;
  height: auto;
}
#game a #overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: #1f302ed7;
}
#game a:hover #overlay {
  cursor: pointer;
  opacity: 1;
}
#game a .text {
  color: white;
  font-size: 1em;
  position: absolute;
  margin: 1em;
  /* top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%); */
  text-align: center;
}
</style>
