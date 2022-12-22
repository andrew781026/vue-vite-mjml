<template>
  <mj-head>
    <mj-raw>
      <meta name="color-scheme" content="light dark">
      <meta name="supported-color-schemes" content="light dark">
    </mj-raw>
    <mj-style>
      :root {
      Color-scheme: light dark;
      supported-color-schemes:light dark;
      }

      .container {
      padding: 16px;
      background: #d9d9d9;
      }

      .container .content-column {
      background-color: #fff !important;
      }

      .link{
      display: inline-block;
      text-align: center;
      border: 0.5px solid #ED0008;
      border-radius: 4px;
      padding: 10px 24px;
      box-sizing: border-box;

      /* outlook unsupported linear-gradient so defined background twice for outlook support */
      background: #EA0108;
      background: linear-gradient(180deg, #EA0108 0%, #D50107 100%);
      }

      @media (max-width: 480px) {
      .link {
      width: 100%;
      }
      }

      @media (prefers-color-scheme: dark) {
      .container {
      background: #151515 !important;
      }

      .container :not(a) {
      color:#fff !important;
      }

      .container .content-column {
      background-color: #303030 !important;
      }
      }
    </mj-style>

    <mj-style inline="inline">
      a {
      color: #0074E8;
      text-decoration: none;
      }
    </mj-style>
  </mj-head>
</template>
