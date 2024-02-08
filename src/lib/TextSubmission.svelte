<script>
export let purpose = '';      
let label = '';
let placeholder = '';
let type = 'text'


if (purpose == 'fname'){
    label = 'First Name';
    placeholder = "Enter in First Name";
}

if (purpose == 'lname'){
    label = 'Last Name';
    placeholder = "Enter in Last Name";
}

if (purpose == 'date'){
    label = 'Birthday';
    type = 'date';
}

</script>

<slot>
    <label for="field">{label}</label>
    <input name="field" type={type} placeholder={placeholder}>
</slot>

