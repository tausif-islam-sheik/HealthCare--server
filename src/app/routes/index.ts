import { Router } from "express";
import { specialityRoutes } from "../module/speciality/speciality.route";
import { AuthRoutes } from "../module/auth/auth.route";
import { UserRoutes } from "../module/user/user.route";


const router = Router();

router.use("/auth", AuthRoutes);
router.use("/specialities", specialityRoutes);
router.use("/doctors", UserRoutes)

export const IndexRoutes = router;