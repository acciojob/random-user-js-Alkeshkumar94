 async function fetchUser() {
            try {
                const response = await fetch('https://randomuser.me/api/');
                const data = await response.json();
                const user = data.results[0];

                // Display full name and image
                document.getElementById('userName').textContent = `${user.name.first} ${user.name.last}`;
                document.getElementById('userImage').src = user.picture.large;

                // Store additional info in data attributes
                document.getElementById('showAge').setAttribute('data-value', user.dob.age);
                document.getElementById('showEmail').setAttribute('data-value', user.email);
                document.getElementById('showPhone').setAttribute('data-value', user.phone);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        }

        // Event listeners for the buttons
        document.getElementById('showAge').addEventListener('click', function() {
            document.getElementById('additionalInfo').textContent = `Age: ${this.getAttribute('data-value')}`;
        });

        document.getElementById('showEmail').addEventListener('click', function() {
            document.getElementById('additionalInfo').textContent = `Email: ${this.getAttribute('data-value')}`;
        });

        document.getElementById('showPhone').addEventListener('click', function() {
            document.getElementById('additionalInfo').textContent = `Phone: ${this.getAttribute('data-value')}`;
        });

        // Event listener for fetching a new user
        document.getElementById('getUser').addEventListener('click', fetchUser);

        // Initial fetch
        fetchUser();