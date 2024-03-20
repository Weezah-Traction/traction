<!-- Pil Button -->
<!-- Used to trigger a functions, such as Editing Widgets and Progressing in Slides -->
<script>
    export let link = "../"
    export let text = "Button"
</script>


<slot>
    <button>{text}</button>
</slot>

<style>
     button{
          display: flex;
          width: 123px;
          height: 34px;
          padding: 7px 14px;
          justify-content: center;
          align-items: center;
          border-radius: 5em;

          border-radius: 40px;
          background: var(--Lavender-300, #DFCEFD);
     }
</style>