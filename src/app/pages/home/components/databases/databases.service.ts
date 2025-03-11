import { Injectable, Signal, computed, inject, signal } from '@angular/core';
import { tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IDatabasesData } from './databases.interface'
export interface DatabasesState {
  data: IDatabasesData[];
}

@Injectable({
  providedIn: 'root',
})
export class DatabasesService {
  private http = inject(HttpClient)
  constructor() {
    this.getAll();
  }
  private jsonUrl = `http://localhost:4200/assets/json/databases.json`;

  public state = signal<DatabasesState>({ data: [] });
  public databasesTools: Signal<IDatabasesData[]> = computed(
    () => this.state().data
  );

  getAll(): void {
    this.http
      .get<IDatabasesData[]>(this.jsonUrl)
      .pipe(
        tap((data: IDatabasesData[]) => {
          this.state.update((state: DatabasesState) => ({ ...state, data }));
        })
      )
      .subscribe();
  }
}
