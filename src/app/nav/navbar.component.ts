import {Component, OnInit} from '@angular/core';
import {ColorsService} from '../shared/services/colors.service';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

    colors = null

    constructor(private colorsService: ColorsService) {

    }

    ngOnInit() {
        this.colors = this.colorsService.getDarkTheme();
    }

}