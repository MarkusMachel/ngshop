import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { UiModule } from '@bluebits/ui';
import { AccordionModule } from 'primeng/accordion';


const routes: Routes = [
  {path: '', component: HomePageComponent},
{path: 'products', component: ProductsListComponent}
]
@NgModule({
  declarations: [AppComponent, HomePageComponent, ProductsListComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule, BrowserAnimationsModule, RouterModule.forRoot(routes), UiModule, AccordionModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
