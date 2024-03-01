<script>
     export let title;
     export let content;
</script>

<slot>
     <h6>{title}</h6>
     <p>{content}</p>
</slot>

<style>
     h6 {
          padding-top: 24px;
     }

p {
     padding: 8px 0px 16px 0px;
}


</style>