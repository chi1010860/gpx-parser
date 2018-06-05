var gpx
function getGpx() {
    var url = '/gpx'
    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            gpx = JSON.parse(xhr.responseText)
            console.log(gpx)
        }
    }
    xhr.open('GET', url, true)
    xhr.send()
}
