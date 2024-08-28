import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistreComponent } from './components/registre/registre.component';
import { QuizDetailComponent } from './components/quiz-detail/quiz-detail.component';

export const routes: Routes = [

    { path:"", component: HomeComponent },
    { path:"quiz", component: QuizDetailComponent },
    { path:"login", component: LoginComponent },
    { path:"registre", component: RegistreComponent }

];
