# Autenticação usando jsonwebtoken

ex -> rotas: </br>
1-> /auth/register </br>
2-> /auth/authenticate </br>
3-> demais rotas somente com token validado, após logar com sucesso!</br>
4-> /usuarios</br></br>

Obs: operações CRUD somente com token válido.</br></br>

utilizado: - express para controle das rotas.</br>
           - bcryptjs encriptar senhas.</br>
           - mongoose como banco de dados não relacional.</br>
           - middelwares para validar antes das rotas de acesso.</br>
           - jwt controle de token para requisiçao dos dados e validação.</br>
           - body-parser para controle de parametros na url.</br>
