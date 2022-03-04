import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { DataService } from '../../service/data.service';
interface model  {
  IconUrl:string;
  Name:string;
  Version:string;
}
@Component({
  selector: 'thinktac-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {

  constructor(private service: DataService) { }
  selectedLang="";
  endsub$ = new Subject();
  data:model[]=[];
  search="";
  mode= true;
  ngOnDestroy(): void {
      this.endsub$.next;
      this.endsub$.complete();
  }
  ngOnInit(): void {
    this.service.getdata().pipe(takeUntil(this.endsub$)).subscribe(data => {
      this.data = data
      console.log(data);
    })
  }

  changeLang(events: string){
    this.selectedLang = events
    this.mode=true;
  }

  searchresult(events: string){
    this.mode=false;
    this.search = events;
  }
}
