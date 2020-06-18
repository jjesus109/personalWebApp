import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "src/app/components/home/home.component";
import { ComputerVisionComponent } from "src/app/components/see-it/computer-vision/computer-vision.component";
import { DataScienceComponent} from "src/app/components/see-it/data-science/data-science.component";
import { MlComponent} from "src/app/components/see-it/ml/ml.component";
import { AboutMeComponent} from "src/app/components/about-me/about-me.component";
import { SeeItPageComponent} from "src/app/components/see-it/see-it-page/see-it-page.component";
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'see-it',component:SeeItPageComponent},
  {path:'see-it/computer-vision',component:ComputerVisionComponent},
  {path:'see-it/ml',component:MlComponent},
  {path:'see-it/data-science',component:DataScienceComponent},
  {path:'about-me',component:AboutMeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
