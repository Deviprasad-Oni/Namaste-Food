# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code splitting
- Differential Bundling - support older versions
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

Namaste Foods

Header

- logo
- Nav Items
  Body
- Search
- RestaurantContainer
- RestaurantCard
  - Img
  - Name of Res ,start Rating , cuisine, delivery time
- Footer
- Copyright
- Links
- Address
- Contact

Two types of Export/Import

- Default Export/Import

export default Component;
import Component from "path";

- Named Export/Import

export const component;
import {component} from "path";

# Redux Toolkit

- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice (cartSlice)
- dispatch(action)
- Selector

#Setting up Testing in our app

- Install React Testing Library
- Installed Jest
- Installed Babel dependencies
- Configure Babel
- Configure Parcel Config file to disable babel transpilation
- Jest - npx jest --init
- Install jsdom library
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel config
- Install @testing-library/jest-dom
