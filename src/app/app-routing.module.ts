import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { CourseResolver } from './services/course.resolver';
import { AboutComponent } from './about/about.component';
import { homeResolver } from './home/home.resolver';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    resolve: {
      homeResolver,
    },
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'courses/:id',
    component: CourseComponent,
    resolve: {
      course: CourseResolver,
    },
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
