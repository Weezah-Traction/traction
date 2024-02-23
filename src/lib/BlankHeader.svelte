<script>
export let page = 'run';
let header;

if (page == 'run'){
    header = 'Run';
}

if (page == 'home'){
        header = 'Home';
    }

if (page == 'postrun'){
    header = 'Cooldown';
}

if (page == 'activity'){
    header = 'Summary';
}

if (page == 'achievements'){
    header = 'Summary';
}

if (page == 'plans'){
    header = 'Plans';
}

if (page == 'step3'){
    header = 'Check-up';
}

if (page == 'guidance'){
    header = 'Guidance';
}

</script>

<slot>
    <div class="container">
        <div class="headerText">
            <h1 class="headerPageTitle">{header}</h1>
        </div>
    </div> 
</slot>

<style>
    .container {
        position: sticky;
        font-family: 'Poppins';
        background-color:  var(--lavender-200);
        display: flex;
        top: 0;
        justify-content: space-between;
        align-items: flex-end;
        width: 393px;
        height: 123px;
    }

    .headerText {
        display: flex;
        flex-direction: column;
        padding-bottom: 15px;
        padding-left: 15px;
    }

    .headerPageTitle {
        margin: 0;
        font-family: 'Fugaz One';
    }
</style>