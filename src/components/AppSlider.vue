<template>
    <div class="app-slider">
        <h1> {{ title }}: {{this.value}}{{this.unit}}</h1>
        <input ref="input" class="slider" type="range" min="{{min}}" max="{{max}}" step="{{step}}" value="0" @change="updateValue($event.target.value)"/>
    </div>
</template>

<script>

export default {
   name: 'AppSlider',
   props: {
    title: String,
    unit: String,
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
   },
   mounted : function() {
    let input = this.$refs.input
    input.min = this.min
    input.max = this.max
    input.step = this.step
   }
}

</script>

<style>
    .slider {
        width: 60%;
    }

    .slider .track {
        -fx-background-color: linear-gradient(to right, red 0%, red 50%, -fx-base 50%, -fx-base 100%);
        background-color: linear-gradient(to right, red 0%, red 50%, -fx-base 50%, -fx-base 100%);
    }

    .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        background-color: red;
    }

    .app-slider {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>