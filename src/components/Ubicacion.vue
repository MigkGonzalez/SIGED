<template>
     <section  class="container-horarios">
      <div id="horarios-ubicacion" class="row">
          <h2>HORARIOS Y UBICACIÓN</h2>
          
          <article class="col-6" id= "Horario">
            <img src="@/assets/images/Horarios.png" class="img-fluid" alt="Imagen horario">
                <hr>
                    <p>Lorem ipsum snfe idnsnsd nskd cnslnd  nndndo jrejjp vjfs pidjnlnv 
                        dlasvnlk kdertw jorgwqf vnwenv jdfjpvnsdi, Lorem ipsum snfe 
                        idnsnsd nskd cnslnd  nndndo jrejjp vjfs pidjnlnv dlasvnlk 
                        Lorem ipsum snfe idnsnsd nskd cnslnd  nndndo jrejjp vjfs pidjnlnv 
                        dlasvnlk kdertw jorgwqf vnwenv jdfjpvnsdikdertw jorgwqf vnwenv jdfjpvnsdi</p>
        </article>
        <article class="col-6" id= "ubicacion">
            <!-- <img src="assets/images/Ubicacion-imder.png" class="img-fluid" alt="ubicacion"> -->
                
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2582.1771610200904!2d-76.30815714140502!3d3.526970949115824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1633128507361!5m2!1ses-419!2sco" 
            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                <hr>
                        <p>Lorem ipsum snfe idnsnsd nskd cnslnd  nndndo jrejjp vjfs pidjnlnv 
                        dlasvnlk kdertw jorgwqf vnwenv jdfjpvnsdi, Lorem ipsum snfe 
                        idnsnsd nskd cnslnd  nndndo jrejjp vjfs pidjnlnv dlasvnlk 
                        Lorem ipsum snfe idnsnsd nskd cnslnd  nndndo jrejjp vjfs pidjnlnv 
                        dlasvnlk kdertw jorgwqf vnwenv jdfjpvnsdikdertw jorgwqf vnwenv jdfjpvnsdi</p>
        </article>
        <!-- Limpiar floats -->
        <div class="clearfix"></div>
      </div>
      
  </section>
</template>

<script>
export default {
    
}
</script>

<style>
*{
    text-align: center;
    margin: 0px;
    padding: 0px;
    align-items: center;
    /*FUENTES*/
    font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.2rem;
    line-height: 1.5em;
    -webkit-font-smoothing: antialiased;
}
.clearfix{
    clear: both;
    float: none;
}

.container-horarios{
   height: 100%;
   width: 100% ;
   background:#f4fa9d ;
   text-align: center;
    align-items: center;
    display: flex;
    padding-top: 5rem;
    
}

#horarios-ubicacion{
   margin-top: 2rem;
   margin: 0;
   padding: 2rem;
}
</style>