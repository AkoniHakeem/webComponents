window.onload = () => {
    document.getElementById("wordsArea").addEventListener("input", (e) => {
        const characters = e.target.value;
        const count = characters.length;
        document.getElementById("countsDisplay").innerText = count;
    })
}