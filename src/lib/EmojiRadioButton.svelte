<script>
     export let type = 'Type'; // Declares the property
     let icon;
 
     import emojiWorst from '$lib/assets/emojiWorst.svg'; // Tells app that these icons exist.
     import emojiBad from '$lib/assets/emojiBad.svg';
     import emojiNeutral from '$lib/assets/emojiNeutral.svg';
     import emojiGood from '$lib/assets/emojiGood.svg';
     import emojiBest from '$lib/assets/emojiBest.svg';
 
     let alt = "Alt Text"; // default value for icon alt-text.
 
 
     // These change the content in each button based on the value of property "type"
 
     if (type == "worst"){ 
         alt = "Worst"
         icon = emojiWorst;
     }
 
     if (type == "bad"){
         alt = "Bad"
         icon = emojiBad;
     }
 
     if (type == "neutral"){
         alt = "Neutral"
         icon = emojiNeutral;
     }

     if (type == "good"){
         alt = "Good"
         icon = emojiGood;
     }
 
     if (type == "best"){
         alt = "Best"
         icon = emojiBest;
     }
     
 </script>
 
 <slot>
     <img src={icon} alt={alt}>
 </slot>
 
 <style>
 
 </style>
 