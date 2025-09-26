import axios from "axios";

const instance = axios.create({
    baseURL: 'https://dummyjson.com'
});

instance.interceptors.request.use(
    config => {
        const limit = Math.floor(Math.random() * 10) + 10
        config.url += `?limit=${limit}`;

        console.log('Request made with ', config);
        return config;
    }
);

instance.interceptors.response.use(
    response => response,
    error => {
        // Displaying the dialog for the error
        const dialog = document.createElement('dialog');
        dialog.textContent = error.message || 'Something went wrong!';
        document.body.appendChild(dialog);
        // Provide a way to close the dialog after a few seconds or on click
        setTimeout(() => {
            dialog.close(); dialog.remove();
        }, 5000);
        dialog.addEventListener('click', () => { dialog.close(); dialog.remove(); });
        dialog.showModal()
        return Promise.reject(error);
    }
);

export default instance;