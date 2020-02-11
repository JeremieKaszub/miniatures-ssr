<template>
  <div :class="expanded ? 'expanded' : ''" class="menu">
    <button @click="openMenu" class="menu__open">
      <i class="menu__open__line"></i>
      <i class="menu__open__line middle"></i>
      <i class="menu__open__line"></i>
    </button>
    <button @click="closeMenu" class="menu__close">
      <i class="menu__close__line"></i>
    </button>
    <div class="menu__lang">
      <button
        :ref="lang"
        v-for="lang in $i18n.availableLocales"
        :key="lang"
        @click="changeLocale(lang)"
        :disabled="lang === $i18n.locale ? true : false"
        class="menu__lang__button"
      >
        {{ lang }}
      </button>
    </div>
    <nav id="nav" class="menu__nav">
      <div class="menu__nav__item">
        <transition name="fade">
          <span
            v-if="$route.name === 'index'"
            class="menu__nav__item__ldecoration"
          >
          </span>
        </transition>
        <nuxt-link
          @click.native="closeMenu"
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
          @click.native="closeMenu"
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
          @click.native="closeMenu"
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
          @click.native="closeMenu"
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
          @click.native="closeMenu"
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
          @click.native="closeMenu"
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
    <div class="menu__separator">
      <div class="menu__separator__content"></div>
    </div>
    <div class="menu__social">
      <a class="menu__social__link">
        <em class="icomoon">facebook</em>
      </a>
      <a class="menu__social__link">
        <em class="icomoon">instagram</em>
      </a>
    </div>
    <div class="menu__copyrights">
      <p class="menu__copyrights__date">
        {{ $t('copyrights.date') }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',

  data() {
    return {
      expanded: false
    }
  },

  methods: {
    changeLocale(lang) {
      this.$i18n.locale = lang
    },
    openMenu() {
      this.expanded = true
    },
    closeMenu() {
      this.expanded = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.menu {
  position: absolute;
  left: 0;
  right: 0;
  transition: transform 0.32s;
  transform: translateX(-100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: $mine-shaft;
  height: calc(100% - #{$gutter-size-small});
  padding: $gutter-size-small $gutter-size-small 0;
  font-family: 'Cormorant';

  @media (min-width: $sm) {
    position: relative;
    transform: translateX(0);
    padding: $gutter-size-large $gutter-size-large 0;
    height: calc(100% - #{$gutter-size-large});
  }

  &.expanded {
    transform: translateX(0);
  }

  &__open,
  &__close {
    &:focus {
      outline: 0;
    }
  }

  &__open {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 0;
    right: -40px;
    background: $mine-shaft;
    border: none;
    border-bottom-right-radius: 3px;
    box-shadow: 0 2px 10px 0 rgba($mine-shaft, 0.75);
    height: 40px;
    width: 40px;

    @media (min-width: $sm) {
      display: none;
    }

    &__line {
      position: relative;
      height: 1px;
      width: 20px;
      margin: 2px 0;
      background: $white;

      &.middle {
        width: 15px;
      }
    }
  }

  &__close {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 5px;
    left: $gutter-size-large;
    border: 0;
    height: 40px;
    width: 40px;
    background: $mine-shaft;

    @media (min-width: $sm) {
      display: none;
    }

    &__line {
      position: relative;
      width: 20px;
      height: 1px;
      background: $white;

      &:before {
        position: absolute;
        top: -5px;
        left: 0;
        border-top: 1px solid $white;
        border-left: 1px solid $white;
        transform: rotate(-45deg);
        width: 10px;
        height: 10px;
        content: '';
      }
    }
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
    width: 100%;

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
    margin: $gutter-size-large 0;

    &__content {
      @include separator;
      border-color: $white;

      &:before,
      &:after {
        border-color: $white;
      }
    }
  }

  &__social {
    display: flex;
    margin: $gutter-size-large 0;

    &__link {
      display: block;
      margin: 0 $gutter-size-large/2;
      color: $white;
      font-size: 32px;
      cursor: pointer;
    }
  }

  &__copyrights {
    color: $white;
    font-family: 'Montserrat';
    font-weight: 300;
    font-size: 0.6rem;
    text-align: justify;
    width: calc(100% + #{$gutter-size-small} * 2);
    padding: $gutter-size-large 0;
    margin-top: auto;

    @media (min-width: $sm) {
      width: calc(100% + #{$gutter-size-large} * 2);
    }

    &__text,
    &__credits,
    &__date {
      padding: 0 $gutter-size-large;
    }

    &__date {
      text-align: center;
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
