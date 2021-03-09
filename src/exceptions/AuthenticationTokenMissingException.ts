import DisplayableException from './Displayable.exception';

class AuthenticationTokenMissingException extends DisplayableException {
  constructor() {
    super(401, 'AUTHENTICATION-TOKEN-MISSING');
  }
}

export default AuthenticationTokenMissingException;
