<slot>
    <div class="startRunContainer">
        <a href="/run">
            <h6>Start Run</h6>
        </a>
    </div>
</slot>

<style>
    .startRunContainer {
        display: flex;
        width: 393px;
        justify-content: center;
        align-items: center;
        bottom: 110px;
        position: fixed;
        z-index: 1;
    }

    a{
        display: flex;
        width: 353px;
        height: 50px;
        justify-content: center;
        align-items: center;
        gap: 10px;


        border-radius: 10px;
        border: 3px solid var(--Beige-300, #FCD29F);
        background: #FFB800;
        box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.25);
    }
</style>


