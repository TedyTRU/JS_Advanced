function create(words) {

   const content = document.getElementById('content');
   content.addEventListener('click', reveal);

   for (let word of words) {
      const div = document.createElement('div');
      const para = document.createElement('p');
      para.textContent = word;
      para.style.display = 'none';
      div.appendChild(para);

      content.appendChild(div);
   }

   function reveal(e) {
      if (e.target.tagName == 'DIV' && e.target != content) {
         //console.log(e.target);
         e.target.children[0].style.display = '';
      }
   }

}

//-------------------------------------------------------------

function create2(words) {

   // create <DIV>
   // crate <p>
   // set <p> content
   // configure <p> to be hidden (display: none)
   // add <p> to <div>
   // add <div> to page
   // configure <div> eventListener

   const content = document.getElementById('content');

   for (let word of words) {
      const div = document.createElement('div');
      const para = document.createElement('p');
      para.textContent = word;
      para.style.display = 'none';
      div.appendChild(para);

      div.addEventListener('click', reveal);

      content.appendChild(div);

      function reveal(e) {
         //console.log(e.target.children[0]);

         e.currentTarget.children[0].style.display = '';
      }
   }

}