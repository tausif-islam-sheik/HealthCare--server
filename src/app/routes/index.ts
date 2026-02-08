import { Router } from "express";
import { specialityRoutes } from "../module/speciality/speciality.route";
import { AuthRoutes } from "../module/auth/auth.route";


const router = Router();

router.use("/auth", AuthRoutes);
router.use("/specialities", specialityRoutes);

export const IndexRoutes = router;