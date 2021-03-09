import ReportableException from './Reportable.exception';

class InternalServelException extends ReportableException {
  public stacks: any;

  constructor(stacks: any) {
    super(500, 'INTERNAL-SERVER-ERROR', stacks);
  }
}

export default InternalServelException;
