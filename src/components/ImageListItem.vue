<template lang="pug">
  .images_list-item(@click="$emit('openImage', image.id)")
    img(:src="image.cropped_picture")
</template>

<script>
export default {
  name: 'ImageListItem',
  props: {
    image: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.images_list-item {
  cursor: pointer;
  transition: height 10000s;

  &:hover {
    opacity: 0.75;
  }

  img {
    max-width: 100%;
  }
}
</style>