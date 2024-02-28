import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Users } from "./users";

@Injectable({
    providedIn: 'root'
})

export class ApiService {
<<<<<<< HEAD
    dbUrl: string = "https://backendvisioncorp.000webhostapp.com";
=======
    dbUrl: string = "http://backendvisioncorp.000webhostapp.com";
>>>>>>> 8d0684646372c9ba33b45618d337f738571c4dda
    constructor(private httpClient: HttpClient) {}

    public userRegistro(NombreUsuario: any, correoElectronico: any, Password: any, ClaveDeRegistro: any) {
        console.log(NombreUsuario);
        return this.httpClient.post<any>(this.dbUrl + '/registro.php', {
            NombreUsuario, correoElectronico, Password, ClaveDeRegistro
           
        }).pipe(map(Users => {
            return Users;
        }));
    }

    public userLogin(correoElectronico:any, Password:any){
        return this.httpClient.post<any>(this.dbUrl + '/login.php', {
            correoElectronico, Password
        }).pipe(map(Users => {
            this.setToken(Users.token);
            return Users;
        }));
    }

    setToken(token: string){
        localStorage.setItem('token', token);
    }

}
