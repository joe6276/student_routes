
export class AuthService{
    isLogged=false

    isAuthenticate(){
        const prom = new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve(this.isLogged)
                },800)
        })
      
        return prom;
    }

    login(){
        this.isLogged=true
    }
    logout(){
        this.isLogged=false
    }
}