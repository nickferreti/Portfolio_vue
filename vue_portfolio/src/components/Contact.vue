<template>
  <div class="page-section">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 py-3 wow fadeInUp">
          <h2 class="title-section">Informações de contato</h2>
          <div class="divider"></div>

          <ul class="contact-list">
            <li>
              <div class="content"><a href="mailto:nickrferreti6@gmail.com">nickrferreti6@gmail.com</a></div>

            </li>
            <li>
              <div class="content"><a>+55 (48) 98878-0074</a></div>

            </li>
            <li>
              <div class="content" ><a href="https://www.linkedin.com/in/nickolas-ferreti-752993212/">LinkedIn</a></div>

            </li>
            <li>
              <div class="content"><a href="https://github.com/nickferreti">GitHub</a></div>

            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- .container -->
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";

export default {
  name: "Contact",

  components: {
    Navbar: Navbar,
    Footer: Footer,
  },
};
</script>
