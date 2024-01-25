import xml.etree.ElementTree as ET

def parse_svg(svg_file_path):
    titles = []
    tree = ET.parse(svg_file_path)
    root = tree.getroot()
    ns = {'svg': 'http://www.w3.org/2000/svg'}
    path_elements = root.findall('.//svg:path[@title]', namespaces=ns)
    for path_element in path_elements:
        title = path_element.get('title')
        titles.append(title)

    return titles
svg_file_path = '/home/jerry/Desktop/react-maps/assets/africa.svg'
titles = parse_svg(svg_file_path)
print(titles)
