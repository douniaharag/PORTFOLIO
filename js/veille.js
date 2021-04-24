Vue.component('vue-gallery', {
  props: ['photos'],
  data: function () {
    return {
      activePhoto: null
    }
  },
  template: `
    <div class="vueGallery">
    <div class="activePhoto" :style="'background-image: url('+photos[activePhoto]+');'">
      <button type="button" aria-label="Previous Photo" class="previous" @click="previousPhoto()">
        <i class="fas fa-chevron-circle-left"></i>
      </button>
      <button type="button" aria-label="Next Photo" class="next" @click="nextPhoto()">
        <i class="fas fa-chevron-circle-right"></i>
      </button>
    </div>
    <div class="thumbnails">
      <div
           v-for="(photo, index) in photos"
           :src="photo"
           :key="index"
           @click="activePhoto = index"
           :class="{'active': activePhoto == index}" :style="'background-image: url('+photo+')'">
      </div>
    </div>
  </div>`,
  mounted () {
    this.activePhoto = 0
    document.addEventListener("keydown", (event) => {
      if (event.which == 37)
        this.previousPhoto()
      if (event.which == 39)
        this.nextPhoto()
    })
  },
  methods: {
    nextPhoto () {
      this.activePhoto = ( this.activePhoto+1 < this.photos.length ? this.activePhoto+1 : 0 )
    },
    previousPhoto () {
      this.activePhoto = ( this.activePhoto-1 >= 0 ? this.activePhoto-1 : this.photos.length-1 )
    }
  }
})

new Vue({
  el: '#app',
  data: {
    images: [

      { id: 1, imgSrc: require("../img/resanet1.png") },
      { id: 2, imgSrc: require("../img/resanet2.png") },
      { id: 3, imgSrc: require("../img/resanet3.png") },
      { id: 4, imgSrc: require("../img/resanet4.png") },
      { id: 5, imgSrc: require("../img/resanet1.png") },
      { id: 5, imgSrc: require("../img/resanet1.png") }

 
    ]
  }
});