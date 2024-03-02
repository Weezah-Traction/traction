<script>
     export let title;
     export let content;
</script>

<slot>
     <h6>{title}</h6>
     <p>{content}</p>
</slot>