window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM entièrement chargé et analysé");


    const element2 = document.getElementById("test");
    const resizeV = document.getElementById("resizing_v");

    resizeV.addEventListener("mousedown", initResize, false);

    function initResize(event) {
        window.addEventListener("mousemove", Resize, false);
        window.addEventListener("mouseup", stopResize, false);
    }

    function Resize(event) {
        element2.style.setProperty("flex-basis", `${event.clientY - 45}px`);
    }

    function stopResize(event) {
        window.removeEventListener("mousemove", Resize, false);
        window.removeEventListener("mouseup", stopResize, false);
    }
});
