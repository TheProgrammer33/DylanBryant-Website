function openModal(imageId) {
    var modal = document.getElementById('imageModal');
    var modalImg = document.getElementById("modalImage");
    var span = document.getElementById("closeImageModal");
    var image = document.getElementById(imageId);

    modal.style.display = "block";
    modalImg.src = image.src;

    span.onclick = span.onclick = function() {
        modal.style.display = "none";
    }
    document.onkeyup = function (e) {
        if(e.key === "Escape") {
            modal.style.display = "none";
        }
    };
}
