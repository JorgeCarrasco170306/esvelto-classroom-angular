import { Component, computed, inject } from '@angular/core';
import { LucideDynamicIcon, LucideMoon, LucideSun } from '@lucide/angular';
import { CommonService } from '../../services/CommonService';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './ThemeToggleComponent.html',
})
export class ThemeToggleComponent {
  readonly commonService = inject(CommonService);
  readonly icon = computed(() =>
    this.commonService.theme() === 'emerald' ? LucideMoon.icon : LucideSun.icon,
  );

  toggleTheme(): void {
    this.commonService.toggleTheme();
  }
}
