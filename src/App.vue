<template>
  <div class="background">
    <div class="app">
      <h1 class="appTitle"> Mortgage Calculator </h1>
      <div class="app-container">
        <AppSlider title="Purchase price" max="1000000" min="0" step="5000" unit="$" @updateValue="this.purchasePrice = $event"/>
        <AppSlider title="Down payment" max="1000000" min="0" step="5000" unit="$" @updateValue="this.downPayment = $event"/>
        <AppSlider title="Repayment time" max="30" min="0" step="1" unit =" years" @updateValue="this.repaymentTime = $event"/>
        <AppSlider title="Interest rate" max="15" min="0" step="1"  unit="%" @updateValue="this.interestRate = $event"/>
        <ResultDiv title="Loan amount" v-if="this" :result="'$' + calculateLoanAmount().toString()"/>
        <ResultDiv title="Monthly payment" v-if="this" :result="'$' + calculateMonthlyPayment().toString()"/>
      </div>
    </div>
  </div>
</template>

<script>

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
      let totalLoan = this.purchasePrice - this.downPayment
      let repaymentTime = this.repaymentTime * 12
      let interestRate = (this.interestRate / 100) / 12
      let monthlyPayment = totalLoan * interestRate * (Math.pow(1 + interestRate, repaymentTime)) / (Math.pow(1 + interestRate, repaymentTime) - 1);
      monthlyPayment = monthlyPayment || 0;
      return monthlyPayment.toFixed(2);
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
  padding-top: 1.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.25vw;
}

.background {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

.app {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: auto;
  background-color: #74b9ff;
  border-radius: 5px;
  padding-bottom: 3vh;
}

.app-container {
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
