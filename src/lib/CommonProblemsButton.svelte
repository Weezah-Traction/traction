<script>
     export let text = "Button";
     export let type = 'Type'; // Declares the property
     let value;
     let name;


     // These change the content in each button based on the value of property "type"

     if (type == "1"){ 
          text = "Shortness of Breath";
          value = "1";
     }
     if (type == "2"){ 
          text = "Nausea";
          value = "2";
     }
     if (type == "3"){ 
          text = "Cramps";
          value = "3";
     }
     if (type == "4"){ 
          text = "Stomach Ache";
          value = "4";
     }
     if (type == "5"){ 
          text = "Dizzyness";
          value = "5";
     }
     if (type == "6"){ 
          text = "Pain in Glutes";
          value = "6";
     }
     if (type == "7"){ 
          text = "Pain in Shins";
          value = "7";
     }
     if (type == "8"){ 
          text = "Pain in Heels";
          value = "8";
     }
     if (type == "9"){ 
          text = "Pain in Knees";
          value = "9";
     }
     if (type == "10"){ 
          text = "Pain in Calves";
          value = "10";
     }
</script>

<slot>
     <!--Roger, can you turn this into a radio that can be turned off/on?-->
     
     <label>
          <input type="checkbox" name="problems" value={value}>
          <p>{text}</p>
     </label>
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

      /* HIDE RADIO */
    [type=checkbox] { 
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;
    }

    /* <p> STYLES */
    [type=checkbox] + p {
        cursor: pointer;
    }

    /* CHECKED STYLES */
    [type=checkbox]:checked + p {
          background-color: var(--lavender-300);
    }

</style>