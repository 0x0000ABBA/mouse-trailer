const trailer = document.getElementById("trailer");

const getTrailerIconClass = (type) => {
    switch(type) {
        case "video" :
            return "fa fa-play";
        case "link" : 
            return "fa fa-arrow-up"
    }
}

const animateTrailer = (e, interacting) => {

    const x = e.clientX - trailer.offsetWidth / 2;
    const y = e.clientY - trailer.offsetHeight / 2;

    const keyFrames = {
        transform: `translate(${x}px, ${y}px) scale(${interacting ? 8: 1})`
    }

    trailer.animate(keyFrames, {
        duration: 300,
        fill: "forwards"
    })
}


window.onmousemove = e => {

    const interactable = e.target.closest(".interactable");

    const interacting = interactable !== null;

    const icon = document.getElementById("trailer-icon")

    animateTrailer(e, interacting);

    if (interacting) {
        icon.className = getTrailerIconClass(interactable.dataset.type)
    }

    if (!interacting) {
        icon.className = " ";
    }
}
