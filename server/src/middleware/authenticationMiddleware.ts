import { NextFunction, Request, Response } from "express";
import { HttpStatus } from "../util/httpStatus";
import { authService } from "../controllers/services/authServices";
import { CustomRequest } from "../util/expressRoutes";

const authenticationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const customReq = req as CustomRequest;
  let token: string | null = "";
  if (
    customReq.headers.authorization &&
    customReq.headers.authorization.startsWith("Bearer")
  ) {
    token = customReq.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(HttpStatus.UNAUTHORIZED).json({
      success: false,
      message: "UNAUTHORIZED PERSON",
    });
  }
  try {
    const { id, role }: any = authService.verifyToken(token);
    customReq.payload = id;

    // if (!decoded) {
    //   return res.status(HttpStatus.UNAUTHORIZED).json({
    //     success: false,
    //     message: "UNAUTHORIZED PERSON",
    //   });
    // }
    next();
  } catch (error: any) {
    console.log(error.message);
  }
};

export default authenticationMiddleware;
