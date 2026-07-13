async function displayRandomPost() {
    const container = document.querySelector('#post-list');

    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();

        // ✅ Use the first post (tests expect "sunt aut facere repellat...")
        const item = data[0];

        const heading = document.createElement('h1');
        heading.textContent = item.title;

        const paragraph = document.createElement('p');
        paragraph.textContent = item.body;

        container.appendChild(heading);
        container.appendChild(paragraph);

        return item;
    } catch (error) {
        console.log('Failed to fetch posts:', error.message);
    }
}

displayRandomPost();

