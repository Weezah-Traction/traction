<script>
     export let text = "Button";
</script>

<slot>
     <!--Roger, can you turn this into a radio that can be turned off/on?-->
     <p>{text}</p>
</slot>

<style>
     p {
          display: flex;
          height: 48px;
          padding: 2px 20px;
          align-items: center;
          gap: 10px;
          border-radius: 20px;
          border: 3px solid var(--Lavender-300, #DFCEFD);
     }
</style>