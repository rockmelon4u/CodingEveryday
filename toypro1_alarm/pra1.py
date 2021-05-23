import requests
url = 'https://notify-api.line.me/api/notify'
token = 'HQuiYYhXHvJHF8f3egR6SGnh6R8Ybl5dyDIqQIWD6Nl'   #Generated token what you get personally
msg = 'Line msg test'   #messege what you want to text
headers = { 
    'Content-Type' : "application/x-www-form-urlencoded",
    'Authorization' : "Bearer " + token 
}
data = {'message': msg}
x = requests.post(url, data=data, headers=headers)
# print(x.text)   #result : {"status":200,"message":"ok"}

# import requests

# url = 'https://notify-api.line.me/api/notify'
# token = 'T1YvzPHCtdBGRwQOLV0JyzT8OdFvnrQv9oVfPw9z6Fr'
# headers = { 
#     'Content-Type' : "application/x-www-form-urlencoded",
#     'Authorization' : "Bearer " + token 
# }
# data = {'message': 'Line msg test'}
# x = requests.post(url, data=data, headers=headers)

# print(x.text)