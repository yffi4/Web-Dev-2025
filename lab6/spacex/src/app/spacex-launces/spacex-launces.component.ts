import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-spacex-launches',
  templateUrl: './spacex-launches.component.html',
  styleUrls: ['./spacex-launches.component.css']
})
export class SpacexLauncesComponent implements OnInit {
  launches: any[] = [];
  filteredLaunches: any[] = [];
  loading: boolean = true;
  error: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getLaunches().subscribe((data: any) => {
      console.log(data);
      this.launches = data;
      this.filteredLaunches = data;
    });
  }

  filterSuccessful(): void {
    this.filteredLaunches = this.launches.filter(launch => launch.success);
  }
  public getLaunches(): Observable<any[]>{
    return this.http.get<any[]>("https://api.spacexdata.com/v3/launches");
  }
}