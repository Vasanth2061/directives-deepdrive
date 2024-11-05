import { Component,inject ,computed} from '@angular/core';
import { AuthService } from './auth/auth.service';
import { AuthComponent } from './auth/auth.component';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';
import { NgIf } from '@angular/common';
import { AuthDirective } from './auth/auth.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [AuthComponent, LearningResourcesComponent,NgIf,AuthDirective],
})
export class AppComponent {
  private authService=inject(AuthService);

  isAdmin=computed(()=>this.authService.activePermission()==='admin');
}
