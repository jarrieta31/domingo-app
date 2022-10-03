import { Injectable, NgZone } from '@angular/core';
import * as auth from 'firebase/auth';
import { User } from 'src/app/shared/user';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any;
  constructor(
    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.ngFireAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  /** login con email/password */ 
  // signIn(email, password) {
  //   return this.ngFireAuth.signInWithEmailAndPassword(email, password);
  // }

  /** registro con email/password */ 
  // registerUser(email, password) {
  //   return this.ngFireAuth.createUserWithEmailAndPassword(email, password);
  // }

  /** verificación de email para nuevos usuarios */
  // sendVerificationMail() {
  //   return this.ngFireAuth.currentUser.then((user) => {
  //     return user.sendEmailVerification().then(() => {
  //       this.router.navigate(['login']);
  //     });
  //   });
  // }

  /** recuperar password */
  // passwordRecover(passwordResetEmail) {
  //   return this.ngFireAuth
  //     .sendPasswordResetEmail(passwordResetEmail)
  //     .then(() => {
  //       window.alert(
  //         'Password reset email has been sent, please check your inbox.'
  //       );
  //     })
  //     .catch((error) => {
  //       window.alert(error);
  //     });
  // }

  /** retorna true cuando el usuario está logueado */
  // get isLoggedIn(): boolean {
  //   const user = JSON.parse(localStorage.getItem('user'));
  //   return user !== null && user.emailVerified !== false ? true : false;
  // }

  /** retorna true cuando el usuario verificó el email */
  // get isEmailVerified(): boolean {
  //   const user = JSON.parse(localStorage.getItem('user'));
  //   return user.emailVerified !== false ? true : false;
  // }

  /** login con Google */
  googleAuth() {
    return this.authLogin(new auth.GoogleAuthProvider());
  }

  /** login con Facebook */
  facebookAuth() {
    return this.authLogin(new auth.FacebookAuthProvider());
  }
  
  /** login con providers (proveedores de firebase) */
  authLogin(provider) {
    return this.ngFireAuth
      .signInWithPopup(provider)
      .then((result) => {
        console.log("Soy result: ", result)
        this.ngZone.run(() => {
          this.router.navigate(['home-menu']);
        });
        this.setUserData(result.user);
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  /** almacenar user en localstorage */
  setUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afStore.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  /** cerrar sesión */
  signOut() {
    return this.ngFireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['auth']);
    });
  }
}
