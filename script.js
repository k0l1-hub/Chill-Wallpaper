let video = document.getElementById("finalWallId"); 
let title = document.getElementById("title");
let artist = document.getElementById("artist");
let albumTitle = document.getElementById("albumTitle");
let Thumbnail = document.getElementById("Thumbnail");
let musicBox = document.getElementById("musicBox");

let SelImg;
let newObj;

function livelyCurrentTrack(data) {
    let obj = JSON.parse(data);
    if (obj.Title != null && obj.Title != newObj) {

        // Removing  
        musicBox.classList.add("Remove");
        musicBox.classList.remove("Put");

        // changing info
        setTimeout(() => {
            title.innerText = obj.Title;
            artist.innerText = obj.Artist;
            albumTitle.innerText = obj.AlbumTitle;
            Thumbnail.src = `data:image/png;base64,${obj.Thumbnail}`;
            musicBox.classList.remove("Remove");
            musicBox.classList.add("Put");
        }, 350);

        // Different
        newObj = obj.Title;
    }
}

async function livelyPropertyListener(name, val) {
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
}
