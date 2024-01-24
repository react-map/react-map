import requests
from bs4 import BeautifulSoup
from urllib.parse import urlparse, parse_qs

url = "https://www.amcharts.com/svg-maps/"
response = requests.get(url)
html_content = response.content
soup = BeautifulSoup(html_content, 'html.parser')
parent_div = soup.find('div', class_='entry-content content-col')
rows = parent_div.find_all(class_='row')
result_list = []

for row in rows:
    cols = row.find_all(class_='col-lg-3 col-md-3 col-xs-6')
    
    for col in cols:
        ul = col.find('ul')
        
        if ul:
            result_list.extend(ul.find_all('li'))

for li in result_list:
    a = li.find('a')
    
    if a:
        next_url = a.get('href')
        print(next_url)
        parsed_url = urlparse(next_url)
        query_params = parse_qs(parsed_url.query)
        map_name = query_params.get('map')[0]
        next_response = requests.get(next_url)
        next_html_content = next_response.content
        n_soup = BeautifulSoup(next_html_content, 'html.parser')
        p_div = n_soup.find('div', class_='entry-content content-col') 
        n_rows = p_div.find_all(class_='row')
        
        for nrow in n_rows:
            ncols = nrow.find_all(class_='col-md-6 col-sm-12 right')
            
            for ncol in ncols:
                download_anchors = ncol.find_all('a')
                svg_response = requests.get(download_anchors[0].get('href'))
                svg_content = svg_response.content
                with open(f"/home/jerry/Desktop/react-maps/assets/{map_name}.svg",'wb') as f:
                    f.write(svg_content)