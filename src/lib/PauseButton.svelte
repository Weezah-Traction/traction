<script>
     export let type = 'Type'; // Declares the property
     let icon;
 
     import stopIcon from '$lib/assets/Stop_Button.svg';
     import pauseIcon from '$lib/assets/Pause_Button.svg';
     import resumeIcon from '$lib/assets/Resume_Button.svg';
     
     let alt = "Alt Text";
     let link = "/postrun"
     
     if (type == "resume"){
         alt = "Resume Button"
         link = "/run"
         icon = resumeIcon;
     }
 
     if (type == "stop"){
         alt = "Stop Button"
         link = "/end"
         icon = stopIcon;
     }
 
     if (type == "pause"){
         alt = "Pause Button"
         link = "/pause"
         icon = pauseIcon;
     }
 
     function pauseIt(){
         if (run_state == 'playing'){
             run_state = 'pausing';
         } 
         else if (run_state == 'pausing'){
             run_state = 'playing';
         }
     }
 
 </script>
 
 <slot>
     <div class={type} on:click={pauseIt}>
          <img src={icon} alt={alt}>
     </div>
 </slot>
 
 <style>
     a {
         border-style: none;
         background-color: transparent;
     }
 </style>