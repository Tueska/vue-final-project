<template>
  <h1>{{ game.title }}</h1>
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

<style scoped></style>
