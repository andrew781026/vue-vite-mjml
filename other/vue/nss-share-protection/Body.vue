<template>
  <mj-body css-class="container" width="600px">
    <mj-section
        padding="10px 0 25px"
        background-repeat="no-repeat"
        background-size="cover"
        background-url="{{ headerBg }}">
      <mj-column>
        <mj-table>
          <tr>
            <td>
              <img src="{{ headerLogo }}"/>
            </td>
          </tr>
        </mj-table>
      </mj-column>
    </mj-section>

    <mj-section padding-bottom="0" css-class="content-column">
      <mj-column>
        <mj-text>
          <div>{{ greeting }}</div>
        </mj-text>
        <mj-text>
          <div style="line-height: 1.4">{{ greetingText }}</div>
        </mj-text>
        <mj-text>
          <div style="line-height: 1.4">
            {{ installStep }}
            <br>
            {{ installStep1 }}
            <br>
            {{ installStep2 }}
          </div>
        </mj-text>
        <mj-text>
          <div style="line-height: 1.4">
            {{ notice }}
          </div>
        </mj-text>
      </mj-column>
    </mj-section>

    <mj-section padding="24px 0" css-class="content-column">
      <mj-column>
        <mj-table>
          <tr>
            <td align="center">
              <a href="{{ $downloadNowLink }}" class="link" style="font-size: 16px; color: #fff;">
                {{ btnDownload }}
              </a>
            </td>
          </tr>
        </mj-table>
      </mj-column>
    </mj-section>

    <mj-section
        css-class="content-column"
        padding="20px"
        background-size="100px"
        background-repeat="no-repeat"
        background-position="right bottom"
        background-url="{{ redCurve }}">
    </mj-section>

    <mj-section padding-top="20px" padding-bottom="0">
      <mj-column>
        <mj-text color="#555555" align="center" font-size="12px" line-height="1.15">
          {{ footer }}
        </mj-text>
      </mj-column>
    </mj-section>

    <mj-section padding-top="20px">
      <mj-column>
        <mj-image width="100px" src="{{ footerLogo }}"/>
      </mj-column>
    </mj-section>
  </mj-body>
</template>

<script>
export default {
  props: ['headerBg', 'headerLogo', 'greeting']
}
</script>