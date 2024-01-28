<script>
    export let type = 'Type'; // Declares the property

    // These change the content in each button based on the value of property "type"

     // FOR THE BELOW STUFF: I found a better way to do this was to use slots so you can declare whatever text u want.
     // But I figured we'd probably need to change stylings for some buttons at some point, so I kept the "type" property in.

    //if (type == "primary"){ 
    //    text = "Primary";
    //}

    // (type == "done"){
    //    text = "Done";
    //}

</script>

<slot>
     <button class={type}>
          <slot name="text">NO</slot>
     </button>
</slot>

<style>
     button {
          display: flex;
          width: 123px;
          height: 34px;
          padding: 7px 14px;
          border-radius: 40px;
          background: #D9D9D9;
          justify-content: center;
          align-items: center;
          gap: 4px;
     }
</style>