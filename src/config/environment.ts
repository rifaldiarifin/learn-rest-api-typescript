import 'dotenv/config'

const CONFIG = {
  db: process.env.DB,
  jwt_private: `-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEAhohy+RjAlg89WiJKypEYbjrGcwsegNZuId02M82QGJwCUnMQ
ansxd0CLatu93qS/VQxtTF4Y+R/njPoLguK72abx31bS2gO0I1by6zCg76TZo1up
2ZDhpmhwcmLAaB9COHIKue+zeA6oGvyrttYGVSV5sMuNVTU3zw/oJvqkUMKyZD3k
tkenjE37UhMBlWLvsAVRgWjBaOhsNSEQ8db7ix9kyLSlgszqDbGZCopiVq4PDrj4
jZXByLYGwFbukziWhqzchmyxq50SPCQq7HS2lqtmMdotXGtChz8l0UxWXYeD2N72
YOUPEO1EHjqM9p2YzMpHU7nQLIWQ5/qZkYxKXQIDAQABAoIBADN9Z9u0wIjuXkHw
HAX5kIsnzapcWBlheJdXbhZXl84Db9QUm/TVH7KProyAe+QJ0/z+G5r97Lr0ng/T
57H5i4IbJjmfpmWwwzI/Zgvj+cSeqHmgbJqLnAGvuVHeP9vaEuM9qqNNfbf2jBqA
GEyLD7No+3FSBs7U5n5GjUjV5yvNOZ+kCFtlf8t08sJAUQoLPpkDazBN5KgQMnE4
PQ4CdFan2AE2MOOS8EEqPqh0Jyk4hr2OWuhKFIXeI1MwCqNJ+cjiV0WByEJ/Z7DL
J9X9PZ0fBL+5Xz+LBDnsgppqDPpRM+hrHLZWW3/RfIbZ19WEI5ieb52vV1O5vk9x
wGrKw/UCgYEA0QKlAy6iY1fs4950vZaFZAY36/KOjL2CuHuwjkpoLCuuxDGTcFBu
0WAoTNnh+WOyCr2E5y7G/bxszPfXcnosUcRhcBp9F1dkmf3RPeNSc/r8wg43uEB+
AWV0ebzwmWzw/rcM3sKGaGiuBzVN6S6a5VnlqhvHYOMJKFgvpGH3EesCgYEApMdY
cIiYoRnjBgHhaJ8jrOmE2X37FxpUO/Yor+fJlGaXsyT+I3ibmabI9Hi5pE3aSTph
rJvm0DbWu0Zq1FDuK4VKmGGD1CIxkYWgG7zFWQb7m1gaXpCMoq7C4SmMvmp6Ttwf
dqdEzPLibiFpVMMKWrrBA0dJiJj4cWiR8Aa3OtcCgYEAr0mrgF60++H6nySq/XFm
T3vTnIMhQDGTlwrNCJiogxrjiFEXmOMr/VbKlaFJnjEZWV6WPpiBdL149fGJc824
q56qJS1h6Zh2m5s9x8yFExXUsx7fZhxYUO14YLyvf8zY1JZKKew0cw4PnaX7wGtA
psbdEOwZK01dGcPTuOYcIp8CgYBUc8sTGh9H6lGdwZb6nR2WwLSTF+t54serV7Vw
upZpFc/IRDxwh58QOBgknD9hQ3mOMHrhEaJRstmJcETOfpAjBBTAVrJPJhtLnzX5
IV3wDBEmhBg3wVQjCPjemAIHkeEPy+fgU0iC1jVRBpTKmZAUAkVsXbwFY4lp7pNl
druwTwKBgDNeX/IyIf++37/HD3sTH67dFjx8m/4s8rQBvD/zYKAokAg2gPcQOV2j
i6scgwFndDzeapnVNiVZ/38Xx9ntyZt0oDMDbE+0vKhRvvXMEfjaTUbN4XK5x6wo
F78Ihhzf487WMgKKBloZ40++eKlClPhbtw0qJSFSqA6eXFdfnc7G
-----END RSA PRIVATE KEY-----`,
  jwt_public: `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAhohy+RjAlg89WiJKypEY
bjrGcwsegNZuId02M82QGJwCUnMQansxd0CLatu93qS/VQxtTF4Y+R/njPoLguK7
2abx31bS2gO0I1by6zCg76TZo1up2ZDhpmhwcmLAaB9COHIKue+zeA6oGvyrttYG
VSV5sMuNVTU3zw/oJvqkUMKyZD3ktkenjE37UhMBlWLvsAVRgWjBaOhsNSEQ8db7
ix9kyLSlgszqDbGZCopiVq4PDrj4jZXByLYGwFbukziWhqzchmyxq50SPCQq7HS2
lqtmMdotXGtChz8l0UxWXYeD2N72YOUPEO1EHjqM9p2YzMpHU7nQLIWQ5/qZkYxK
XQIDAQAB
-----END PUBLIC KEY-----`
}

export default CONFIG
