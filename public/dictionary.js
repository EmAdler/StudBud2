//DICTION JS

//REFERENCE//

//Calling the API for the diction 
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
//Call the results and searchbutton elements from HTML
const result = document.getElementById("result");
const searchbutton = document.getElementById("searchbutton");

//Event listerner that checks the words being typed and outputs the corresponding information
searchbutton.addEventListener("click", () => {
  let inpWord = document.getElementById("inp-word").value;
  //finds the content and correspondning data needed
  fetch(`${url}${inpWord}`)
    .then((response) => response.json())
    .then((data) => {
      //console the data
      console.log(data);
      //display of the infromation, use addional words e.g. word search: to provide context for user
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
    })
    //If word can not be found in API data base the error message 'counld'nt find the word' will appear
    .catch(() => {
      result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
    });
});

//Function that allows the text 'your information will appear here' to appear if the users hasnt search a word then disapear once it has been searched
function updateEmpty() {
  if (dictionary.length > 0) {
    document.getElementById("emptyList").style.display = "none";
  } else {
    document.getElementById("emptyList").style.display = "block";
  }
}