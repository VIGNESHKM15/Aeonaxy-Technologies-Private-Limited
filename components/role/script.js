function toggleAdditionalContent(checkbox) {
    var additionalContent = document.getElementById("additional-content");
    var pressReturnsText = document.getElementById("press-returns-text");
    var pressReturnsText2 = document.getElementById("press-returns-text2");

    if (checkbox.checked) {
        pressReturnsText.style.display = "block";
        pressReturnsText2.style.display = "block";
    } else {
        pressReturnsText.style.display = "none";
        pressReturnsText2.style.display = "none";
    }
}
