<template>
  <Email>
    <mj-section padding-bottom="20px" padding-top="20px">
      <mj-group>
        <mj-column>
          <mj-text mj-class="preheader">
            <a href="https://mjml.io">[[HEADLINE]]</a>
          </mj-text>
        </mj-column>
        <mj-column>
          <mj-text mj-class="preheader" align="right">
            <a href="https://mjml.io">[[PERMALINK_LABEL]]</a>
          </mj-text>
        </mj-column>
      </mj-group>
    </mj-section>
    <mj-section background-color="#ffffff">
      <mj-column>
        <mj-image
            :src="worldlyLogo"
            alt="Worldly logo"
            align="center"
            width="105px"
            padding="10px 0"
        />
      </mj-column>
    </mj-section>
    <mj-section background-color="#ffe118" padding="20px">
      <mj-column>
        <mj-navbar
            base-url="https://mjml.io"
            hamburger="hamburger"
            ico-color="#444"
        >
          <mj-navbar-link href="/"> home</mj-navbar-link>
          <mj-navbar-link href="/"> Summer deals</mj-navbar-link>
          <mj-navbar-link href="/"> Our blog</mj-navbar-link>
          <mj-navbar-link href="/"> Follow us</mj-navbar-link>
        </mj-navbar>
      </mj-column>
    </mj-section>
    <mj-section
        background-url="http://191n.mj.am/img/191n/3s/xm9.jpg"
        background-repeat="no-repeat"
        background-size="cover"
        padding="20px 0"
    >
      <mj-column>
        <mj-text
            align="center"
            color="#ffffff"
            line-height="32px"
            font-family="Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif"
            font-size="28px"
            padding="10px"
        >
          ARE YOU <br/>
          SEASCAPE?
        </mj-text>
      </mj-column>
      <mj-column width="50%" vertical-align="bottom">
        <mj-text
            align="center"
            color="#ffffff"
            line-height="32px"
            font-family="Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif"
            font-size="28px"
            padding-top="180px"
        >
          OR <br/>
          CITYSCAPE?
        </mj-text>
      </mj-column>
    </mj-section>
    <mj-section background-color="#ffffff" padding="20px 0">
      <mj-column>
        <BookNowCard
            title="SUNNIEST DESTINATIONS"
            image="http://191n.mj.am/img/191n/3s/x2w.jpg"
            btn-color="#bd8714"
            btn-label="BOOK NOW"
        />
        <BookNowCard
            image="http://191n.mj.am/img/191n/3s/x2x.jpg"
            btn-color="#bd8714"
            btn-label="BOOK NOW"
        />
      </mj-column>
      <mj-column>
        <BookNowCard
            title="CHEAP CITY TOUR"
            image="http://191n.mj.am/img/191n/3s/x20.jpg"
            btn-color="#48b6bf"
            btn-label="BOOK NOW"
        />
        <BookNowCard
            image="http://191n.mj.am/img/191n/3s/x2s.jpg"
            btn-color="#48b6bf"
            btn-label="BOOK NOW"
        />
      </mj-column>
    </mj-section>
    <mj-section background-color="#ffffff" padding="20px 0">
      <mj-column>
        <mj-image
            href="https://mjml.io"
            src="http://191n.mj.am/img/191n/3s/x21.jpg"
            alt="NEW : Donwload your city guide"
            width="250px"
            padding="0 25px"
        />
      </mj-column>
      <mj-column>
        <mj-text
            align="center"
            color="#000000"
            font-family="Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif"
            font-size="13px"
            padding="0 25px"
            font-weight="bold"
        >
          <p>RATE YOUR STAY !</p>
        </mj-text>
        <mj-image
            href="https://mjml.io"
            src="http://191n.mj.am/img/191n/3s/x2l.png"
            alt="Book rate"
            width="131px"
        />
      </mj-column>
    </mj-section>
    <mj-section background-color="#4b525c">
      <mj-column width="33%" vertical-align="top">
        <mj-image
            src="http://191n.mj.am/img/191n/3s/x09.png"
            alt="Best companies for your flights"
            width="30px"
            padding="10px 25px"
        />
        <mj-text mj-class="footer-text">
          <p>BEST COMPANIES FOR YOUR FLIGHTS</p>
        </mj-text>
      </mj-column>
      <mj-column width="33%">
        <mj-image
            src="http://191n.mj.am/img/191n/3s/xsw.png"
            alt="Insurances included"
            width="29px"
            padding="10px 25px"
        />
        <mj-text mj-class="footer-text">
          <p>INSURANCES INCLUDED</p>
        </mj-text>
      </mj-column>
      <mj-column width="33%" vertical-align="top">
        <mj-image
            src="http://191n.mj.am/img/191n/3s/xsx.png"
            alt="Hotels best selection"
            width="31px"
            padding="10px 25px"
        />
        <mj-text mj-class="footer-text">
          <p>HOTELS BEST SELECTION</p>
        </mj-text>
      </mj-column>
    </mj-section>
    <mj-section background-color="#4395b1">
      <mj-column width="33.33333333333333%">
        <mj-image
            src="http://191n.mj.am/img/191n/3s/x1l.png"
            alt="Call us : 0 800 123 456"
            width="97px"
            padding="10px 25px"
        />
      </mj-column>
      <mj-column width="33.33333333333333%">
        <mj-image
            href="https://mjml.io"
            src="http://191n.mj.am/img/191n/3s/x1m.png"
            alt="Meet us : find an agency"
            width="117px"
            padding="10px 25px"
        />
      </mj-column>
      <mj-column width="33.33333333333333%">
        <mj-image
            href="https://mjml.io"
            src="http://191n.mj.am/img/191n/3s/xs0.png"
            alt="ASK US : find an expert"
            width="110px"
            padding="10px 25px"
        />
      </mj-column>
    </mj-section>
    <Footer
        delivery-info="DELIVERY_INFO"
        postal-address="POSTAL_ADDRESS" />
  </Email>
</template>

<script setup>
import Email from '../components/Email.vue'
import {appendHead, setBodyAttr} from "../components/Email.vue";
import Footer from "./ccc/Footer.vue";
import BookNowCard from "./ccc/BookNowCard.vue";

const worldlyLogo = 'http://191n.mj.am/img/191n/3s/x0j.png'

appendHead('main', `<mj-attributes>
      <mj-all padding="0px"/>
      <mj-class
          name="preheader"
          color="#000000"
          font-size="11px"
          font-family="Ubuntu, Helvetica, Arial, sans-serif"
          padding="0 20px"
      />
      <mj-class
          name="footer-text"
          align="center"
          color="#ffffff"
          font-family="Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif"
          font-size="15px"
          padding="0 25px"
      />
      <mj-navbar-link padding="0 35px" font-weight="bold" font-size="12px"/>
    </mj-attributes>
    <mj-style inline="inline">
      a { text-decoration: none; color: inherit; }
    </mj-style>`)

setBodyAttr('background-color', "#d2eeff")
</script>

<style scoped></style>
