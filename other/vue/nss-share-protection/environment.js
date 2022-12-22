const $imagesPath = 'https://beta.account.trendmicro.com/images';

exports.static = {
  isStatic: true,
  $imagesPath,
  $downloadNowLink: 'https://github.com/',
  redCurve: '/images/img_m_red_curve.png',
  headerBg:  $imagesPath + '/email/86738527-bccdf480-c067-11ea-9ce3-34a8740ddcd2.png',
  headerLogo: '/images/img_lockup_tm_white_email.png',
  footerLogo: '/images/img_lockup_tm_red_email.png',
};

exports.blade = {
  headerBg: `${ $imagesPath }/email/86738527-bccdf480-c067-11ea-9ce3-34a8740ddcd2.png`,
  headerLogo: `{{ url(images/email/img_lockup_tm_white_email.png) }}`,
  footerLogo: `{{ url(images/email/img_lockup_tm_red_email.png) }}`,
  redCurve: `{{ url(images/email/img_m_red_curve.png) }}`,
  $imagesPath: '{{ $imagesPath }}',
  greeting: `@lang('email.nss_share_protection.greeting')`,
  greetingText: `@lang('email.nss_share_protection.greetingText')`,
  installStep: `@lang('email.nss_share_protection.installStep')`,
  installStep1: `@lang('email.nss_share_protection.installStep1')`,
  installStep2: `@lang('email.nss_share_protection.installStep2')`,
  notice: `@lang('email.nss_share_protection.notice')`,
  btnDownload: `@lang('email.nss_share_protection.btnDownload')`,
  footer: `@lang('email.nss_share_protection.footer', ['SupportLink' => $supportLink]).`,
  $downloadNowLink: '{{ $downloadNowLink }}',
};
