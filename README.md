# REACT-MAPS 

Create beautiful,interactive maps with a vivid collection of over 200+ maps ranging from countries, continents and others! 

Drop of a ✨ if you are here. It would mean a lot : )

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
Each component you add has a fixed 6 parameters that you can use to tweek around the map's behaviour.
```ts
export interface props = {
  size?: number;
  mapColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
  hoverColor?: string;
  onSelect: (state: string) => void;
}
```
1) `size` - It helps you increase or decrease the map size according to your requirement.
2) `mapColour` - It changes the default colour of the Map elements.
3) `strokeColour` - It defines the colour with which the borders are represented.
4) `strokeWidth` - It represents the width of the borders.
5) `hoverColour` - It is the colour of the component that is hovered upon.
6) `onSelect` - It helps you decide what to do upon clicking on a specific component in a map (say city).

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
<World onSelect={toast} size={1600} hoverColor="orange" />
<ToastContainer />
``` 
### Preview 

[Screencast from 27-01-24 09:54:21 PM IST.webm](https://github.com/reactmaps/react-maps/assets/110319892/377259b0-4acc-40bb-bab9-d49e51e20b14)

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
<World onSelect={redirect} size={1600} hoverColor="orange" />
```

[Screencast from 27-01-24 10:33:42 PM IST.webm](https://github.com/reactmaps/react-maps/assets/110319892/07cafb16-efbc-4616-87d0-9e736a003ef3)

# Disclaimer 
1) I did not intend to take sides in disputed territories. So, I have tried my best to include both sides of such territories so that the user is free to choose the map they are comfortable in. 
2) If you are facing problems in using any component, such that map is not displaying completely.. Feel free to post an issue and I would get it corrected. It most probably would be an SVG Viewport issue.

# Thanks 
If you read till here, thanks for taking interest in this. Hope I could be useful for you :)
