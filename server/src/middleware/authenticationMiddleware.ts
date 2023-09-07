import { NextFunction, Request, Response } from "express";
import { HttpStatus } from "../util/httpStatus";
import { authService } from "../controllers/services/authServices";

const authenticationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token: string | null = "";
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(HttpStatus.UNAUTHORIZED).json({
      success: false,
      message: "UNAUTHORIZED PERSON",
    });
  }
  try {
    const decoded = authService.verifyToken(token);
    if (!decoded) {
      return res.status(HttpStatus.UNAUTHORIZED).json({
        success: false,
        message: "UNAUTHORIZED PERSON",
      });
    }
    next();
  } catch (error: any) {
    console.log(error.message);
  }
};

export default authenticationMiddleware;
