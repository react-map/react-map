from pathlib import Path
from parseStateCode import parse_svg
from parseDrawPath import parse_svg_to_dict

def create_new_country(country_name):
    dir_path = Path(f'/home/jerry/Desktop/react-maps/packages/{country_name}')
    svg_path = f'/home/jerry/Desktop/react-maps/assets/{country_name}.svg'
    dir_path.mkdir(parents=True, exist_ok=True)
    src_dir_path = dir_path / 'src'
    src_dir_path.mkdir(parents=True, exist_ok=True)
    dist_dir_path = dir_path / 'dist'
    dist_dir_path.mkdir(parents=True, exist_ok=True)
    package_json_file_path = dir_path / 'package.json'
    package_json_file_path.touch()
    package_json_file_path.write_text(f'''
{{
    "name": "@react-map/{country_name}",
    "version": "1.0.0",
    "main": "./dist/index.js",
    "module": "./dist/index.mjs",
    "types": "./dist/index.d.ts",
    "license": "MIT",
    "scripts": {{
        "build": "tsup"
    }},
    "devDependencies": {{
        "@types/react": "^18.2.45",
        "typescript": "^5.3.3",
        "tsup": "^8.0.1"
    }},
    "peerDependencies": {{
        "react": ">=16.8.0",
        "react-dom": ">=16.8.0"
    }},
    "publishConfig": {{
        "access": "public"
    }}
}}''')

    tsconfig_json_file_path = dir_path / 'tsconfig.json'
    tsconfig_json_file_path.touch()
    tsconfig_json_file_path.write_text('''
  {
    "compilerOptions": {
        "jsx": "react",
        "strict": true,
        "noImplicitAny": true,
        "esModuleInterop": true,
        "strictNullChecks": true,
        "target": "ES2022",
        "moduleResolution": "Node10",
        "module": "CommonJS",
        "declaration": true,
        "isolatedModules": true,
        "noEmit": true,
        "outDir": "dist"
    },
    "include": ["src"],
    "exclude": ["node_modules"]
  }''')
    tsup_config_file_path = dir_path / 'tsup.config.ts'
    tsup_config_file_path.touch()
    tsup_config_file_path.write_text('''
import { defineConfig } from 'tsup';
 
export default defineConfig({
    format: ['cjs', 'esm'],
    entry: ['./src/index.ts'],
    dts: true,
    shims: true,
    skipNodeModulesBundle: true,
    clean: true,
});
 ''')
    index_ts_file_path = src_dir_path / 'index.ts'
    index_ts_file_path.touch()
    index_ts_file_path.write_text(f'''
        import {country_name.capitalize()} from './{country_name.capitalize()}';
        export default {country_name.capitalize()};
    ''')
    country_component_tsx_file_path = src_dir_path / f'{country_name.capitalize()}.tsx'
    country_component_tsx_file_path.touch()
    country_component_tsx_file_path.write_text(f'''
import React from "react";
import {{ drawPath, stateCode, constants }} from "./constants";

const {country_name.capitalize()} = ({{
  size,
  mapColor,
  strokeColor,
  strokeWidth,
  hoverColor,
  onSelect,
}}: {country_name.capitalize()}Props) => {{
  const mapStyle = {{
    width: size || constants.WIDTH,
    fill: mapColor || constants.MAPCOLOR,
    stroke: strokeColor || constants.STROKE_COLOR,
    strokeWidth: strokeWidth || constants.STROKE_WIDTH,
  }};

  const handleMouseEnter = (hoverStateId: string) => {{
    const path = document.getElementById(hoverStateId);
    if (path) {{
      path.style.fill = hoverColor || constants.HOVERCOLOR;
    }}
  }};

  const handleMouseLeave = (hoverStateId: string) => {{
    const path = document.getElementById(hoverStateId);
    if (path) {{
      path.style.fill = mapColor || constants.MAPCOLOR;
    }}
  }};

  return (
    <>
      <div className="map" style={{mapStyle}}>
        <svg
          version="1.1"
          id="svg2"
          x="0px"
          y="0px"
          viewBox="0 0 800 800"
        >
          {{stateCode?.map((stateCode, index) => (
            <path
              key={{index}}
              onClick={{() => onSelect(stateCode)}}
              onMouseEnter={{() => handleMouseEnter(stateCode)}}
              onMouseLeave={{() => handleMouseLeave(stateCode)}}
              id={{stateCode}}
              d={{drawPath[stateCode as keyof typeof drawPath]}}
            />
          ))}}
        </svg>
      </div>
    </>
  );
}};

export interface {country_name.capitalize()}Props {{
  size?: number;
  mapColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
  hoverColor?: string;
  onSelect: (state: string) => void;
}}

export default {country_name.capitalize()};
''')

    constants_ts_file_path = src_dir_path / 'constants.ts'
    constants_ts_file_path.touch()
    constants_ts_file_path.write_text(f'''
export const constants = {{
  WIDTH: "500px",
  MAPCOLOR: "#ffffff",
  STROKE_COLOR: "#000000",
  STROKE_WIDTH: "0.5",
  HOVERCOLOR: "#303030",
}};
export const stateCode = {parse_svg(svg_path)};
export const drawPath = {parse_svg_to_dict(svg_path)};
''')

if __name__ == '__main__':
    create_new_country('zimbabwe')