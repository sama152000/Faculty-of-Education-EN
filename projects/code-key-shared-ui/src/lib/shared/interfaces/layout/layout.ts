export interface LanguageOption {
  label: string;   // اسم اللغة (العربية, English)
  value: string;   // كود اللغة (ar, en)
  url: string;     
  active?: boolean; 
}


export interface NavTab {
 id?: string;
  title: string; //route
  target: string;
  order: number;
  menuTypeId: string;
  parentId?: string | null;
  childs: NavTab[];
   fragment?: string;
   icon?: string;  
}
export interface LogoDto {
  id?: string;
  logoPath: string;
  logoAltText: string;
}
