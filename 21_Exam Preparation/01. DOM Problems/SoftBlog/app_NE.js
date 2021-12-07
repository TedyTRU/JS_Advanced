function solve() {

   const fields = Array.from(document.querySelectorAll('input'));
   const contentfield = document.getElementById('content');
   const createBt = document.querySelector('button[class="btn create"]');
   const postSection = document.querySelector('main');
   const archiveSection = document.querySelector('ol');

   createBt.addEventListener('click', createArticle);

   const archivedArticles = [];

   function createArticle(event) {
      event.preventDefault();

      const [author, title, category] = fields.map(f => f.value.trim());

      if (fields.map(f => f.value.trim()).some(v => v == '') || contentfield.value == '') {
         return;
      }

      const deleteBtn = e('button', { classList: 'btn delete' }, 'Delete');
      const archiveBtn = e('button', { classList: 'btn archive' }, 'Archive');
      const titleSection = e('h1', {}, title);

      const articleItem = e('article', {},
         titleSection,
         e('p', {}, 'Category:', e('strong', {}, category)),
         e('p', {}, 'Creator:', e('strong', {}, author)),
         e('p', {}, contentfield.value),
         e('div', { classList: 'buttons' }, deleteBtn, archiveBtn)
      );

      postSection.appendChild(articleItem);

      fields.map(f => f.value = '');
      contentfield.value = '';

      archiveBtn.addEventListener('click', archive.bind(null, titleSection));
      deleteBtn.addEventListener('click', deleteArticle.bind(null, articleItem));

   }

   function archive(titleSection) {

      const archived = e('li', {}, titleSection.textContent);

      archivedArticles.push(archived);
      archivedArticles.sort((a, b) => a.textContent.localeCompare(b.textContent));

      archiveSection.innerHTML = '';

      archivedArticles.forEach(a => archiveSection.appendChild(a))
   }

   function deleteArticle(articleItem) {

      articleItem.innerHTML = '';

   }

   function e(type, attr/*{}*/, ...content) {
      const element = document.createElement(type);

      for (let prop in attr) {
         element[prop] = attr[prop];
      }

      for (let item of content) {
         if (typeof item == 'string' || typeof item == 'number') {
            item = document.createTextNode(item);
         }
         element.appendChild(item);
      }

      return element;
   }

}