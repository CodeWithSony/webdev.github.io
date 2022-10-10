console.log("Hello Sony");
showStory();
let addNote = document.getElementById("addNote");
addNote.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle");
    let story = localStorage.getItem("story");
    // let storyObj;
    if(story==null){
        storyObj = [];
    }
    else{
        storyObj = JSON.parse(story);
    }
    let myObj = {
        title: addTitle.value,
        text: addTxt.value
    }
    storyObj.push(myObj);
    localStorage.setItem("story", JSON.stringify(storyObj));
    addTitle.value= " ";
    addTxt.value = " ";
    showStory();
})
function showStory() {
    let story = localStorage.getItem("story");
    if(story==null){
         storyObj = [];
    }
    else{
        storyObj = JSON.parse(story);
    }
    let html = " "; 
    Array.from(storyObj).forEach(function (element, index) {
         html += `
        <div class="noteCard card my-2 mx-2" style="width: 21rem;">
        <div class="card-body">
          <h5 class="card-title"> ${index+1}. ${element.title}</h5>
          <p class="card-text">${element.text}</p>
          <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-danger">Delete Story</button>
        </div>
        </div>`
    });
    let notesElm = document.getElementById("notes");
    if(storyObj.length != 0){
        notesElm.innerHTML = html;
    } 
    else{
        notesElm.innerHTML = `Nothing to show! Please use "Add a story" section above to add a story.`;
    }
}
function deleteNote(index) {
    let story = localStorage.getItem("story");
    if(story==null){
        storyObj = [];
    }
    else{
        storyObj = JSON.parse(story);
    }
    storyObj.splice(index, 1);
    localStorage.setItem("story", JSON.stringify(storyObj));
    showStory();
  }

  let search = document.getElementById("searchTxt");
  search.addEventListener("input", function () {

      let inputVal = search.value.toLowerCase();
      let noteCards = document.getElementsByClassName("noteCard");

      Array.from(noteCards).forEach(function(element){
      let storyTxt = element.getElementsByTagName("p")[0].innerText;
      if(storyTxt.includes(inputVal)){
        element.style.display = "block";
      }
      else{
        element.style.display = "none";
      }
    })

    })


   
//after navbar
let afterNavbar = document.querySelector(".bodyme");
afterNavbar.addEventListener("mousemove", function(e){
document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY},17)`;
})

// for Audio
let sound = document.createElement('audio');
sound.id = 'audio';
sound.controls = 'controls';
sound.src = "haiKinahi.mp3";
sound.type = 'audio/mp3';
let  ctr = document.getElementById("audioContainer").appendChild(sound);
console.log(ctr);

function playAudio() {
    document.getElementById("audio").play();
}
setTimeout("playAudio", 3000);


  


