import HttpException from './Http.exception';

class DisplayableException extends HttpException {
  public status: number;
  public message: string;
  
  constructor(status: number, message: string) {
    super(400, 'BAD-REQUEST', false);
    this.status = status;
    this.message = message;
  }
}

export default DisplayableException;
