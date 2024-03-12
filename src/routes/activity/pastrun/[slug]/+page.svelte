<script>
     import CommonProblemsButtonContainer from "$lib/CommonProblemsButtonContainer.svelte";

     import fakeMap from '$lib/assets/fakeMap.png';

     import vhappyIcon from '$lib/assets/faceIcons/VHappyIcon.svg';
     import happyIcon from '$lib/assets/faceIcons/HappyIcon.svg';
     import normalIcon from '$lib/assets/faceIcons/NormalIcon.svg';
     import sadIcon from '$lib/assets/faceIcons/SadIcon.svg';
     import vsadIcon from '$lib/assets/faceIcons/VSadIcon.svg';

     import homeIcon from '$lib/assets/homeWhiteicon.svg';
     import activityIcon from '$lib/assets/activityWhiteicon.svg';

     import HeaderWithBack from "$lib/HeaderWithBack.svelte";
	import NavigationBar from "$lib/NavigationBar.svelte";
	import PastRunContent from "$lib/PastRunContent.svelte";

     import { runs } from '$lib/data';

     // function filter_runs(id) {
     // return runs.find((runs) => runs.id === id);
     // }

     // const filtered_data = filter_runs(2);



     let pulledEmotion;

     if (filtered_data.emotion == 'vsad'){
          pulledEmotion = vsadIcon;
     }

     if (filtered_data.emotion == 'sad'){
          pulledEmotion = sadIcon;
     }

     if (filtered_data.emotion == 'normal'){
          pulledEmotion = normalIcon;
     }

     if (filtered_data.emotion == 'happy'){
          pulledEmotion = happyIcon;
     }

     if (filtered_data.emotion == 'vhappy'){
          pulledEmotion = vhappyIcon;
     }
</script>

<slot>

</slot>


