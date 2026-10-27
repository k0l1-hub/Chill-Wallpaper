let video = document.getElementById("finalWallId"); 
let title = document.getElementById("title");
let artist = document.getElementById("artist");
let albumTitle = document.getElementById("albumTitle");
let Thumbnail = document.getElementById("Thumbnail");
let musicBox = document.getElementById("musicBox");
let rem = document.querySelector(".Remove")
let side = true;

let SelImg;
let newObj;

function livelyCurrentTrack(data) {
    let obj = JSON.parse(data);
    if (obj.Title != null && obj.Title != newObj) {

        // Removing  
        if (side) {
            musicBox.classList.add("Remove");
        } else {
            musicBox.classList.add("remove");
        }
        musicBox.classList.remove("Put");

        // changing info
        setTimeout(() => {
            title.innerText = obj.Title;
            artist.innerText = obj.Artist;
            albumTitle.innerText = obj.AlbumTitle;
            Thumbnail.src = `data:image/png;base64,${obj.Thumbnail}`;
            musicBox.classList.add("Put");
            if (side) {
                musicBox.classList.remove("Remove");
            } else {
                musicBox.classList.remove("remove");
            }
        }, 300);

        // Different
        newObj = obj.Title;
    }
}

async function livelyPropertyListener(name, val) {
    if (name == "imgSelect") {
        if (val != SelImg) {
            SelImg = val
            if (val.slice(-4) == ".mp4" || val.slice(-4) == ".mov" || val.slice(-4) == ".mov") {
                if (!video) {
                    video = document.createElement("video");
                    video.id = "finalWallId";
                    video.autoplay = true;
                    video.muted = true;
                    video.loop = true;
                    video.classList.add("finalWallId")
                    document.body.appendChild(video);
                }
                video.src = val.replace("\\", "/")
            } else {
                if (video) {
                    video.remove()
                }

            document.body.style.backgroundImage = `url(${val.replace("\\", "/")})`; // >:c
            
            }
        }
    } else if (name == "where") {
    // "items": ["top Left", "Top Right", "Bottom Left", "Bottom Right"]
        if (val == 0) { // top Left
            musicBox.style.top = "30px";
            musicBox.style.left = "30px";
            musicBox.style.bottom = "auto";
            musicBox.style.right = "auto";
            side = false;
            musicBox.style.flexDirection = "row-reverse";
        } else if (val == 1) { // Top Right
            musicBox.style.top = "30px";
            musicBox.style.right = "30px";
            musicBox.style.left = "auto";
            musicBox.style.bottom = "auto";
            side = true;
            musicBox.style.flexDirection = "row";
        } else if (val == 2) { // Bottom Left
            musicBox.style.bottom = "30px";
            musicBox.style.left = "30px";
            musicBox.style.top = "auto";
            musicBox.style.right = "auto";
            side = false;
            musicBox.style.flexDirection = "row-reverse";
        } else { // Bottom Right
            musicBox.style.bottom = "30px";
            musicBox.style.left = "auto";
            musicBox.style.top = "auto";
            musicBox.style.right = "30px";
            side = true;
            musicBox.style.flexDirection = "row";
        }
    }
}