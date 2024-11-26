
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





// dynamically change the div with .right class on hover of any of the ps
// // get all the p tags
// let allP = document.querySelectorAll('.left p');

// // get the div to display content on hover
// let display = document.querySelector('.right');

// let content = '';
// // loop through all the ps and add change the state of the background color on hover
// allP.forEach((p)=>{
//    p.addEventListener('mouseenter', (event)=>{
//       // loop through all the ps and remove any p that has the class of selected
//       allP.forEach((p)=>{
//          p.classList.remove('selected')
//       })
//       // set the content of the content display div based on the value of the class
//       if(event.target.className === 'computers'){
        
//          p.classList.add('selected');
//          content = `<div class="div">
//                         <h1>Laptops</h1>
//                         <p>Mini Laptops and Netbooks</p>
//                         <p>Notebooks</p>
//                         <p>Ultrabooks</p>
//                         <p>Hybrid PCs</p>
//                         <p>Macbooks</p>
//                         <p>PC Gaming</p>
                        
//                      </div>
//                      <div class="div">
//                         <h1>Desktop and Monitors</h1>
//                         <p>CPUs</p>
//                         <p>All In Ones</p>
//                         <p>Desktop Bundles</p>
//                      </div>
//                      <div class="div">
//                         <h1>Computing Accessories</h1>
//                         <p>Computer Peripherals</p>
//                         <p>Bags, Cases, Covers & Sleeves</p>
//                         <p>Laptop & Desktop Accessories</p>
//                         <p>Storage Devices</p>
//                      </div>
//                         <img src="pictures/computing.webp" >
//                      `;
//       }
//       else if(event.target.className === 'phones'){
 

//        // add the css style to change the bg color
//        p.classList.add('selected');
//          content = `<div>
//                         <h1>Mobile Phones</h1>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                         <p>PC Gaming</p>
//                         <p>PC Gaming</p>
//                      </div>
//                      <div>
//                         <h1>Laptops</h1>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                      </div>
//                      <div>
//                         <h1>Desktop and Monitors</h1>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                      </div>
//                      <div>
//                         <img src="pictures/itel.webp" >
//                      </div>
//                      `;
//       }
//       else if(event.target.className === 'electronics'){

//        // add the css style to change the bg color
//        p.classList.add('selected');
//          content = `<div>
//                         <h1>Mobile Phones</h1>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                         <p>PC Gaming</p>
//                         <p>PC Gaming</p>
//                      </div>
//                      <div>
//                         <h1>Laptops</h1>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                      </div>
//                      <div>
//                         <h1>Desktop and Monitors</h1>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                      </div>
//                      <div>
//                         <img src="pictures/itel.webp" >
//                      </div>
//                      `;
//       }
//       else if(event.target.className === 'fashion'){
  
//        // add the css style to change the bg color
//        p.classList.add('selected');
//          content = `<div>
//                         <h1>Mobile Phones</h1>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                         <p>PC Gaming</p>
//                         <p>PC Gaming</p>
//                      </div>
//                      <div>
//                         <h1>Laptops</h1>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                      </div>
//                      <div>
//                         <h1>Desktop and Monitors</h1>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                      </div>
//                      <div>
//                         <img src="pictures/itel.webp" >
//                      </div>
//                      `;
//       }
//       else if(event.target.className === 'kitchen'){
//        // add the css style to change the bg color
//        p.classList.add('selected');
//          content = `<div>
//                         <h1>Mobile Phones</h1>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                         <p>PC Gaming</p>
//                         <p>PC Gaming</p>
//                      </div>
//                      <div>
//                         <h1>Laptops</h1>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                      </div>
//                      <div>
//                         <h1>Desktop and Monitors</h1>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                      </div>
//                      <div>
//                         <img src="pictures/itel.webp" >
//                      </div>
//                      `;
//       }
//       else if(event.target.className === 'toys'){

//        // add the css style to change the bg color
//        p.classList.add('selected');
//          content = `<div>
//                         <h1>Mobile Phones</h1>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                         <p>PC Gaming</p>
//                         <p>PC Gaming</p>
//                      </div>
//                      <div>
//                         <h1>Laptops</h1>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                      </div>
//                      <div>
//                         <h1>Desktop and Monitors</h1>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                      </div>
//                      <div>
//                         <img src="pictures/itel.webp" >
//                      </div>
//                      `;
//       }
//       else if(event.target.className === 'health'){
   
//        // add the css style to change the bg color
//        p.classList.add('selected');
//          content = `<div>
//                         <h1>Mobile Phones</h1>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                         <p>PC Gaming</p>
//                         <p>PC Gaming</p>
//                      </div>
//                      <div>
//                         <h1>Laptops</h1>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                      </div>
//                      <div>
//                         <h1>Desktop and Monitors</h1>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                      </div>
//                      <div>
//                         <img src="pictures/itel.webp" >
//                      </div>
//                      `;
//       }
//       else if(event.target.className === 'drinks'){
//        // add the css style to change the bg color
//        p.classList.add('selected');
//          content = `<div>
//                         <h1>Mobile Phones</h1>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                         <p>PC Gaming</p>
//                         <p>PC Gaming</p>
//                      </div>
//                      <div>
//                         <h1>Laptops</h1>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                      </div>
//                      <div>
//                         <h1>Desktop and Monitors</h1>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                         <p>lorem</p>
//                      </div>
//                      <div>
//                         <img src="pictures/itel.webp" >
//                      </div>
//                      `;
//       }
      
//       display.innerHTML = content;
     
//    })
// })
















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