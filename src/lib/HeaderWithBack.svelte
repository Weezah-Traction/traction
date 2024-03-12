<script>
     import thumb from '$lib/assets/backIcon.svg';
     export let header;
     let backLink;
     export let page;

     //How to make this change based on the name of the section we're viewing in Guidance??

     if (page == 'und'){
     header = 'Undefined';
     backLink = '/'
     }

     if (page == 'pastrun'){
     header = 'Run Info';
     backLink = '/activity'
     }

     if (page == 'detail'){
     backLink = '/plans/guidance'
     }

     if (page == 'guidance'){
     header = 'Guidance';
     backLink = '/plans'
     }

     if (page == 'levels'){
     header = 'Levels';
     backLink = '/achievements'
     }
     
     if (page == 'awards'){
     header = 'Awards';
     backLink = '/achievements'
     }

     
     if (page == 'records'){
     header = 'Records';
     backLink = '/achievements'
     }
</script>

<slot>
     <div class="container">
          <div class="headerText">
               <a href={backLink}>
                    <img src={thumb} alt="Back button">
               </a>
               <h1 class="headerPageTitle">{header}</h1>
          </div>
     </div> 
</slot>

<style>
     img {
          height: 30px;
          width: 30px;
     }
     .container {
          position: sticky;
          font-family: 'Poppins';
          background-color:  var(--lavender-200);
          display: flex;
          top: 0;
          justify-content: space-between;
          align-items: flex-end;
          width: 393px;
          height: 120px;
     }

     .headerText {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 10px;
          padding-bottom: 15px;
          padding-left: 15px;
     }

     .headerPageTitle {
          margin: 0;
          font-family: 'Fugaz One';
          font-weight: 100;
     }
</style>