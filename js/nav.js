const ulTagOfNav = document.getElementById("nav-lists-container");
const menuBar = document.getElementById("menuBar");


// navigation bar
menuBar.addEventListener("click", () => {
  const styles = [...ulTagOfNav.classList];

  styles.forEach((style) => {
    if (style.startsWith("top-")) {

      if (style !== "top-[64px]") {

        ulTagOfNav.classList.remove("top-[-600px]");
        ulTagOfNav.classList.add("top-[64px]");
        document.getElementById('bannerSection').style.zIndex = '-20';
        // change the barIcon into X
        menuBar.setAttribute('class', 'fa-solid fa-x text-[#1dd100] text-2xl block sm:hidden')
        // making the ul lists clickable removing -z-index-10
        setTimeout(() => {
          ulTagOfNav.removeAttribute('style')
        }, 1200);
        

      } else {
       
        ulTagOfNav.setAttribute('style', 'z-index: -10')
        ulTagOfNav.classList.remove("top-[64px]");
        ulTagOfNav.classList.add("top-[-600px]");
        // change the "x" icon into Menubar
        menuBar.setAttribute('class', 'text-2xl fa-solid fa-bars block sm:hidden')
        setTimeout( ()=>{
          document.getElementById('bannerSection').style.zIndex = '20';
        }, 500);
    
      }
    }
  });
});

const tags = document.querySelectorAll('ul li');
const allTag = 2;

console.log(tags);

tags.forEach(element => {
  
       element.addEventListener('click', ()=>{

             alert("Hello")
       })
});