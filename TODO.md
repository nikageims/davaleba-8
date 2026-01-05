# Website Improvement Plan

## Information Gathered
- **HTML (index.html)**: Inline styles and scripts moved to external files. The structure includes header, main content with Flash Sales, Trending must-haves, Top100, and footer.
- **CSS (assets/css/style.css)**: Extensive styles with media queries for mobile, tablet, and desktop. Responsive issues fixed using CSS variables.
- **JS (js/app.js)**: Countdown timer enhanced with system variables and dropdown functionality.

## Plan
1. **Separate CSS and JS from HTML**:
   - [x] Move all inline `<style>` tags to `assets/css/style.css`.
   - [x] Move inline `<script>` tags to `js/app.js`.
   - [x] Ensure proper linking in HTML.

2. **Fix Responsive Errors**:
   - [x] Review and fix media queries for better mobile/tablet/desktop adaptation.
   - [x] Ensure elements like cards, headers, and footers stack properly on smaller screens.
   - [x] Test for issues like overflow, fixed widths, or improper centering.

3. **Add Flash Sales and Trending must-haves to Dropdown List**:
   - [x] Create a dropdown menu in the header or navigation for categories like Flash Sales, Trending must-haves, etc.
   - [x] Use JS to toggle the dropdown.

4. **Implement System Variables**:
   - [x] Use CSS custom properties (variables) for colors, fonts, spacing.
   - [x] Use JS variables for dynamic content like countdown timers.

5. **Create Separate Panel Folder**:
   - [x] Create a `panels` folder.
   - [x] Move or create components like dropdown panels there for easy management.

6. **Create Design Switcher Panel**:
   - [x] Create a floating design switcher panel with theme options (Default, Dark, Minimal, Vibrant).
   - [x] Add color picker for primary color customization.
   - [x] Add font size selector.
   - [x] Include reset to default functionality.
   - [x] Implement CSS variables and theme classes for dynamic styling.

## Dependent Files to Edit
- `index.html`: Remove inline styles/scripts, add links, include design switcher HTML.
- `assets/css/style.css`: Add separated styles, fix responsive issues, add variables, theme styles, and design switcher styles.
- `js/app.js`: Add separated scripts, dropdown functionality, variables.
- `js/design-switcher.js`: New file for design switcher functionality.
- `panels/design-switcher.html`: New file for design switcher HTML structure.

## Followup Steps
- Test responsiveness on different screen sizes.
- Verify dropdown functionality.
- Ensure no broken links or styles after separation.
- Test design switcher themes and customization options.
- Verify pixel-perfect alignment and responsive behavior.
