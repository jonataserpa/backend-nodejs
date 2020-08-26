# Autenticação usando jsonwebtoken

#ex -> rotas:
#1-> /auth/register
#2-> /auth/authenticate
#3-> demais rotas somente com token validado, após logar com sucesso!
#4-> /usuarios

#Obs: operações CRUD somente com token válido.

#utilizado: - express para controle das rotas.
           - bcryptjs encriptar senhas.
           - mongoose como banco de dados não relacional.
           - middelwares para validar antes das rotas de acesso.
           - jwt controle de token para requisiçao dos dados e validação.
           - body-parser para controle de parametros na url.
