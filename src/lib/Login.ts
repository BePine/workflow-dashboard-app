
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
type Props = {
	email: string,
	password: string
}
export const handleRegisterAuth = (props: Props) => {
    const auth = getAuth();
const email = props.email ;
const password = props.password;

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("signed up")

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}
export const handleLoginAuth = (props: Props) => {
    const auth = getAuth();
const email = props.email ;
const password = props.password;

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("signed in")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}

