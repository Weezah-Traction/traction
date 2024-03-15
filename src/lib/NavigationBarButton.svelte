<script>

    import {page} from '$app/stores'

    export let type = 'Type'; // Declares the property
    export let selected;
    let icon;
    let link;

    // import catIcon from '$lib/assets/cat.svg'; // Tells app that these icons exist.
    // import dogIcon from '$lib/assets/dog.svg';
    // import doveIcon from '$lib/assets/dove.svg';
    import planIcon from '$lib/assets/plansWhiteicon.svg';
    import homeIcon from '$lib/assets/homeWhiteicon.svg';
    import activityIcon from '$lib/assets/activityWhiteicon.svg';

    let alt = "Alt Text"; // default value for icon alt-text.



    // These change the content in each button based on the value of property "type"

    if (type == "plans"){ 
        alt = "Plans";
        icon = planIcon;
        link = '/plans'
    }

    if (type == "home"){
        alt = "Home"
        icon = homeIcon;
        link = '../../../'
    }

    if (type == "activity"){
        alt = "Activity"
        icon = activityIcon;
        link = '/activity'
    }
    
</script>

<slot>
    <li>
        <a href={link} class={selected}>
            <img src={icon} alt={alt} class={selected}>
            <p>{alt}</p>
        </a>
    </li>
</slot>

<style>

    .true{
        color: var(--lavender-100);
    }

    .false{
        opacity: 0.66;
        color: var(--lavender-300);
    }
    
    a{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-decoration: none;
    }

    img {
        max-width: 48px;
        max-height: 48px;
    }
/* 
    .plans{
        background-color: rgb(255, 175, 218);
    } */

    /* .home{
        background-color: rgb(199, 199, 250);
    } */
/* 
    .activity{
        background-color: rgb(187, 248, 187);
    } */

    li {
        padding: 10px 20px;
    }
</style>

