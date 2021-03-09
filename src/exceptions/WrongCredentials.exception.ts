import DisplayableException from './Displayable.exception';

class WrongCredentialsException extends DisplayableException {
  constructor() {
    super(401, 'WRONG-CREDENTIALS-PROVIDED');
  }
}

export default WrongCredentialsException;
