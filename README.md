# REACT-MAPS 

Create beautiful,interactive maps with a vivid collection of over 200+ maps ranging from countries, continents and others! 

Drop of a ✨ if you are here. It would mean a lot : )

### Download Stats
Total downloads: 206031

![image](https://github.com/reactmaps/react-maps/assets/110319892/913ca23e-4a3f-4285-9c98-f227e2f64c4c)

# Features
1) Wide range of maps (239 to be exact )
2) Very small dependency size ( Largest map is less than 800kB )
3) Easy to use components!  

# Installation 
Navigate to your favourite map component and install it in your react project using 
```
npm install @react-map/{your_country}
```
That is it! you are now ready to use the map components.

# Usage 
Each component you add has a fixed set of parameters that you can use to tweek around the map's behaviour.
> [!IMPORTANT]
> The 'type' component is mandatory for every component in the latest version of react-map due to the introduction of different types of map behaviours.
```ts
export interface props = {
  type: 'select-single' | 'select-multiple';
  size?: number;
  mapColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
  hoverColor?: string;
  selectColor?: string;
  hints?: boolean;
  hintTextColor?: string;
  hintBackgroundColor?: string;
  hintPadding?: string;
  hintBorderRadius?: string;
  onSelect?: (state: string, selectedStates?: string[]) => void;
}
```
1) `type` - It takes value either `select-single` or `select-multiple` to alter the selection behaviour of the map. In `select-single`, only one state/region can be selected at one time, whereas in `select-multiple`, you can select multiple regions at once. 
2) `size` - It helps you increase or decrease the map size according to your requirement.
3) `mapColor` - It changes the default colour of the Map elements.
4) `strokeColor` - It defines the colour with which the borders are represented.
5) `strokeWidth` - It represents the width of the borders.
6) `hoverColor` - It is the colour of the component that is hovered upon.
7) `selectColor` - It is the coulour of the component(s) that is selected.
8) `hints` - This is a boolean parameter that displays the name of the region/state when it is hovered on.
9) `hintTextColor` - If hint is enabled, this parameter would decide the colour of the text in which hints are displayed.
10) `hintBackgroundColor` - If hint is enabled, this parameter would decide the background colour of the hints that are displayed.
11) `hintPadding` - If hint is enabled, this parameter would decide the Padding of the hints that are displayed.
12) `hintBorderRadius` - If hint is enabled, this parameter would decide the Border Radius of the hints that are displayed.
13) `onSelect` - It helps you decide what to do upon clicking on a specific component in a map (say city). If the state is `select-multiple`, then the function can have two parameters, `(state: string, selectedStates?: string[])` , `state` is the latest selected state and `selectedState` is an array of all the states that are selected. If the state is `select-single`, then the `onSelect` function takes in a single `state` parameter, that is the code of the latest selected state. 

Each element in a map returns a string, that represents the name of the region. That could be used to add different functionality based on the region that is clicked.

# Examples 
React Map components are customizable and can be easily used with whichever library you want! For example - 
1) `react-toastify`
```tsx
// Import the required dependencies
import World from "@react-map/world";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Define the onselect function that takes in a name
 const toast = (sc) => {
    toast(sc);
  };

// Call that within the component
<World onSelect={toast} size={1600} hoverColor="orange"  type = 'select-single'/>
<ToastContainer />
``` 
### Preview 

[toastify-demo.webm](https://github.com/reactmaps/react-maps/assets/110319892/377259b0-4acc-40bb-bab9-d49e51e20b14)

2) `react-router-dom`
```tsx
// Import the required dependencies
import World from "@react-map/world";
import { useNavigate } from "react-router-dom";

// Define the onselect function that takes in a name
const a = useNavigate();
  const redirect = (sc) => {
  // Assuming you have defined your routes
     a(`${sc}`);
  };

// Call that within the component
<World onSelect={redirect} size={1600} hoverColor="orange" type = 'select-single'/>
```

[router-dom.webm](https://github.com/reactmaps/react-maps/assets/110319892/07cafb16-efbc-4616-87d0-9e736a003ef3)

# Disclaimer 
1) I did not intend to take sides in disputed territories. So, I have tried my best to include both sides of such territories so that the user is free to choose the map they are comfortable in. 
2) If you are facing problems in using any component, such that map is not displaying completely.. Feel free to post an issue and I would get it corrected. It most probably would be an SVG Viewport issue.


## Support

If you find this project helpful, consider buying me a coffee!

<p align="center">
  <a href="https://www.buymeacoffee.com/shubh622005" target="_blank">
    <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;">
  </a>
</p>

# Thanks 
If you read till here, thanks for taking interest in this. Hope I could be useful for you :)
