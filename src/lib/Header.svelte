<script>
	import PillButton from "./PillButton.svelte";

    export let page = 'home';
    let link;
    let linkText;
    // let subheading;
    let header;

    if (page == 'home'){
        // subheading = 'Good morning!';
        header = 'Traction';
        link = "/widgets";
        linkText = "Edit Widgets"
    }

    if (page == 'plans'){
        // subheading = 'Plan ahead, and get advice!';
        header = 'Plans';
    }

    if (page == 'activity'){
        // subheading = '';
        header = 'Activity';
    }

    if (page == 'widget'){
        header = 'Widgets';
        link = "../";
        linkText = "Done"
    }

    if (page == 'guidance'){
        header = 'Guidance';
        link = "/plans";
        linkText = "Back"
    }

</script>

<slot>
    <div class="container">
        <div class="headerContent">
            <h1 class="headerPageTitle">{header}</h1>
            <PillButton link={link} text={linkText}></PillButton>
        </div>
    </div>
    
</slot>

<style>
    .container {
        position: sticky;
        font-family: 'Poppins';
        background-color:  var(--lavender-300);
        display: flex;
        top: 0;
        justify-content: space-between;
        align-items: flex-end;
        width: 100%;
        height: 120px;
    }

    .headerPageTitle {
        margin: 0;
        font-family: 'Fugaz One';
    }

    .headerContent {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 10px 20px;
    }
</style>