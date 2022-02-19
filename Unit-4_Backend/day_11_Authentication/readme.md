Authention:
   1)Register:
      a)first check if the email provided is already given to another user
      b)if yes throw error 400 bad requests
      c)if not then we will create the user.
    d)we will hash the password for the user
    e)we will create the token for the user.
    f)return the token and the user details.