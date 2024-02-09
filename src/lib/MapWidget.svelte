<script>
        import map from '$lib/assets/fakeMap.png';
        let src = map;
  
</script>

<slot>
    <div style="background-image: url({src}) "/>
</slot>

<style>
    div{
        width: 30em;
        height: 15em;
        background-size: cover;
        background-position: center;
        border-radius: 20px;
        
    }
</style>