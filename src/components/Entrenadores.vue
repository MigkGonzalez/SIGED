<template>
  <section class="container-entrenadores">
    <div id="entrenadores" class="row">
      <h2>ENTRENADORES</h2>
      <article class="col-6" id="entrenador1">
        <img src="@/assets/images/entrenador1.jpg" alt="Imagen entrenador 1" />
        <h3>entrenador1</h3>
        <p>
          Lorem ipsum snfe idnsnsd nskd cnslnd nndndo jrejjp vjfs pidjnlnv
          dlasvnlk kdertw jorgwqf vnwenv jdfjpvnsdi, Lorem ipsum snfe idnsnsd
          nskd cnslnd nndndo jrejjp vjfs pidjnlnv dlasvnlk Lorem ipsum snfe
          idnsnsd nskd cnslnd nndndo jrejjp vjfs pidjnlnv dlasvnlk kdertw
          jorgwqf vnwenv jdfjpvnsdikdertw jorgwqf vnwenv jdfjpvnsdi
        </p>
      </article>
      <article class="col-6" id="entrenador2">
        <img src="@/assets/images/entrenador2.jpg" alt="Imagen entrenador 2" />
        <h3>entrenador2</h3>
        <p>
          Lorem ipsum snfe idnsnsd nskd cnslnd nndndo jrejjp vjfs pidjnlnv
          dlasvnlk kdertw jorgwqf vnwenv jdfjpvnsdi, Lorem ipsum snfe idnsnsd
          nskd cnslnd nndndo jrejjp vjfs pidjnlnv dlasvnlk Lorem ipsum snfe
          idnsnsd nskd cnslnd nndndo jrejjp vjfs pidjnlnv dlasvnlk kdertw
          jorgwqf vnwenv jdfjpvnsdikdertw jorgwqf vnwenv jdfjpvnsdi
        </p>
      </article>
    </div>
    <!-- Limpiar floats -->
    <div class="clearfix"></div>
  </section>
</template>
<script>
export default {};
</script>
<style>
* {
  text-align: center;
  margin: 0px;
  padding: 0px;
  align-items: center;
  /*FUENTES*/
  font-family: "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
    "Helvetica Neue", sans-serif;
  font-size: 1.2rem;
  line-height: 1.5em;
  -webkit-font-smoothing: antialiased;
}
.clearfix {
  clear: both;
  float: none;
}
h1 {
  font-size: 2.5rem;
  line-height: 1.3em;
}
h2 {
  font-size: 2rem;
  line-height: 1.2em;
  margin: 2rem 0;
  margin-top: 4rem;
  font-weight: 600;
}
h3 {
  font-size: 1.5rem;
  line-height: 1em;
}
p {
  margin-bottom: 1.6em;
}
.container-entrenadores {
  height: 100%;
  width: 100%;
  background: #f4fa9d;
  text-align: center;
  align-items: center;
  display: flex;
}
#entrenadores {
  margin-top: 3rem;
  background: #f9e79b;
  margin: 0;
  padding-top: 5rem;
  padding: 2rem;
}
</style>