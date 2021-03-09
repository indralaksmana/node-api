class HttpException extends Error {
  public status: number;
  public message: string;
  public reportabel: boolean;
  
  constructor(status: number, message: string, reportabel: boolean) {
    super(message);
    this.status = status;
    this.message = message;
    this.reportabel = reportabel;
  }
}

export default HttpException;
