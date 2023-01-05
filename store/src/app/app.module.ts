import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './shared/services/auth-interceptor.service';
import { LoginComponent } from './login/login/login.component';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [AuthInterceptorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
