<script>
	import Button from "../../lib/Button.svelte";
	import LongButton from "../../lib/LongButton.svelte";
  import NavigationBar from "../../lib/NavigationBar.svelte";
  import NavigationBarButton from "../../lib/NavigationBarButton.svelte";
	import PillButton from "../../lib/PillButton.svelte";
	import TextSubmission from "../../lib/TextSubmission.svelte";
</script>


<h1>Development Test</h1>

<NavigationBar></NavigationBar>
<Button></Button>
<TextSubmission purpose=fname></TextSubmission>
<TextSubmission purpose=date></TextSubmission>
<br>
<PillButton></PillButton>
<LongButton type='submit'></LongButton>