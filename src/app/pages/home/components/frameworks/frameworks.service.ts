import { Injectable, Signal, computed, inject, signal } from '@angular/core';
import { tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IFrameworksData } from './frameworks.interface'
export interface FrameworksState {
  data: IFrameworksData[];
}

@Injectable({
  providedIn: 'root',
})
export class FrameworksService {
  private http = inject(HttpClient)
  constructor() {
    this.getAll();
  }
  //private jsonUrl = `http://localhost:4200/assets/json/frameworks.json`;
  private jsonUrl = `https://aldosebastian.com/assets/json/frameworks.json`;
  public state = signal<FrameworksState>({ data: [] });
  public frameworksTools: Signal<IFrameworksData[]> = computed(
    () => this.state().data
  );

  getAll(): void {
    this.http
      .get<IFrameworksData[]>(this.jsonUrl)
      .pipe(
        tap((data: IFrameworksData[]) => {
          this.state.update((state: FrameworksState) => ({ ...state, data }));
        })
      )
      .subscribe();
  }
}
