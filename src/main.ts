import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// Permet d'enregistrer une nouvelle locale (langue)
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeNl from '@angular/common/locales/nl';
import localeDe from '@angular/common/locales/de';
import localeJa from '@angular/common/locales/ja';
registerLocaleData(localeFr, 'fr');
registerLocaleData(localeNl, 'nl');
registerLocaleData(localeDe, 'de');
registerLocaleData(localeJa, 'ja');

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
