<script>
	import HeaderWithBack from "../../../lib/HeaderWithBack.svelte";
	import NavigationBar from "../../../lib/NavigationBar.svelte";
	import RecordItem from "../../../lib/RecordItem.svelte";


     import { records } from '$lib/data';

     // function filter_plans(id) {
     // return plans.find((plans) => plans.id === id);
     // }

     // const filtered_data = filter_plans(1);
     // { id: '3', num: '3', header: 'Run for Fun, Again!', description: 'Just enjoy nature!', current: '0', },
     //console.log(filtered_data);
</script>

<slot>
     <HeaderWithBack page="records"></HeaderWithBack>
     <div class="bodyContent">
          {#each records as {title, data, measurement, icon}}
               <div class="lav100"><RecordItem name={title} stat={data}{measurement} thumb={icon}></RecordItem></div>
          {/each}
     </div>
     <NavigationBar></NavigationBar>
</slot>

<style>
     .bodyContent {
          gap: 0;
          margin: 0;
     }
</style>