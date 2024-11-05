import { Directive,inject,input,effect,TemplateRef,ViewContainerRef} from '@angular/core';
import { AuthService } from './auth.service';
import { Permission } from './auth.model';

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {
  userType=input.required<Permission>({alias:'appAuth'});
  private authService=inject(AuthService);

  private templateRef=inject(TemplateRef);

  private viewContainerRef=inject(ViewContainerRef);

  constructor() { 
    effect(()=>{
      if(this.authService.activePermission()===this.userType()){
        console.log("Permisiion Allowed");
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      }
      else{
          console.log("Not allowed");
          this.viewContainerRef.clear();
      }
    });
  }

}
