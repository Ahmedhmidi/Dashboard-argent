import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private authenticatedUserKey = 'authenticatedUser';

    constructor(private http: HttpClient) {}
  
    login(username: string, password: string) {
      const authToken = this.createBasicAuthToken(username, password);
      const headers = { authorization: authToken };
  
      return this.http.get(environment.hostUrl + '/api/signin/login', { headers }).pipe(
        map(() => {
          this.registerSuccessfulLogin(username);
        })
      );
    }
  
    createBasicAuthToken(username: string, password: string) {
      return 'Basic ' + window.btoa(username + ':' + password);
    }
  
    registerSuccessfulLogin(username: string) {
      // Enregistrer le nom d'utilisateur dans la session (LocalStorage ou SessionStorage).
      sessionStorage.setItem(this.authenticatedUserKey, username);
    }
  
    // Fonction pour récupérer le nom d'utilisateur enregistré dans la session.
    getAuthenticatedUser(): string | null {
      return sessionStorage.getItem(this.authenticatedUserKey);
    }
  
    // Fonction pour supprimer le nom d'utilisateur de la session lors de la déconnexion.
    logout() {
      sessionStorage.removeItem(this.authenticatedUserKey);
      // Vous pouvez également effectuer d'autres opérations de déconnexion ici.
    }
  }

