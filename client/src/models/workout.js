import myFetch from "./myFetch";

export default {
    State: {},
    Init() {
        myFetch('/workout')
            .then(x=> { 
                this.State = x;
                console.log(x);
     })
    },
    
}