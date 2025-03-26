import { Injectable, Signal, computed, inject, signal } from '@angular/core';
import { tap } from 'rxjs';
import { ILanguageToolData } from '@pages/home/components/language-tools/language-tool.interface';
import { HttpClient } from '@angular/common/http';
export interface LanguageToolState {
  data: ILanguageToolData[];
}

@Injectable({
  providedIn: 'root',
})
export class LanguageToolService {
  private http = inject(HttpClient)
  constructor() {
    this.getAll();
  }
  //private jsonUrl = `http://localhost:4200/assets/json/language-tools.json`;
  private jsonUrl = `https://aldosebastian.com/assets/json/language-tools.json`;

  public state = signal<LanguageToolState>({ data: [] });
  public languageTools: Signal<ILanguageToolData[]> = computed(
    () => this.state().data
  );

  getAll(): void {
    this.http
      .get<ILanguageToolData[]>(this.jsonUrl)
      .pipe(
        tap((data: ILanguageToolData[]) => {
          this.state.update((state: LanguageToolState) => ({ ...state, data }));
        })
      )
      .subscribe();
  }
}
