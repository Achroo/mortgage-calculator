<template>
  <div class="app">
    <h1 class="appTitle"> Mortgage Calculator </h1>
    <AppSlider title="Purchase price" max="1000000" min="0" step="1000" @updateValue="this.purchasePrice = $event"/>
    <AppSlider title="Down payment" max="1000000" min="0" step="1000" @updateValue="this.downPayment = $event"/>
    <AppSlider title="Repayment time" max="30" min="0" step="1" @updateValue="this.repaymentTime = $event"/>
    <AppSlider title="Interest rate" max="15" min="0" step="1"  @updateValue="this.interestRate = $event"/>
    <ResultDiv title="Loan amount" v-if="this" :result="'$' + calculateLoanAmount().toString()"/>
    <ResultDiv title="Monthly payment" v-if="this" :result="'$' + calculateMonthlyPayment().toString()"/>
  </div>
</template>

<script>

console.log("Hello world")

import AppSlider from './components/AppSlider.vue'
import ResultDiv from './components/ResultDiv.vue'

export default {
  name: 'App',
  components: {
    AppSlider,
    ResultDiv
  },
  methods: {
    calculateLoanAmount() {
      let loanAmount = this.purchasePrice - this.downPayment
      return loanAmount.toFixed(2);
    },
    calculateMonthlyPayment(){
      let monthlyPayment = (this.purchasePrice - this.downPayment) * ( ((this.interestRate * 1 + this.interestRate)^this.repaymentTime) / (((1 + this.interestRate)^this.repaymentTime))-1  )
      return monthlyPayment;
    }
  },
  data : function() {
    return {
      purchasePrice: 0,
      downPayment: 0,
      repaymentTime: 0,
      interestRate: 0,
      loanAmount: 0,
      monthlyPayment: 0,
    }
  }
}
</script>

<style>

.appTitle {
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1 / -1;
  grid-row: 1
}

.app {
  margin: 0 auto;
  width: 70%;
  height: 50%;
  background-color: #bdc3c7;
  border-radius: 5px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  padding-bottom: 2%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
