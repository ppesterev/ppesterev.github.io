<template>
  <header class="site-header">
    <h1 class="page-title">Neat stuff</h1>
    <p class="page-subtitle">A frontend developer's portfolio</p>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
body {
  margin: 0;
  font-size: 16px;
  font-family: "Open Sans", sans-serif;
  background: #dddddd;
}

.site-header {
  /* background: #444444; */
  padding: 20px;
}

.site-header,
article {
  border-bottom: 5px solid #f68b1e;
}

.page-title,
.page-subtitle {
  font-family: "Montserrat", sans-serif;
  text-transform: lowercase;
}

.page-title {
  margin-top: 0;
}

.page-subtitle {
  font-size: 1.8em;
  font-weight: 200;
  font-style: italic;
}

a {
  color: orange;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

code,
pre {
  color: orange;
  white-space: pre-wrap;
}
</style>
