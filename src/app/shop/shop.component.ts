import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../services/get-data.service';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  getMenuData:any;
  isSidebarVisible = false;
  selectedDropdownCategory: string = ''; // For dropdown filter
  selectedCheckboxCategories: string[] = []; // For checkbox filter
  selectedColorboxCategories: string[] = []; // For color checkbox filter
  allCategoriesSelected = true; 

  filteredProducts = this.getData.productData;
  categories = [...new Set(this.getData.productData.map(product => product.pdCategory))];
  colors = [...new Set(this.getData.productData.map(product => product.pdColor))];

  constructor(private getData: GetDataService) { }

  ngOnInit(): void {
   
    this.getMenuData = this.getData.productData;  
  }

  // Handle dropdown change
  filterByCategory(event: Event) {
    const selectedCategory = (event.target as HTMLSelectElement).value;
    this.selectedDropdownCategory = selectedCategory;
    this.applyFilters();
  }

  // Handle "Select All" checkbox change
  onSelectAllCategories(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.selectedCheckboxCategories = [];
      this.filteredProducts = this.getData.productData; // Show all products
    } else {
      this.applyFilters(); // Apply any selected category filters
    }
    this.allCategoriesSelected = checkbox.checked;
  }

  // Handle individual category checkbox changes
  onCategoryCheckboxChange(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    const value = checkbox.value;

    if (checkbox.checked) {
      this.selectedCheckboxCategories.push(value);
    } else {
      this.selectedCheckboxCategories = this.selectedCheckboxCategories.filter(cat => cat !== value);
    }

    // If any category is selected, uncheck "All Categories"
    if (this.selectedCheckboxCategories.length > 0) {
      this.allCategoriesSelected = false;
    }

    this.applyFilters();
  }


  // Handle color checkbox change
  onCategoryColorboxChange(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    const value = checkbox.value;

    if (checkbox.checked) {
      this. selectedColorboxCategories.push(value);
    } else {
      this. selectedColorboxCategories = this. selectedColorboxCategories.filter(cat => cat !== value);
    }

    this.applyFilters();
  }


  // Price filter
  minPrice = 0;
  maxPrice = 100000; // Max price based on your data
  priceSliderOptions: Options = {
    floor: 0,
    ceil: 800, // Upper limit based on max product price
    step: 10, // Step value for the slider
    translate: (value: number): string => `$${value}`
  };

  // Handle price slider change
  onPriceChange() {
    this.applyFilters();
  }






  // Apply filters based on dropdown, checkboxes, and price range
  applyFilters() {
    let filtered = this.getData.productData;

    // Filter by dropdown category
    if (this.selectedDropdownCategory) {
      filtered = filtered.filter(product => product.pdCategory === this.selectedDropdownCategory);
    }

    // Further filter by selected checkboxes (if any)
    if (this.selectedCheckboxCategories.length > 0) {
      filtered = filtered.filter(product => this.selectedCheckboxCategories.includes(product.pdCategory));
    }
    // Further filter by selected checkboxes (if any)
    if (this. selectedColorboxCategories.length > 0) {
      filtered = filtered.filter(product => this.selectedColorboxCategories.includes(product.pdColor));
    }

    // Filter by price range
    filtered = filtered.filter(product => product.pdPrice >= this.minPrice && product.pdPrice <= this.maxPrice);

    this.filteredProducts = filtered;
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible; // Toggle sidebar visibility
  }

}
