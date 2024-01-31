<script>
	import PillButton from "./PillButton.svelte";

    export let page = 'home';
    let subheading;
    let header;

    if (page == 'home'){
        subheading = 'Good morning!';
        header = 'Home';
    }

</script>

<slot>
    <div class="container">
        <div class="headerText">
            <p class="headerPageSub">{subheading}</p>
            <h1 class="headerPageTitle">{header}</h1>
        </div>
        <div class="headerButton">
            <PillButton></PillButton>
        </div>
    </div>
    
</slot>

<style>
    .container {
        display: flex;
        top: 0;
        justify-content: space-between;
        align-items: flex-end;
        width: 393px;
        height: 150px;
    }
    .headerButton {
        padding-bottom: 15px;
        padding-right: 15px;
    }

    .headerText {
        display: flex;
        flex-direction: column;
        padding-bottom: 15px;
        padding-left: 15px;
    }

    .headerPageTitle {
        margin: 0;
    }

    .headerPageSub {
        margin: 0;
    }
</style>