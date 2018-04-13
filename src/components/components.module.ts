import { NgModule } from '@angular/core';
import { ViewNoteComponent } from './view-note/view-note';
import {IonicModule} from "ionic-angular";
@NgModule({
	declarations: [ViewNoteComponent],
	imports: [IonicModule],
	exports: [ViewNoteComponent]
})
export class ComponentsModule {}
