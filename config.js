
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";

  const firebaseConfig = {
    apiKey: "AIzaSyD6Bl6Fs4WayxUE1-uwakT6TKvOSWqByBY",
    authDomain: "blogging-app-3033c.firebaseapp.com",
    projectId: "blogging-app-3033c",
    storageBucket: "blogging-app-3033c.appspot.com",
    messagingSenderId: "872284437219",
    appId: "1:872284437219:web:e4eadbeb712ef3cf23a3d6",
    measurementId: "G-37F9HSVD28"
};


  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
