<template>
    <Nav />
    <div></div>
    <div class="container">
        
        <router-view/>
    </div>
    
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    components:{
        Nav: defineAsyncComponent( ()=> import('@/modules/shared/components/NavBar.vue') )
    }
}
</script>

<style scoped>
.container{
    width: 90%;
    margin: 0 auto;
    height: calc(100vh - 100px);
}
    div{
        margin-top: 100px;
    }
    @media( max-width:480px){
        div{
            margin-top: 0;
        }
    }
</style>