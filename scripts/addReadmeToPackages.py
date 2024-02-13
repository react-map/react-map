from pathlib import Path
import json

def get_comp_name(package_path):
     src_path = package_path / 'src'
     tsx_files = list(src_path.glob('*.tsx'))
     file_name = tsx_files[0].stem
     return file_name

def addReadme():
    dir_path = Path(f'/home/jerry/Desktop/react-maps/packages')
    for country_dir in dir_path.iterdir():
        if country_dir.is_dir():
            a = get_comp_name(country_dir)
            with open(country_dir / 'package.json') as f:
                package_json = json.load(f)
            package_name = package_json['name']
            readme_file_path = country_dir / 'README.md'
            readme_file_path.touch()
            readme_file_path.write_text(f'''# {country_dir.name}
This package contains the map of {country_dir.name}. 
## Installation
Install the package into your project by -
```
// with npm
npm install {package_name}
```
## Usage 
```jsx
// Import the Component
import {a} from "{package_name}";
```
And you are good to go! Use this component in you main components.
For further usage refer - [Readme](https://github.com/shubhexists/react-maps?tab=readme-ov-file#usage)
## Disclaimer 
1) I did not intend to take sides in disputed territories. So, I have tried my best to include both sides of such territories so that the user is free to choose the map they are comfortable in. 
2) If you are facing problems in using any component, such that map is not displaying completely.. Feel free to post an issue and I would get it corrected. It most probably would be an SVG Viewport issue.
## Thanks 
If you read till here, thanks for taking interest in this. Hope I could be useful for you :)''')

addReadme()