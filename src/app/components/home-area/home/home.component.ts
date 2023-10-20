import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { SearchComponent } from '../search/search.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, SearchComponent],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

    public imageNumber = Math.floor(Math.random() * 2) + 1;

    public discount = 20;


    // DI: Dependency Injection
    public constructor(private title: Title){}



    public ngOnInit(): void {   //useEffect(()=>{},[])
        console.log("ngOnInit");
        this.title.setTitle("NorthWind | Home");

    }

    public today = new Date().getDay() + 1;


    public ngOnDestroy(): void {   //useEffect(()=>{return ()=>{} },[])
        console.log("ngOnDestroy");
    }

}
