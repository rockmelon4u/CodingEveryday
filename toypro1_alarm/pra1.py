import requests
url = 'https://notify-api.line.me/api/notify'
token = 'T1YvzPHCtdBGRwQOLV0JyzT8OdFvnrQv9oVfPw9z6Fr'
headers = { 
    'Content-Type' : "application/x-www-form-urlencoded",
    'Cache-Control' : "no-cache",
    'Authorization' : "Bearer " + token 
}
data = {'message': 'Line msg test'}
r = requests.post(url, data=data, headers=headers)
print(r.text)

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