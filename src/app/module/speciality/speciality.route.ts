import { Router } from "express";
import { specialityController } from "./speciality.controller";
import { checkAuth } from "../../middleware/checkAuth";
import { Role } from "../../../generated/prisma/enums";
import { multerUpload } from "../../config/multer.config";
import { validateRequest } from "../../middleware/validateRequest";
import { SpecialityValidation } from "./speciality.validation";

const router = Router();

router.get("/", specialityController.getAllSpecialities);

router.post(
  "/",
  // checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  multerUpload.single("file"),
  validateRequest(SpecialityValidation.createSpecialityZodSchema),
  specialityController.createSpeciality,
);

router.patch(
  "/:id",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  specialityController.updateSpeciality,
);

router.delete(
  "/:id",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  specialityController.deleteSpeciality,
);

export const specialityRoutes = router;
