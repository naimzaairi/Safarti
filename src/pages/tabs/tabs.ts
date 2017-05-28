import { Component } from '@angular/core';

import { MesVoyagesPage } from '../mesvoyages/mesvoyages';
import { SafartiPage } from '../safarti/safarti';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MesVoyagesPage;
  tab3Root = SafartiPage;

  constructor() {

  }
}
