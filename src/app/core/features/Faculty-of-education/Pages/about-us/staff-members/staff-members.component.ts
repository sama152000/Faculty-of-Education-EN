import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacultyDataService } from '../../../Services/faculty-data.service';
import { StaffMember } from '../../../model/services.model';

@Component({
  selector: 'app-staff-members',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './staff-members.component.html',
  styleUrls: ['./staff-members.component.css']
})
export class StaffMembersComponent implements OnInit {
  staffMembers: StaffMember[] = [];
  filteredStaff: StaffMember[] = [];
  departments: string[] = [];
  selectedDepartment: string = 'all';
  searchTerm: string = '';

  constructor(private facultyDataService: FacultyDataService) {}

  ngOnInit(): void {
    this.staffMembers = this.facultyDataService.getStaffMembers();
    this.filteredStaff = [...this.staffMembers];
    this.extractDepartments();
  }

  private extractDepartments(): void {
    const deptSet = new Set(this.staffMembers.map(member => member.department || 'General'));
    this.departments = Array.from(deptSet).sort();
  }

  filterByDepartment(department: string): void {
    this.selectedDepartment = department;
    this.applyFilters();
  }

  onSearchChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchTerm = target.value.toLowerCase();
    this.applyFilters();
  }

  private applyFilters(): void {
    this.filteredStaff = this.staffMembers.filter(member => {
      const matchesDepartment = this.selectedDepartment === 'all' || 
                               (member.department || 'General') === this.selectedDepartment;
      const matchesSearch = member.name.toLowerCase().includes(this.searchTerm) ||
                           member.position.toLowerCase().includes(this.searchTerm);
      return matchesDepartment && matchesSearch;
    });
  }

  callPhone(phone: string): void {
    window.open(`tel:${phone}`, '_self');
  }

  getDepartmentColor(department: string): string {
    const colors = [
      '#3b82f6', '#10b981', '#f59e0b', '#ef4444',
      '#8b5cf6', '#06b6d4', '#84cc16', '#f97316'
    ];
    const index = this.departments.indexOf(department) % colors.length;
    return colors[index];
  }

  getInitials(name: string): string {
    if (!name) return '';
    return name.split(' ')
      .filter(part => part.trim().length > 0)
      .map(part => part.trim()[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  }
}
