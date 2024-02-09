<script>
    let subheader = 'Day 1';
    let title = 'Run For Fun'
    let description = 'Aim for light jog for 5 mins'

</script>

<slot>
    <div>
        <p class="subheader">{subheader}</p>
        <p class="title">{title}</p>
        <p class="description">{description}</p>
    </div>
</slot>

<style>

    div{
        font: 'Poppins';
    }

    .subheader{
        color: var(--blue-400);
    }

    .title{
        color: var(--lavender-700);
    }

    .description{
        color: var(--blue-400);
    }

</style>