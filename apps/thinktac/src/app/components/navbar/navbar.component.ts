import { Component, OnInit, Output,EventEmitter, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { DataService } from '../../service/data.service';

interface Lang {
  name: string,
  code: string
}

interface model  {
  IconUrl:string;
  Name:string;
  Version:string;
}

@Component({
  selector: 'thinktac-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit,OnDestroy {
  @Output() langu = new EventEmitter<string>();
  @Output() searchstring = new EventEmitter<string>();
  cities: Lang[];
  selectedCity1: Lang;
  endsub$ = new Subject()
  data:model[]=[];
  search='';
  suggestion:model[]=[];
  show=false;
  constructor(private service: DataService) {
    this.cities = [
      {name: 'All', code: ''},
      {name: 'English', code: 'EN-V1'},
      {name: 'Hindi', code: 'HI-V1'},
    ];
    this.selectedCity1 = {name: 'All', code: ''};
  }
  ngOnDestroy(): void {
    this.endsub$.next;
    this.endsub$.complete();
  }

  ngOnInit(): void {
    this.service.getdata().pipe(takeUntil(this.endsub$)).subscribe(data => {
      this.data = data
    })

    this.service.isClick.subscribe(data => {
      if(data)this.show=false;
    })
  }

  language(): void {    

    this.langu.emit(this.selectedCity1.code);
  }

  searchtext(){
    if(this.search==''){
      this.searchstring.emit('all');
    }
    this.suggestion = this.data.filter(item => item.Name.toLowerCase().includes(this.search.toLowerCase()))
    if(this.suggestion.length == 0){
      this.show= false;
    }else{
      this.show= true;
    }
  }

  input(name: string){
    this.search = name;
    this.searchstring.emit(name);
    this.suggestion=[];
    this.show= false;
  }
  
  sugg(){
    this.show= false;
  }
}
