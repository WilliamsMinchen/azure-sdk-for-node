// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .get('/common/UserRealm/adlsvc01%40benwgoldoutlook.onmicrosoft.com?api-version=1.0')
  .reply(200, "{\"ver\":\"1.0\",\"account_type\":\"Managed\",\"domain_name\":\"benwgoldoutlook.onmicrosoft.com\",\"cloudinstancename\":\"login.microsoftonline.com\"}", { 'cache-control': 'private',
  'content-type': 'application/json; charset=utf-8',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '4811d673-f176-4864-837a-a76520a9c535',
  'client-request-id': '3de8bbee-6b07-40ec-a946-09499a03d474',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_152',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'esctx=AAABAAAAiL9Kn2Z27UubvWFPbm0gLR6BdVZSeuwu04J1dOBbs2pRWkvysS3A7pLr0hrZ82NMPvsHe8xm1hGdQVn65zvdgqvIqdeMvn133Tt3MzAVTgnodHWApZ1Xf7iv6JIbuCXQdsYJqs902UD5Jj3I6zqBBcZ0r1ydkj8BUEjhDtnVUkFWD78nSLPTXFPtREapznjxIAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Thu, 28 Apr 2016 01:59:51 GMT',
  connection: 'close',
  'content-length': '134' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .get('/common/UserRealm/adlsvc01%40benwgoldoutlook.onmicrosoft.com?api-version=1.0')
  .reply(200, "{\"ver\":\"1.0\",\"account_type\":\"Managed\",\"domain_name\":\"benwgoldoutlook.onmicrosoft.com\",\"cloudinstancename\":\"login.microsoftonline.com\"}", { 'cache-control': 'private',
  'content-type': 'application/json; charset=utf-8',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '4811d673-f176-4864-837a-a76520a9c535',
  'client-request-id': '3de8bbee-6b07-40ec-a946-09499a03d474',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_152',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'esctx=AAABAAAAiL9Kn2Z27UubvWFPbm0gLR6BdVZSeuwu04J1dOBbs2pRWkvysS3A7pLr0hrZ82NMPvsHe8xm1hGdQVn65zvdgqvIqdeMvn133Tt3MzAVTgnodHWApZ1Xf7iv6JIbuCXQdsYJqs902UD5Jj3I6zqBBcZ0r1ydkj8BUEjhDtnVUkFWD78nSLPTXFPtREapznjxIAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Thu, 28 Apr 2016 01:59:51 GMT',
  connection: 'close',
  'content-length': '134' });
 return result; },
function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/benwgoldoutlook.onmicrosoft.com/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"scope\":\"user_impersonation\",\"expires_in\":\"3599\",\"expires_on\":\"1461812392\",\"not_before\":\"1461808492\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIvIiwiaWF0IjoxNDYxODA4NDkyLCJuYmYiOjE0NjE4MDg0OTIsImV4cCI6MTQ2MTgxMjM5MiwiYWNyIjoiMSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlRlc3QwMSIsImdpdmVuX25hbWUiOiJEYXRhTGFrZSIsImlwYWRkciI6IjE2Ny4yMjAuMC4xMzUiLCJuYW1lIjoiQXp1cmUgRGF0YSBMYWtlIFRlc3QgQWNjb3VudCAwMSIsIm9pZCI6IjJlNmMwMmQyLWEzNjQtNDUzMC05MTM3LWQxNzQwMzk5NmNiZiIsInB1aWQiOiIxMDAzQkZGRDk1NTExMDRDIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiQ0ZzTU1PdHdkd3VUN0FuQUkwUnlXUVZ0azA4anBjTEhWV00wLXA2emFYMCIsInRpZCI6IjZlNjA2ZWNlLTNhNWEtNDY3NC1hNjU0LWQ2YjAyYmM1YTUxYiIsInVuaXF1ZV9uYW1lIjoiYWRsc3ZjMDFAYmVud2dvbGRvdXRsb29rLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6ImFkbHN2YzAxQGJlbndnb2xkb3V0bG9vay5vbm1pY3Jvc29mdC5jb20iLCJ2ZXIiOiIxLjAifQ.DU-AfxSOEDaYQL2gPryC5DIf3BFghuArSltbR_SPcz_ZWMLak-Bs0YG0CyeGFqJg7qkBfhazSocrxnwAQI_kpqfOPObe8dEQtjozkI9gSnvdKW8iLSTuwehYtPyzTezfiRZtWXxQI_HhQfEaT7866x0ZOs1m7E-_14aP3HlnrkSl40kZYnSlAZLtLAILaHmouxr5ESCrxPSNC2WiHjvudNN0Ju8chU76xkcZqheneWvJUeqc-M16qQ8d-ta71sIajAyhNJMW440QLulDlMy4dJ3UfUb6ntO-SRrWvgt8kWHCg7v1RHLoT199b_8A991u82FaaDe3DEaGhwIV5Id0EQ\",\"refresh_token\":\"AAABAAAAiL9Kn2Z27UubvWFPbm0gLcmQxPFEw287L-VXFTslgKKtz8BxZpcBrtRNeuR3ChGPOkuSJZx4pYGCluYMWp0OcsEMh6kQdpsY7PR2h2NV8s6_VtydDoQtLaBCwTbYCFgqmedSOG2U-x80n7sotmU004QyymN42QCF13tU04G5fAvPKcjHwd-hBK7CoVkzjz72_VVMII7N6USevaSfWwoHLNo50TVXjXCKxzaVlYvQk05h7Iw66xcd12ZRklH5vyqvm_xiKng593mux3BDbKBxy9xTuS_oxioXuZzgXySDA3jql4du-ltUf9nXyOhKCkd0MllLb4b0Yd_V2vo8dlboF9V54WboYh-d9pEs07a7Q2DFYTf9QBCfGIVHm3aaYP2AOyNJUDJZwSMS7APleon1goRnDGSHmQ17dwI5dCypZAM41mGOTUgErl0ust4E_AUdg6ihV0ysAlKE-tmUL6zIGf0YWVPaaRm962Hv1dG5I-6Yk_I08A3Y8zONDVORt6crXFtzvCOhVPK1E6BhJwQItC-No-tGYLL48TkXtCxGE5cImpqqKXJGfiDqHDVJzMMOGDoeW3OTbM-9Yy7eLWOKKYvtmcW1jMNdV77k1D7sCOo4-g3T64JAZgWBzrqIZMZMPmK5pK__17gPQIkYrroPl14e40MHG4sXxXNpnoH64pszeymC3MXKFAxJBRGVAdr5tpFmI6vva4OFIfvnXaLvq53-8WW7CGRG1pjXtC9L3wsgAA\",\"id_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIvIiwiaWF0IjoxNDYxODA4NDkyLCJuYmYiOjE0NjE4MDg0OTIsImV4cCI6MTQ2MTgxMjM5MiwiYW1yIjpbInB3ZCJdLCJmYW1pbHlfbmFtZSI6IlRlc3QwMSIsImdpdmVuX25hbWUiOiJEYXRhTGFrZSIsImlwYWRkciI6IjE2Ny4yMjAuMC4xMzUiLCJuYW1lIjoiQXp1cmUgRGF0YSBMYWtlIFRlc3QgQWNjb3VudCAwMSIsIm9pZCI6IjJlNmMwMmQyLWEzNjQtNDUzMC05MTM3LWQxNzQwMzk5NmNiZiIsInN1YiI6ImY2bHBuNXppekwwRExEOHYxLVdjeFE4d08zcGZTT01Qd0YxSUN5ZFBLNkkiLCJ0aWQiOiI2ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIiLCJ1bmlxdWVfbmFtZSI6ImFkbHN2YzAxQGJlbndnb2xkb3V0bG9vay5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJhZGxzdmMwMUBiZW53Z29sZG91dGxvb2sub25taWNyb3NvZnQuY29tIiwidmVyIjoiMS4wIn0.\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'dde79f99-104a-4bfa-8b7e-2c2d18424f72',
  'client-request-id': '3de8bbee-6b07-40ec-a946-09499a03d474',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_141',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productionb; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Thu, 28 Apr 2016 01:59:51 GMT',
  connection: 'close',
  'content-length': '3141' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/benwgoldoutlook.onmicrosoft.com/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"scope\":\"user_impersonation\",\"expires_in\":\"3599\",\"expires_on\":\"1461812392\",\"not_before\":\"1461808492\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIvIiwiaWF0IjoxNDYxODA4NDkyLCJuYmYiOjE0NjE4MDg0OTIsImV4cCI6MTQ2MTgxMjM5MiwiYWNyIjoiMSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlRlc3QwMSIsImdpdmVuX25hbWUiOiJEYXRhTGFrZSIsImlwYWRkciI6IjE2Ny4yMjAuMC4xMzUiLCJuYW1lIjoiQXp1cmUgRGF0YSBMYWtlIFRlc3QgQWNjb3VudCAwMSIsIm9pZCI6IjJlNmMwMmQyLWEzNjQtNDUzMC05MTM3LWQxNzQwMzk5NmNiZiIsInB1aWQiOiIxMDAzQkZGRDk1NTExMDRDIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiQ0ZzTU1PdHdkd3VUN0FuQUkwUnlXUVZ0azA4anBjTEhWV00wLXA2emFYMCIsInRpZCI6IjZlNjA2ZWNlLTNhNWEtNDY3NC1hNjU0LWQ2YjAyYmM1YTUxYiIsInVuaXF1ZV9uYW1lIjoiYWRsc3ZjMDFAYmVud2dvbGRvdXRsb29rLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6ImFkbHN2YzAxQGJlbndnb2xkb3V0bG9vay5vbm1pY3Jvc29mdC5jb20iLCJ2ZXIiOiIxLjAifQ.DU-AfxSOEDaYQL2gPryC5DIf3BFghuArSltbR_SPcz_ZWMLak-Bs0YG0CyeGFqJg7qkBfhazSocrxnwAQI_kpqfOPObe8dEQtjozkI9gSnvdKW8iLSTuwehYtPyzTezfiRZtWXxQI_HhQfEaT7866x0ZOs1m7E-_14aP3HlnrkSl40kZYnSlAZLtLAILaHmouxr5ESCrxPSNC2WiHjvudNN0Ju8chU76xkcZqheneWvJUeqc-M16qQ8d-ta71sIajAyhNJMW440QLulDlMy4dJ3UfUb6ntO-SRrWvgt8kWHCg7v1RHLoT199b_8A991u82FaaDe3DEaGhwIV5Id0EQ\",\"refresh_token\":\"AAABAAAAiL9Kn2Z27UubvWFPbm0gLcmQxPFEw287L-VXFTslgKKtz8BxZpcBrtRNeuR3ChGPOkuSJZx4pYGCluYMWp0OcsEMh6kQdpsY7PR2h2NV8s6_VtydDoQtLaBCwTbYCFgqmedSOG2U-x80n7sotmU004QyymN42QCF13tU04G5fAvPKcjHwd-hBK7CoVkzjz72_VVMII7N6USevaSfWwoHLNo50TVXjXCKxzaVlYvQk05h7Iw66xcd12ZRklH5vyqvm_xiKng593mux3BDbKBxy9xTuS_oxioXuZzgXySDA3jql4du-ltUf9nXyOhKCkd0MllLb4b0Yd_V2vo8dlboF9V54WboYh-d9pEs07a7Q2DFYTf9QBCfGIVHm3aaYP2AOyNJUDJZwSMS7APleon1goRnDGSHmQ17dwI5dCypZAM41mGOTUgErl0ust4E_AUdg6ihV0ysAlKE-tmUL6zIGf0YWVPaaRm962Hv1dG5I-6Yk_I08A3Y8zONDVORt6crXFtzvCOhVPK1E6BhJwQItC-No-tGYLL48TkXtCxGE5cImpqqKXJGfiDqHDVJzMMOGDoeW3OTbM-9Yy7eLWOKKYvtmcW1jMNdV77k1D7sCOo4-g3T64JAZgWBzrqIZMZMPmK5pK__17gPQIkYrroPl14e40MHG4sXxXNpnoH64pszeymC3MXKFAxJBRGVAdr5tpFmI6vva4OFIfvnXaLvq53-8WW7CGRG1pjXtC9L3wsgAA\",\"id_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIvIiwiaWF0IjoxNDYxODA4NDkyLCJuYmYiOjE0NjE4MDg0OTIsImV4cCI6MTQ2MTgxMjM5MiwiYW1yIjpbInB3ZCJdLCJmYW1pbHlfbmFtZSI6IlRlc3QwMSIsImdpdmVuX25hbWUiOiJEYXRhTGFrZSIsImlwYWRkciI6IjE2Ny4yMjAuMC4xMzUiLCJuYW1lIjoiQXp1cmUgRGF0YSBMYWtlIFRlc3QgQWNjb3VudCAwMSIsIm9pZCI6IjJlNmMwMmQyLWEzNjQtNDUzMC05MTM3LWQxNzQwMzk5NmNiZiIsInN1YiI6ImY2bHBuNXppekwwRExEOHYxLVdjeFE4d08zcGZTT01Qd0YxSUN5ZFBLNkkiLCJ0aWQiOiI2ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIiLCJ1bmlxdWVfbmFtZSI6ImFkbHN2YzAxQGJlbndnb2xkb3V0bG9vay5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJhZGxzdmMwMUBiZW53Z29sZG91dGxvb2sub25taWNyb3NvZnQuY29tIiwidmVyIjoiMS4wIn0.\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'dde79f99-104a-4bfa-8b7e-2c2d18424f72',
  'client-request-id': '3de8bbee-6b07-40ec-a946-09499a03d474',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_141',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productionb; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Thu, 28 Apr 2016 01:59:51 GMT',
  connection: 'close',
  'content-length': '3141' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla2721?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls2480\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls2480\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":20,\"maxJobCount\":3,\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla2721.azuredatalakeanalytics.net\",\"accountId\":\"49800d4d-4fee-4a3c-91af-549bbe3c30b6\",\"creationTime\":\"2016-04-28T01:56:38.8583738Z\",\"lastModifiedTime\":\"2016-04-28T01:56:38.8583738Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla2721\",\"name\":\"xplattestadla2721\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '752',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '44ffe628-0567-4ff4-9fc2-fcd65a62e9ae',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '749b3020-afef-4ae3-876d-41f2f6df7730',
  'x-ms-routing-request-id': 'CENTRALUS:20160428T015953Z:749b3020-afef-4ae3-876d-41f2f6df7730',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 01:59:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla2721?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls2480\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls2480\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":20,\"maxJobCount\":3,\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla2721.azuredatalakeanalytics.net\",\"accountId\":\"49800d4d-4fee-4a3c-91af-549bbe3c30b6\",\"creationTime\":\"2016-04-28T01:56:38.8583738Z\",\"lastModifiedTime\":\"2016-04-28T01:56:38.8583738Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla2721\",\"name\":\"xplattestadla2721\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '752',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '44ffe628-0567-4ff4-9fc2-fcd65a62e9ae',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '749b3020-afef-4ae3-876d-41f2f6df7730',
  'x-ms-routing-request-id': 'CENTRALUS:20160428T015953Z:749b3020-afef-4ae3-876d-41f2f6df7730',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 01:59:53 GMT',
  connection: 'close' });
 return result; }]];