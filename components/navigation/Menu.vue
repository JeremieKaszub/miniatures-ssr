<template>
  <div class="menu">
    <div class="menu__lang">
      <button
        :ref="lang"
        v-for="lang in $i18n.availableLocales"
        :key="lang"
        class="menu__lang__button"
        @click="changeLocale(lang)"
        :disabled="lang === $i18n.locale ? true : false"
      >
        {{ lang }}
      </button>
    </div>
    <nav class="menu__nav" id="nav">
      <div class="menu__nav__item">
        <transition name="fade">
          <span
            v-if="$route.name === 'index'"
            class="menu__nav__item__ldecoration"
          >
          </span>
        </transition>
        <nuxt-link
          :class="$route.name === 'index' ? 'active' : ''"
          class="menu__nav__item__link"
          to="/"
        >
          {{ $t('home.link') }}
        </nuxt-link>
        <transition name="fade">
          <span
            v-if="$route.name === 'index'"
            class="menu__nav__item__rdecoration"
          ></span>
        </transition>
      </div>

      <div class="menu__nav__item">
        <transition name="fade"
          ><span
            v-if="$route.name === 'about'"
            class="menu__nav__item__ldecoration"
          >
          </span
        ></transition>
        <nuxt-link
          :class="$route.name === 'about' ? 'active' : ''"
          class="menu__nav__item__link"
          to="/about"
          >{{ $t('about.link') }}</nuxt-link
        >

        <transition name="fade"
          ><span
            v-if="$route.name === 'about'"
            class="menu__nav__item__rdecoration"
          ></span
        ></transition>
      </div>

      <div class="menu__nav__item">
        <transition name="fade"
          ><span
            v-if="$route.name === 'pricing'"
            class="menu__nav__item__ldecoration"
          >
          </span
        ></transition>
        <nuxt-link
          :class="$route.name === 'pricing' ? 'active' : ''"
          class="menu__nav__item__link"
          to="/pricing"
          >{{ $t('pricing.link') }}</nuxt-link
        >

        <transition name="fade"
          ><span
            v-if="$route.name === 'pricing'"
            class="menu__nav__item__rdecoration"
          ></span
        ></transition>
      </div>

      <div class="menu__nav__item">
        <transition name="fade"
          ><span
            v-if="$route.name === 'gallery'"
            class="menu__nav__item__ldecoration"
          >
          </span
        ></transition>
        <nuxt-link
          :class="$route.name === 'gallery' ? 'active' : ''"
          class="menu__nav__item__link"
          to="/gallery"
          >{{ $t('gallery.link') }}</nuxt-link
        >

        <transition name="fade"
          ><span
            v-if="$route.name === 'gallery'"
            class="menu__nav__item__rdecoration"
          ></span
        ></transition>
      </div>

      <div class="menu__nav__item">
        <transition name="fade"
          ><span
            v-if="$route.name === 'contact'"
            class="menu__nav__item__ldecoration"
          >
          </span
        ></transition>
        <nuxt-link
          :class="$route.name === 'contact' ? 'active' : ''"
          class="menu__nav__item__link"
          to="/contact"
          >{{ $t('contact.link') }}</nuxt-link
        >

        <transition name="fade"
          ><span
            v-if="$route.name === 'contact'"
            class="menu__nav__item__rdecoration"
          ></span
        ></transition>
      </div>

      <div class="menu__nav__item">
        <transition name="fade"
          ><span
            v-if="$route.name === 'blog'"
            class="menu__nav__item__ldecoration"
          >
          </span
        ></transition>
        <nuxt-link
          :class="$route.name === 'blog' ? 'active' : ''"
          class="menu__nav__item__link"
          to="/blog"
          >{{ $t('blog.link') }}</nuxt-link
        >

        <transition name="fade"
          ><span
            v-if="$route.name === 'blog'"
            class="menu__nav__item__rdecoration"
          ></span
        ></transition>
      </div>
    </nav>
    <div class="menu__separator"></div>
    <div class="menu__social">
      <a class="menu__social__link">
        <em class="icomoon">facebook</em>
      </a>
      <a class="menu__social__link">
        <em class="icomoon">instagram</em>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',

  methods: {
    changeLocale(lang) {
      this.$i18n.locale = lang
    }
  },
  mounted() {
    console.log(this.$route)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: $mine-shaft;
  height: calc(100% - #{$gutter-size-small} * 2);
  padding: $gutter-size-small;
  font-family: 'Cormorant';

  @media (min-width: $sm) {
    padding: $gutter-size-large;
    height: calc(100% - #{$gutter-size-large} * 2);
  }

  &__lang {
    text-align: center;

    &__button {
      text-transform: uppercase;
      border: 0;
      background: none;
      color: $white;
      font-size: 0.875rem;
      font-weight: 300;

      &:hover {
        cursor: pointer;
      }

      &:disabled {
        opacity: 0.5;
      }
    }
  }

  &__nav {
    display: flex;
    flex-direction: column;
    margin-top: $gutter-size-large;

    &__item {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin: $gutter-size-large / 2 0;

      &__link {
        color: $white;
        font-size: 1.25rem;
        text-decoration: none;
        background-color: $mine-shaft;
        z-index: 2;

        &:not(.active) {
          &:before,
          &:after {
            width: 0;
            transition: width 0.32s;
            content: '';
          }

          &:hover {
            &:before,
            &:after {
              flex: 1;
              position: absolute;
              top: 0;
              bottom: 0;
              margin: auto;
              display: block;
              background-color: $white;
              height: 1px;
              width: 50px;
              content: '';
              z-index: 1;
            }

            &:before {
              left: 0;
            }

            &:after {
              right: 0;
            }
          }
        }
      }

      &__ldecoration,
      &__rdecoration {
        position: relative;
        margin: 0 $gutter-size-large / 2;
        width: $gutter-size-large / 2;
        height: $gutter-size-large / 2;
        border: 1px solid $white;
        transform: rotate(45deg);

        &:before {
          position: absolute;
          border: 1px solid $white;
          width: $gutter-size-small / 2;
          height: $gutter-size-small / 2;
          content: '';
        }
      }

      &__ldecoration {
        &:before {
          top: 7px;
          right: 7px;
        }
      }

      &__rdecoration {
        &:before {
          top: -5px;
          left: 7px;
        }
      }
    }
  }

  &__separator {
    @include separator;

    margin: $gutter-size-large/2 0 $gutter-size-large;
    border-color: $white;

    &:before,
    &:after {
      border-color: $white;
    }
  }

  &__social {
    display: flex;

    &__link {
      display: block;
      margin: 0 $gutter-size-large/2;
      color: $white;
      font-size: 32px;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
</style>
