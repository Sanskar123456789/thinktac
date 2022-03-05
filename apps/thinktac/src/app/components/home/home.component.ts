import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
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
  isclick=false;
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
    })
  }

  changeLang(events: string){
    this.selectedLang = events
    this.mode=true;
  }

  searchresult(events: string){
    this.mode=false;
    if(events=='all'){
      this.search='';
      this.mode = false;
    }else{
      this.search = events;
    }
  }

  @HostListener('click') click () {
    this.service.isClick.next(true);
  }
}
