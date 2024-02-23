<script>
     import thumb from '$lib/assets/fakeMap.png';
     let alt = 'A header image.'
</script>

<slot>
     <img src={thumb} alt={alt}>
</slot>

<style>
     img {
          width: 394px;
          height: 225px;
          flex-shrink: 0;
     }
</style>