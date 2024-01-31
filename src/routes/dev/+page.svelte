<script>
	import Button from "../../lib/Button.svelte";
	import Header from "../../lib/Header.svelte";
	import LongButton from "../../lib/LongButton.svelte";
  	import NavigationBar from "../../lib/NavigationBar.svelte";
  	import NavigationBarButton from "../../lib/NavigationBarButton.svelte";
	import PillButton from "../../lib/PillButton.svelte";
	import TextSubmission from "../../lib/TextSubmission.svelte";
	import ToggleSwitch from "../../lib/ToggleSwitch.svelte";
	import ToggleContainer from "../../lib/ToggleContainer.svelte";
	import EmojiRadio from "../../lib/EmojiRadio.svelte";
	import SmallestWidget from '$lib/SmallestWidget.svelte';
	import DropdownSubmission from "../../lib/DropdownSubmission.svelte";
	import RunHeroText from "../../lib/RunHeroText.svelte"
	import PopUpIntroduction from "../../lib/PopUpIntroduction.svelte";
	import PreRunCheckbox from "../../lib/PreRunCheckbox.svelte";
	import PreRunChecklist from "../../lib/PreRunChecklist.svelte";
	import BasicPlanItem from "../../lib/BasicPlanItem.svelte";
	import BasicPlanList from "../../lib/BasicPlanList.svelte";
	import PopUp from "../../lib/PopUp.svelte";
	import EmotionPollContainer from "../../lib/EmotionPollContainer.svelte";
</script>


<!--<h1>Development Test</h1>-->


<Header></Header>

<Button></Button>
<br>
<ToggleSwitch></ToggleSwitch>
<br>
<EmotionPollContainer></EmotionPollContainer>
<br>
<SmallestWidget></SmallestWidget>
<br>
<TextSubmission purpose=fname></TextSubmission>
<br>
<TextSubmission purpose=date></TextSubmission>
<br>
<PillButton></PillButton>
<br>
<LongButton type='submit'></LongButton>
<DropdownSubmission></DropdownSubmission>
<RunHeroText></RunHeroText>
<PreRunCheckbox></PreRunCheckbox>
<PopUpIntroduction></PopUpIntroduction>
<PreRunChecklist></PreRunChecklist>

<ToggleContainer></ToggleContainer>

<PopUp></PopUp>

<BasicPlanList></BasicPlanList>


