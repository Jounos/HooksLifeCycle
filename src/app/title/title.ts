import { ConstantPool } from '@angular/compiler';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
	selector: 'app-title',
	imports: [],
	templateUrl: './title.html',
	styleUrl: './title.scss'
})
export class Title implements OnInit, OnChanges {

	@Input() nome: string | undefined;

	constructor() {
		console.log(`Constructor ${this.nome}`);
	}
	ngOnChanges(changes: SimpleChanges): void {
		console.log(`OnChange ${this.nome}`);
	}

	ngOnInit(): void {
		console.log(`OnInit ${this.nome}`);
	}

}
