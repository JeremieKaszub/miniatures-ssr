<template>
  <div class="header">
    <div class="header__ldecoration"></div>
    <div class="header__left"></div>
    <h1 class="header__label">
      <p class="header__label__title">
        Jérémie Kaszub Miniatures
      </p>
      <span class="header__label__separator">
        <span class="header__label__separator__left"></span>
        <span class="header__label__separator__center"></span>
        <span class="header__label__separator__right"></span>
      </span>
      <p class="header__label__subtitle">
        {{ $t('header.subtitle') }}
      </p>
    </h1>
    <div class="header__right"></div>
    <div class="header__rdecoration"></div>
  </div>
</template>

<style lang="scss">
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  background: $white;
  padding: $gutter-size-small;
  box-shadow: 0 2px 10px 0 rgba($mine-shaft, 0.75);

  @media (min-width: $sm) {
    padding: $gutter-size-small 0;
  }

  &__ldecoration,
  &__rdecoration {
    position: relative;
    display: none;
    margin: 0 $gutter-size-large;
    width: $gutter-size-large;
    height: $gutter-size-large;
    border: 2px solid $mine-shaft;
    transform: rotate(45deg);

    @media (min-width: $sm) {
      display: block;
    }

    &:before {
      position: absolute;
      border: 2px solid $mine-shaft;
      width: $gutter-size-small;
      height: $gutter-size-small;
      content: '';
    }
  }

  &__ldecoration {
    &:before {
      top: 14px;
      right: 14px;
    }
  }

  &__rdecoration {
    &:before {
      top: -10px;
      left: 14px;
    }
  }

  &__label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    font-family: 'Cormorant';
    line-height: 2.25rem;

    &__title {
      margin: 0;
      text-align: center;
      font-size: 1.25rem;
      font-weight: 700;

      @media (min-width: $sm) {
        margin: 0 $gutter-size-large;
        font-size: 2.5rem;
      }
    }

    &__separator {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      margin: $gutter-size-large / 2 0;

      @media (min-width: $sm) {
        width: calc(100% - #{$gutter-size-large} * 2);
      }

      &__left,
      &__right {
        flex: 1;
        height: 1px;
        background-color: $black;
      }

      &__center {
        @include separator;

        margin: 0 $gutter-size-large / 2;
      }
    }

    &__subtitle {
      margin: 0;
      text-align: center;
      font-size: 1rem;
      font-weight: 600;

      @media (min-width: $sm) {
        font-size: 1.5rem;
      }
    }
  }

  &__left,
  &__right {
    display: none;
    width: calc(#{$gutter-size-large} * 2 + 2px);
    height: calc(#{$gutter-size-large} * 2 + 2px);
    border-radius: 100%;
    background-size: contain;

    @media (min-width: $sm) {
      display: inline-block;
    }

    @media (min-width: $md) {
      width: calc(#{$gutter-size-large} * 3 + 2px);
      height: calc(#{$gutter-size-large} * 3 + 2px);
    }
  }

  &__left {
    background-image: url('~@/assets/images/chaos-sm.jpg');
  }

  &__right {
    background-image: url('~@/assets/images/admech.jpg');
  }
}
</style>
