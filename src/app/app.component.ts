import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {NutritionEntry, NUTRITIONS} from './models/nutritions-bible.model';
import {MeasurementInput} from './models/measurement.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public nutritions: NutritionEntry[] = NUTRITIONS;
  public measurementInput: MeasurementInput;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }
}
