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

        if (day == "4"){
            subheader = 'Day 4';
            title = 'Small Steps';
            description = 'Aim for a light jog for 10 mins';
        }

        if (day == "5"){
            subheader = 'Day 5';
            title = 'Touch Grass!';
            description = 'After work, reconnect with nature@';
        }

        if (day == "6"){
            subheader = 'Day 6';
            title = 'First Challenge';
            description = 'Try to keep pace for 1 mile!';
        }

        if (day == "7"){
            subheader = 'Day 7';
            title = 'Party Time!';
            description = 'Celebrate your first week!';
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
        margin-left: 10px;
    }

    .title{
        color: var(--lavender-700);
        font-weight: bold;
        margin-left: 10px;
    }

    .description{
        color: var(--blue-400);
        margin-left: 10px;
    }

</style>