<script>
  export let slides;
  
  let currentSlide = 0;
  let concurrentSlides = 1;
  let visibleSlides = slides.slice(slides, concurrentSlides).map((x, i) => i);
  let slideDirection = 1;


  function slide(amount) {
    slideDirection = Math.sign(amount);
    currentSlide = currentSlide + amount;
    const newSlides = [];
    newSlides.push(mod(currentSlide, slides.length));
    visibleSlides = newSlides;
  }

  function mod(n, m) {
    return ((n % m) + m) % m;
  }
</script>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
  }
  main {
    font-family: sans-serif;
    text-align: center;
  }
  .carousel {
    display: flex;
    width: 100vw;
    max-width: 100vw;
    justify-content: center;
    margin: 0 8px;
  }
  .slides {
    display: flex;
    width: auto;
    height: 100%;
    overflow: hidden;
    justify-content: space-around;
  }
  .carousel-ctrl {
    flex-basis: 80px;
  }
  .slide {
    width: 240px;
    height: 240px;
    overflow: hidden;
    transition: 0.75s all ease;
    padding: 0 4px;
  }

  .slide img {
    width: 240px;
    max-width: 100%;
    height: 240px;
    display: block;
    object-fit: cover;
    object-position: center;
    transition: 0.25s all ease;
  }

  .slide:hover img {
    transform: scale(1.1);
  }

  .slide-invisible {
    opacity: 1;
    width: 12px;
    transition: 0.25s all ease;
  }
  .slide-invisible:hover {
    width: 240px;
  }

  button {
    background-color: transparent;
    border: 0;
  }
  button:hover {
    background-color: rgb(241, 241, 241);
    border-radius: 4px;
  }
</style>


<main>
  <div class="carousel">
    <button class="carousel-ctrl" on:click={e => slide(-concurrentSlides)}>
      <i class="fas fa-chevron-left">
      </i>
    </button>
    <div class="slides">
      {#each slides as slide, i}
          <div
            class="slide" class:slide-invisible={!visibleSlides.includes(i)}
            style="">
            <img {...slide} />
          </div>
      {/each}
    </div>
    <button class="carousel-ctrl"  on:click={e => slide(concurrentSlides)}>
      <i class="fas fa-chevron-right">
      </i>
    </button>
  </div>
</main>