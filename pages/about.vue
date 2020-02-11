<template>
  <div class="about">
    <div class="about__cover"></div>
    <div class="about__content">
      <h2 class="about__content__title">
        {{ $t('about.title') }}
      </h2>
      <div class="about__content__separator">
        <span class="about__content__separator__icon"></span>
      </div>
      <p v-html="$t('about.text')" class="about__content__text"></p>
      <div class="about__content__bottom"></div>
    </div>
  </div>
</template>

<style lang="scss">
.about {
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: auto;

  &__cover {
    width: 100%;
    height: 250px;
    background-image: url('~@/assets/images/inter.jpg');
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
      background-image: url('~@/assets/images/phobos-captain.jpg');
      background-size: cover;
    }
  }
}
</style>
