<script>

</script>


<slot>
   <div class ="widgetbox"> 
     <div class="smallWidget">
         <div class="widgDisplay">
              <slot name="widgDisplay">No Display</slot>
         </div>
         <header>
              <slot name="widgName">No Name</slot>
         </header>
    </div>
</div>
</slot>

<style>
    
    .widgetbox {
     display: flex;
     flex-wrap: wrap;    
 flex-direction: row;
     margin: 10px 20px 10px 20px;
     }

    .smallWidget{
         display: flex;
         align-items: center;
         justify-content: space-around;
         width: 100px;
         height: 100px;
         flex-direction: column;
         gap: 19.364px;
         background-color: #9A9A9A;
         border-radius: 22px;
    }

    header {
         display: flex;
         align-items: center;
         justify-content: center;
         width: 60px;
         height: 30px;
         color: #FFF;
         padding-bottom: 10px;
         text-align: center;
         font-family: Poppins;
         font-size: 12px;
         font-style: normal;
         font-weight: 400;
         line-height: 16px; /* 133.333% */
    }

    .smallWidget {
         display: flex;
         align-items: center;
         justify-content: center;
         color: #FFF;
         margin-top: 10px;
         text-align: center;
         font-family: Fugaz One;
         font-size: 16px;
         font-style: normal;
         font-weight: 400;
         line-height: 16px; /* 100% */
    }
</style>