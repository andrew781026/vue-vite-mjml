1. transfer 1 template to vue version
2. add date var as html
3. add var as .blade file
4. build all mjml to email
5. build all mjml to .blade file

----

卡住的部分：
目前 .vue 檔案中的 style block 沒法載入到最終的 html 檔案中 
  => required to set style block to mj-head

other plan -> no mj-style use Head.vue to make the mj-head block 

----

note can be two part - 
  1. the ssg for vite ( use ssr-vue template )
  2. add mjml on vite