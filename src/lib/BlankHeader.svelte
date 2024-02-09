<script>
export let page = 'run';
let header;

if (page == 'run'){
    header = 'Run';
}

if (page == 'postrun'){
    header = 'Cooldown';
}

if (page == 'activity'){
    header = 'Activity';
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