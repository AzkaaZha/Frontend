function download(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Downloading....");
        }, 3000);
    });
}

function verify() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Verify file....");
        }, 2000);
    });
}

function notify(){
    console.log("Download Complete");
}

download()
    .then(result => {
        console.log(result);
        return verify();
    })
    .then(result => {
        console.log(result);
        notify();
    })
    .catch(error => {
        console.log(error);
    });