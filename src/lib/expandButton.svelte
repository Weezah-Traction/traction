<script>

        export let size = 'medium';
    
        import map from '$lib/assets/fakeMap.png';
        let src = map;
  
</script>

<slot>
    <div class="{size}" style="background-image: url({src}) "/>
</slot>

<style>


    div{
        background-size: cover;
        background-position: center;
        border-radius: 0px;
        /* margin: 16px 0px 16px 20px; */
        /* grid-column: 2/ span 5; */
    }

    .medium{
        width: 100%;
        height: 100px;
    }

    .large{
        width: 100%;
        height: 30em;
    }
    
</style>