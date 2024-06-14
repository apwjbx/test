// Function to open test.htm in fullscreen mode after a delay
function openTest() {
    // Show error message
    document.getElementById("error-message").style.display = "block";

    // Create an audio element for playing sound
    let audio = new Audio('assets/sound.mp3');

    // Delay before opening test.htm
    setTimeout(() => {
        // Create a fullscreen container div
        let fullscreenContainer = document.createElement("div");
        fullscreenContainer.classList.add("fullscreen-container");

        // Create an iframe for test.htm
        let iframe = document.createElement("iframe");
        iframe.setAttribute("src", "D:/website 3/winXP-master/test/windows-xp-main/test.htm"); // Adjust the src URL accordingly
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("width", "100%");
        iframe.setAttribute("height", "100%");
        iframe.setAttribute("allowfullscreen", "true");

        // Add iframe to the fullscreen container
        fullscreenContainer.appendChild(iframe);
        document.body.appendChild(fullscreenContainer);

        // Hide error message
        document.getElementById("error-message").style.display = "none";

        // Play sound when test.htm starts loading
        audio.play();

        // Attempt to make the iframe fullscreen
        if (iframe.requestFullscreen) {
            iframe.requestFullscreen();
        } else if (iframe.mozRequestFullScreen) { /* Firefox */
            iframe.mozRequestFullScreen();
        } else if (iframe.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            iframe.webkitRequestFullscreen();
        } else if (iframe.msRequestFullscreen) { /* IE/Edge */
            iframe.msRequestFullscreen();
        }
    }, 1000); // Delay of 1 second
}

// Function to update time
function updateTime() {
    let time = document.querySelector(".time");
    time.innerHTML = new Intl.DateTimeFormat('en-IN', { hour: 'numeric', minute: 'numeric', hour12: true }).format(new Date());
    time.setAttribute("title", new Intl.DateTimeFormat('en-IN', { hour: 'numeric', minute: 'numeric', hour12: true, year: 'numeric', month: 'long', day: 'numeric' }).format(new Date()));
}

// Update time every minute
setInterval(updateTime, 60000);

// Handle clicking on desktop (deselect icons)
document.querySelector(".desktop").onclick = function () {
    document.querySelectorAll(".icon").forEach((e) => {
        e.classList.remove("selected");
    });
    // Hide error message when clicking on desktop
    document.getElementById("error-message").style.display = "none";
};

// Handle icon clicks (select icon)
document.querySelectorAll(".icon").forEach((icon) => {
    icon.onclick = function () {
        setTimeout(() => {
            document.querySelectorAll(".icon").forEach((e) => {
                e.classList.remove("selected");
            });
            this.classList.add("selected");
        }, 1);
        // Hide error message when clicking on an icon
        document.getElementById("error-message").style.display = "none";
    };
});

// Maximize window
document.querySelector(".max").onclick = function () {
    document.querySelector(".window").classList.toggle("maximized");
};

// Minimize window (toggle readme)
document.querySelector(".min").onclick = function () {
    document.querySelector(".readme").classList.toggle("active");
    document.querySelector(".window").classList.toggle("minimized");
};

// Toggle readme window
document.querySelector(".readme").onclick = function () {
    document.querySelector(".readme").classList.toggle("active");
    document.querySelector(".window").classList.remove("minimized");
};

// Close readme window
document.querySelector(".cls").onclick = function () {
    document.querySelector(".readme").style.display = "none";
    document.querySelector(".window").style.display = "none";
    // Hide error message when closing readme window
    document.getElementById("error-message").style.display = "none";
};

// Double click on Faisal Akhtar icon (open portfolio)
document.querySelector(".faisal-akhtar").ondblclick = function () {
    setTimeout(() => { this.classList.remove("selected"); }, 2);
    // Replace with specific behavior for Faisal Akhtar icon if needed
    window.open("c://"); // Example behavior
};

// Double click on My Computer icon (open GitHub)
document.querySelector(".my-computer").ondblclick = function () {
    setTimeout(() => { this.classList.remove("selected"); }, 2);
    // Replace with specific behavior for My Computer icon if needed
    window.open("c://"); // Example behavior
};

// Double click on My Network icon (open Google in fullscreen)
document.querySelector(".my-network").ondblclick = function () {
    setTimeout(() => { this.classList.remove("selected"); }, 2);
    // Open test.htm in fullscreen mode
    window.open("https://www.google.com/"); // Example behavior
};

// Double click on ReadME icon (open ReadME window)
document.querySelector(".note-pad").ondblclick = function () {
    setTimeout(() => { this.classList.remove("selected"); }, 2);
    document.querySelector(".readme").style.display = "initial";
    document.querySelector(".window").style.display = "initial";
    document.querySelector(".readme").classList.add("active");
};

// Double click on Njrat icon (show error message and start countdown)
document.querySelector(".new-app").ondblclick = function () {
    setTimeout(() => {
        this.classList.remove("selected");
        document.getElementById("error-message").style.display = "block";
        // Start countdown to open test.htm after 1 second
        setTimeout(() => {
            openTest();
        }, 1000);
    }, 1);
};

// Function to make windows draggable
function dragWindow(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "-title-bar")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "-title-bar").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// Initialize dragging for window
dragWindow(document.querySelector(".window"));

// Function to update time initially
updateTime();
