<template>
  <nav class="nav" >
      <span  class="nav__title" >
          Desarrollador web <span class="nav__title--modify" ></span> Matías Abarca
      </span>

      <div class="nav__links">
      <a class="nav__link" href="#">Inicio</a>
      <a class="nav__link" href="#">Proyectos</a>
      <a class="nav__link" href="#">Contacto</a>
      <a class="nav__link" href="#">Nose aun</a>

      </div>

  </nav>
</template>

<script>
export default {
}
</script>

<style scoped >
  
  .nav{
    width: 100%;
    background-color: var(--color-primary);
    padding: 20px 0;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    display: flex;
    align-items: stretch;
    justify-content: space-around;
    flex-wrap: wrap;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
  }
  .nav__icon{
    cursor: pointer;
    line-height: 50px;
    font-size: 25px;
    height: 100%;
    align-self: center;
    color: var(--white);
  }
  .nav__title{
    margin-left: 1rem;
    font-size: 2rem;
    font-weight: 700;
    color: var(--white);
    transition: .2s ease-in all;
  }
  .nav__links{
    display: flex;
    align-items: center;
  }
  .nav__link{
    color: var(--white);
    text-decoration: none;
    transition: .2s ease-in all;
    padding: 10px 30px;
    border-radius:3px ;

  }
  .nav__link:hover{
      transition: .2s ease-in all;
      background-color: var(--color-primary-light);
  }
  .nav__title--modify{
      margin-right: 1rem;
    }
  @media( max-width: 480px ){
    .nav__title{
      display: none;
    }
    .nav{
      padding: 0;
      position: relative;
    }
    .nav__links{
      font-size: 1.3rem;
      align-items: flex-start;
      flex-direction: column;
      flex: 1;
      gap: 0;
    }
    .nav__link{
      width: 100%;
      border-bottom: 1px solid var(--white);
      padding: 10px 0;
    }
  }
</style>