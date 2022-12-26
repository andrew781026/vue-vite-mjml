<template>
  <mj-section
      padding="10px 0 25px"
      background-repeat="no-repeat"
      background-size="cover"
      :background-url="data.headerBg">
    <mj-column>
      <mj-table>
        <tr>
          <td>
            <img :src="data.headerLogo"/>
          </td>
        </tr>
      </mj-table>
    </mj-column>
  </mj-section>
</template>

<script setup>
// use context to switch using data or blade
const $imagesPath = '/images';

const data = {
  isStatic: true,
  $downloadNowLink: 'https://github.com/',
  redCurve: '/images/img_m_red_curve.png',
  headerBg: $imagesPath + '/email/header_bg.png',
  headerLogo: '/images/img_lockup_tm_white_email.png',
  footerLogo: '/images/img_lockup_tm_red_email.png',
};

const blade = {
  headerBg: `${$imagesPath}/email/header_bg.png`,
  headerLogo: `{{ url(images/email/img_lockup_tm_white_email.png) }}`,
  footerLogo: `{{ url(images/email/img_lockup_tm_red_email.png) }}`,
  redCurve: `{{ url(images/email/img_m_red_curve.png) }}`,
  $imagesPath: '{{ $imagesPath }}',
  greeting: `@lang('email.user_signup_welcome.greeting')`,
  greetingText: `@lang('email.user_signup_welcome.greetingText')`,
  installStep: `@lang('email.user_signup_welcome.installStep')`,
  installStep1: `@lang('email.user_signup_welcome.installStep1')`,
  installStep2: `@lang('email.user_signup_welcome.installStep2')`,
  notice: `@lang('email.user_signup_welcome.notice')`,
  btnDownload: `@lang('email.user_signup_welcome.btnDownload')`,
  footer: `@lang('email.user_signup_welcome.footer', ['SupportLink' => $supportLink]).`,
  $downloadNowLink: '{{ $downloadNowLink }}',
};
</script>

<style>
:root {
  Color-scheme: light dark;
  supported-color-schemes: light dark;
}

.container {
  padding: 16px;
  background: #d9d9d9;
}

.container .content-column {
  background-color: #fff !important;
}

.link {
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
    color: #fff !important;
  }

  .container .content-column {
    background-color: #303030 !important;
  }
}
</style>
<style inline="inline">
a {
  color: #2f7ab4;
  text-decoration: none;
}
</style>