import { Injectable } from '@angular/core';
import { BehaviorSubject, map, switchMap } from 'rxjs';
import { LOCAL_STORAGE_AUTH_KEY } from '../common/constant';
import { AuthContext } from '../models/auth-context';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { ExternalLoginDto } from '../interfaces/external-login.dto';
import { AuthResponseDto } from '../interfaces/auth-response.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public authState = new BehaviorSubject<AuthContext>(JSON.parse(localStorage[LOCAL_STORAGE_AUTH_KEY] || null));
  public isAuthenticated$ = this.authState.asObservable().pipe(map(context => context !== null));

  constructor(
    private socialAuthService: SocialAuthService,
    private httpClient: HttpClient
  ) { 
    this.socialAuthService.authState.pipe(
      switchMap(externalLogin => {
        return this.verifyExternalLogin(externalLogin);
      })
    ).subscribe((authResponse) => {
      const authContext: AuthContext = {
        userId: authResponse.userId,
        userName: authResponse.userName,
        email: authResponse.email,
        token: authResponse.token,
      };
      this.authState.next(authContext);
      localStorage[LOCAL_STORAGE_AUTH_KEY] = JSON.stringify(authContext);
    });
  }


  public logout() {
    this.socialAuthService.signOut();
    localStorage.removeItem(LOCAL_STORAGE_AUTH_KEY);
  }

  private verifyExternalLogin(externalLogin: ExternalLoginDto) {
    return this.httpClient.post<AuthResponseDto>(`${environment.apiEndpoint}/api/account/login-google`, externalLogin);
  }
}
