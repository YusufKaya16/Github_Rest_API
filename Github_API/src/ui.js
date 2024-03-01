export class UI {
    constructor() {
        this.main = document.querySelector('.main-container');
        this.toggle = document.querySelector('.toggle-container');
        this.modeText = document.querySelector('.mode-text');
        this.modeIcon = document.querySelector('#path');
        this.avatarImg = document.querySelector('.avatar');
        this.usernameTitle = document.querySelector('.title');
        this.userLink = document.querySelector('.user-link');
        this.date = document.querySelector('.date');
        this.bio = document.querySelector('.bio');
        this.email = document.querySelector('#email');
        this.twitter = document.querySelector('#twitter');
        this.location = document.querySelector('#country');
        this.website = document.querySelector('#website');
        this.repos = document.querySelector('#repos-count');
        this.followers = document.querySelector('#followers-count');
        this.following = document.querySelector('#following-count');
    }

    light() {
        this.main.classList.remove('dark-mode');
        this.modeText.textContent = 'Dark';
        this.modeIcon.setAttribute('d', "M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z");
    }

    dark() {
        this.main.classList.add('dark-mode');
        this.modeText.textContent = 'Light';
        this.modeIcon.setAttribute('d', "M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2H2zm17 0h3v2h-3zM5.637 19.778l-1.414-1.414 2.121-2.121 1.414 1.414zM16.242 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.344 7.759 4.223 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z");
    }

    updateInfo(information) {
        console.log(information);
        this.usernameTitle.textContent = information.login;
        this.userLink.textContent = information.login;
        this.userLink.href = `https://github.com/${information.login}`;
        this.date.textContent = information.created_at;
        this.repos.textContent = information.repos;
        this.followers.textContent = information.followers;
        this.following.textContent = information.following;
        
        this.updateAvatar(information.avatar);
        this.updateBio(information.bio);
        this.updateEmail(information.email);
        this.updateTwitter(information.twitter);
        this.updateLocation(information.location);
        this.updateWebsite(information.blog);
    }

    updateAvatar(avatar) {
        (avatar === "") ? this.avatarImg.src = "icon/avatar-icon.svg" : this.avatarImg.src = avatar;
    }

    updateBio(bioInfo) {
        (bioInfo === "") ? this.bio.textContent = "This profile has no bio" : this.bio.textContent = bioInfo;
    }

    updateEmail(emailInfo) {
        (emailInfo === null) ? this.email.textContent = "No Email" : this.email.textContent = emailInfo;
    }

    updateTwitter(twitterInfo) {
        (twitterInfo === undefined) ? this.twitter.textContent = "No Twitter" : this.twitter.textContent = twitterInfo;
    }

    updateLocation(locInfo) {
        (locInfo === "") ? this.location.textContent = "No Location" : this.location.textContent = locInfo;
    }
    updateWebsite(blog) {
        (blog === "") ? this.website.textContent = "No Website" : this.website.textContent = blog;
    }

}