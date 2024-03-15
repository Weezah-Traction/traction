<script>

	import {page} from '$app/stores';
    let target = $page.url.pathname.substr($page.url.pathname);

	console.log(target);

    let leftText;
    let rightText;



    if (target == ("/widgetshome/")){
        leftText = 'Home';
        rightText = 'Run';
    }

    if (target == ("/activity/")){
        leftText = 'Activity';
        rightText = 'Achievements';
    }

	export let state;

	function changeState(){

		if (state == 'activity'){
			state = 'achievements';
		} 
		
		else if (state == 'achievements'){
			state = 'activity';
		}

		/* Home Screen Widgets */


		if (state == 'home'){
			state = 'run';
		} 
		
		else if (state == 'run'){
			state = 'home';
		}

	
	}


</script>

<slot>
     <div class="container">
          <div class="tabs">
               <input type="radio" id="radio-1" on:click={changeState} value="activity" name="tabs" checked />
               <label class="tab" for="radio-1">{leftText}</label>
               <input type="radio" id="radio-2" on:click={changeState} value="achievements" name="tabs" />
               <label class="tab" for="radio-2">{rightText}</label>
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
}
.tabs {
	display: flex;
	position: relative;
	background-color: white;
	box-shadow: 0 0 1px 0 rgba(#185ee0, 0.15), 0 6px 12px 0 rgba(#185ee0, 0.15);
	border-radius: 99px;
	margin-top: 1em;
	border: 2px solid var(--lavender-300);

}

input[type="radio"] {
	display: none;
}

.tab {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 54px;
	width: 180px;
	font-size: 1rem;
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
	background-color: var(--lavender-700);
	transition: 0.15s ease-in;
}

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
	width: 180px;
	background-color: var(--lavender-300);
	z-index: 0;
	border-radius: 99px;
	transition: 0.25s ease-out;
}

</style>