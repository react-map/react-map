import os
packages_dir = '/home/jerry/react-maps/packages'

for root, dirs, files in os.walk(packages_dir):
    for file in files:
        if file == 'package-lock.json':
            file_path = os.path.join(root, file)
            try:
                os.remove(file_path)
                print(f"Deleted: {file_path}")
            except Exception as e:
                print(f"Error deleting {file_path}: {e}")
