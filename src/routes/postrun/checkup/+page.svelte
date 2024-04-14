<script>
    import BlankHeader from "$lib/BlankHeader.svelte";
    import EmojiRadio from "$lib/EmojiRadio.svelte";
	import PostrunButtons from "../../../lib/PostrunButtons.svelte";
    import CommonProblemsButtonContainer from "$lib/CommonProblemsButtonContainer.svelte";

</script>

<slot>
    <BlankHeader page="checkup"></BlankHeader>
    <div class="bodyContent">
        <div class="emotionContainer">
            <h6>How do you feel after this run?</h6>
            <EmojiRadio></EmojiRadio>
        </div>
        <div class="issuesContainer">
            <h6>Select any issues you dealt with on this run.</h6>
            <CommonProblemsButtonContainer></CommonProblemsButtonContainer>
        </div>
        <PostrunButtons page="checkup"></PostrunButtons>
    </div>
</slot>

<style>


    .emotionContainer {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin: 0 20px;
    }
    .issuesContainer {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin: 0 20px;
        margin-bottom: 1em;
    }
</style>