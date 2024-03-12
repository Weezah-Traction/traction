<script>
	import PillButton from "./PillButton.svelte";

export let page = 'home';
let header;
let link;
let text;

if (page == 'home'){
    header = 'Traction';
    link = "/widgetshome";
    text = "Add Widgets";
}

if (page == 'widgets'){
    header = 'Widgets';
    link = "../";
    text = "Home";
}


</script>

<slot>
    <div class="container">
        <div class="headerText">
            <h1 class="headerPageTitle">{header}</h1>
            <PillButton link={link} text={text}></PillButton>
        </div>
    </div> 
</slot>

<style>
    .container {
        position: sticky;
        font-family: 'Poppins';
        background-color:  var(--lavender-100);
        display: flex;
        top: 0;
        justify-content: space-between;
        align-items: flex-end;
        max-width: 100%;
        height: 120px;
    }

    .headerText {
        width: 393px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;
    }

    .headerPageTitle {
        margin: 0;
        font-family: 'Fugaz One';
        font-weight: 100;
    }
</style>