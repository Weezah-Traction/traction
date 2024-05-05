<script>
     export let link = "../"
     export let text = "Button"
 </script>
 
 
 <slot>
    <div class="container">
     <a href={link}>{text}</a>
    </div>
 </slot>
 
 <style>
       .container{
        display: flex;
        width: 100%;
     }


      a{
          margin: auto;
          width: 22em;
          display: flex;
          height: 3em;
          justify-content: center;
          align-items: center;
          border-radius: 40px;
          background: var(--Lavender-300, #DFCEFD);
          align-self: center;
      }
 </style>