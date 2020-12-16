import {Injectable} from '@angular/core';
import {darkPalette} from '../styles/colors';

@Injectable()
export class ColorsService {
    getDarkTheme() {
        return darkPalette;
    }
}