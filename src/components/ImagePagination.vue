<template lang="pug">
  .images__pagination
    .images__pagination-item(v-for="index in pageCount" :key="index" @click="$emit('getImages', index)" :class="{'active': currentPage === index}") {{index}}
</template>

<script>
export default {
  name: 'ImagePagination',
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    pageCount: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .images__pagination {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 30px;

    &-item {
      padding: 5px;
      background: #bbb;
      margin: 5px;

      &.active {
        background: #999;
      }

      cursor: pointer;

      &:hover {
        opacity: 0.75;
      }
    }
  }
</style>