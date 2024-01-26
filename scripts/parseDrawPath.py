import xml.etree.ElementTree as ET
import json

def parse_svg_to_dict(svg_file_path):
    title_d_dict = {}
    tree = ET.parse(svg_file_path)
    root = tree.getroot()
    ns = {'svg': 'http://www.w3.org/2000/svg'}
    path_elements = root.findall('.//svg:path[@title]', namespaces=ns)
    for path_element in path_elements:
        title = path_element.get('title')
        d_attribute = path_element.get('d')
        title_d_dict[title] = d_attribute

    return title_d_dict

# svg_file_path = '/home/jerry/Desktop/react-maps/assets/bosniaHerzegovinaCantons.svg'
# title_d_dict = parse_svg_to_dict(svg_file_path)

# def write_dict_to_ts(data, output_file):
#     with open(output_file, 'w') as ts_file:
#         ts_file.write('export const drawPath = ')
#         json.dump(data, ts_file, ensure_ascii=False, indent=2)
#         ts_file.write(';')

# output_file = "./output.ts"
# write_dict_to_ts(title_d_dict, output_file)