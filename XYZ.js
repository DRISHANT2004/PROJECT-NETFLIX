const form = document.querySelector('form');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const msgTitle = document.getElementById('msg-title');

        function showError(message) {
            msgTitle.textContent = message;
            msgTitle.style.display = 'block';
        }

        form.addEventListener('submit', (event) => {
            if (!emailInput.value || !passwordInput.value) {
                event.preventDefault();  
               
                if (!emailInput.value && !passwordInput.value) {
                    showError('Please enter both Email and Password.');
                } else if (!emailInput.value) {
                    showError('Please enter your Email or Phone Number.');
                } else if (!passwordInput.value) {
                    showError('Please enter your password.');
                }
            } else {
                msgTitle.style.display = 'none';
            }
        });

        emailInput.addEventListener('input', () => {
            msgTitle.style.display = 'none';
        });
        
        passwordInput.addEventListener('input', () => {
            msgTitle.style.display = 'none';
        });