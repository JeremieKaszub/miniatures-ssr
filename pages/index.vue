<template>
  <div class="home">
    <div class="home__cover"></div>
    <div class="home__content">
      <h2 class="home__content__title">
        {{ $t('home.title') }}
      </h2>
      <div class="home__content__separator">
        <span class="home__content__separator__icon"></span>
      </div>
      <p class="home__content__text">
        {{ $t('home.text') }}
      </p>
      <div class="home__content__bottom"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',

  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  }
}
</script>

<style lang="scss">
.home {
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: auto;

  &__cover {
    width: 100%;
    height: 250px;
    background-image: url('~@/assets/images/csm-cover.jpg');
    background-size: cover;
    background-position: center;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: $gutter-size-small;

    @media (min-width: $sm) {
      padding: $gutter-size-large;
    }

    &__title {
      font-family: 'Cormorant';
      text-align: center;
    }

    &__separator {
      display: flex;
      justify-content: center;
      align-items: center;

      &__icon {
        @include separator;

        display: block;
        text-align: center;
      }
    }

    &__text {
      margin: 0;
      padding: $gutter-size-small;
      text-align: justify;

      @media (min-width: $sm) {
        padding: $gutter-size-large;
      }
    }

    &__bottom {
      height: 200px;
      width: 200px;
      border-radius: 100%;
      background-image: url('~@/assets/images/lord-of-destruction.jpg');
      background-size: cover;
    }
  }
}
</style>
