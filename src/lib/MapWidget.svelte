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
        border-radius: 20px;
    }

    .medium{
        width: 30em;
        height: 15em;
    }

    .large{
        width: 30em;
        height: 30em;
    }
    
</style>