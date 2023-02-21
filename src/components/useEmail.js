import { computed, ref } from "vue";

export const headInfo = ref({});
export const bodyAttrs = ref({});

// append head => set the head data
export const appendHead = (componentId, headHtml) => (headInfo.value[componentId] = headHtml);
export const setBodyAttr = (name, value) => (bodyAttrs.value[name] = value);
export const clearBodyAttrs = () => (bodyAttrs.value = {});

export const head = computed(() => Object.values(headInfo.value).join(""));

// -------------------------
/*

For Example :

  You will set

  const compName = 'MyHeader'

  const compHeadStyle =  `<mj-style inline="inline">
      a { text-decoration: none; color: inherit; }
    </mj-style>`

  use appendHead( compName , compHeadStyle )

  to set mj-style . mj-attributes .  mj-title ...etc. in <mj-head />

 */
