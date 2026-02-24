import { Router } from "express";
import { specialityController } from "./speciality.controller";
import { checkAuth } from "../../middleware/checkAuth";
import { Role } from "../../../generated/prisma/enums";

const router = Router();

router.get("/", specialityController.getAllSpecialities);

router.post(
  "/",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
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
