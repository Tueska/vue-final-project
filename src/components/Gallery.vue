<template>
  <div class="images" v-if="this.screenshots.length > 0">
    <div
      class="image"
      v-for="(img, index) in this.screenshots"
      :key="img"
      :class="{ imageHighlight: index == 0 }"
    >
      <img v-bind:src="img.image" @click="selectImage(index)" />
    </div>
  </div>
  <img
    v-if="this.screenshots.length > 0"
    id="imageLarge"
    v-bind:src="this.screenshots[this.imageID].image"
    onerror="this."
  />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Screenshot } from "@/interfaces/GameInfoType";
import { PropType } from "vue";

@Options({
  props: {
    screenshots: Object as PropType<Screenshot>,
  },
})
export default class Gallery extends Vue {
  screenshots!: Screenshot[];
  imageID = 0;

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
}
</script>

<style>
img {
  transition: 0.5s ease;
  border-radius: 1em;
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

@media only screen and (max-width: 1500px) {
  #imageLarge {
    width: 95%;
    transform: translateX(2.5%);
    margin-bottom: 1em;
  }
}

@media only screen and (max-width: 835px) {
  .image {
    width: 100%;
  }

  .imageHighlight img,
  .images .image img:hover {
    border: none;
    box-sizing: border-box;
  }

  #imageLarge {
    display: none;
  }
}
</style>
