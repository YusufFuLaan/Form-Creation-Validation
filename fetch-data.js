document.addEventListener('DOMContentLoaded', () => {
    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        const dataContainer = document.getElementById('api-data');

        try {
            // Fetch data from the API
            const response = await fetch(apiUrl);
            const users = await response.json();

            // Clear the loading message
            dataContainer.innerHTML = '';

            // Create and append the user list
            const userList = document.createElement('ul');
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });

            dataContainer.appendChild(userList);
        } catch (error) {
            // Handle errors and update the display
            dataContainer.innerHTML = 'Failed to load user data.';
        }
    }

    // Invoke the function to fetch user data
    fetchUserData();
});
