<template>
  <div class="pricing">
    <div class="pricing__cover"></div>
    <div class="pricing__content">
      <h2 class="pricing__content__title">
        {{ $t('pricing.title') }}
      </h2>
      <div class="pricing__content__separator">
        <span class="pricing__content__separator__icon"></span>
      </div>
      <p v-html="$t('pricing.text')" class="pricing__content__text"></p>

      <div class="princing__content__section">
        <h3 class="pricing__content__section__title">
          {{ $t('pricing.hords.title') }}
        </h3>
        <div class="pricing__content__section__separator">
          <span class="pricing__content__section__separator__icon"></span>
        </div>
        <img
          src="~/assets/images/tzaangors.jpg"
          class="pricing__content__section__image"
        />
        <p
          v-html="$t('pricing.hords.text')"
          class="pricing__content__section__text"
        ></p>
      </div>
      <div class="princing__content__section">
        <h3 class="pricing__content__section__title">
          {{ $t('pricing.squads.title') }}
        </h3>
        <div class="pricing__content__section__separator">
          <span class="pricing__content__section__separator__icon"></span>
        </div>
        <img
          src="~/assets/images/inter.jpg"
          class="pricing__content__section__image"
        />
        <p
          v-html="$t('pricing.squads.text')"
          class="pricing__content__section__text"
        ></p>
      </div>
      <div class="princing__content__section">
        <h3 class="pricing__content__section__title">
          {{ $t('pricing.elits.title') }}
        </h3>
        <div class="pricing__content__section__separator">
          <span class="pricing__content__section__separator__icon"></span>
        </div>
        <img
          src="~/assets/images/csm-cover.jpg"
          class="pricing__content__section__image"
        />
        <p
          v-html="$t('pricing.elits.text')"
          class="pricing__content__section__text"
        ></p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.pricing {
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: auto;

  &__cover {
    width: 100%;
    height: 250px;
    background-image: url('~@/assets/images/vet.jpg');
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

    &__section {
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

      &__image {
        margin-top: $gutter-size-small;
        width: 100%;

        @media (min-width: $sm) {
          margin-top: $gutter-size-large;
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
    }

    &__bottom {
      height: 200px;
      width: 200px;
      border-radius: 100%;
      background-image: url('~@/assets/images/knight.jpg');
      background-size: cover;
    }
  }
}
</style>
