import requests
from bs4 import BeautifulSoup

def function_Line_Notify(ip):   #함수 정의
    url = 'https://notify-api.line.me/api/notify'
    token = 'HQuiYYhXHvJHF8f3egR6SGnh6R8Ybl5dyDIqQIWD6Nl'
    headers = {
        'Content-Type': "application/x-www-form-urlencoded",
        'Cache-Control': "no-cache",
        'Authorization': "Bearer " + token
    }
    data = {'message': ip}
    x = requests.post(url, data=data, headers=headers)
    # print(x.text)

url = 'https://www.passport.go.kr/new/board/passport.php'

response = requests.get(url)

if response.status_code == 200:
    html = response.text
    soup = BeautifulSoup(html, 'html.parser')
    nums = soup.select('#content > table > tbody > tr > td > a')
    # for num in nums:
    # print(num.get_text())
    n = len(nums)   #크기
    print(n)

    if n > 3:
        ip = '게시물이 4개 이상입니다. \n' + url
        function_Line_Notify(ip)
    if not n:   #공백이거나 NULL인경우
        ip = '크롤링이 제대로 되고 있지 않는듯.. 확인바람.'
        function_Line_Notify(ip)


else:
    function_Line_Notify(response.status_code)
