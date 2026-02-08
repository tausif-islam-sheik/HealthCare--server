/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { specialityService } from "./speciality.service";

const createSpeciality = async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    const result = await specialityService.createSpeciality(payload);

    res.status(201).json({
      success: true,
      message: "Speciality created successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Failed to created Speciality",
      error: err.message,
    });
  }
};

const getAllSpecialities = async (req: Request, res: Response) => {
  try {
    const result = await specialityService.getAllSpecialities();

    res.status(201).json({
      success: true,
      message: "Speciality fetched successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch Speciality",
      error: err.message,
    });
  }
};

const updateSpeciality = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const payload = req.body;

    const result = await specialityService.updateSpeciality(id as string, payload);

    res.status(201).json({
      success: true,
      message: "Speciality updated successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Failed to update Speciality",
      error: err.message,
    });
  }
};

const deleteSpeciality = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await specialityService.deleteSpeciality(id as string);

    res.status(201).json({
      success: true,
      message: "Speciality delete successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Failed to delete Speciality",
      error: err.message,
    });
  }
};

export const specialityController = {
  createSpeciality,
  getAllSpecialities,
  updateSpeciality,
  deleteSpeciality,
};
