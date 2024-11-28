
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector('.form');
form.addEventListener('submit', createPromise);

function createPromise(event) {
    event.preventDefault();

    const delay = parseInt(form.delay.value, 10);
    const state = form.state.value;

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === 'fulfilled') {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
});

        promise
            .then((delay) => {
                iziToast.success({
                    title: 'Success',
                    message: `✅ Fulfilled promise in ${delay}ms`,
                });
            })
            .catch(() => {
                        iziToast.error({
                            title: 'Error',
                            message: `❌ Rejected promise in ${delay}ms`,
                        });
                    });
                
            };


