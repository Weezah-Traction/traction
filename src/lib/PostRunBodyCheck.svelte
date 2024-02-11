<script>
    import PillButton from './PillButton.svelte' ;

</script>

<slot>
    <li>
        <PillButton></PillButton>
        <PillButton></PillButton>
        <PillButton></PillButton>
        <PillButton></PillButton>
        <PillButton></PillButton>
        <PillButton></PillButton>
        <PillButton></PillButton>
    </li>
</slot>

<style>
    li{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>
