<script>
     export let link = "../"
     export let text = "Button"
 </script>
 
 
 <slot>
     <a href={link}>{text}</a>
 </slot>
 
 <style>
      a{
          display: flex;
          width: 353px;
          height: 50px;
          justify-content: center;
          align-items: center;
          border-radius: 40px;
          background: var(--Lavender-300, #DFCEFD);
      }
 </style>