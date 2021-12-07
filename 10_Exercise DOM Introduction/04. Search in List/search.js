function search() {

   const elements = Array.from(document.querySelectorAll('ul li'));
   const text = document.getElementById('searchText').value;
   let matches = 0;

   elements.forEach((el) => {

      if (el.innerHTML.includes(text)) {
         el.style.fontWeight = 'bold';
         el.style.textDecoration = 'underline';
         matches++;
      } else {
         el.style.fontWeight = 'normal';
         el.style.textDecoration = '';
      }
   });

   let resultDiv = document.getElementById('result');
   resultDiv.textContent = `${matches} matches found`;


   //console.log(elements);
   //console.log(text);

}

//------------------------------------

function search2() {
   //1. Select elements
   let searchElement = document.getElementById('searchText');
   let allLiElements = Array.from(document.querySelectorAll('#towns li'));

   //2. Parse search text
   let searchText = searchElement.value;
   
   //3. Main logic
      //a. clear results from previous search
      allLiElements.forEach(el => {
         el.style.fontWeight = 'normal';
         el.style.textDecoration = 'none';
      });

      //b. filter all li witch contain the search text
      let filterLi = allLiElements
         .filter(x => x.textContent.includes(searchText));
      let mappedLi = filterLi.forEach(x => {
         x.style.fontWeight = 'bold';
         x.style.textDecoration = 'underline';
      });
      
      //d. show number of matches in result div
      let resultDiv = document.getElementById('result');
      resultDiv.textContent = `${filterLi.length} matches found`;

   
}

