<script>
  import { onMount } from "svelte";
  import getAllLocations from "../api/locations";

let locations = []
onMount(()=>{
    getAllLocations().then((data)=>{
        locations = data
    })
})

</script>

<main>
    {#each locations as location }
        <article>
            <header>{location.name}</header>
            <div class="left"> Employees: {location.employees.length}</div>
            <div class="left">Animals: {location.animals.length}</div>
        </article>
    {/each}
</main>

<style>
    .left{
        text-align: left;
    }
</style>