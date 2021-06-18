<template>
  <div id="game">
    <h1>{{ this.gameInfo.title }}</h1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { PropType } from "node_modules/vue/dist/vue";
import GameInfoType from "@/interfaces/GameInfoType";

@Options({
  props: {
    gameInfo: Object as PropType<GameInfoType>,
  },
})
export default class GameInfo extends Vue {
  gameInfo!: GameInfoType;
}
</script>

<style scoped></style>
