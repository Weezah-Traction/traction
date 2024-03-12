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

	 let selected = '';


     </script>

     <slot>
          <div class="container">
               <div class="tabs">
                    <input type="radio" id="radio-week" name="tabs" checked />
                    <label class="tab" for="radio-week">Week</label>
                    <input type="radio" id="radio-month" name="tabs" />
                    <label class="tab" for="radio-month">Month</label>
                    <input type="radio" id="radio-year" name="tabs" />
                    <label class="tab" for="radio-year">Year</label>
                    <input type="radio" id="radio-all" name="tabs" />
                    <label class="tab" for="radio-all">All</label>

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


*,
*:after,
*:before {
	box-sizing: border-box;
}


.container {
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 1em;
}

.tabs {
	display: flex;
	position: relative;
	background-color: var(--lavender-100);
	box-shadow: 0 0 1px 0 rgba(#185ee0, 0.15), 0 6px 12px 0 rgba(#185ee0, 0.15);
	border-radius: 99px;

}

input[type="radio"] {
	display: none;
}

.tab {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 30px;
	width: 90px;
	font-size: 1rem;
	font-weight: 500;
	border-radius: 99px; 
	cursor: pointer;
	transition: color 0.15s ease-in;
     z-index: 2;
}

/* .notification {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2rem;
	height: 2rem;
	margin-left: 0.75rem;
	border-radius: 50%;
	background-color: var(--secondary-color);
	transition: 0.15s ease-in;
} */

input[type="radio"] {
	&:checked {
		& + label {
			color: var(--lavender-700);
			& > .notification {
				background-color: var(--lavender-700);
				color: #fff;
			}
		}
	}
}

input[id="radio-week"] {
	&:checked {
		& ~ .glider {
			transform: translateX(0);
		}
	}
}

input[id="radio-month"] {
	&:checked {
		& ~ .glider {
			transform: translateX(100%);
		}
	}
}

input[id="radio-year"] {
	&:checked {
		& ~ .glider {
			transform: translateX(200%);
		}
	}
}

input[id="radio-all"] {
	&:checked {
		& ~ .glider {
			transform: translateX(300%);
		}
	}
}

.glider {
	position: absolute;
	display: flex;
	height: 30px;
	width: 90px;
	background-color: var(--lavender-300);
	z-index: 0;
	border-radius: 99px;
	transition: 0.25s ease-out;
}

/* @media (max-width: 700px) {
	.tabs {
		transform: scale(0.6);
	}
} */

     </style>