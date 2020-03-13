<template>
<div class="home">
  <section class="hero is-light">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Welcome to Fitness World     
        </h1>
        <h2 class="subtitle">
          Be Fit Get Benifts
        </h2>
        
      </div>
    </div>
  </section>
</div>
</template>
<script>
export default {
  name: 'home',
  components: {
  }
}
</script>
<style lang="scss" scoped>
  .hero {  
    text-align: center;
    background-image: url('https://lh3.googleusercontent.com/proxy/NOQ8ZfjAIE_KZRUaAWKh4Pmnnu-S4gWJHQRzbkL-6ITCZIAQaMvlwh8RpHXcOC5OvCQBl5V6H2ToU4qEbMGxWvSHYCrniPqBUosz3lrucz3FJdDN_KpnRqZm6TKUhqrBAE7s3Mg_ZeWmPCzMLKXIvxX7oajkiZadRSgiavCL5T38octAXfoHvqjiXNBCN_QxBw');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 500px;
    background-color:rgb(99, 64, 224)
  }
  .hero-body .title {
    text-shadow: 4px 4px 4px rgba(213, 228, 220, 0.924);
    padding: 40px 0 20px 0;
    font-size: 60px;
  }
  .subtitle {
    text-shadow: 4px 4px 4px rgba(21, 0, 80, 0.7);
    font-size: 30px;
  }
  .button-block {
    text-align: justify;
    text-decoration: underline;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    position: absolute;
    display:-moz-box;
    bottom: -150px;
    .button {
      scroll-margin-left: 50px;
      padding-left: 100px;
      padding-right: 50px;
      text-decoration: underline;
      display: -moz-box;
    }
    .welcome {
      width: 400px;
      padding: 10px;
      margin-left: auto;
      margin-right: auto;
    
    }
  }
  .is-xl {
    font-size: 1.9rem;
  }
</style>