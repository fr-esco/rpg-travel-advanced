import {BaseComponent} from '../../frameworks/core/index';
import 'js-quantities';

@BaseComponent({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})
export class AboutComponent {
  constructor() {
    let x = Qty('1kg');
    console.log(x.add('100g'));
  }
}
