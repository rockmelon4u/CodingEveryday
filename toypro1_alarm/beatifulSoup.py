import requests
from bs4 import BeautifulSoup

url = 'https://www.passport.go.kr/new/board/passport.php'

response = requests.get(url)

if response.status_code == 200:
    html = response.text
    soup = BeautifulSoup(html, 'html.parser')
    nums = soup.select('#content > table > tbody > tr > td > a')
    # for num in nums:
        # print(num.get_text())
    n = len(nums)
    print(n)



else : 
    print(response.status_code)

