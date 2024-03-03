<script>
     export let page = "congrats"
     let contLink = "/postrun/levelup"

    if (page == 'congrats'){
        contLink = '/postrun/levelup';
    }

    if (page == 'levelup'){
        contLink = '/postrun/checkup';
    }

    if (page == 'checkup'){
        contLink = '/postrun/cooldown';
    }

    if (page == 'cooldown'){
        contLink = '../../';
    }
</script>

<slot>
     <div class="nav-butts">
          <div class="continue">
              <a href={contLink}>Continue</a>
          </div>
          <div class="skip">
              <a href="../../">Skip All</a>
          </div>
      </div>
</slot>

<style>
     .nav-butts {
          position: absolute; bottom: 0;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
     }

     .continue {
        width: 353px;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--lavender-300);
        border-radius: 10px;
        margin: 0px 0px 15px 0px;
        text-decoration: none;
    }

    .continue a {
        text-decoration: none;
        font-family: 'Poppins';
        color: var(--lavender-700);
    }

    .skip {
        width: 353px;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--lavender-200);
        border-radius: 10px;
        margin: 0px 0px 55px 0px;
    }

    .skip a {
        color: var(--lavender-700);
        text-decoration: none;
        font-family: 'Poppins';
    }
</style>