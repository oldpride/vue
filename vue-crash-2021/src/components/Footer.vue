<template>
  <footer>
    <p>Copyright &copy; 2021</p>
    <!-- 
      we could have used href 
          <a href="/about">About</a>
      but href will trigger a reload from the backend, very undesirable.
      instead, we use router-link to avoid the reload, much faster -tian
     -->
    <router-link to="/about">About</router-link>
  </footer>
</template>

<style scoped>
a {
  color: #333;
}

footer {
  margin-top: 30px;
  text-align: center;
}
</style>
