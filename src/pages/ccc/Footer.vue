<template>
  <mj-section padding="20px 0">
    <mj-column>
      <mj-text align="center" color="#000000" font-size="11px">
        {{ deliveryInfo }}
        <p>{{ postalAddress }}</p>
      </mj-text>
    </mj-column>
  </mj-section>
</template>

<script setup>
defineProps({
  deliveryInfo: {type: String, default: ''},
  postalAddress: {type: String, default: ''},
})
</script>
