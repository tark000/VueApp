<template lang="pug">
  section.images
    .images__list(v-if="images.length")
      ImageListItem(v-for="image in images" :image='image' :key="image.id" @openImage="openImage")
    ImagePagination(:currentPage="currentPage" :pageCount="pageCount" @getImages="getImages")
    Popup(:show="showPopup" @close="showPopup = false" v-if="showPopup")
      .images__curent-image
        .images__curent-image-wrapper
          img(:src="currentImage.cropped_picture")
          .images__curent-image-info
            h3 Author {{currentImage.author}}
            p Camera {{currentImage.camera}}
            p {{currentImage.tags}}


</template>

<script>

import { getToken } from '@/util/getToken.js'
import imagesApi from '@/api/imagesApi.js'
import ImageListItem from '@/components/ImageListItem'
import ImagePagination from '@/components/ImagePagination'
import Popup from '@/components/PopupComponent'

export default {
  name: 'ImagesSection',
  data() {
    return {
      images: [],
      pageCount: 0,
      currentPage: 0,
      showPopup: false,
      currentImage: null
    }
  },
  components: {
    ImageListItem,
    ImagePagination,
    Popup
  },
  mounted() {
    this.isLogin()
  },
  methods: {
    isLogin() {
      const token = localStorage.getItem('user-token')
      if (!token) {
        getToken().then(() => {
          this.getImages()
        })
      } else {
        this.getImages()
      }
    },
    getImages(page) {
      const urlParams = page ? `?page=${page}` : ''
      imagesApi.index(urlParams).then(data => {
        this.images = data.data.pictures
        this.pageCount = data.data.pageCount
        this.currentPage = data.data.page
      }, error => {
        if(error.response.status === '401') {
          getToken()
        }
        console.log('API error: ', error.response.data.status)
      })
    },
    openImage(id) {
      imagesApi.get(id).then(data => {
        this.currentImage = data.data
        this.showPopup = true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .images {
    &__list {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      row-gap: 20px;
      column-gap: 20px;
      margin-bottom: 30px;
      @media screen and (max-width: 1028px) {
        grid-template-columns: 1fr 1fr 1fr;
      }

      @media screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
      }
    }

    &__curent-image {
      text-align: center;

      img {
        height: 90vh;
      }

      &-info {
        position: absolute;
        bottom: 0;
        width: 100%;
        background: rgba(125, 125, 125, 0.3);
        color: #fff;
        text-align: center;
        left: 50%;
        transform: translateX(-50%);
      }

      &-wrapper {
        display: inline-block;
        position: relative;
      }
    }
  }
</style>
