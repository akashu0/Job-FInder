import { Request, Response } from "express";
import { DepenteniciesData } from "../../entities/interface";
import { HttpStatus } from "../../util/httpStatus";

export = (dependencies: DepenteniciesData): any => {
  const {
    jobuseCase: { filterJobs_UseCase },
  } = dependencies;

  const filterData = async (req: Request, res: Response) => {
    try {
      const { title, location, salary } = req.body;

      const filter = await filterJobs_UseCase(dependencies).execute(
        title,
        location,
        salary
      );
      if (!filter) {
        return res.status(HttpStatus.BAD_REQUEST).json({
          success: false,
          message: "can't filter Data",
        });
      }

      res.status(HttpStatus.OK).json({
        success: true,
        message: "successfully filter",
        data: filter,
      });
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return filterData;
};
