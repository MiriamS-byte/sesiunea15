/**
 * Obțineți lista de utilizatori de pe JSONPlaceholder și afișați lista în consola;
 */
async function getUsers() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();
      console.log(users);
    } catch (error) {
      console.error('Eroare:', error.message);
    }
}

getUsers();
  


/**
 * Obțineți detaliile unui utilizator 
 * specific (ex: user cu id 1) si afisati-le in consola;
 */
async function getUserDetails(userId) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      const userDetails = await response.json();
      console.log(userDetails);
    } catch (error) {
      console.error('Eroare:', error.message);
    }
}

getUserDetails(1);
  


/**
 * Obțineți lista de postări de pe JSONPlaceholder și afisati-o în consola;
 */
async function getPosts() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await response.json();
      console.log(posts);
    } catch (error) {
      console.error('Eroare:', error.message);
    }
}

getPosts();
  


/**
 * Obțineți detaliile unei postări 
 * specifice (ex: postarea cu id 2) și afisati-o în consola;
 */
async function getPostDetails(postId) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      const postDetails = await response.json();
      console.log(postDetails);
    } catch (error) {
      console.error('Eroare:', error.message);
    }
}
  
getPostDetails(1);
  


/**
 * Trimiteți o cerere POST pentru a crea o nouă postare si 
 * afisati rezultatul în consola;
 */
async function createPost(title, body, userId) {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title,
          body: body,
          userId: userId,
        }),
      });
      const newPost = await response.json();
      console.log(newPost);
    } catch (error) {
      console.error('Eroare:', error.message);
    }
}

createPost('Titlu nou', 'Corpul postării noi', 1);
  