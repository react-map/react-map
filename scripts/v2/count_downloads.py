import os
import json
import requests
from datetime import datetime

def get_package_name(package_json_path):
    try:
        with open(package_json_path, 'r') as f:
            data = json.load(f)
            return data.get('name')
    except Exception as e:
        print(f"Error reading {package_json_path}: {e}")
        return None

def get_downloads(package_name, start_date, end_date):
    try:
        url = f"https://api.npmjs.org/downloads/point/{start_date}:{end_date}/{package_name}"
        response = requests.get(url)
        if response.status_code == 200:
            download_data = response.json()
            return download_data.get('downloads', 0)
        else:
            print(f"Error fetching downloads for {package_name}: HTTP {response.status_code}")
            return 0
    except Exception as e:
        print(f"Error fetching downloads for {package_name}: {e}")
        return 0

def sum_downloads(directory_path, start_date, end_date):
    total_downloads = 0
    for item in os.listdir(directory_path):
        item_path = os.path.join(directory_path, item)
        package_json_path = os.path.join(item_path, 'package.json')
        if os.path.isfile(package_json_path):
            package_name = get_package_name(package_json_path)
            if package_name:
                downloads = get_downloads(package_name, start_date, end_date)
                print(f"{package_name}: {downloads}")
                total_downloads += downloads
            else:
                print(f"No package name found in {package_json_path}")
    return total_downloads

if __name__ == "__main__":
    directory_path = "/home/jerry/Desktop/react-maps/packages"
    today = datetime.today().strftime('%Y-%m-%d')
    start_date = "2023-10-01"
    total_downloads = sum_downloads(directory_path, start_date, today)
    print(f"Total downloads: {total_downloads}")
    with open('total_downloads.txt', 'w') as f:
        f.write(str(total_downloads))
