import { Directive,ElementRef,input,inject, TemplateRef, ViewContainerRef} from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
    host: {
        '(click)': 'onConfirmLeave($event)'
    }
})
export class SafeLinkDirective{
    queryParam=input('myapp',{alias:'appSafeLink'});

    private hostElement= inject<ElementRef<HTMLAnchorElement>>(ElementRef);

    constructor(){
        console.log('SafeLinkDirective');
    }

    onConfirmLeave(event: MouseEvent){
        const wantsToLeave=window.confirm('Do you really want to leave?');
        if(wantsToLeave){
            const address=this.hostElement.nativeElement.href;
            this.hostElement.nativeElement.href=address+'?from='+this.queryParam();
            return;
        }
        event.preventDefault();
    }
}