import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { GeneratorService } from 'src/app/services/generator.service';
import { Subscription, filter, map, scan, takeLast, takeWhile } from 'rxjs';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {

    public arr: number[] = [];

    private subscription: Subscription

    // DI: Dependency Injection
    public constructor(
        private title: Title,
        private generatorService: GeneratorService
    ) { }

    public ngOnInit(): void {   //useEffect(()=>{},[])
        console.log("ngOnInit");
        this.title.setTitle("NorthWind | About");

    }

    public start(): void {

        // Create Observable:
        const observable = this.generatorService.generate(20);

        // Using Observable without any HOF(Higher Order Functions = Pipe Operators)
        // observable.subscribe(
        //     num => this.arr.push(num), //next
        //     err => alert(err.message),
        //     () => this.title.setTitle("done"));




        // // Using Observable with filter Pipe Operator
        // // const observable = this.generatorService.generate(20);
        // observable.pipe(filter(n => n % 2 === 0)).subscribe(
        //     num => this.arr.push(num), //next
        //     err => alert(err.message),
        //     () => this.title.setTitle("done"));

        //   // Using Observable with map Pipe Operator
        // observable.pipe(map(n => n ** 2)).subscribe(
        //     num => this.arr.push(num), //next
        //     err => alert(err.message),
        //     () => this.title.setTitle("done"));


        // // Using Observable with takeWhile Pipe Operator
        // observable.pipe(takeWhile(n => n <90)).subscribe(
        //     num => this.arr.push(num), //next
        //     err => alert(err.message),
        //     () => this.title.setTitle("done"));


        // // Using Observable with takeLast Pipe Operator
        // observable.pipe(takeLast(5)).subscribe(
        //     num => this.arr.push(num), //next
        //     err => alert(err.message),
        //     () => this.title.setTitle("done"));



        // Using Observable with scan Pipe Operator
        this.subscription = observable.pipe(scan((a, b) => a + b)).subscribe(
            num => this.arr.push(num), //next
            err => alert(err.message),
            () => this.title.setTitle("done"));

    }

    public ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe()
        }
    }

}
