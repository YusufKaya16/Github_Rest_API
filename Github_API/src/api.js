export class Github {

    constructor() {
        this.url = "https://api.github.com/users/";
    }

    async getUserData(username) {

        let endpoint = this.url + username;
        let answer;

        try{
            await fetch(endpoint)
                .then(response => {
                    if (response.status === 200) {
                        return response.json();
                    }
                })
                .then(result => answer = result)
                .catch(err => err)
        }
        
        catch(error){
            answer = error;
        }

        return answer;
    }

}