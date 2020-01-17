<template>
  <div class="ui-two-columns">
    <aside class="ui-two-columns__aside">
      <slot name="aside" />
    </aside>
    <main class="ui-two-columns__main">
      <slot name="main" />
    </main>
  </div>
</template>

<style lang="scss">
.ui-two-columns {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 142px);

  @media (min-width: $sm) {
    flex-direction: row;
  }

  &__aside {
    width: 100%;

    @media (min-width: $sm) {
      width: 320px;
    }
  }
}
</style>
