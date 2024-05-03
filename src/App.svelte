<script>
// @ts-nocheck

  import Animals from './components/Animals.svelte';
  import { Router, Route } from "svelte-routing";
  import Home from './components/Home.svelte';
</script>

<main>
  <nav>
    <ul>
      <li><strong>Nasvhille Kennels</strong></li>
    </ul>
    <ul>
      <li><a href="animals">Animals</a></li>
      <li><a href="locations">Locations</a></li>
    </ul>
  </nav>
  <Router>
    <div>
      <Route path="/"><Home /></Route>
      <Route path="/animals/"><Animals /></Route>
      <Route path="/locations"><Home /></Route>
    </div>
  </Router>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
