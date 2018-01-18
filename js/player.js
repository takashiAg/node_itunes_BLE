function play() {
    itunesRemote("play", (e) => {
        console.log("play",e);
    });
}

function pause() {
    itunesRemote("pause", () => {
        console.log("pause");
    });
}

function stop() {
    itunesRemote("stop", () => {
        console.log("stop");
    });
}

function prev() {
    itunesRemote("previous", () => {
        console.log("prev");
    });
}

function next() {
    itunesRemote("next", () => {
        console.log("next");
    });
}


function back() {
    itunesRemote("back", () => {
        console.log("back");
    });
}
