
// target the logo
let logo = document.querySelector('.myLogo');
logo.addEventListener('click', (e)=>{
   console.log(e.target)
   console.log(e.target.getAttribute('src'));
   console.log(`Do you have a class of myLogo: ${e.target.className == 'myLogo'}`)
   alert('This is Tobi\'s konga');
   
});

let dropDown = document.getElementById('drop');

// console.log(dropDown);

let button = document.getElementById('login');
// console.log(button);
// add an event listener for click
button.addEventListener('click', ()=>{
   dropDown.classList.toggle('show');
})

// add an event listener to cancel button
let close = document.getElementById('closeBtn');
// console.log(close);

close.addEventListener('click', ()=>{
   // console.log(dropDown.classList);
   dropDown.classList.remove('show');
   
})

// fetch the data from product.json
let products = fetch('product.json');

console.log(products);   //products: Promise
 

// consume the value returned by our promise
products
   .then((d)=>{
      return d.json()
   })
   .then((value)=>{
      console.log(value);
      // get the product container div
      let productCont = document.querySelector('#productCont');
      let productContent = '';
      
      // use for loop to generate/ duplicate the productItem
      for(i=0; i < value.length; i++){
         productContent += `<div class="productItem">
                              <div class="saveProduct"><i class="fa-solid fa-heart" style="color: #ffffff;"></i></div>
                              <span class="topSpan">-9%</span>
                              <div class="prodImg">
                                 <img src=${value[i]['Product Image']} >
                              </div>
                              <p>${value[i]['Product Name']}</p>
                              <div class="prodPrice">
                                 <h3><i class="fa-solid fa-naira-sign"></i>${value[i]['Product Price']}</h3>
                                 <p>N <s>46,263</s></p>
                                 <span class="prodSpan">-29%</span>
                              </div>
                              <p class="p">You save N11,300</p>
                              <hr>
                              <p class="soldBy">Sold by <span>Official Apple Store</span></p>
                              <div class="ratingCont">
                                  <div>
                                    <i class="fa-solid fa-star" style="color: #dedede;"></i>
                                    <i class="fa-solid fa-star" style="color: #dedede;"></i>
                                    <i class="fa-solid fa-star" style="color: #dedede;"></i>
                                    <i class="fa-solid fa-star" style="color: #dedede;"></i>
                                    <i class="fa-solid fa-star" style="color: #dedede;"></i>
                                 </div>
                                 <p>No reviews yet</p>
                              </div>
                              <div class="prodBtn"><a><button>Add To Cart</button></a></div>
                           </div>`;

                    productCont.innerHTML = productContent;
      }
      // console.log(productItem);
   })
   .catch((err)=>{
      console.log(err.message)
   });


   // Select all <p> tags within the 'left' div
let allP = document.querySelectorAll('.left p');

// Select the 'right' div where content will be displayed on hover
let display = document.querySelector('.right .first');
// get the img container in the right display
let imgCont = document.querySelector('.right .second')
let imgContNav = document.querySelector('.cont .second')

// Fetch content from the JSON file
let contentData = {};

fetch('dropDown.json') //asynchronous operation 
   .then(response => response.json())  //converts the json to js object
   .then(data => {
      contentData = data;  //store the data in the contentData object we defined 
      console.log(contentData);
      
      // before loop, set the initial content to a default for computers
      allP.forEach((p)=>{
         if(p.classList.contains('computers')){
            console.log('FOund a computer class')
            let content = contentData['computers'];
            console.log(content);
            
            display.innerHTML = createContentHTML(content)
         }
         else{
            console.log('could not find any computers class');
            
         }
      })

      
   })
   .catch(error => console.error('Error fetching JSON:', error));

// Loop through all <p> tags and add event listeners
allP.forEach((p) => {
   p.addEventListener('mouseenter', (event) => {
      // Remove 'selected' class from all <p> elements
      allP.forEach((p) => p.classList.remove('selected'));

      // Add 'selected' class to the current <p> element
      p.classList.add('selected');

      // Get the content from JSON data based on class name
      const className = event.target.className.split(" ")[0];
      event.target.style.color = '#b1015f'
      // get the values stored in our object contentData that has the key in className 
      const content = contentData[className]; 

      // If content is found, display it
      if (content) {
         setTimeout(()=>{
            display.innerHTML = createContentHTML(content);

         }, 300)
      } else {
         display.innerHTML = '';
         // content = 'computers';
         // display.innerHTML = createContentHTML(content)
      }
   });

  
   // Optionally clear content on mouse leave
   p.addEventListener('mouseleave', () => {
      // display.innerHTML = '';  // Clear display on mouse leave if desired
      // remove the color of the target
      p.style.color = 'black'
   });
});

// loop through all the ps in the second navbar and add an event listener
const allNavPs = document.querySelectorAll('.drp');
const navDrop = document.querySelector('.navDrop-wrapper');
const navInner = document.querySelector('.navDrop .first')
allNavPs.forEach((p)=>{
   p.addEventListener("mouseenter", (e)=>{
      // make the display visible
      navDrop.classList.add('visible')
      // get the class of the p tag
      const className = e.target.firstElementChild.className.split(' ')[0].trim();
      console.log(`ClassName: `,className)
      const data = contentData[className];
      navInner.innerHTML = createContentHTML(data);
   })
   p.addEventListener('mouseleave', (e)=>{
      navDrop.classList.remove('visible');
   })

   
})
// Function to create HTML structure for the content
function createContentHTML(content) {
   
   let html = '';
   content.items.forEach((item)=>{
      // let heading;
      // let p;
      html += `<div class"div">
                  <h4>${item.title}</h4>`;

      item.details.forEach(pText=>{
            html += `<p class="para">${pText}</p>`;
   })
      html += `</div>`;
  })
  let img;
  if(content.image){
   img =  `<img src="${content.image}">`;
   // call img gnerator
   // imgCont.innerHTML = imgGenerator(img);
   imgCont.innerHTML = img;
   imgContNav.innerHTML = img;
   
}
   return html;
}

function imgGenerator(img){

}

// get the width of the main div

// const main = document.getElementById('main');
// const width = main.getBoundingClientRect();
// console.log('width',width)
