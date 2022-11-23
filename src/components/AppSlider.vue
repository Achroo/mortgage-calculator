<template>
    <div class="app-slider">
        <h1> {{ title }}: ${{this.value}}</h1>
        <input type="range" min="{{min}}" max="{{max}}" step="{{step}}" value="0" @change="updateValue($event.target.value)"/>
    </div>
</template>

<script>

export default {
   name: 'AppSlider',
   props: {
    title: String,
    min: String,
    max: String,
    step: String,
   },
   data: function() {
    return {
        value: this.value || 0
    }
   },
   methods: {
    updateValue : function updateValue(changeValue) {
        this.value = changeValue
        this.$emit('updateValue', changeValue)
    },
   }
}

</script>

<style>
    .app-slider {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>