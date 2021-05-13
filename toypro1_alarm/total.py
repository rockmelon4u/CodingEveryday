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
    # print(n)

    if n > 3:
        url = 'https://notify-api.line.me/api/notify'
        token = 'T1YvzPHCtdBGRwQOLV0JyzT8OdFvnrQv9oVfPw9z6Fr'
        headers = {
            'Content-Type': "application/x-www-form-urlencoded",
            'Cache-Control': "no-cache",
            'Authorization': "Bearer " + token
        }
        data = {'message': '게시물이 3개 이상'}
        r = requests.post(url, data=data, headers=headers)
        print(r.text)

else:
    print(response.status_code)
