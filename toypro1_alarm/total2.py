import requests
from bs4 import BeautifulSoup as bs

def function_Line_Notify(msg):
    url = url = 'https://notify-api.line.me/api/notify'
    token = 'T1YvzPHCtdBGRwQOLV0JyzT8OdFvnrQv9oVfPw9z6Fr'
    headers = { 
        'Content-Type' : "application/x-www-form-urlencoded",
        'Authorization' : "Bearer " + token 
    }
    data = {'message': msg}
    x = requests.post(url, data=data, headers=headers)

url = 'https://www.passport.go.kr/new/board/passport.php'
response = requests.get(url)

if response.status_code == 200:
    html = requests.get(url).text
    soup_obj = bs(html, "html.parser")
    nums = soup_obj.select('#content > table > tbody > tr > td.subject')
    n = len(nums)
    if n > 3:
        msg = '게시물이 4개 이상입니다. \n' + url
        function_Line_Notify(msg)
    if not n :
        ip = '크롤링이 제대로 되고 있지 않는듯.. 확인바람.'
        function_Line_Notify(ip)

else :
    function_Line_Notify(response.status_code)


