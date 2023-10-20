import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

    public  generate(count: number): Observable<number>{
        return new Observable((observer: Observer<number>)=>{
            try{
                const timerId = setInterval(()=>{
                    const num = Math.floor(Math.random() * 100) + 1;
                    observer.next(num);
                    count --;

                    if(count ===0){
                        observer.complete();
                        clearInterval(timerId);
                    }
                },500)
            }
            catch(err:any){
                observer.error(err);
            }
        })
    }

}
