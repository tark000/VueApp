<template lang="pug">
  .modal-wrapper(v-if='show')
    .modal-window
      button.modal-close(@click='closeModal')
      .modal-content
        slot
</template>

<script>
export default {
  name: 'ModalIndex',
  data() {
    return {
      isOpen: false
    }
  },
  props: {
    show: Boolean
  },
  mounted() {
    document.querySelector('body').style.overflow = 'hidden'
    setTimeout(() => {
      this.isOpen = true
    }, 0)
  },
  destroyed() {
    document.querySelector('body').style.removeProperty('overflow')
  },
  methods: {
    closeModal() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
  .modal {
    &-wrapper {
      position: fixed;
      z-index: 1;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background: rgba(24, 32, 57, 0.6);
      backdrop-filter: blur(5px);
    }

    &-window {
      width: 90%;
      top: 5%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

    &-close {
      color: #aaa;
      background: transparent;
      border: 1px solid #ccc;
      box-sizing: border-box;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      position: absolute;
      right: 21px;
      top: 24px;

      &:before, &:after {
        position: absolute;
        left: 13px;
        top: 7px;
        content: ' ';
        height: 15px;
        width: 1px;
        background-color: #ccc;
      }
      &:before {
        transform: rotate(45deg);
      }
      &:after {
        transform: rotate(-45deg);
      }

      &:hover,
      &:focus {
        text-decoration: none;
        cursor: pointer;
        transform: scale(1.05);
      }
    }
  }

</style>
