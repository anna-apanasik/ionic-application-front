import { NgModule } from '@angular/core';
import { ViewNoteComponent } from './view-note/view-note';
import { IonicModule } from "ionic-angular";
import { LoginComponent } from './login/login';
import { RegisterComponent } from './register/register';

@NgModule({
	declarations: [
		ViewNoteComponent,
    	LoginComponent,
    	RegisterComponent,
	],
	imports: [IonicModule],
	exports: [
		ViewNoteComponent,
    	LoginComponent,
    	RegisterComponent,
	]
})
export class ComponentsModule {}
