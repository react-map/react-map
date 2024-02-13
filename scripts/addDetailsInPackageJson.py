import json
from pathlib import Path

def addDetailsInPackageJson():
    dir_path = Path(f'/home/jerry/Desktop/react-maps/packages')
    for country_dir in dir_path.iterdir():
        if country_dir.is_dir():
            with open(country_dir / 'package.json') as f:
                package_json = json.load(f)
            additional_items = {
                "repository": {
                    "type": "git",
                    "url": "git+https://github.com/shubhexists/react-maps"
                },
                "author": "Shubham Singh<shubh622005@gmail.com>",
                "keywords": [
                    "interactive-maps",
                    "react-maps",
                    "react",
                    "svg-maps",
                    "maps",
                    "react-components",
                    f'{country_dir.name}-map',
                    f'{country_dir.name}',
                    f'{country_dir.name}-react-component',
                    f'{country_dir.name}-svg',
                    f'{country_dir.name}-react-map',
  ],
  "readme": f"Beautiful, easy to use and interactive svg map component of {country_dir.name.capitalize()} for React",
}
            package_json.update(additional_items)
            with open(country_dir / 'package.json', 'w') as f:
                json.dump(package_json, f, indent=4)

addDetailsInPackageJson()