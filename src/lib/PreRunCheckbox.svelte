<script>
    export let type = 'cat';

    export let title;
</script>

<slot>
    <div class="custom_checkbox">
        <label class="container"> {title}
            <input type="checkbox" id=1 name='prerun' />
            <span class="checkmark"></span>
        </label>
    </div>
</slot>

<style>
    /* The container */
.container {
  display: flex;
  position: relative;
  padding-left: 35px;
  height: 2em;
  margin-bottom: 12px;
  align-items: center;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  border: 2px solid var(--lavender-700);
  border-radius: 2px;

}


/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: var(--lavender-500);
  border: 2px solid var(--lavender-500);;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.custom_checkbox{

}

</style>