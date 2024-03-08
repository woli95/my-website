import { FirebaseApp, initializeApp } from "firebase/app";
import { Analytics, getAnalytics, logEvent } from "firebase/analytics";
import { config } from "@services/config";

class FirebaseManagerCls {
  private app: FirebaseApp;
  private analytics: Analytics;

  constructor() {
    this.app = initializeApp(config.firebaseConfig);
    this.analytics = getAnalytics(this.app);
  }

  public logEvent = (eventName: string, eventParams: Record<string, any>) =>
    logEvent(this.analytics, eventName, eventParams);
}

export const FirebaseManager = new FirebaseManagerCls();
