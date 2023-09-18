import { Request, Response } from "express";
import { DepenteniciesData } from "../../entities/interface";
import { HttpStatus } from "../../util/httpStatus";

export = (dependencies: DepenteniciesData): any => {
  const {
    jobuseCase: { titleDistinct_UseCase },
  } = dependencies;

  const getDistinct = async (req: Request, res: Response) => {
    try {
      const field = req.params.field ?? "";
      console.log(field);

      const distinct = await titleDistinct_UseCase(dependencies).execute(field);

      if (!distinct) {
        return res.status(HttpStatus.BAD_REQUEST).json({
          success: false,
          message: "invalid filter ",
        });
      }
      res.status(HttpStatus.OK).json({
        success: true,
        message: " successfully get search ",
        data: distinct,
      });
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return getDistinct;
};
