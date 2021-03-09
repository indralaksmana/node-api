import DisplayableException from './Displayable.exception';

class WrongAuthenticationTokenException extends DisplayableException {
  constructor() {
    super(401, 'WRONG-AUTHENTICATION-TOKEN');
  }
}

export default WrongAuthenticationTokenException;
