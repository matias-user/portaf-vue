<template>

  <Card titleCard="Titulo de la card"

    />
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
import dataProyectos from '../helpers/dataProyectos.js'

const { title, description, tags, url } = dataProyectos[0]
// title, description, tags, url
export default {
  
  components:{
    Card: defineAsyncComponent( ()=> import('@/modules/shared/components/CardComponent.vue') )
  }
}
</script>

<style scoped>
  
</style>