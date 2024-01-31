<script>
    export let type = 'Type'; // Declares the property
    let icon;
    let link;

    import catIcon from '$lib/assets/cat.svg'; // Tells app that these icons exist.
    import dogIcon from '$lib/assets/dog.svg';
    import doveIcon from '$lib/assets/dove.svg';

    let alt = "Alt Text"; // default value for icon alt-text.


    // These change the content in each button based on the value of property "type"

    if (type == "cat"){ 
        alt = "Cat Page"
        icon = catIcon;
        link = '/cat'
    }

    if (type == "dog"){
        alt = "Dog Page"
        icon = dogIcon;
        link = '/dog'
    }

    if (type == "dove"){
        alt = "Dove Page"
        icon = doveIcon;
        link = '/dove'
    }
    
</script>

<slot>
    <li>
        <a href={link} class={type}>
            <img src={icon} alt={alt}>
            <p>{alt}</p>
        </a>
    </li>
</slot>

<style>
    a{
        display: flex;
        flex-direction: column;
    }

    .cat{
        background-color: rgb(255, 175, 218);
    }

    .dog{
        background-color: rgb(199, 199, 250);
    }

    .dove{
        background-color: rgb(187, 248, 187);
    }
</style>

