import { UI } from "./ui";
import { Github } from "./api";

// ui process
const ui = new UI();

// api process
const github = new Github();

const form = document.querySelector('.search-form');
const userInput = document.querySelector('#search-box');

function allEvents() {
    ui.toggle.addEventListener('click', modeChange);
    form.addEventListener('submit', userSearch);
}

allEvents();

function modeChange() {
    (ui.main.classList.contains('dark-mode')) ? ui.light() : ui.dark();
}


function userSearch(event) {

    let username = userInput.value.toLowerCase();
    if (username === "") {
        alert("Kullanici adi giriniz!");
    }
    else {
        github.getUserData(username)
            .then(result => {
                const info = {
                    avatar: result.avatar_url,
                    login: result.login,
                    created_at: result.created_at,
                    bio: result.bio,
                    repos: result.public_repos,
                    followers: result.followers,
                    following: result.following,
                    location: result.location,
                    twitter: result.twitter,
                    blog: result.blog,
                    email: result.email,
                }
                ui.updateInfo(info);
            })

            .catch(err => console.log(err))
    }

    // submit eventini engeller.
    event.preventDefault();
}