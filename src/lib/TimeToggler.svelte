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
          <label class="TimeToggler">
                    <div class="TimeToggler_TextBox">
                         <input type="radio" id="week" name="toggler" value="week" checked>
                         <label for="week" class="TimeToggler_text">Week</label>
                         <input type="radio" id="month" name="toggler" value="month">
                         <label for="month" class="TimeToggler_text">Month</label>
                         <input type="radio" id="year" name="toggler" value="year">
                         <label for="year" class="TimeToggler_text">Year</label>
                         <input type="radio" id="all" name="toggler" value="all">
                         <label for="all" class="TimeToggler_text">All</label>
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
          .TimeToggler {
               display: flex;
               justify-content: center;
               max-width: 353px;
               height: 44px;
               justify-content: center;
               align-items: center;
               border-radius: 20px;
          }

          .TimeToggler input {
               opacity: 0;
               width: 0;
               height: 0;
          }

          .slider {
               display: flex;
               z-index: 0;
               cursor: pointer;
               width: 88px;
               height: 44px;
               top: 0;
               left: 0;
               right: 0;
               bottom: 0;
               border-radius: 20px;
               background-color: #DFCEFD;
               -webkit-transition: .4s;
               transition: .4s;
               }

          .slider:before {
               content: "";
               height: 44px;
               width: 88px;
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

          .TimeToggler_TextBox {
               position: fixed;
               z-index: 1;
               display: flex;
               width: 353px;
               justify-content: space-around;
          }

          .TimeToggler_text {
               font-family: Poppins;
               font-size: 16px;
               font-style: normal;
               font-weight: 400;
               line-height: normal;
               letter-spacing: 0.8px;
               text-align: center;
          }
     </style>