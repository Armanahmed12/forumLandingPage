// Data loading
let latestPosts;

async function fetchData() {
  try {
    const response = await fetch(
      "https://openapi.programming-hero.com/api/retro-forum/latest-posts"
    );
    const data = await response.json();
    displayPostsInfo(data);
    latestPosts = data;

  } catch (error) {
    console.error("Fetch error:", error);
  }
}
fetchData();

// necessary Tags
const latestPostsContainer = document.getElementById("latestPostsContainer");

// Showing all discussion posts in the screen
function displayPostsInfo(data) {

  console.log(data);
  latestPostsContainer.innerHTML = '';
  data.forEach((eachPostInfo) => {
    const {
      author,
      cover_image,
      profile_image,
      title,
      description,
    } = eachPostInfo;
    const div = document.createElement("div");
    div.setAttribute(
      "class",
      "card px-4 py-3 border-2 border-solid border-gray-300 bg-base-100 shadow-xl text-left"
    );
    div.innerHTML = ` <figure>
            <img
              src="${cover_image}"
              alt="Shoes" />
          </figure>
          <div class="card-body p-0 mt-2">
             <h3><i class="fa-regular fa-calendar-minus mr-3"></i> <span>${author.posted_date ? author.posted_date : 'No publish date'}</span></h3>
            <h2 class="card-title">${title}</h2>
            <p>${description}</p>
            <div class='flex flex-row gap-4 items-center mt-3'>
               <img class='h-14 w-14 rounded-full' src="${profile_image}" alt="" />
                <div class='font-semibold'>
                   <h2 class='text-xl'>${author.name}</h2>
                   <h2 class='text-gray-500 font-thin'>${author.designation ? author.designation : 'Unknown'}</h2>
                </div>
            </div>
          </div>`;
          latestPostsContainer.appendChild(div);
  });

}