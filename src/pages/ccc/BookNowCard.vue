<template>
  <mj-text
      v-if="title"
      align="center"
      font-family="Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif"
      font-size="15px"
      padding="10px 25px"
      color="#BD8714"
  >
    <p>{{ title }}</p>
  </mj-text>
  <mj-image
      v-if="image"
      :src="image"
      alt="Maldives, Corse : -15%"
      width="240px"
  />
  <mj-button
      mj-class="cta"
      :background-color="btnColor">
    {{ btnLabel }}
  </mj-button>
</template>

<script setup>
import {getCurrentInstance} from "vue";
import {appendHead} from "../../components/Email.vue";

defineProps({
  title: {type: String, default: ''},
  image: {type: String, default: ''},
  btnColor: {type: String, default: '#bd8714'},
  btnLabel: {type: String, default: 'BOOK NOW'},
})

const componentName = getCurrentInstance()?.type.__name // componentName= BookNowCard

appendHead(componentName, `
 <mj-attributes>
     <mj-class
          name="cta"
          color="#FFFFFF"
          font-size="13px"
          border-radius="3px"
          href="https://mjml.io"
          font-family="Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif"
          padding="20px 25px"
      />
  </mj-attributes>
`)
</script>

<style scoped>

</style>