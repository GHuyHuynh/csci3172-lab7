# Lab 7

Lab 7: Create a simple web page using React with Tailwind CSS to display Porsche 911 GT3 RS.

* *Date Created*: 04 NOV 2024
* *Last Modification Date*: 04 NOV 2024
* *Lab URL (Netlify)*: [Link](https://web.cs.dal.ca/~huyh/csci3172/lab5/)
* *GitLab URL*: [Link](https://git.cs.dal.ca/huyh/csci3172/-/tree/main/labs/lab7?ref_type=heads)
* *GitHub URL*: [Link](https://github.com/GHuyHuynh/csci3172-lab7)


## Authors

* [Huy Huynh](huy.huynh@dal.ca) - (Author)

## Built With

<!--- Provide a list of the frameworks used to build this application, your list should include the name of the framework used, the url where the framework is available for download and what the framework was used for, see the example below --->

* [Tailwind CSS](https://tailwindcss.com/) - The styling used


## Sources Used

If in completing your lab / assignment / project you used any interpretation of someone else's code, then provide a list of where the code was implemented, how it was implemented, why it was implemented, and how it was modified. See the sections below for more details.

### Install Tailwind CSS with Create React App
from [Tailwind CSS](https://tailwindcss.com/docs/guides/create-react-app)

#### index.css
*Lines 1 - 3*

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### tailwind.config.js
*Lines 1 - 10*

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- <!---Why---> [Tailwind CSS](https://tailwindcss.com/)'s Code was used because I want to use Tailwind CSS for easier styling


### Porsche 911 GT3 RS Image
from [Porsche](https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXkBuNYdMGF4tl3U0%25z8rMHIspbWvanYb%255y%25oq%25vSTmjMXD4qAZeoNBPUSfUx4RmHlCgI7Zl2dioCxkF%25vUqCNwuWXsOw3meV6iTCj%25zhRc2GRdqAZ%25oD21P%25S1BAXmenugTfeIJpV7nDhQk)

- Image downloaded into `src/assets/porsche.png`

#### App.js
*Lines 2*

```js
import porsche from './assets/porsche.png';
```

- <!---Why---> I love the car and want to display it on my web page