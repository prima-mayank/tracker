'use client';

export const useTracking = () => {
  const track = async (_productId: string, _targetPrice?: number) => {
    // TODO: Step 6 — call /api/tracking
  };

  const untrack = async (_trackingId: string) => {
    // TODO: Step 6 — call DELETE /api/tracking/:id
  };

  return { track, untrack };
};
