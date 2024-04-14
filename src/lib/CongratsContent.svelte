<script>
     import gator from '$lib/assets/gator.svg';
</script>

<slot>
     <div class="congratsContent">
          <h1>Amazing Job!</h1>
          <img src={gator} alt="Crocodile">
          <h5>Congratulations on your first run!</h5>
          <p>You are now a part of a community of millions of people that 
               are making a positive change on their mind and body through the simple act of running!
          </p>
     </div>
</slot>

<style>
     .congratsContent {
          display: flex;
          width: 100%;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 10px;
          margin-bottom: 7em;
     }

     img {
          height: 168px;
          width: 176px;
     }

     h1 {
          font-family: 'Fugaz One';
          font-size: 47.78px;
          margin: 10px;
          text-align: center;
     }

     h5 {
          font-family: 'Poppins';
          font-size: 23.04px;
          margin: 10px;
          text-align: center;
     }

     p {
          font-family: 'Poppins';
          font-size: 16px;
          margin: 10px;
          text-align: center;
     }
</style>