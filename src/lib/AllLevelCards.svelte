<script>
     import fireIcon from '$lib/assets/fireIcon.svg';
     import progbar from '$lib/assets/progbar.svg';
     import flower from '$lib/assets/flower.svg';
     import LevelCard from '$lib/LevelCard.svelte';

     import { levels } from '$lib/data';

</script>

<slot>
     {#each levels as {title, currentXP, xp, streak}}
          <LevelCard
               levelName = {title}
               currentXP = {currentXP}
               nextXP = {xp}
               streakNum = {streak}
          ></LevelCard>
     {/each}
</slot>

<style>

</style>