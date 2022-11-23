<template>
  <div class="app">
    <PurchasePrice title="Purchase price"/>
    <DownPayment title="Down payment"/>
    <RepaymentTime title="Repayment time"/>
    <InterestRate title="Interest rate"/>
    <LoanAmount/>
    <MonthlyPayment/>
  </div>
</template>

<script>

import PurchasePrice from './components/PurchasePrice.vue'
import DownPayment from './components/DownPayment.vue'
import RepaymentTime from './components/RepaymentTime.vue'
import InterestRate from './components/InterestRate.vue'
import LoanAmount from './components/LoanAmount.vue'
import MonthlyPayment from './components/MonthlyPayment.vue'

export default {
  name: 'App',
  components: {
    PurchasePrice,
    DownPayment,
    RepaymentTime,
    InterestRate,
    LoanAmount,
    MonthlyPayment
  }
}
</script>

<style>

.app {
  margin: 0 auto;
  width: 80%;
  height: 50%;
  background-color: #bdc3c7;
  border-radius: 5px;  
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
