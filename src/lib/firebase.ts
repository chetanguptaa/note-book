// Import the functions you need from the SDKs you need
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
	apiKey: "AIzaSyAMHaRmUdobmV_nxN6c_Er78ttGyj3-XaA",

  authDomain: "notebook-ai-74f5c.firebaseapp.com",

  projectId: "notebook-ai-74f5c",

  storageBucket: "notebook-ai-74f5c.appspot.com",

  messagingSenderId: "1079759702553",

  appId: "1:1079759702553:web:eedc0bad231f7913ef3888"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export async function uploadFileToFirebase(image_url: string, name: string) {
  try {
    const response = await fetch(image_url);
    const buffer = await response.arrayBuffer();
    const file_name = name.replace(" ", "") + Date.now + ".jpeg";
    const storageRef = ref(storage, file_name);

    await uploadBytes(storageRef, buffer, {
      contentType: "image/jpeg",
    });

    const firebase_url = await getDownloadURL(storageRef);
    return firebase_url;
  } catch (error) {
    console.error(error);
  }
}
