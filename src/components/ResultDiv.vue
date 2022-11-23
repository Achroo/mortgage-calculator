<template>
    <div class="result-div">
        <h1> {{title}} </h1>
        <h2> {{result}} </h2>
    </div>
</template>

<script>

export default {
   name: 'ResultDiv',
   props: {
    title : String,
    result: String,
   },     
}

</script>

<style>
    h1 {
        font-size: 1.5rem;
    }
    
    h2 {
        font-size: 1.75rem;
    }
</style>