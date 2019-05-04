window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM entièrement chargé et analysé");

    const element = document.getElementById("server_content");
    const resizeH = document.getElementById("resizing_h");

    resizeH.addEventListener("mousedown", initResize, false);

    function initResize(event) {
        window.addEventListener("mousemove", Resize, false);
        window.addEventListener("mouseup", stopResize, false);
    }

    function Resize(event) {
        element.style.setProperty("flex-basis", `${event.clientX}px`);
    }

    function stopResize(event) {
        window.removeEventListener("mousemove", Resize, false);
        window.removeEventListener("mouseup", stopResize, false);
    }
});
