import type { OAuthProviderId } from "@auth/core/providers";

type AvailableOAuthProvider = Extract<OAuthProviderId, "github">;
