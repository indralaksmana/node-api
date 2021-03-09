import HttpException from './Http.exception';

class ReportableException extends HttpException {
  public status: number;
  public message: string;
  public stacks: any;

  constructor(status: number, message: string, stacks: any) {
    super(500, 'INTERNAL-ERROR', true);
    this.status = status;
    this.message = message;
    this.stacks = stacks;
  }
}

export default ReportableException;
