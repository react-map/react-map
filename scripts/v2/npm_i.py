import subprocess
from pathlib import Path
import os

def run_npm_install(package_path):
    original_directory = Path.cwd()
    os.chdir(package_path)
    try:
        subprocess.run(['npm', 'install'], check=True)
        print(f"npm commands executed successfully for {package_path.name}")
    except subprocess.CalledProcessError as e:
        print(f"Error executing npm commands for {package_path.name}: {e}")
    finally:
        os.chdir(original_directory)

packages_directory = Path("/home/jerry/Desktop/react-maps/packages")

for package_dir in packages_directory.iterdir():
    if package_dir.is_dir():
        run_npm_install(package_dir)

