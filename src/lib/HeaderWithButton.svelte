<script>
	import PillButton from "./PillButton.svelte";

let header = 'Traction';
let text = 'Add Widgets'



   export let tab = 'home';

    function changeTab(){
        if (tab == 'home'){
            header = "Widgets"
            tab = 'widgets';
            text = "Home";
        } else if (tab == 'widgets'){
            header = "Home"
            tab = 'home';
            text = "Add Widgets";
        }
    };



</script>

<slot>
    <div class="container">
        <div class="headerText">
            <h1 class="headerPageTitle">{header}</h1>
            <button on:click={changeTab}>{text}</button>
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
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;
        color: var(--lavender-700);
    }

    .headerPageTitle {
        margin: 0;
        font-family: 'Fugaz One';
    }

    button{
          display: flex;
          width: 150px;
          height: 50px;
          padding: 7px 14px;
          justify-content: center;
          align-items: center;
          border-radius: 40px;
          background: var(--lavender-300);
          border: none;
          cursor: pointer;
          color: var(--lavender-700);
     }
</style>