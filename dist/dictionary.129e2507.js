const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const searchbutton = document.getElementById("searchbutton");
searchbutton.addEventListener("click", ()=>{
    let inpWord = document.getElementById("inp-word").value;
    fetch(`${url}${inpWord}`).then((response)=>response.json()
    ).then((data)=>{
        console.log(data);
        result.innerHTML = ` 
            <div class = "content">
            <div class="word">
                    <h5> <strong>Word Searched:</strong> ${inpWord}</h5>
                </div>
                <div class="details">
                    <p> <strong>Word Type:</strong> ${data[0].meanings[0].partOfSpeech}</p>
                </div>
                <p class="word-meaning">
                <strong> Meaning: </strong>${data[0].meanings[0].definitions[0].definition}
                </p>
                <p class="word-example">
                <strong>Examples:</strong> ${data[0].meanings[0].definitions[0].example || ""}
                </p>
                </div>`;
    }).catch(()=>{
        result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
    });
});
function updateEmpty() {
    if (dictionary.length > 0) document.getElementById("emptyList").style.display = "none";
    else document.getElementById("emptyList").style.display = "block";
}

//# sourceMappingURL=dictionary.129e2507.js.map
