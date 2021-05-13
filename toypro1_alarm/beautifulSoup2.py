import requests #requests 모듈 가져오기
from bs4 import BeautifulSoup as bs #bs4 모듈에 있는 BeautifulSoup 함수를 가져와 bs로 쓰기
# 왜? BeautifulSoup란 함수가 여러 모듈에 동시에 존재할 수 있기 때문에.
# 정적인 페이지를 읽어들일때 유효

url = 'https://www.naver.com/'  #3.4버전 부터 작은 따옴표가 기본
response = requests.get(url)
html_text = requests.get(url).text
# requests.get함수의 첫 번째 인자로 가져오고 싶은 url 주소를 입력.
# return 값으로 <Response [200]> 을 받는다. 그러면 통신 성공.
# .text 로, 해당 웹페이지가 응답으로 준 웹 데이터를 str 형식으로.

# print(html_text)   #길고 지저분.

soup_obj = bs(html_text, "html.parser")
# BeautifulSoup 객체는 생성될 때 두 개의 매개변수를 받도록 설계되어 있습니다.
# 첫 번째 인자는 str형식이어야 하며, html이나 xml 형식으로 작성된 문자열이어야 합니다.
# 두 번째 인자는 앞에서 넣은 text를 어떻게 처리할 지에 대한 해석기(parser)넣어줘야 합니다.

# bs()객체를 생성, 첫번째인자로 html text, html parser를 보내주고, soup 객체를 얻어내는 코드.

# print(soup_obj)   #보기쉽고 간결하게. 정렬.

# soup 객체에는 find, findAll, select 라는 특정 태그 밑의 text를 찾아내는 메서드
# 그 중에 css 선택자를 이용할 수 있는 select 메서드 사용.
# " . " 은 클래스를 뜻하는 문법입니다.
# 혹시 크롤링을 하다가 id="ah_item"이라고 써있는걸 봤다면 #ah_item이라고 써주면 됩니다.
# " # " 는 아이디를 뜻하는 문법입니다.
# 그리고 " > "는 '바로 아래에 자식으로 있는' 이라는 뜻입니다.

# 이렇게 이런 select 메서드는 html에서 해당 선택자에 부합하는 태그들을 list 형태로 가져오게 됩니다.

#NM_FAVORITE > div.group_nav > ul.list_nav.type_fix > li:nth-child(1) > a

ranks = soup_obj.select('#NM_FAVORITE > div.group_nav > ul.list_nav.type_fix > li > a.nav')
# print(ranks)
# 여기서 텍스트값만 추출
for m in ranks:
    print(m.text)