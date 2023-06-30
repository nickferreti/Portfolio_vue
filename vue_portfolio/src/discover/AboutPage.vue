<template>
  <div class="bg-green-50 page-section pt-5 -mb-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 py-3 wow zoomIn">
          <div class="img-place text-center hidden lg:flex">
            <lottie-player
              src="https://assets2.lottiefiles.com/packages/lf20_qhrndegx.json"
              background="transparent"
              speed="1"
              style="max-width: 500px; max-height: 500px"
              autoplay></lottie-player>
          </div>
        </div>

        <div class="col-lg-6 p-4">
          <h2 class="title-section text-2xl">
            Sobre
            <span class="marked">mim</span>
          </h2>
          <div class="divider"></div>

          <div>
            <p>
              Sou um desenvolvedor fullstack junior, atualmente morando em Florianópolis/SC.
              Desde cedo sou apaixonado por tecnologias e programação, iniciei em 2019 meu curso 
              técnico no senai em Desenvolvimento de sistemas e desde então venho me especializando
              nessa area que sou tão apaixonado.
            </p>
          </div>

          <div>
            <p>
              Sou uma pessoa organizada, gosto de resolver problemas desde os mais simples até os mais complexos.
              Gosto de assistir no meu tempo livre jogos da NBA e NFL <br>e quando não estou no meu lazer, estou ampliando
              meus conhecimentos em programação ou atualizações das tecnologias mais recentes.
            </p>
          </div>

          <div>
            <p class="hidden lg:flex">
              Estou interessado em colaborações em projetos de front-end, e tambem estou procurando 
              vagas de estagio na área de programação, sou uma pessoa muito comunicativa e prefiro trabalhar
              em grupos para um melhor aproveitamento e tambem resultado.
            </p>
          </div>

          <div class="img-place mb-3"></div>
          <a href="#" class="btn btn-primary">More Details</a>
          <a href="#" class="btn btn-outline border ml-2">Success Stories</a>
        </div>
      </div>
    </div>
    <!-- .container -->
  </div>
  <!-- .page-section -->

  <div class="bg-green-50 page-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 p-4 -mt-9 lg:mt-0">
          <h2 class="title-section text-2xl">
            Minhas
            <span class="marked">Habilidades & Experiencias</span>
          </h2>
          <div class="divider"></div>
          <p class="mb-4">
            Sou formado em Desenvolvimento de sistemas pelo Senai, onde Desenvolvi
            aplicações em java, HTML, CSS, postgreeSQL entre outros. 
            <br>Desenvolvi também um app para conclusão do curso que ajuda pessoas com pouco conhecimento à 
            comprar sua primeira bicicleta, coletando dados tais como altura e relacionados.
          </p>
          <p class="mb-4">
            Gosto de criar no meu tempo livre SPA's (Single Page Aplications) responsivas e da forma mais aprimorada possivel 
            para testar meus conhecimentos tecnicos, tanto de front-end como de back-end.
          </p>

          <p class="mb-5 hidden lg:flex">
            Tenho experiência de um ano no mercado de trabalho como desenvolvedor fullstack,
            desenvolvendo um site baseado em Vue.js, PHP laravel e postgreeSQL.
            Desenvolvi o site com um time de 5 pessoas juntamente com os setores de vendas, já que 
            o sistema era basicamente para controle de vendas e também consulta de clientes e das 
            filiais da empresa.
          </p>

          <router-link to="/projects" class="btn btn-primary">
            Meus Projetos
          </router-link>
        </div>
        <div class="col-lg-6 py-3 wow zoomIn">
          <div class="img-place text-center">
            <lottie-player
              src="https://assets2.lottiefiles.com/packages/lf20_u4jjb9bd.json"
              background="transparent"
              speed="0.5"
              style="max-width: 550px; max-height: 550px"
              loop
              autoplay></lottie-player>
          </div>
        </div>
      </div>
    </div>
    <!-- .container -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollPosition: 0,
    };
  },

  methods: {
    handleScroll(e) {
      this.scrollPosition = e.target.scrollTop;

      if (this.scrollPosition > 100) {
        console.log("UP");
      } else {
        console.log("DOWN");
      }
    },
  },
};
</script>

<style></style>
