from pathlib import Path
import re

def update_constants(country_name):
    packages_folder = Path('/home/jerry/Desktop/react-maps/packages')
    country_dir = packages_folder / country_name
    src_dir_path = country_dir / 'src'
    country_name_capitalized = country_name.capitalize()
    constants_file_path = src_dir_path / 'constants.ts'

    with open(constants_file_path, 'r') as f:
        constants_file_content = f.read()
    # print(constants_file_content)
    new_constant = " SELECTED_COLOR: '#ff0000',\n "
    pattern = r"(export\s+const\s+constants\s*=\s*\{[^\}]*)(\};)"
    replacement = r"\1" + new_constant + r"\2"
    updated_content = re.sub(pattern, replacement, constants_file_content, flags=re.DOTALL)
    with open(constants_file_path, 'w') as f:
        f.write(updated_content)

    print(f'Updated {country_name_capitalized} constants file')


packages_directory = Path("/home/jerry/Desktop/react-maps/packages")

for package_dir in packages_directory.iterdir():
    if package_dir.is_dir():
        update_constants(package_dir.name)
        # print(package_dir.name)

