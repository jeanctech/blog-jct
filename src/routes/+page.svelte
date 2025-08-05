<script>
  import "../styles/style.css";
  let link = "https://www.google.com/";
</script>

<main>
  <center>
    <header>
      <h1>blog-jct - JeanCarlos Jimenez</h1>
      <br />
      <small>Desarrollador Web - Frontend Junior</small>
      <br />
      <strong
        >Esta Web esta Creada con <a id="a-strong" href="http://">svelte</a> y
        <a id="a-strong" href="http://">vite</a>
        y theme - <a id="a-strong" href="http://">rose pine</a></strong
      >
    </header>
    <nav>
      <ul>
        <li><a href={link}>Inicio</a></li>
        <li><a href={link}>Sobre mi</a></li>
        <li><a href={link}>Mis Blogs</a></li>
        <li><a href={link}>Mis Stacks</a></li>
        <li><a href={link}>Mis Proyectos</a></li>
      </ul>
    </nav>
  </center>
</main>

<style></style>
