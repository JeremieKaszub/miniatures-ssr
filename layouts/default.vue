<template>
  <div id="app">
    <global-header />
    <ui-two-columns>
      <template v-slot:aside> <navigation-menu /> </template>
      <template v-slot:main> <nuxt /></template>
    </ui-two-columns>
  </div>
</template>

<script>
import GlobalHeader from '~/components/global/Header.vue'
import UiTwoColumns from '~/components/ui/TwoColumns.vue'
import NavigationMenu from '~/components/navigation/Menu.vue'

export default {
  components: {
    GlobalHeader,
    UiTwoColumns,
    NavigationMenu
  }
}
</script>
