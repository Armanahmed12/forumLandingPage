// Data loading
let existedAllData;

async function fetchData() {
  try {
    const response = await fetch(
      "https://openapi.programming-hero.com/api/retro-forum/posts"
    );
    const data = await response.json();
    showDataOnScreen(data.posts);
    existedAllData = data.posts;
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
fetchData();

// necessary Tags
const discussionsContainer = document.getElementById("discussionsContainer");
const inputField = document.getElementById("textField");
const searchBtn = document.getElementById("searchBtn");

// Showing all discussion posts in the screen
function showDataOnScreen(data) {

  discussionsContainer.innerHTML = "";
  data.forEach((eachPostInfo) => {
    const {
      id,
      isActive,
      author,
      image,
      category,
      title,
      view_count,
      posted_time,
      comment_count,
      description,
    } = eachPostInfo;
    const div = document.createElement("div");
    div.setAttribute(
      "class",
      "flex sm:flex-row flex-col sm:h-[215px] sm:px-8 px-2 sm:py-4 py-2 mb-5"
    );
    div.innerHTML = ` <div class="relative" id="imgContainer">
                      <img class='w-full rounded-xl' src="${image}" alt="">
                      <span style="background:${
                        isActive ? "#00d600" : "red"
                      }"></span>
                   </div>
                   <div class='w-full'>
                     <h1 class='font-semibold text-lg'>#${category} &nbsp;  Author : ${
      author.name
    }</h1>
                     <h2 class="font-semibold text-xl my-2">${title}</h2>
                     <p>${description}</p>
                     <hr>

                     <div class="flex items-center justify-between">
                        <div>
                            <i class="fa-solid fa-message sm:mr-3 mr-1"></i> ${comment_count} <i class="fa-solid fa-eye sm:mx-3 mx-1"></i> ${view_count}<i class="fa-regular fa-clock sm:mx-3 mx-1"></i> ${posted_time} min
                        </div>
                <i id='bookmarkBtn' onclick="addDiscussion(${id})"  class="fa-regular fa-bookmark inline-block ml-auto btnStyle py-3 px-4 hover:bg-black hover:text-white"></i>
                     </div>

                   </div>`;
    discussionsContainer.appendChild(div);
  });
}

// show data based on category
searchBtn.addEventListener("click", () => {
  const matchedData = existedAllData.filter(
    (eachDiscussionInfo) =>
      eachDiscussionInfo.category.toLowerCase() ==
      inputField.value.toLowerCase()
  );

  if (matchedData.length) {
    // showSpinner for 2s before the data is displayed
    discussionsContainer.innerHTML = '';
    const div = document.createElement("div");
    div.innerHTML = `
<span class="loading loading-bars loading-xs"></span>
<span class="loading loading-bars loading-sm"></span>
<span class="loading loading-bars loading-md"></span>
<span class="loading loading-bars loading-lg"></span>`;
discussionsContainer.appendChild(div);
   // for being late
   setTimeout(() => {
    
    showDataOnScreen(matchedData);
    inputField.value = "";

   }, 1000); 

  } else {
    alert("Unknown Category, please write Comedy/Music/Coding.");
  }
});

// Click to the "mark-icon" button to save the discussion
const markedDiscussionsContainerTag = document.getElementById(
  "markedDiscussionsContainer"
);
function addDiscussion(selectedPostId) {
  const matchedData = existedAllData.find(
    (eachPostInfo) => eachPostInfo.id == selectedPostId
  );

  const div = document.createElement("div");
  div.innerHTML = ` <div
           class="bg-white rounded-xl p-2 flex items-center justify-between mt-3">
              <p class="font-semibold">
              ${matchedData.title}
              </p>
              <p><i class="fa-solid fa-eye mr-2 ml-7 inline"></i>${matchedData.view_count}</p>
            </div>`;
  markedDiscussionsContainerTag.appendChild(div);
  // increasing the quantity of marked discussions Number
  const markedQuantityTag = document.getElementById("markedDiscussionNum");
  markedQuantityTag.innerText = parseInt(markedQuantityTag.innerText) + 1;
}

console.log(existedAllData);