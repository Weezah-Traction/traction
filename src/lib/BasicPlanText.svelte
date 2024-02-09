<script>
    export let day = "1";
    export let type;

    let subheader;
    let title;
    let description;

    if (type == "plan"){
        if (day == "1"){
            subheader = 'Day 1';
            title = 'Run For Fun';
            description = 'Aim for light jog for 5 mins';
        }

        if (day == "2"){
            subheader = 'Day 2';
            title = 'Relax & Assess';
            description = 'Give yourself some love!';
        }

        if (day == "3"){
            subheader = 'Day 3';
            title = 'Run For Fun, Again!';
            description = 'Just enjoy nature and have fun!';
        }
    }

    if (type == "guidance"){
        subheader = 'Running Guides';
        title = 'Learn how run enjoyably!';
        description = 'Check out this guide before runs!';
    }
    


</script>

<slot>
    <div>
        <p class="subheader">{subheader}</p>
        <p class="title">{title}</p>
        <p class="description">{description}</p>
    </div>
</slot>

<style>

    .subheader{
        color: var(--blue-400);
    }

    .title{
        color: var(--lavender-700);
        font-weight: bold;
    }

    .description{
        color: var(--blue-400);
    }

</style>