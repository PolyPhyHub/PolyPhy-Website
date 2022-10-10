# Polyphy Website

## Overview

### About
This is the documentation for the official website of Polyphy. It gives a brief overview of the what the website encompasses and the technical concepts behind the same. Polyphy is an interactive tool to analyze intergalactic gas and dark matter filaments (together known as 'Cosmic web') using the Monte Carlo Physarum Machine (MCPM) algorithm inspired by the foraging behavior of Physarum polycephalum 'slime mold'.

### Target Audience
This website mainly caters to 3 types of users: 
- Visitors: Who would visit the website occasionally.
- Experts: These users basically include engineers and scientists who want to know how to go about using the software. 
- Contributors: Users who want to have an indepth understanding of the various functions and API reference of Polyphy

### Goals
- Brief - Should be able to convey basic information about the software 
- Extendable - should be properly documented so that it can be worked on further
- Design - Reflect the interdisciplinary nature of the project. Not only in terms of the visual design and written content but also its structure. 

## Tech Stack
This website is made using Create React App template. 
`node version 17.4.0 or above`

### Commands
- To install packages - `npm install`
- To start server - `npm start`
- To build website - `npm run build`

## Content Structure
### Site map
### Content Types

1. Publications:
    - name : String
    - journal: String
    - image: String
    - homepage: Boolean
    - authors: String
    - brief: String
2. Usecases:
    - name: String
    - image: String
    - id: String
    - brief: String
3. Creative:
    - title: String
    - subtitle: String
    - authors: String
    - id: String
    - image: String
4. Team:
    - name: String
    - about: String
    - image: Image
5. Significant Contributors:
    - name: String

## File Structure
📦src
 ┣ 📂Assets
 ┣ 📂Components
 ┣ 📂Constants
 ┣ 📂Pages
 ┣ 📂sass
 ┣ 📜App.css
 ┣ 📜App.js
 ┗ 📜index.js

## Design
### Color Variables
1. theme-amber: #ff8400
2. text-color: #e6e6e6
3. heading-color: #f2f2f2

### Responsiveness Variables
1. media-tablet: max-width : 756px
2. media-mobile: max-width : 550px

### Typography rules
#### Fonts
1. Headings: [Bitter](https://fonts.google.com/specimen/Bitter)
2. Text: [Raleway](https://fonts.google.com/specimen/Raleway)

#### Font Size
Generally 14px for normal paragraph text and suitable size for smaller screen.
For H1 headings, 40px for large screens and 30px for smaller ones.

#### Grid Systems
We are using [MUI Grid](https://mui.com/material-ui/react-grid/#main-content) System for this website with a spacing of generally 2 or 4 units.

#### CSS
Preprocessor used - SASS
VS Code Plugin to generate CSS files - [Live SASS Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass)

index.scss - contains default styles
about.scss - contains all page styles
navbar_footer.scss - navbar and footer styles
variables.scss - contains variables
App.css - root styles