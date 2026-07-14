async function fetchposts() {
  
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    displayPosts(posts);
  
}
 function displayPosts(posts) {
    let ul= document.getElementById('post-list');
    for(let post of posts){

        let li= document.createElement('li');
        let h1= document.createElement('h1');
          let p= document.createElement('p');

        h1.textContent= post.title;
        p.textContent= post.body;
        
        li.appendChild(h1);
        li.appendChild(p);
        ul.appendChild(li); 
    }
}
fetchposts();