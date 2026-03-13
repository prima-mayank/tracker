import { z } from 'zod';

export const trackProductSchema = z.object({
  productId: z.string().min(1, 'Product ID is required'),
  targetPrice: z.number().positive('Target price must be positive').optional(),
});

export const updateTrackingSchema = z.object({
  targetPrice: z.number().positive('Target price must be positive').nullable(),
});

export type TrackProductInput = z.infer<typeof trackProductSchema>;
export type UpdateTrackingInput = z.infer<typeof updateTrackingSchema>;
