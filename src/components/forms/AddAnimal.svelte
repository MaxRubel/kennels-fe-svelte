<script>
import { onMount } from "svelte";
import { createNewAnimal } from "../../api/animals";
export let formSubmitted
export let backButton

let payload = {
    name: "",
    status: "",
    breed: "",
    location_id: 0,
    customer_id: 2,
}

let searchInput = ""

const handleSubmit = (e) => {
e.preventDefault()
createNewAnimal(payload).then(()=>{
    formSubmitted()
})
}
</script>


<main>
<button type="button" on:click={backButton}>
    Back
</button>
<input type="text" bind:value={searchInput}>
<form on:submit={handleSubmit}>
    <input type="text" name="name" bind:value={payload.name} placeholder="name" >
    <input type="text" name="breed" bind:value={payload.breed} placeholder="breed">
    <input type="text" name="status" bind:value={payload.status} placeholder="status">
    <select name="locations" id="" bind:value={payload.location_id}>
        <option value={2}>location </option>
    </select>
    <select name="customers" id="" bind:value={payload.customer_id}>
        <option value={1}>customer </option>
    </select>
        <button type="submit">
            Submit
        </button>
</form>

</main>

<style>

</style>