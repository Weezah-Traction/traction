<script>
        export let type = 'Type'; // Declares the property
        let icon;
        let value;

        import emojiWorst from '$lib/assets/faceIcons/VSadIcon.svg'; // Tells app that these icons exist.
        import emojiBad from '$lib/assets/faceIcons/SadIcon.svg';
        import emojiNeutral from '$lib/assets/faceIcons/NormalIcon.svg';
        import emojiGood from '$lib/assets/faceIcons/HappyIcon.svg';
        import emojiBest from '$lib/assets/faceIcons/VHappyIcon.svg';

        let alt = "Alt Text"; // default value for icon alt-text.


     // These change the content in each button based on the value of property "type"

    if (type == "worst"){ 
        alt = "Worst";
        icon = emojiWorst
        value = "1";
    }

    if (type == "bad"){
        alt = "Bad";
        icon = emojiBad;
        value = "2";
    }

    if (type == "neutral"){
        alt = "Neutral";
        icon = emojiNeutral;
        value = "1";
    }

    if (type == "good"){
        alt = "Good";
        icon = emojiGood;
        value = "4";
    }

    if (type == "best"){
        alt = "Best";
        icon = emojiBest;
        value = "5";
    }
    
</script>
 
 <slot>
      <label>
        <input type="radio" name="emotions" value={value}>
        <img src={icon} alt={alt}>
      </label>
 </slot>
 
 <style>
 /* HIDE RADIO */
    [type=radio] { 
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;
    }

    /* IMAGE STYLES */
    [type=radio] + img {
        cursor: pointer;
    }

    /* CHECKED STYLES */
    [type=radio]:checked + img {
        outline: 5px solid var(--lavender-300);
        border-radius: 20px;
    }
 </style>
 