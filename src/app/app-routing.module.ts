import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditHysComponent } from './components/hys/edit-hys.component';
import { NewHysComponent } from './components/hys/new-hys.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto.component';
import { EditPersonaComponent } from './components/acerca/edit-persona.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },	// redirect to home page
  { path: 'newexp', component: NewExperienciaComponent },
  { path: 'editexp/:id', component: EditExperienciaComponent},
  { path: 'newedu', component: NewEducacionComponent },
  { path: 'editedu/:id', component: EditEducacionComponent},
  { path: 'editHys/:id', component: EditHysComponent},
  { path: 'newhys', component: NewHysComponent},
  { path: 'newpro', component: NewProyectoComponent},
  { path: 'editpro/:id', component: EditProyectoComponent},
  { path: 'editper/:id', component: EditPersonaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
