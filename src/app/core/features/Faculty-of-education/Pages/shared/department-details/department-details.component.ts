import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from '../../../Services/department.service';
import { Department, DepartmentNavigation } from '../../../model/department.model';
import { FooterComponent } from "../footer/footer.component";
import { PageHeaderComponent } from "../page-header/page-header.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-department-details',
  standalone: true,
  imports: [CommonModule, RouterModule, FooterComponent, PageHeaderComponent],
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {
  currentDepartment: Department | null = null;
  allDepartments: Department[] = [];
  navigation: DepartmentNavigation = { previous: null, next: null };
  currentLanguage = 'en';
  loading = true;
  breadcrumbs: Array<{ label: string, url?: string }> = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private departmentService: DepartmentService
  ) {}

  ngOnInit(): void {
    this.loadAllDepartments();

    this.route.url.subscribe(urlSegments => {
      const fullPath = urlSegments.map(segment => segment.path).join('/');
      this.loadDepartmentByRoute(fullPath);
    });

    this.updateBreadcrumbs();
  }

  loadAllDepartments(): void {
    this.departmentService.getAllDepartments().subscribe(departments => {
      this.allDepartments = departments;
    });
  }

  loadDepartmentByRoute(route: string): void {
    this.loading = true;
    const tryRoute = (r: string) => this.departmentService.getDepartmentByRoute(r).toPromise();

    (async () => {
      try {
        // normalize input: remove leading slash if present
        let normalized = route.startsWith('/') ? route.substring(1) : route;

        // attempt 1: exact normalized route
        let department = await tryRoute(normalized);
        if (department) {
          this.currentDepartment = department;
          this.loadNavigation(department.id);
          this.updateBreadcrumbs();
          this.loading = false;
          return;
        }

        // attempt 2: strip trailing segment (possible id)
        const lastSlashIndex = normalized.lastIndexOf('/');
        if (lastSlashIndex > 0) {
          const baseRoute = normalized.substring(0, lastSlashIndex);
          department = await tryRoute(baseRoute);
          if (department) {
            this.currentDepartment = department;
            this.loadNavigation(department.id);
            this.updateBreadcrumbs();
            this.loading = false;
            return;
          }
        }

        // attempt 3: try adding/removing department-details prefix variants
        if (!normalized.startsWith('department-details/')) {
          department = await tryRoute('department-details/' + normalized);
          if (department) {
            this.currentDepartment = department;
            this.loadNavigation(department.id);
            this.updateBreadcrumbs();
            this.loading = false;
            return;
          }
        } else {
          // also try removing 'department-details/' prefix if present
          const withoutPrefix = normalized.replace(/^department-details\//, '');
          department = await tryRoute(withoutPrefix);
          if (department) {
            this.currentDepartment = department;
            this.loadNavigation(department.id);
            this.updateBreadcrumbs();
            this.loading = false;
            return;
          }
        }

        // final fallback: navigate home
        this.router.navigate(['/']);
      } catch (e) {
        // if any error, fallback to home
        this.router.navigate(['/']);
      } finally {
        this.loading = false;
      }
    })();
  }

  loadNavigation(departmentId: string): void {
    this.departmentService.getDepartmentNavigation(departmentId).subscribe(navigation => {
      this.navigation = navigation;
    });
  }

  navigateToDepartment(department: Department): void {
    this.router.navigate([department.route]);
  }

  navigateToPrevious(): void {
    if (this.navigation.previous) {
      this.navigateToDepartment(this.navigation.previous);
    }
  }

  navigateToNext(): void {
    if (this.navigation.next) {
      this.navigateToDepartment(this.navigation.next);
    }
  }

  getDepartmentTitle(department: Department): string {
    return department.name;
  }

  getDepartmentViceDean(department: Department): string {
    return department.viceDean;
  }

  getDepartmentObjectives(department: Department): string[] {
    return department.objectives;
  }

  getDepartmentServices(department: Department): string[] {
    return department.services;
  }

  getDepartmentSubjects(department: Department): string[] {
    return department.subjects;
  }

  isCurrentDepartment(department: Department): boolean {
    return this.currentDepartment?.id === department.id;
  }

  updateBreadcrumbs(): void {
    this.breadcrumbs = [
      { label: 'Home', url: '/' },
      { label: 'Faculty Departments', url: '/department-details' },
      { label: this.currentDepartment ? this.getDepartmentTitle(this.currentDepartment) : '' }
    ];
  }
}
