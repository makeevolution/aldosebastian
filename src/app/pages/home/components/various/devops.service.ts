import { Injectable, Signal, computed, inject, signal } from '@angular/core';
import { tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IDevOpsData } from './devops.interface'
export interface DevOpsState {
  data: IDevOpsData[];
}

@Injectable({
  providedIn: 'root',
})
export class DevOpsService {
  private http = inject(HttpClient)
  constructor() {
    this.getAll();
  }
  private jsonUrl = `http://localhost:4200/assets/json/devops.json`;

  public state = signal<DevOpsState>({ data: [] });
  public devopsTools: Signal<IDevOpsData[]> = computed(
    () => this.state().data
  );

  getAll(): void {
    this.http
      .get<IDevOpsData[]>(this.jsonUrl)
      .pipe(
        tap((data: IDevOpsData[]) => {
          this.state.update((state: DevOpsState) => ({ ...state, data }));
        })
      )
      .subscribe();
  }
}
