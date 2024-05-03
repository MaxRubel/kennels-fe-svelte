<script>
// @ts-nocheck

    import { onMount } from "svelte";
    import AddAnimal from "./forms/AddAnimal.svelte";
    import { getAllAnimals } from "../api/animals";

    let animals = []
    let animalsOg = []
    let animalToEdit = null
    let form = false
    let searchInput = ""

    onMount(()=>{
        getAllAnimals().then((data)=>{
            animalsOg = data
            animals = data
            console.log(animals)
        })
    })
    
    const viewAnimal = (/** @type {object} */ animal) => {
        form = true
        animalToEdit = animal
    }

    const handleClick = animal => {
        form = true
    }

    const formSubmitted = () => {
        form = false
        getAllAnimals().then((data)=>{
            animals = data
        })
    }

    const backButton = () => {
        form = false
    }

    $:{if(searchInput){
    animals = animalsOg.filter(item =>
        item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.breed.toLowerCase().includes(searchInput.toLowerCase())
);
    }else {
        animals = animalsOg
    }
}

</script>
<main>
    {#if form}
   <AddAnimal 
        animalToEdit={animalToEdit} 
        backButton={backButton} 
        formSubmitted={formSubmitted}/>
    {:else} 
    <button on:click={handleClick} type="button">
        Add an Animal
    </button>
    <input type="text" bind:value={searchInput} placeholder="Search..." >
    <table>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Breed</th>
            <th scope="col">Status</th>
            <th scope="col">Location</th>
            <th scope="col">Customer</th>
          </tr>
        </thead>
        <tbody>
            {#each animals as animal }
            <tr on:click={()=>{viewAnimal(animal)}} class="row">
                <td>{animal.name}</td>
                <td>{animal.breed}</td>
                <td>{animal.status}</td>
                <td>location</td>
                <td>customer</td>
            </tr>                
            {/each}
        </tbody>
      </table>
    {/if}
</main>
<style>
    .row{
        cursor: pointer;
    }
</style>