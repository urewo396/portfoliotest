 const themeToggle = document.getElementById('theme-toggle');
   const body = document.body;

   themeToggle.addEventListener('click', () => {
       if (body.classList.contains('dark-theme')) {
           body.classList.remove('dark-theme');
           body.classList.add('light-theme');
           themeToggle.textContent = '🌙';
       } else {
           body.classList.remove('light-theme');
           body.classList.add('dark-theme');
           themeToggle.textContent = '☀️';
       }
   });
   ```

### 6. **Responsive Design**
   - Use **CSS Flexbox** or **CSS Grid** for layout structures to ensure your website scales well on all devices.
   - Use **media queries** to adjust styles for different screen sizes, like the example above.

### 7. **Adding Blog Posts Dynamically**
   If you’re not using a CMS or a backend, you could use JavaScript to dynamically add posts to the Home page. Here’s a simple example:

   ```javascript
   const postsContainer = document.getElementById('posts-container');
   const posts = [
       { title: 'My First Post', date: 'August 7, 2024', content: 'This is my first post!' },
       { title: 'Learning JavaScript', date: 'August 14, 2024', content: 'JavaScript is awesome!' }
   ];

   posts.forEach(post => {
       const postElement = document.createElement('div');
       postElement.classList.add('post');
       postElement.innerHTML = `
           <h2>${post.title}</h2>
           <p>${post.date}</p>
           <p>${post.content}</p>
       `;
       postsContainer.appendChild(postElement);
   });
