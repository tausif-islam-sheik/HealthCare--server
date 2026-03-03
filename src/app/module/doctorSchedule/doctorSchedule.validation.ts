import z from "zod";

const createDoctorScheduleZodSchema = z.object({
  doctorId: z
    .string({
      message: "Doctor ID is required",
    })
    .uuid({ message: "Invalid Doctor ID format" }),

  scheduleId: z
    .string({
      message: "Schedule ID is required",
    })
    .uuid({ message: "Invalid Schedule ID format" }),

  isBooked: z.boolean().optional(), // optional because Prisma default = false
});


const updateDoctorScheduleZodSchema = z.object({
  isBooked: z.boolean().optional(),
});


export const DoctorScheduleValidation = {
  createDoctorScheduleZodSchema,
  updateDoctorScheduleZodSchema,
};