<script>
	import LongButton from "./LongButton.svelte";

</script>
<slot>
    <div class="container">
        <div class="text">
            <h1>Welcome to Weezer</h1>
            <p>This is filler text, hello hi.</p>
            <p>Does anyone know where to get a light?</p>
            <p>If you need a martini, let me know.</p>
            <p>Are you ready to get weezy?</p>
        </div>
        <div class="inputs">
            <LongButton></LongButton>
            <LongButton></LongButton>
        </div>
    </div>
</slot>

<style>
    .container{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
</style>