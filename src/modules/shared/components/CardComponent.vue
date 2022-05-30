<template>
  <div class="card">
    <picture class="card__figure" >
      <img class="card__img" 
            >
    </picture>
    <h4 class="card_title" >
      {{ titleCard }}
    </h4>
    <div class="card__tags">
      Aqui van los tags sobre la tecnologia
    </div>
    <p class="card__description" >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia magni error perspiciatis nisi voluptatum ratione tempore vel architecto deserunt magnam, praesentium, nobis consequatur recusandae quos. Aliquid minima placeat nulla praesentium.
    </p>
    <div class="card__buttons">
      <button class="card__button">
        Ir a proyecto
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    urlImageCard: String,
    titleCard: String,
    tagsCard: [],
    urlCard: String
  }
}
</script>

<style scoped>
    .card{
        overflow: hidden;
        width: 35%;
        max-width: 100%;
        padding: 30px 15px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        text-align: center;
        
    }
    .card__button{
      cursor: pointer;
      background-color: var(--color-secondary);
      padding: 12px 20px;
      border-radius: 3px;
      text-transform: uppercase;
      font-weight: 700;
      color: var(--white);
      border: none;
      transition: .3s ease-in all;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
    .card__button:hover{
      transition: .3s ease-in all;
      background-color: var(--color-secondary-light);

    }
</style>