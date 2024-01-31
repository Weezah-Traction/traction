<script>
     export let status = 'Status'; // Declares the property

 
     if (status == "on"){ 
         alt = "Cat Page"
     }
 
     if (status == "off"){
         alt = "Dog Page"
     }
     
 </script>

<slot>
     <label class="switch">
          <input type="checkbox">
          <span class="slider round"></span>
     </label>
</slot>

<style>
 /* The switch - the box around the slider */
 .switch {
  position: relative;
  display: inline-block;
  width: 56px;
  height: 30px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  height: 27px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #787880;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 25px;
  width: 25px;
  left: 2px;
top: 1px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #34C759;
}

input:focus + .slider {
  box-shadow: 0 0 1px #34C759;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
} 
</style>