<template>
  <header class="site-header">
    <h1 class="page-title">Neat stuff</h1>
    <p class="page-subtitle">A neat website for neat stuff</p>
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
  font-family: "Helvetica", sans-serif;
  color: white;
  background: #dddddd;
}

.site-header {
  background: #444444;
  padding: 20px;
}

.site-header,
article {
  border-top: 5px solid #f68b1e;
}

.page-title {
  margin-top: 0;
}

.page-subtitle {
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
