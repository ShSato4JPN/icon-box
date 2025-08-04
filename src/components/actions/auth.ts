"use server";

import { signIn, signOut } from "@/auth";
import type { AvailableOAuthProvider } from "@/types/auth";

export const login = async (providerId: AvailableOAuthProvider) => {
  await signIn(providerId);
};

export const logout = async () => {
  await signOut();
};
