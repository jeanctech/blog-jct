<script>
  import "../styles/style.css";
  let link = "https://www.google.com/";
</script>

<main>
  <center>
    <header>
      <h1>Blog-Jct <br /> @jeanctech</h1>
      <br />
      <h2>Jean Carlos Jimenez</h2>
      <small>Desarrollador Web - Frontend Junior</small>
      <br />
      <div id="div-header">
        <small class="small-header"
          >Esta Web esta Creada con
          <a id="a-strong" href="http://">Svelte</a> y
          <a id="a-strong" href="http://">Vite.js</a>
          y El Tema Web - <a id="a-strong" href="http://">Rose Pine</a></small
        >
      </div>
      <hr />
    </header>
    <nav>
      <ul>
        <li><a class="a-ul" href={link}>Inicio</a></li>
        <li><a class="a-ul" href={link}>Sobre mi</a></li>
        <li><a class="a-ul" href={link}>Mis Blogs</a></li>
        <li><a class="a-ul" href={link}>Mis Stacks</a></li>
        <li><a class="a-ul" href={link}>Mis Proyectos</a></li>
      </ul>
    </nav>
  </center>
  <br />
  <div id="div-main">
    <h2>Bienvenido a mi Blog</h2>
    <center>
      <p>
        Este es un espacio donde comparto mis conocimientos y experiencias en el
        desarrollo web. <br> Aquí encontrarás artículos sobre tecnologías, proyectos
        y más.
      </p>
    </center>
  </div>
  <div id="div-main">
    <h2>Sobre mi</h2>
    <center>
      <p>
        Soy un desarrollador web apasionado por aprender y compartir. <br> En este
        blog, encontrarás artículos que reflejan mi viaje en el mundo del
        desarrollo web.
      </p>
    </center>
  </div>
  <div id="div-main">
    <h2>Mis Blogs</h2>
    <center>
      <p>
        Aquí puedes explorar mis últimos blogs y artículos. <br> Cada uno está
        diseñado para ofrecerte información valiosa y actualizada sobre el mundo
        del desarrollo web.
      </p>
    </center>
  </div>
  <div id="div-main">
    <h2>Mis Stacks</h2>
    <center>
      <p>
        Descubre las tecnologías y herramientas que utilizo en mis proyectos.
        Desde frameworks hasta lenguajes <br> de programación, aquí encontrarás todo
        lo que necesitas saber sobre mi stack tecnológico.
      </p>
    </center>
  </div>
  <div id="div-main">
    <h2>Mis Proyectos</h2>
    <center>
      <p>
        Explora mis proyectos más recientes. Cada proyecto es una oportunidad
        para aprender y crecer <br> como desarrollador, y estoy emocionado de
        compartirlos contigo.
      </p>
    </center>
  </div>
</main>

<style></style>
