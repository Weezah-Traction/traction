<slot>
     <div class="dayTracker">
          <h2>1</h2>
          <p>DAY</p>
      </div>
</slot>


<style>
     .dayTracker {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-size: 2em;
          padding-bottom: .5em;

          border-radius: var(--standard-radius)
     }

     p{
          font-weight: 700;
     }

     h2 {
        margin: 0;
    }
</style>