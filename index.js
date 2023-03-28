const tile_container = document.getElementById("tile_container");

window.onmousemove = e => {
    const mouseX = e.clientX,
          mouseY = e.clientY;

const xDecimal = mouseX / window.innerWidth,
      yDecimal = mouseY / window.innerHeight;

const maxX = tile_container.offsetWidth - window.innerWidth,
      maxY = tile_container.offsetHeight - window.innerHeight;

const panX = maxX * xDecimal * -1,
      panY = maxY * yDecimal * -1;

tile_container.animate({
    transform : `translate(${panX}px , ${panY}px)`
}, {
    duration : 1000,
    fill : "forwards",
    easing : "ease"
})
} 