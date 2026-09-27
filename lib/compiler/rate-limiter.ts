interface RateLimitEntry {
  count: number;
  resetTime: number;
}

class MemoryRateLimiter {
  private store: Map<string, RateLimitEntry> = new Map();
  private maxRequests: number;
  private windowMs: number;

  constructor(maxRequests = 30, windowMs = 60000) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;

    // Periodically clean up expired entries every 2 minutes
    if (typeof setInterval !== 'undefined') {
      setInterval(() => this.cleanup(), 120000);
    }
  }

  public check(identifier: string): { success: boolean; remaining: number; resetTime: number } {
    const now = Date.now();
    const entry = this.store.get(identifier);

    if (!entry || now > entry.resetTime) {
      const resetTime = now + this.windowMs;
      this.store.set(identifier, { count: 1, resetTime });
      return { success: true, remaining: this.maxRequests - 1, resetTime };
    }

    if (entry.count >= this.maxRequests) {
      return { success: false, remaining: 0, resetTime: entry.resetTime };
    }

    entry.count += 1;
    return {
      success: true,
      remaining: this.maxRequests - entry.count,
      resetTime: entry.resetTime,
    };
  }

  private cleanup() {
    const now = Date.now();
    for (const [key, entry] of this.store.entries()) {
      if (now > entry.resetTime) {
        this.store.delete(key);
      }
    }
  }
}

// Global rate limiter instance: 15 submissions per minute per IP
export const executionRateLimiter = new MemoryRateLimiter(15, 60000);
