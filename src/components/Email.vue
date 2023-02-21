<template>
  <mj-head v-html="head"/>
  <mj-body v-bind="bodyAttrs">
    <slot/>
  </mj-body>
</template>

<script setup>
import {head, bodyAttrs} from "./useEmail.js";
</script>
