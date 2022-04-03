/* scripts */
async function requestAuth(id, secret) {
    console.log(`id = ${id}`);
    console.log(`secret = ${secret}`);
}


async function MainEvent() {
    console.log('Page loaded');

    const client_id = document.querySelector('#clientId');
    const client_secret = document.querySelector('#clientSecret');

    const button = document.querySelector('#submitbutton')

    let this_id = '';
    let this_secret = '';

    client_id.addEventListener('input', async (event) => {
        this_id = event.target.value;
        /* console.log(this_id); */
        })
    
    client_secret.addEventListener('input', async (event) => {
        this_secret = event.target.value;
        /* console.log(this_secret); */
    })

    button.addEventListener('click', async(event) => {
        if (this_id.length === 0 || this_secret.length === 0) {
            console.log('no entry');
            return;
        } else {
            console.log('clicked');
            requestAuth(this_id, this_secret);
        }
    })
}

document.addEventListener("DOMContentLoaded", async () => MainEvent());