<template>
  <div class="home">
    {{ $t('home.link') }}
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
