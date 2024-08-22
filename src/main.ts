import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import "primeicons/primeicons.css";
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
