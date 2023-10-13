# Inventory Page Test Cases

## Positive Test Cases

### Should display products on the page
1. **Given** a user is logged in
2. **When** the user navigates to the inventory page
3. **Then** the URL should include '/inventory.html'
4. **And** the title should have the text 'Products'

## Sorting Products

### Should sort items by name in ascending order
1. **Given** a user is logged in
2. **When** the user selects to sort items by name in ascending order ('A to Z')
3. **Then** the inventory items should be sorted alphabetically in ascending order

### Should sort items by name in descending order
1. **Given** a user is logged in
2. **When** the user selects to sort items by name in descending order ('Z to A')
3. **Then** the inventory items should be sorted alphabetically in descending order

### Should sort items by price in ascending order (low to high)
1. **Given** a user is logged in
2. **When** the user selects to sort items by price in ascending order (low to high)
3. **Then** the inventory items should be sorted by price in ascending order

### Should sort items by price in descending order (high to low)
1. **Given** a user is logged in
2. **When** the user selects to sort items by price in descending order (high to low)
3. **Then** the inventory items should be sorted by price in descending order
