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
          <div class="container">
               <div class="tabs">
                    <input type="radio" id="radio-1" name="tabs" checked />
                    <label class="tab" for="radio-1">Activity</label>
                    <input type="radio" id="radio-2" name="tabs" />
                    <label class="tab" for="radio-2">Achievements</label>
                    <input type="radio" id="radio-3" name="tabs" />
                    <label class="tab" for="radio-3">Achievements</label>
                    <input type="radio" id="radio-4" name="tabs" />
                    <label class="tab" for="radio-4">Achievements</label>

                    <span class="glider"></span>
               </div>
          </div>

          <!--<label class="switch">
               <input type="checkbox">
               <span class="slider round"></span>
          </label>-->
     </slot>

     <style>
          
          @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap");

:root {
	--primary-color: #185ee0;
	--secondary-color: #e6eef9;
}

*,
*:after,
*:before {
	box-sizing: border-box;
}

body {
	font-family: "Inter", sans-serif;
	background-color: rgba(#e6eef9, 0.5);
}
.container {
	display: flex;
	align-items: center;
	justify-content: center;
}
.tabs {
	display: flex;
	position: relative;
	background-color: #fff;
	box-shadow: 0 0 1px 0 rgba(#185ee0, 0.15), 0 6px 12px 0 rgba(#185ee0, 0.15);
	padding: 0.75rem;
	border-radius: 99px;

}

input[type="radio"] {
	display: none;
}

.tab {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 54px;
	width: 200px;
	font-size: 1.25rem;
	font-weight: 500;
	border-radius: 99px; 
	cursor: pointer;
	transition: color 0.15s ease-in;
     z-index: 2;
}

.notification {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2rem;
	height: 2rem;
	margin-left: 0.75rem;
	border-radius: 50%;
	background-color: var(--secondary-color);
	transition: 0.15s ease-in;
}

input[type="radio"] {
	&:checked {
		& + label {
			color: var(--primary-color);
			& > .notification {
				background-color: var(--primary-color);
				color: #fff;
			}
		}
	}
}

input[id="radio-1"] {
	&:checked {
		& ~ .glider {
			transform: translateX(0);
		}
	}
}

input[id="radio-2"] {
	&:checked {
		& ~ .glider {
			transform: translateX(100%);
		}
	}
}

input[id="radio-3"] {
	&:checked {
		& ~ .glider {
			transform: translateX(200%);
		}
	}
}

.glider {
	position: absolute;
	display: flex;
	height: 54px;
	width: 200px;
	background-color: var(--secondary-color);
	z-index: 0;
	border-radius: 99px;
	transition: 0.25s ease-out;
}

@media (max-width: 700px) {
	.tabs {
		transform: scale(0.6);
	}
}

     </style>