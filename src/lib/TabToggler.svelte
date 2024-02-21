<script>
    export let page = 'widget';
    let leftText;
    let rightText;

    if (page == 'widget'){
        leftText = 'Home';
        rightText = 'Run';
    }

    if (page == 'activity'){
        leftText = 'Activity';
        rightText = 'Achievements';
    }

</script>

<slot>
     <label class="TabToggler">
               <div class="TabToggler_TextBox">
                    <input type="radio" id="left" name="toggler" value="left" checked>
                    <label for="left" class="TabToggler_text">{leftText}</label>
                    <input type="radio" id="right" name="toggler" value="right">
                    <label for="right" class="TabToggler_text">{rightText}</label>
               </div>
          <!--<input type="checkbox">-->
          <span class="slider"></span>
     </label>
     <!--<label class="switch">
          <input type="checkbox">
          <span class="slider round"></span>
     </label>-->
</slot>

<style>
     .TabToggler {
          display: flex;
          justify-content: center;
          max-width: 353px;
          height: 44px;
          justify-content: center;
          align-items: center;
          border-radius: 20px;
     }

     .TabToggler input {
          opacity: 0;
          width: 0;
          height: 0;
     }

     .slider {
          display: flex;
          z-index: 0;
          cursor: pointer;
          width: 353px;
          height: 44px;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 20px;
          background-color: #D9D9D9;
          -webkit-transition: .4s;
          transition: .4s;
          }

     .slider:before {
          content: "";
          height: 44px;
          width: 176.5px;
          left: 2px;
          top: 1px;
          border-radius: 20px;
          background-color: white;
          -webkit-transition: .4s;
          transition: .4s;
          }

     input:checked + .slider {
          background-color: #D9D9D9;
          }

     input:focus + .slider {
          box-shadow: 0 0 1px #34C759;
          }

     input:checked + .slider:before {
          -webkit-transform: translateX(176.5px);
          -ms-transform: translateX(176.5px);
          transform: translateX(176.5px);
          }

     .TabToggler_TextBox {
          position: fixed;
          z-index: 1;
          display: flex;
          width: 353px;
          justify-content: space-around;
     }

     .TabToggler_text {
          font-family: Poppins;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          letter-spacing: 0.8px;
          text-align: center;
     }
</style>