<template>
  <div id="game">
    <a>
      <img v-bind:src="game.thumbnail" v-bind:alt="game.short_description" />
      <div id="overlay">
        <div class="text">
          <h2 id="image">
            {{ game.title }}
          </h2>
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

#game img {
  border-radius: 1em;
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
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
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.25s ease;
  background-color: #1f302ed7;
  backdrop-filter: blur(5px);
  border-radius: 1em;
}

/* Hover effect */
#game a:hover #overlay {
  cursor: pointer;
  opacity: 1;
}

/* Text im Gameimage (Box selbst) */
#game a .text {
  color: white;
  font-size: 0.9em;
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 1em;
  transform: translateY(10%);
  box-sizing: border-box;
  text-align: center;
}
/* Überschrift */
#image {
  font-size: 1.25em;
}
/* Short description */
#description {
  font-size: 0.9em;
}
/* Genre "Pill" */
#genre {
  background-color: #ffa5a6;
  color: #1f302e;
  font-weight: bold;
  margin: 0;
  padding: 0.5em;
  border-radius: 1em;
  display: inline-block;
  -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);
}
</style>
